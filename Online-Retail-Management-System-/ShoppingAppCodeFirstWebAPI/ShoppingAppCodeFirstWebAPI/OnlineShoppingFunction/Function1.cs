using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace OnlineShoppingFunction
{
    //public static class Function1
    //{
    //    [FunctionName("Function2")]
    //    public static async Task<IActionResult> Run(
    //        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
    //        //[("OrderDetails", "MyDBConnection")] IAsyncCollector<OrderDetails> empp, ILogger log)
    //    {
    //        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    //        OrderDetails emp = JsonConvert.DeserializeObject<OrderDetails>(requestBody);
    //        //await empp.AddAsync(emp);
    //        //await empp.FlushAsync();
    //        return new OkObjectResult("Order added");
    //    }
    //}
}
