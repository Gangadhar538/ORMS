using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingAppCodeFirstWebAPI.Models;

namespace ShoppingAppCodeFirstWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategorysController : ControllerBase
    {
        private readonly ShoppingApplicationDbContext _context;

        public SubCategorysController(ShoppingApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SubCategorys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategorys>>> GetSubCategorys()
        {
          if (_context.SubCategorys == null)
          {
              return NotFound();
          }
            return await _context.SubCategorys.ToListAsync();
        }

        // GET: api/SubCategorys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SubCategorys>> GetSubCategorys(int id)
        {
          if (_context.SubCategorys == null)
          {
              return NotFound();
          }
            var subCategorys = await _context.SubCategorys.FindAsync(id);

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

            if (_context.SubCategorys == null)
            {
                return Problem("Entity set 'ShoppingApplicationDbContext.SubCategorys'  is null.");
            }
            _context.SubCategorys.Add(subCategorys);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubCategorys", new { id = subCategorys.SubCategoryId }, subCategorys);
        }

        // DELETE: api/SubCategorys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubCategorys(int id)
        {
            if (_context.SubCategorys == null)
            {
                return NotFound();
            }
            var subCategorys = await _context.SubCategorys.FindAsync(id);
            if (subCategorys == null)
            {
                return NotFound();
            }

            _context.SubCategorys.Remove(subCategorys);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubCategorysExists(int id)
        {
            return (_context.SubCategorys?.Any(e => e.SubCategoryId == id)).GetValueOrDefault();
        }
    }
}
