package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfilePictureRepository extends JpaRepository<ProfilePicture, Long> {
}
