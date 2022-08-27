package com.springjpa.datajpa.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springjpa.datajpa.entity.Electronics;
import com.springjpa.datajpa.entity.Product;
import com.springjpa.datajpa.entity.User;
import com.springjpa.datajpa.repository.ElectronicsRepository;
import com.springjpa.datajpa.repository.ProductRepository;
import com.springjpa.datajpa.repository.UserRepository;


@RestController
public class Controllers {   
	@Autowired
    ProductRepository repo;
	@Autowired
	UserRepository userrepo;
	@Autowired
    ElectronicsRepository elecrepo;
	
	   
         
    @GetMapping("/getproducts")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Product> getAllUsers(){
    
    
        return repo.findAll();
    }        

    @PostMapping("/addproduct")
    @CrossOrigin(origins="http://localhost:4200")
    public Product createuser(@RequestBody Product user) {
        return repo.save(user);
    }
    
    
    @DeleteMapping("/deleteproduct/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public void delete(@PathVariable int id)
    {
        repo.deleteById(id);
    }
    @GetMapping("/getusers")
    @CrossOrigin(origins="http://localhost:4200")
    public List<User> getAllUser(){
    
        return userrepo.findAll();
    }        

    @PostMapping("/addusers")
    @CrossOrigin(origins="http://localhost:4200")
    public User createusers(@RequestBody User users) {
        return userrepo.save(users);
    }
    
    
    @DeleteMapping("/deleteusers/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public void deletes(@PathVariable int id)
    {
        userrepo.deleteById(id);
    }
    
    @GetMapping("/getitems")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Electronics> getAllUse(){
    
        return elecrepo.findAll();
    }        

    @PostMapping("/additem")
    @CrossOrigin(origins="http://localhost:4200")
    public Electronics createuse(@RequestBody Electronics electronics) {
        return elecrepo.save(electronics);
    }
    
    
    @DeleteMapping("/deleteitem/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public void deletees(@PathVariable int id)
    {
        elecrepo.deleteById(id);
    }
}