using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingAppWebAPI.Models
{
    public class Orders
    {
        [Key]
        public int OrderId { get; set; }

        [ForeignKey(nameof(Customer_Name))]
        public int? CustomerId { get; set; }

        public Customers? Customer_Name { get; set; }

        public DateTime? OrderDate { get; set; }
        public DateTime? ShipDate { get; set; }
    }
}
