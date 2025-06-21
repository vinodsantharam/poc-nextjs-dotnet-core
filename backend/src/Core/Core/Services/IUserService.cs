using Core.Models;

namespace Core.Services;

public interface IUserService
{
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<User?> GetUserByIdAsync(string id);
    Task<User> CreateUserAsync(User user);
    Task<User?> UpdateUserAsync(string id, User user);
    Task<bool> DeleteUserAsync(string id);
} 