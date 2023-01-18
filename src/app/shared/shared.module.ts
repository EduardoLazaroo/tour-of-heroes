import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MaterialModule } from '../core/material/material.module';

const COMPOMNENTS = [HeroSearchComponent];

@NgModule({
  declarations: [HeroSearchComponent],
  imports: [[CommonModule, MaterialModule]],
  exports: [COMPOMNENTS],
})
export class SharedModule {}
