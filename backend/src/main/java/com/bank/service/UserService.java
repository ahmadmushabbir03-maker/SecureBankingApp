package com.bank.service;

import com.bank.dto.request.RegisterUserRequest;
import com.bank.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

    User registerUser(RegisterUserRequest request);

    Optional<User> getUserById(UUID id);

    Optional<User> getUserByEmail(String email);

    List<User> getAllUsers();

    void deleteUser(UUID id);

}
