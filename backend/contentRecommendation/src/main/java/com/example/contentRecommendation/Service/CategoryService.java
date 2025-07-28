package com.example.contentRecommendation.Service;

import com.example.contentRecommendation.Model.Categories;
import com.example.contentRecommendation.Repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo catrepo;

    public List<Categories> Category(){
        return catrepo.findAll();
    }

}
