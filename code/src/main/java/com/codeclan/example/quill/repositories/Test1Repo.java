package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.Test1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Test1Repo extends JpaRepository <Test1, Long> {
}
