using Microsoft.EntityFrameworkCore;
using ShoppingAppCodeFirstWebAPI.Models;

namespace ShoppingAppCodeFirstWebAPI.Models
{
    public class ShoppingApplicationDbContext : DbContext
    {
        public ShoppingApplicationDbContext(DbContextOptions<ShoppingApplicationDbContext> options) : base(options) { }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.Admin>? Admins { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.Categorys>? Categorys { get; set; }
        public DbSet<ShoppingAppCodeFirstWebAPI.Models.SubCategorys>? SubCategorys { get; set; }
        public DbSet<ShoppingAppCodeFirstWebAPI.Models.Customers>? Customers { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.OrderDetails>? OrderDetails { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.Orders>? Orders { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.Products>? Products { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.ShoppingCart>? ShoppingCart { get; set; }

        public DbSet<ShoppingAppCodeFirstWebAPI.Models.CustomerCart>? CustomerCart { get; set; }

    }
}
