package com.example.orm_learn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.orm_learn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}
