using E_movie.Models;
using Microsoft.EntityFrameworkCore;

namespace E_movie.Data
{
        public class DataContext : DbContext
        {
            public DataContext(DbContextOptions<DataContext> options) : base(options) { }
            public DbSet<Article> Articles => Set<Article>();
        }
}
