using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class OrderDetails
    {
        [Key]
        public int OrderDetailsId { get; set; } 

        [ForeignKey(nameof(ProductName))]
        public int ProductId { get; set; }

        [JsonIgnore]
        public Products? ProductName { get; set; }


        [ForeignKey(nameof(ordId))]
        public int OrderId { get; set; }
        [JsonIgnore]
        public Orders? ordId { get; set; }


        public int? Quantity { get; set; }


        public decimal? UnitCost { get; set; }

        public decimal? OrderTotal { get; set; }

        public string? Comments {  get; set; }


    }
}
