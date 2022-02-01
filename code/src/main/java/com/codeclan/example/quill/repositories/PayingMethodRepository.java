package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayingMethodRepository extends JpaRepository<PaymentMethod, Long> {
}
