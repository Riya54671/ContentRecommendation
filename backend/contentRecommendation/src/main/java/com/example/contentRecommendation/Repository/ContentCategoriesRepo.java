package com.example.contentRecommendation.Repository;

import com.example.contentRecommendation.Model.ContentCategories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentCategoriesRepo extends JpaRepository<ContentCategories, Integer> {
}
