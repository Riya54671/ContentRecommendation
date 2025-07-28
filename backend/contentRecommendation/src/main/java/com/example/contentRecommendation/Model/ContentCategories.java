package com.example.contentRecommendation.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "content_categories")
public class ContentCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @ManyToOne
    @JoinColumn(name="contentid", referencedColumnName = "contentid")
    private Content content;
    @ManyToOne
    @JoinColumn(name="categoryid", referencedColumnName = "categoryid")
    private Categories category;

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }
}
