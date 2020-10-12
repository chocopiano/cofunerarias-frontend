import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-search',
  templateUrl: './general-search.component.html',
  styleUrls: ['./general-search.component.css']
})
export class GeneralSearchComponent implements OnInit {
  valid = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  search(forma: NgForm): any {
    if (!forma.valid) {
      this.valid = false;
      return;
    }
    // console.log(forma.value.place);
    this.router.navigate(['/search-result', forma.value.place]);
  }
}
