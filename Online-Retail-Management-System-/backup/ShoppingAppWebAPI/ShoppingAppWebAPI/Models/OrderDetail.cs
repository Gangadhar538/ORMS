using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetailsId { get; set; }

        [ForeignKey(nameof(ProductName))]
        public int ProductId { get; set; }

        public Products? ProductName { get; set; }


        [ForeignKey(nameof(ordId))]
        public int OrderId { get; set; }

        public Orders? ordId { get; set; }

        [Required]
        public int? Quantity { get; set; }

        [Required]
        public decimal? UnitCost { get; set; }

        public decimal? OrderTotal { get; set;}

        public string? Comments {  get; set; }
    }
}
