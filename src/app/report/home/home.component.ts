import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( @Inject('googleForm') private googleForm) { }

  ngOnInit() {


  }

  send(): void {
    console.log("==> send()");
    this.googleForm.submitForm();
  }

}
