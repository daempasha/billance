using Billance.Models;
namespace Billance.Models;
public class Invoice
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public DateTime DueDate { get; set; }
    public string? FullName { get; set; }
    public string? Price { get; set; }
    public string? Status { get; set; }


}



