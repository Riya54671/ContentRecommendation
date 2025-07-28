package com.example.contentRecommendation.Service;

import com.example.contentRecommendation.Model.Content;
import com.example.contentRecommendation.Model.Favourites;
import com.example.contentRecommendation.Model.User;
import com.example.contentRecommendation.Repository.ContentRepo;
import com.example.contentRecommendation.Repository.FavouriteRepo;
import com.example.contentRecommendation.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class FavouriteService {

    @Autowired
    private FavouriteRepo favRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ContentRepo contentRepo;

    public List<Favourites> addFavourite(int userid, int contentid){
        User user = userRepo.findById(userid);
        Optional<Content> content = contentRepo.findById(contentid);

        Favourites fav = new Favourites();
        fav.setUser(user);
        fav.setContent(content.orElse(null));

        return Collections.singletonList(favRepo.save(fav));
    }





}
