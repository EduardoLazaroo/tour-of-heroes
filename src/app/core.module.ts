import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent,
  LoadingComponent,
];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has a alaread been loaded. Import this module in the AppModule.'
      );
    }
  }
}
