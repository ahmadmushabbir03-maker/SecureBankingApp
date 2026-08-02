package com.bank.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

@Entity
@Table(name = "customer_profiles")
public class CustomerProfile extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @NotBlank
    @Size(max = 100)
    @Column(nullable = false, length = 100)
    private String addressLine1;

    @Size(max = 100)
    @Column(length = 100)
    private String addressLine2;

    @NotBlank
    @Size(max = 60)
    @Column(nullable = false, length = 60)
    private String city;

    @NotBlank
    @Size(max = 60)
    @Column(nullable = false, length = 60)
    private String province;

    @NotBlank
    @Size(max = 15)
    @Column(nullable = false, length = 15)
    private String postalCode;

    @NotBlank
    @Size(max = 60)
    @Column(nullable = false, length = 60)
    private String country = "Canada";

    @Past
    @Column(nullable = false)
    private LocalDate dateOfBirth;

    public CustomerProfile() {
    }

    public CustomerProfile(
            User user,
            String addressLine1,
            String addressLine2,
            String city,
            String province,
            String postalCode,
            String country,
            LocalDate dateOfBirth) {

        this.user = user;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
        this.country = country;
        this.dateOfBirth = dateOfBirth;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
