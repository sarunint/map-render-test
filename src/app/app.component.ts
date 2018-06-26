import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  points: Observable<{ latitude: number; longitude: number }[]>;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.points = this.http.get<{ latitude: number; longitude: number }[]>(
      'https://cdn.rawgit.com/sarunint/ffdee3042404e8b0c78a610a540335c6/raw/df43bb835a593d6fcee726109af84f0b553947e6/points.json'
    );
  }
}
