package com.example.contentRecommendation.Controller;

import com.example.contentRecommendation.Model.Content;
import com.example.contentRecommendation.Model.Favourites;
import com.example.contentRecommendation.Model.User;
import com.example.contentRecommendation.Repository.UserRepo;
import com.example.contentRecommendation.Service.FavouriteService;
import com.example.contentRecommendation.Service.JwtService;
import com.example.contentRecommendation.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class FavouriteController {

    @Autowired
    private FavouriteService favService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/favourite")
    public ResponseEntity<?> addFavourites(@RequestHeader("Authorization") String authHeader,  @RequestBody Map<String,Integer> body){
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
        }
        String token = authHeader.substring(7);
        System.out.println("Token" + token);
        String username = jwtService.extractUserName(token);
        User user = userRepo.findByUsername(username);
        int userid = user.getUserid();
        int contentId = body.get("contentid");
        favService.addFavourite(userid, contentId);
        return ResponseEntity.ok("Added to favourites");
    }




}
