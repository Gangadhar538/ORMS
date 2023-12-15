using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public class CustomerCart
    {
        [Key]
        public int CartID {  get; set; }

        [ForeignKey(nameof(Customer))]
        public int? CustomerId { get; set; }
        [JsonIgnore]
        public Customers? Customer { get; set; }
        public int ProductId { get; set; }

        [ForeignKey(nameof(SubCategory))]
        public int? SubCategoryId { get; set; }
        [JsonIgnore]
        public SubCategorys? SubCategory{ get; set; }

        public string? ProductName { get; set; }

        public string? ProductDescription { get; set; }
        public string? Size { get; set; }
        public long? UnitCost { get; set; }

        public byte[]? ImageData { get; set; }

    }
}
