package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.Test2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Test2Repo extends JpaRepository <Test2, Long> {
}
