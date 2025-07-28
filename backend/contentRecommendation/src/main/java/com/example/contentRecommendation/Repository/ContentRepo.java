package com.example.contentRecommendation.Repository;

import com.example.contentRecommendation.Model.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContentRepo extends JpaRepository<Content, Integer> {
    List<Content> findByType(String type);

    @Query("SELECT cc.content FROM ContentCategories cc WHERE cc.category.category = :categoryName and cc.content.type = :type")
    List<Content> findContentByCategoryNameAndType(@Param("categoryName") String categoryName,@Param("type") String type);

    @Query("SELECT c FROM Content c WHERE c.title LIKE CONCAT('%', :keyword, '%') and c.type = :type")
    List<Content> searchContent(@Param("keyword") String keyword,@Param("type") String type);

    @Query("SELECT f.content FROM Favourites f WHERE f.user.userid = :userid")
    List<Content> favouriteContent(@Param("userid") int userid);

}
