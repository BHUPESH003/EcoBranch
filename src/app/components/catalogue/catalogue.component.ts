import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor() { }
  pdfSrc = "../../../assets/catalogue.pdf";
  ngOnInit(): void {

  }

}
