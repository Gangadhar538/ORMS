using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public partial class Categorys
    {
        [Key]
        public int CategoryId { get; set; }

        [Required]
        public string? CategoryName { get; set; }
    }
}
