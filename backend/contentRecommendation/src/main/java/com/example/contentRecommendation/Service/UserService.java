package com.example.contentRecommendation.Service;

import com.example.contentRecommendation.Model.User;
import com.example.contentRecommendation.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;



    public User signup(User user){
        user.setUsername(user.getUsername());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        return repo.save(user);
    }

    public User login(String username, String password) {
        User existingUser = repo.findByUsername(username);

        if (existingUser == null || !existingUser.getPassword().equals(password)) {
            return null;
        }

        return existingUser;
    }

    public User profile(String username) {
        return repo.findByUsername(username);
    }


}
