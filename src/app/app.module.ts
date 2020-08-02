import {
    ColageListService
}
from './colage-list.service';
import {
    BrowserModule
}
from '@angular/platform-browser';
import {
    NgModule
}
from '@angular/core';

import {
    AppRoutingModule, routingComponents
}
from './app-routing.module';
import {
    AppComponent
}
from './app.component';
import {
    MyTableComponent
}
from './my-table/my-table.component';
import { LoginComponent } from './login/login.component';

@NgModule({ declarations: [AppComponent, MyTableComponent, routingComponents, LoginComponent ], imports: [BrowserModule, AppRoutingModule ], providers: [ColageListService], bootstrap: [AppComponent] }) export class AppModule {}
