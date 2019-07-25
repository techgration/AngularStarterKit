import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UserAdministrationRoutingModule } from './useradministration-routing.module';
import { UserAdministrationComponent } from './useradministration.component';

@NgModule({
  imports: [CommonModule, TranslateModule, UserAdministrationRoutingModule],
  declarations: [UserAdministrationComponent]
})
export class UserAdministrationModule {}
