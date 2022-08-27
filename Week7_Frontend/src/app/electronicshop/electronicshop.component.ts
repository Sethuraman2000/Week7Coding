import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElectronicService } from '../electronic.service';
import { Electronics } from '../electronics';

@Component({
  selector: 'app-electronicshop',
  templateUrl: './electronicshop.component.html',
  styleUrls: ['./electronicshop.component.css'],
})
export class ElectronicshopComponent implements OnInit {
  product: any;
  mithresh: any;
  deleteMessage: any;
  productdescription:any;
  itemprice: any;

  constructor(private ElectronicService: ElectronicService) {}

  ngOnInit(): void {}

  electronics: Electronics = new Electronics();

  profileForm = new FormGroup({
    productname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9 ]*$')
    ]),

    price: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.pattern('^[0-9 ]*$')
    ]),

    quantity: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
    ]),

    description: new FormControl('', [
      Validators.minLength(0),
      Validators.maxLength(100),
      

    ]),
  });

  nameproduct: any;
  productquantity: any;
  message: any;
  get f() {
    return this.profileForm.controls;
  }

  submit() {
    console.log('I am Trying to connect TS from HTML File');

    //  this.profileForm.get('username');

    console.log(this.profileForm.get('productname'));

    console.log(this.profileForm.get('quantity'));

    console.log(this.profileForm.value);

    console.log('Individual productname', this.f['productname'].value);

    console.log('Individual quantity', this.f['quantity'].value);

    this.nameproduct = this.f['productname'].value;

    this.itemprice = this.f['price'].value;

    this.productquantity= this.f['quantity'].value;

    this.productdescription= this.f['description'].value;

    this.saveObject();

    this.ElectronicService
      .createProduct(this.electronics) // This is the call to the services api endpoint.
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
      this.message = "Added Successfully"
  }

  saveObject() {
    this.electronics.productname = this.nameproduct;

    this.electronics.price = this.itemprice;

    this.electronics.quantity = this.productquantity;

    this.electronics.description = this.productdescription;

    console.log('ready data :', this.electronics);
  }

  //Read or GET Operation..............
  getdata() {
    this.mithresh = 'mithresh';
    this.ElectronicService.getProductList().subscribe((data: any) => {
      console.log('Hii all');
      this.product = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
    });

  }

  deletedata(id:any){

    //Add some Logic here to delete the

    this.ElectronicService.deleteProduct(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.ElectronicService.getProductList().subscribe(data =>{
        this.product =data
          })
      },
      error => console.log(error));
  }


}


