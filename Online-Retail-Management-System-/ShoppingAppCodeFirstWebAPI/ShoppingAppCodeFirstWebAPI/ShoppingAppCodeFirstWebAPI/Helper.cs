//helperclassusing Azure;
using Azure;
using Azure.Messaging.EventGrid;
using Azure.Storage.Blobs;

using Newtonsoft.Json;
using ShoppingAppCodeFirstWebAPI.Models;
using System.Text;


namespace ShoppingAppCodeFirstWebAPI
{
    public class Helper

    {

        public static async Task<bool> UploadBlob(
                    IConfiguration config,
                    OrderDetails orderDetails)
        {
            string blobConnString = config.GetConnectionString("StorAccConnString");
            BlobServiceClient client = new BlobServiceClient(blobConnString);

            string container = config.GetValue<string>("Container");
            var containerClient = client.GetBlobContainerClient(container);


            string fileName = "ems.Department." + Guid.NewGuid().ToString() + ".json";
            // Get a reference to a blob
            BlobClient blobClient = containerClient.GetBlobClient(fileName);


            //memorystream
            using (var stream = new MemoryStream())
            {
                var serializer = JsonSerializer.Create(new JsonSerializerSettings());


                // Use the 'leave open' option to keep the memory stream open after the stream writer is disposed
                using (var writer = new StreamWriter(stream, Encoding.UTF8, 1024, true))
                {
                    // Serialize the job to the StreamWriter
                    serializer.Serialize(writer, orderDetails);
                }


                // Rewind the stream to the beginning
                stream.Position = 0;


                // Upload the job via the stream
                await blobClient.UploadAsync(stream, overwrite: true);
            }


            await PublishToEventGrid(config, orderDetails);
            return true;
        }


        private static async Task PublishToEventGrid(
             IConfiguration config, OrderDetails orderDetails)
        {
            var endpoint = config.GetValue<string>("EventGridTopicEndpoint");
            var accessKey = config.GetValue<string>("EventGridAccessKey");

            EventGridPublisherClient client = new EventGridPublisherClient(
                new Uri(endpoint),
                new AzureKeyCredential(accessKey));

            var event1 = new EventGridEvent(
                    "EMS",
                    "EMS.DepartmentEvent",
                    "1.0",
                    JsonConvert.SerializeObject(orderDetails));
            event1.Id = (new Guid()).ToString();
            event1.EventTime = DateTime.Now;
            event1.Topic = config.GetValue<string>("EventGridTopic");
            List<EventGridEvent> eventsList = new List<EventGridEvent>
             {
                 event1
             };

            // Send the events
            await client.SendEventsAsync(eventsList);

        }



    }
}