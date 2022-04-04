import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { PixiTemplateComponent } from './components/pixi-template/pixi-template.component';
import * as PIXI from 'pixi.js';


const routes: Routes = [

];

@NgModule({
    declarations: [
        AppComponent,
        PixiTemplateComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor() {
        (window as any).PIXI = PIXI;
    }
}
