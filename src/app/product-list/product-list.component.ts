import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-list',
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name:string="Alireza";
  aname:string="Alireza";
  cart=0;
  product={
name:"Ipone",
price:1500,
color:"red",
discount:6.5,
stock:5
}
getdiscountprice(){
  return this.product.price - (this.product.price * this.product.discount)/100;
};
onChange(event:any){
this.name=event.target.value;
};
decrise(){
  if(this.cart==0){
    this.cart=0
  }else{
this.cart=this.cart-1;}
};
increase(){
  if(this.cart>= this.product.stock){
    this.cart=this.product.stock;
  }else{
  this.cart=this.cart+1;}
};
}