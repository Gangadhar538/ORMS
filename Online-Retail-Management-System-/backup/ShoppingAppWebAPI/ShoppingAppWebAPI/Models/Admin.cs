using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public partial class Admins
    {
        [Key]
        public int Admin_Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
