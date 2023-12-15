using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public class Products
    {
        [Key]
        public int ProductId { get; set; }

        [ForeignKey(nameof(SubCategory))]
        public int? SubCategoryId { get; set; }

        public SubCategorys? SubCategory { get; set; }

        public string? ProductName { get; set; }

        public string? ProductDescription { get; set; }
        public string? Size { get; set; }
        public decimal? UnitCost { get; set; }

        public byte[]? ImageData { get; set; }
    }
}
