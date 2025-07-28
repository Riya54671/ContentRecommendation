package com.example.contentRecommendation.Model;

import jakarta.persistence.*;

@Entity
public class Favourites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int favid;
    @ManyToOne
    @JoinColumn(name="userid", referencedColumnName = "userid")
    private User user;
    @ManyToOne
    @JoinColumn(name="contentid", referencedColumnName = "contentid")
    private Content content;

    public int getFavid() {
        return favid;
    }

    public void setFavid(int favid) {
        this.favid = favid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }
}
