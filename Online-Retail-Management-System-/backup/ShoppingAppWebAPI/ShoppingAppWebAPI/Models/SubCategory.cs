using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public partial class SubCategorys
    {
        [Key]
        public int SubCategoryId { get; set; }

        [Required]
        public string? SubCategoryName { get; set; }

        [ForeignKey(nameof(Category))]
        [Required]
        public int? CategoryId { get; set; }

        public Categorys? Category { get; set; }
    }
}
