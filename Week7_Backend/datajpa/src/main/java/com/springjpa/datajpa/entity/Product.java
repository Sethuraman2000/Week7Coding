package com.springjpa.datajpa.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "producttables")
public class Product {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    int id;
	String productname;
    String quantity;
    String discount;
    
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", productname=" + productname + ", quantity=" + quantity + ", discount="
				+ discount + "]";
	}
	
	
    



   
    
    
    
}
