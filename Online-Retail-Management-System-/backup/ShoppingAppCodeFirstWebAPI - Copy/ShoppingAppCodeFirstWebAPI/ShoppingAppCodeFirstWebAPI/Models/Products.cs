using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public partial class Products
    {
        [Key]
        public int ProductId { get; set; }

        [ForeignKey(nameof(SubCategoryName))]
        public int? SubCategoryId { get; set; }
       
        public SubCategorys SubCategoryName { get; set; }

        public string ProductName { get; set; }

        public string ProductDescription { get; set; }
        public string Size {  get; set; }
        public long? UnitCost { get; set; }
        
        public byte[] ImageData { get; set; }

    }
}
