package com.example.contentRecommendation.Repository;

import com.example.contentRecommendation.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    User findByUsername(String username);


    User findById(int userid);


}
