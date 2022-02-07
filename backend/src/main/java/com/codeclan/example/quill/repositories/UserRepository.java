package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.Script;
import com.codeclan.example.quill.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Query(value = "SELECT * FROM USERS WHERE" +
            "((USERNAME = ?1) AND (PASSWORD = ?2))", nativeQuery = true)
    List<User> validateLogin (String user, String password);
}
