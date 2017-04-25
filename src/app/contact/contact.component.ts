import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	positions:Array<String>;
	contactForm:FormGroup;
  constructor(private fb:FormBuilder) { 
	
	this.positions = ['P','C','1B','2B','3B','SS','LF','CF','RF'];
  }

  createForm(){
	  // build the form and assign to the contactForm variable
	  this.contactForm = this.fb.group({
			first:['',Validators.required],
			last:['',Validators.required],
			age:['',Validators.required],
			email:['',Validators.required],
			experience:['',Validators.required],
			primary:['',Validators.required],
			secondary:['']
	  });// this factory with the config will create form controls to be referenced in the view template
	  
	  this.contactForm.valueChanges.subscribe(data => console.log('changed data'));
  }
  
  ngOnInit() {
	  this.createForm();// call a function to actuall build the formgroup
  }

}
