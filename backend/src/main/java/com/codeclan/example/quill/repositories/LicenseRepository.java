package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.License;
import com.codeclan.example.quill.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface LicenseRepository extends JpaRepository<License, Long> {
    @Transactional
    @Query(value = "SELECT * FROM LICENSES WHERE PROFILE_ID = ?1", nativeQuery = true)
    List<License> getByProfileId(Long Id);
}
