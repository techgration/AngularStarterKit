import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-useradministration',
  templateUrl: './useradministration.component.html',
  styleUrls: ['./useradministration.component.scss']
})
export class UserAdministrationComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
