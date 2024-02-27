import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { query } from '@angular/animations';
import { ɵnormalizeQueryParams } from '@angular/common';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName: string = '';
  serverStatus: string = '';
  allowEdit: boolean = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
