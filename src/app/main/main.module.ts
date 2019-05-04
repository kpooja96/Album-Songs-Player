import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   declarations:[
       MainComponent
   ],
   imports:[
    BrowserModule
   ],
   exports:[
       MainComponent
   ]
})
export class MainModule{

}