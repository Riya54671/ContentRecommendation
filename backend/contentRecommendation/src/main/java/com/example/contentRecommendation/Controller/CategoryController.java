package com.example.contentRecommendation.Controller;

import com.example.contentRecommendation.Model.Categories;
import com.example.contentRecommendation.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class CategoryController {

    @Autowired
    private CategoryService catservice;

    @GetMapping("/categories")
    public List<Categories> catlist(){
        return catservice.Category();
    }



}
