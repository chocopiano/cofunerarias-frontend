import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-search',
  templateUrl: './general-search.component.html',
  styleUrls: ['./general-search.component.css']
})
export class GeneralSearchComponent implements OnInit {
  valid = true;

  constructor() { }

  ngOnInit(): void {
  }
  search(forma: NgForm){
  if (!forma.valid){
    this.valid = false;
    return;
  }
  console.log(forma.value.place)
  }

}
