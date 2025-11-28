package com.klef.fsd.sdp.dto;

public class DesignDTO {
    private String category;
    private String color;
    private String designName;
    private String description;
    private byte[] image;

    public DesignDTO() {
    }

    public DesignDTO(String category, String color, String designName, String description, byte[] image) {
        this.category = category;
        this.color = color;
        this.designName = designName;
        this.description = description;
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDesignName() {
        return designName;
    }

    public void setDesignName(String designName) {
        this.designName = designName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}