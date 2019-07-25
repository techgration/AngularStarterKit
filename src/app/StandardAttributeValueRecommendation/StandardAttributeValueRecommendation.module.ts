import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StandardAttributeValueRecommendationRoutingModule } from './StandardAttributeValueRecommendation-routing.module';
import { StandardAttributeValueRecommendationComponent } from './StandardAttributeValueRecommendation.component';

@NgModule({
  imports: [CommonModule, TranslateModule, StandardAttributeValueRecommendationRoutingModule],
  declarations: [StandardAttributeValueRecommendationComponent]
})
export class StandardAttributeValueRecommendationModule {}
