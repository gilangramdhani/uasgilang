import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl("./tab1")
    }, 5000)
   }

  ngOnInit() {
  }

}
