package com.bank.enums;

public enum Role {

    CUSTOMER("Customer"),
    EMPLOYEE("Employee"),
    ADMIN("Administrator");

    private final String displayName;

    Role(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}