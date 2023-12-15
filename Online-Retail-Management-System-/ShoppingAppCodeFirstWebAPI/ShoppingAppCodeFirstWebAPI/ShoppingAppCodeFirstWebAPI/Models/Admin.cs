using System.ComponentModel.DataAnnotations;

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public class Admin 
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

    //public class AdminLoginModel
    //{
    //    [Required]
    //    public string Email { get; set; }
    //    [Required]
    //    [DataType(DataType.Password)]
    //    public string Password { get; set; }
    //}
}
