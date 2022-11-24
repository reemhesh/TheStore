import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
   username:string |null='';
   total:number |null =0;
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.username =params.get('username');
      this.total =Number(params.get('total'));
      
    })
  }
   

}
