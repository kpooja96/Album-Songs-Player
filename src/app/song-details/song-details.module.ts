import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SongDetailsComponent } from './song-details.component';


@NgModule({
    declarations:[
       SongDetailsComponent,
      
    ],
    providers:[
        
    ],

    imports:[
        BrowserModule
           
    ],
    exports:[
       SongDetailsComponent,
       
    ]
})
export class SongDetailsModule{

}