package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.License;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LicenseRepository extends JpaRepository<License, Long> {

}
