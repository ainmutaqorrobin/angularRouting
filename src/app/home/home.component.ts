import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadServer() {
    // this.serverService.getServers();
    this.router.navigate(['/servers']);
  }
}
