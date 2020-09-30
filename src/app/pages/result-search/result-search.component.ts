import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  valid = true;

  constructor() { }

  ngOnInit(): void {
  }
  search(forma: NgForm){
    if (!forma.valid){
      this.valid = false;
      return;
    }
    console.log(forma.value.place);
    }

}
