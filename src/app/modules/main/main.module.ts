import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/modules/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule {
}
