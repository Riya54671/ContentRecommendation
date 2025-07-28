package com.example.contentRecommendation.Controller;

import com.example.contentRecommendation.Model.Content;
import com.example.contentRecommendation.Model.User;
import com.example.contentRecommendation.Repository.UserRepo;
import com.example.contentRecommendation.Service.ContentService;
import com.example.contentRecommendation.Service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/content/{type}")
    public List<Content> getContentList(@PathVariable String type){
        return contentService.contentList(type);
    }

    @GetMapping("/contentlist/{category}/{type}")
    public List<Content> getContentByName(@PathVariable String category, @PathVariable String type){
        return contentService.contentByCat(category, type);
    }

    @GetMapping("/search")
    public List<Content> searchContent(@RequestParam String keyword, @RequestParam String type){
        return contentService.searchContent(keyword, type);
    }

    @GetMapping("/favouriteList")
    public List<Content> favouriteContent(@RequestHeader("Authorization") String authHeader){
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return null;
        }
        String token = authHeader.substring(7);
        System.out.println("Token" + token);
        String username = jwtService.extractUserName(token);
        User user = userRepo.findByUsername(username);
        int userid = user.getUserid();
        return contentService.getFavourites(userid);
    }
}
