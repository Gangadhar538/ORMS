using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoppingAppCodeFirstWebAPI.Migrations
{
    public partial class newdbwithcart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CustomerCart",
                columns: table => new
                {
                    CartID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: true),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    SubCategoryId = table.Column<int>(type: "int", nullable: true),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UnitCost = table.Column<long>(type: "bigint", nullable: true),
                    ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerCart", x => x.CartID);
                    table.ForeignKey(
                        name: "FK_CustomerCart_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId");
                    table.ForeignKey(
                        name: "FK_CustomerCart_SubCategorys_SubCategoryId",
                        column: x => x.SubCategoryId,
                        principalTable: "SubCategorys",
                        principalColumn: "SubCategoryId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomerCart_CustomerId",
                table: "CustomerCart",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerCart_SubCategoryId",
                table: "CustomerCart",
                column: "SubCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CustomerCart");
        }
    }
}
