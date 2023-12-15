using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class OrderDetails
    {
        [Key]
        public int OrderDetailsId { get; set; } 

        [ForeignKey(nameof(ProductName))]
        public int ProductId { get; set; }
        
        public Products ProductName { get; set; }


        [ForeignKey(nameof(ordId))]
        public int OrderId { get; set; }
        
        public Orders ordId { get; set; }


        public long? Quantity { get; set; }


        public long? UnitCost { get; set; }


    }
}
