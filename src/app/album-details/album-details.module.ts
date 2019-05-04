import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumDetailsComponent } from './album-details.component';


@NgModule({
    declarations:[
       AlbumDetailsComponent,
      
    ],
    providers:[
        
    ],

    imports:[
        BrowserModule
           
    ],
    exports:[
       AlbumDetailsComponent,
       
    ]
})
export class AlbumDetailsModule{

}