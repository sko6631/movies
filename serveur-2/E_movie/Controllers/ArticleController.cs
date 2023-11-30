using E_movie.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace E_movie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly DataContext _context;

        public ArticlesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get(int page, int pageSize)
        {
            // Vérifiez que les valeurs de page et pageSize sont valides
            if (page < 1)
            {
                return BadRequest("La valeur de la page doit être supérieure ou égale à 1.");
            }

            if (pageSize < 1)
            {
                return BadRequest("La taille de la page doit être supérieure ou égale à 1.");
            }

            // Calculez l'indice de début en fonction de la page et de la taille de la page
            int startIndex = (page - 1) * pageSize;

            // Récupérez les articles paginés à partir de la base de données
            var paginatedArticles = _context.Articles
                .Skip(startIndex)
                .Take(pageSize)
                .ToList();

            return Ok(paginatedArticles);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var article = _context.Articles.FirstOrDefault(a => a.Id == id);
            if (article == null)
                return NotFound();

            return Ok(article);
        }

        // Ajoutez d'autres méthodes pour gérer la création, la mise à jour et la suppression d'articles
    }
}
