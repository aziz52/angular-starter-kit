import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('layout');
    console.log('Aziz');
  }

  public localError(): void {
    throw Error('The Layout component has thrown an error!');
  }

  public failingRequest(): void {
    this.http.get('https://httpstat.us/404?sleep=2000').subscribe((resp) => {
      console.log(resp);
    });
  }
}
