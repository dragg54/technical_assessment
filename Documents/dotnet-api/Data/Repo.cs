using Profile.Models;
using Microsoft.AspNetCore.Mvc;

namespace MockProfileRepo.Data
{
    public interface ICommandRepo
    {
        IEnumerable<User> GetAllCommands();
        User GetCommandById(int id);
    }
}