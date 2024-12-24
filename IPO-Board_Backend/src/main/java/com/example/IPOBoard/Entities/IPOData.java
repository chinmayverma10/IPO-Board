package com.example.IPOBoard.Entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class IPOData {

    @Id
    private String companyName;
    private String category;
    private Integer price;
    private Integer lotSize;
    private float gmp;
    private float gmpPercentage;
    private float estimatedListing;
    private Integer ipoSize;
    private String  openDate;
    private String closeDate;
    private String listingDate;
    private String status;

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getLotSize() {
        return lotSize;
    }

    public void setLotSize(Integer lotSize) {
        this.lotSize = lotSize;
    }

    public float getGmp() {
        return gmp;
    }

    public void setGmp(float gmp) {
        this.gmp = gmp;
    }

    public float getGmpPercentage() {
        return gmpPercentage;
    }

    public void setGmpPercentage(float gmpPercentage) {
        this.gmpPercentage = gmpPercentage;
    }

    public float getEstimatedListing() {
        return estimatedListing;
    }

    public void setEstimatedListing(float estimatedListing) {
        this.estimatedListing = estimatedListing;
    }

    public Integer getIpoSize() {
        return ipoSize;
    }

    public void setIpoSize(Integer ipoSize) {
        this.ipoSize = ipoSize;
    }

    public String getOpenDate() {
        return openDate;
    }

    public void setOpenDate(String openDate) {
        this.openDate = openDate;
    }

    public String getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(String closeDate) {
        this.closeDate = closeDate;
    }

    public String getListingDate() {
        return listingDate;
    }



    public void setListingDate(String listingDate) {
        this.listingDate = listingDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    @Override
    public String toString() {
        return "IPOData{" +
                "companyName='" + companyName + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                ", lotSize=" + lotSize +
                ", gmp=" + gmp +
                ", gmpPercentage=" + gmpPercentage +
                ", estimatedListing=" + estimatedListing +
                ", ipoSize=" + ipoSize +
                ", openDate='" + openDate + '\'' +
                ", closeDate='" + closeDate + '\'' +
                ", listingDate='" + listingDate + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
