using Core.Models;

namespace Core.Services;

public class UserService : IUserService
{
    private static readonly List<User> _users = new()
    {
        new User { Id = "1", Name = "John Doe", Email = "john@example.com", CreatedAt = DateTime.UtcNow.AddDays(-30) },
        new User { Id = "2", Name = "Jane Smith", Email = "jane@example.com", CreatedAt = DateTime.UtcNow.AddDays(-20) },
        new User { Id = "3", Name = "Bob Johnson", Email = "bob@example.com", CreatedAt = DateTime.UtcNow.AddDays(-10) }
    };

    public Task<IEnumerable<User>> GetAllUsersAsync()
    {
        return Task.FromResult<IEnumerable<User>>(_users);
    }

    public Task<User?> GetUserByIdAsync(string id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        return Task.FromResult(user);
    }

    public Task<User> CreateUserAsync(User user)
    {
        user.Id = Guid.NewGuid().ToString();
        user.CreatedAt = DateTime.UtcNow;
        _users.Add(user);
        return Task.FromResult(user);
    }

    public Task<User?> UpdateUserAsync(string id, User user)
    {
        var existingUser = _users.FirstOrDefault(u => u.Id == id);
        if (existingUser == null)
            return Task.FromResult<User?>(null);

        existingUser.Name = user.Name;
        existingUser.Email = user.Email;
        return Task.FromResult<User?>(existingUser);
    }

    public Task<bool> DeleteUserAsync(string id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        if (user == null)
            return Task.FromResult(false);

        _users.Remove(user);
        return Task.FromResult(true);
    }
} 