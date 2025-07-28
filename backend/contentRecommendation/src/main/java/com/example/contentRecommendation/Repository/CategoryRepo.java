package com.example.contentRecommendation.Repository;

import com.example.contentRecommendation.Model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Categories, Integer> {

}
