using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class ShoppingCart
    {
        [Key]
        public int RecordId { get; set; }
        public int? CartId { get; set; }
        public long? Quantity { get; set; }
        public DateTime? DateCreated { get; set; }


        [ForeignKey(nameof(ProdctName))]
        public int? ProductId { get; set; }
        [JsonIgnore]
        public Products? ProdctName { get; set; }

    }
}
