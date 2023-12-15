using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class SubCategorys
    {
        [Key]
        public int SubCategoryId { get; set; }
        [Required]
        public string? SubCategoryName { get; set; }

        [ForeignKey(nameof(CategoryName))]
        [Required]
        public int? CategoryId { get; set; }
  
        public Categorys? CategoryName { get; set; }
    }
}
