import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Email', 'Salary'];
  dataSource : any = [];
  GetData : any = [];
  filtertext = '';

  constructor(private router : Router) { }

  ngOnInit() {
    this.GetData = (this.check_validUser ? JSON.parse(localStorage.getItem('userdetails')) : []) || [];
    console.log(this.GetData);
    this.dataSource = this.GetData;
  }

  check_validUser() {
    if (localStorage.getItem('userdetails') != null &&
      localStorage.getItem('userdetails') != undefined &&
      localStorage.getItem('userdetails') != "undefined")
      return true;
    else
      return false;
  }
  

  applyFilter(filterValue: string) {
    // console.log(this.dataSource);
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filtertext = filterValue;
    // console.log(this.filtertext);
    this.dataSource = this.GetData;  
 }

 selectFilter(event){

  let filternumber = event.value;
  let ref = this;
  // console.log(filternumber,this.filtertext);
  if(filternumber && this.filtertext){
    console.log(this.filtertext, filternumber)
    var filteredData = this.GetData.filter(function(data) {
     
      if(filternumber == 'less'){
      return data.Salary  <  ref.filtertext;
      }else if(filternumber == 'greater'){
      return data.Salary  >  ref.filtertext;  
      }
    });  
  this.dataSource = filteredData;
  }else{
  this.dataSource = this.GetData;  
  }
 }



  switchScreen(){
    this.router.navigateByUrl('/add-details');
  }

}
