using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public class ShoppingCart
    {
        [Key]
        public int RecordId { get; set; }
        public string? CartId { get; set; }
        public long? Quantity { get; set; }
        public DateTime? DateCreated { get; set; }

        [ForeignKey(nameof(Product_Name))]
        public int? ProductId { get; set; }

        public Products? Product_Name { get; set; }
    }
}
