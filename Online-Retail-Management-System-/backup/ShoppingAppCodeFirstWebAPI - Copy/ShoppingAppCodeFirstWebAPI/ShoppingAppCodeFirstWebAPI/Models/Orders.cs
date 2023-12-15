using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class Orders
    {
        [Key]
        public int OrderId { get; set; }

        [ForeignKey(nameof(CustomerName))]
        public int? CustomerId { get; set; }
       
        public Customers CustomerName { get; set; }

        public DateTime? OrderDate { get; set; }
        public DateTime? ShipDate { get; set; }

    }
}
