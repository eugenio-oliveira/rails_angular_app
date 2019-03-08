import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [HttpClient]
})
export class AppComponent {
title = 'My Angular/Rails App!';
books;

constructor(private http:HttpClient){
this.http.get('http://localhost:3000/books.json')
.subscribe(res => this.books = res);
}
}