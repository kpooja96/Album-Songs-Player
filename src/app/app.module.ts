import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongDetailsModule } from './song-details/song-details.module';
import { AlbumDetailsModule } from './album-details/album-details.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent
  ],
  bootstrap: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    SongDetailsModule,
    AlbumDetailsModule
  ]

  
 
})
export class AppModule { }
