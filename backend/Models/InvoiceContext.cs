using Billance.Models;
using Microsoft.EntityFrameworkCore;


namespace Billance.Models;

public class InvoiceContext : DbContext
{

    public InvoiceContext(DbContextOptions<InvoiceContext> opts) : base(opts) { }
    public DbSet<Invoice> Invoices { get; set; } = null;

}