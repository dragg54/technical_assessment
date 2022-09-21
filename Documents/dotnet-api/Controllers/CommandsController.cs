using Microsoft.AspNetCore.Mvc;
using Command.Data;
using Profile.Models;

namespace Commander.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class CommandsController:ControllerBase
    {
        private readonly MockCommanderRepo _repository = new MockCommanderRepo();
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllCommands()
        {
           var commandItems = _repository.GetAllCommands();
           return Ok(commandItems);
        }
        [HttpGet("{id}")]
        public ActionResult <User> GetCommandById(int id)
        {
            var commandItem = _repository.GetCommandById(id);
            return Ok(commandItem);
        }
    }
}