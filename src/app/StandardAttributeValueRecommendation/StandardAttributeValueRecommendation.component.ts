import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-StandardAttributeValueRecommendation',
  templateUrl: './StandardAttributeValueRecommendation.component.html',
  styleUrls: ['./StandardAttributeValueRecommendation.component.scss']
})
export class StandardAttributeValueRecommendationComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
