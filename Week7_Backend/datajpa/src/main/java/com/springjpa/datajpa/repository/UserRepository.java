package com.springjpa.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springjpa.datajpa.entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{

}
