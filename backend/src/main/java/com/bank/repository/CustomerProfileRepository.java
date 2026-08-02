package com.bank.repository;

import com.bank.entity.CustomerProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CustomerProfileRepository extends JpaRepository<CustomerProfile, UUID> {
}
