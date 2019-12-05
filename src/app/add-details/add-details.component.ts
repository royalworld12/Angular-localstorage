import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  DetailsForm: FormGroup;
  GetData : any= [];
  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit() {
    this.validation();
   
    this.GetData = (this.check_validUser ? JSON.parse(localStorage.getItem('userdetails')) : []) || [];
  }

  check_validUser() {
    if (localStorage.getItem('userdetails') != null &&
      localStorage.getItem('userdetails') != undefined &&
      localStorage.getItem('userdetails') != "undefined")
      return true;
    else
      return false;
  }



  

  validation() {
    this.DetailsForm = this.fb.group({
        Name: ["",Validators.required],
        Email: ["",Validators.required],
        Salary: ["",Validators.required]
    });
  }

  submitForm(){
    let ref = this;
    if(this.DetailsForm.valid){
          let params = {
            Name:this.DetailsForm.get('Name').value,
            Email:this.DetailsForm.get('Email').value,
            Salary:this.DetailsForm.get('Salary').value
          }

          console.log(params);
         
          ref.GetData.push(params);
          localStorage.setItem('userdetails',JSON.stringify(this.GetData));
        
          ref.router.navigateByUrl('');
  }
}

cancel(){
  this.router.navigateByUrl('');
}

}
