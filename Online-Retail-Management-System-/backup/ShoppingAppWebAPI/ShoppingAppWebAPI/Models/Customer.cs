using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public partial class Customers
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        public string? CustomerName { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 10, ErrorMessage = "Phone number must be 10 digits")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Phone number must contain only digits")]
        public string? PhoneNumber { get; set; }

        [Required]
        public string? DeliveryAddress { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
