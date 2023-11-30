namespace E_movie.Models
{
        public class Article
        {
            public int Id { get; set; }
            public string Tconst { get; set; }
            public string TitleType { get; set; }
            public string PrimaryTitle { get; set; }
            public string OriginalTitle { get; set; }
            public string StartYear { get; set; }
            public string EndYear { get; set; }
            public string RuntimeMinutes { get; set; }
            public string Genres { get; set; }
        }
    }