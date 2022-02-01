package com.codeclan.example.quill.testCASCADE;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Test1Repo extends JpaRepository <Test1, Long> {
}
