using MockProfileRepo.Data;
using Profile.Models;

namespace Command.Data
{
    public class MockCommanderRepo:ICommandRepo
    {
        public User GetCommandById(int id)
        {
            return new User{Id=1, Name = "Ajibola", Position = "Software Developer"};
        }
        public IEnumerable<User> GetAllCommands()
        {
            var Commands = new List<User>()
            {
                new User{Id = 1, Name="Ajibola", Position ="Softare Developer"}
            };
            return Commands;
        }
    }
}