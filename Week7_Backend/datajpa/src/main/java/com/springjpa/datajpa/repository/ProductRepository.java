package com.springjpa.datajpa.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springjpa.datajpa.entity.Product;



public interface ProductRepository extends JpaRepository<Product, Integer>{   
    
    //many predefined Methods are available which will help us to
    //perform various crud Operations

}