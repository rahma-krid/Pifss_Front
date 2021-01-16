import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';

  constructor() { }

  ngOnInit(): void {
  }

}
