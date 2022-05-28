import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatabaseService } from './batabase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient, private db: BatabaseService) {}

  ngOnInit(): void {
    this.db.getUser().subscribe(res => {
      this.user = res;
    })
}
user: any = {}
}