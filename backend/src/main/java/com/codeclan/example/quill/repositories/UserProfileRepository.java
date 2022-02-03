package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<Profile, Long> {
}
