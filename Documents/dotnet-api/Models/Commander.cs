using Microsoft.AspNetCore.Mvc;

namespace Profile.Models
{
    public class User
    {
        public int Id{get; set;}
        public string? Name{get; set;}
        public string? Position{get; set;}
    }
}