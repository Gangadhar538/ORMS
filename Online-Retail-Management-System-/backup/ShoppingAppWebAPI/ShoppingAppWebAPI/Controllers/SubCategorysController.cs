using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingAppWebAPI.Models;

namespace ShoppingAppWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategorysController : ControllerBase
    {
        private readonly StardustAppDbContext _context;

        public SubCategorysController(StardustAppDbContext context)
        {
            _context = context;
        }

        // GET: api/SubCategorys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategorys>>> GetSubCategories()
        {
          if (_context.SubCategories == null)
          {
              return NotFound();
          }
            return await _context.SubCategories.ToListAsync();
        }

        // GET: api/SubCategorys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SubCategorys>> GetSubCategorys(int id)
        {
          if (_context.SubCategories == null)
          {
              return NotFound();
          }
            var subCategorys = await _context.SubCategories.FindAsync(id);

            if (subCategorys == null)
            {
                return NotFound();
            }

            return subCategorys;
        }

        // PUT: api/SubCategorys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubCategorys(int id, SubCategorys subCategorys)
        {
            if (id != subCategorys.SubCategoryId)
            {
                return BadRequest();
            }

            _context.Entry(subCategorys).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubCategorysExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SubCategorys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SubCategorys>> PostSubCategorys(SubCategorys subCategorys)
        {

            var existingCategory = await _context.Categorys
        .FirstOrDefaultAsync(c => c.CategoryId == subCategorys.CategoryId && c.CategoryName == subCategorys.CategoryNam);

            if (existingCategory == null)
            {
                // Category doesn't exist, create a new one
                existingCategory = new Categorys
                {
                    CategoryId = subCategorys.CategoryId,
                    CategoryName = subCategorys.CategoryName
                    // Add other properties of Category if needed
                };
                _context.Categorys.Add(existingCategory);
            }

            // Add SubCategory
            _context.SubCategorys.Add(subCategorys);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubCategorys", new { id = subCategorys.SubCategoryId }, subCategorys);
            //var existingCategory = await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == subCategorys.CategoryId && c.CategoryName == subCategorys.Category.CategoryName);

            //if (existingCategory == null)
            //{
            //    // The category doesn't exist, proceed with adding the subcategory

            //    if (_context.SubCategories == null)
            //    {
            //        return Problem("Entity set 'StardustAppDbContext.SubCategories' is null.");
            //    }

            //    _context.SubCategories.Add(subCategorys);
            //    await _context.SaveChangesAsync();

            //    return CreatedAtAction("GetSubCategorys", new { id = subCategorys.SubCategoryId }, subCategorys);
            //}
            //else
            //{
            //    // The category already exists, you can handle this scenario accordingly
            //    // For example, you might return a conflict response or take other actions
            //    return Conflict("Category already exists");
            //}
            //if (ModelState.IsValid)

            //{

            //    // Check if the department with the provided ID exists

            //    var existingCategory = _context.Categorys.Find(subCategorys.CategoryId);



            //    if (existingCategory != null)

            //    {

            //        // Department exists, use the existing one

            //        subCategorys.Category = existingCategory;



            //        _context.SubCategorys.Add(subCategorys);

            //        await _context.SaveChangesAsync();

            //        return Ok(subCategorys);

            //    }

            //    else

            //    {

            //        // Department does not exist, return a 404 Not Found response

            //        return NotFound("Category not found");

            //    }

            //}

            //return BadRequest(ModelState);
            //if (_context.SubCategories == null)
            //{
            //    return Problem("Entity set 'StardustAppDbContext.SubCategories'  is null.");
            //}
            //_context.SubCategories.Add(subCategorys);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetSubCategorys", new { id = subCategorys.SubCategoryId }, subCategorys);
        }

        // DELETE: api/SubCategorys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubCategorys(int id)
        {
            if (_context.SubCategories == null)
            {
                return NotFound();
            }
            var subCategorys = await _context.SubCategories.FindAsync(id);
            if (subCategorys == null)
            {
                return NotFound();
            }

            _context.SubCategories.Remove(subCategorys);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubCategorysExists(int id)
        {
            return (_context.SubCategories?.Any(e => e.SubCategoryId == id)).GetValueOrDefault();
        }
    }
}
