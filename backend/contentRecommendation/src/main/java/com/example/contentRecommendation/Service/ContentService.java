package com.example.contentRecommendation.Service;

import com.example.contentRecommendation.Model.Content;
import com.example.contentRecommendation.Repository.ContentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentService {

    @Autowired
    private ContentRepo contentRepo;

    public List<Content> contentList(String type){
        return contentRepo.findByType(type);
    }
    public List<Content> contentByCat(String category, String type){
        return contentRepo.findContentByCategoryNameAndType(category, type);
    }

    public List<Content> searchContent(String keyword, String type){
        return contentRepo.searchContent(keyword, type);
    }

    public List<Content> getFavourites(int userid){
        return contentRepo.favouriteContent(userid);
    }
}
