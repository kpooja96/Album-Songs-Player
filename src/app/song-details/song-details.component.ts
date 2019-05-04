import { Component } from '@angular/core';

@Component({
    templateUrl: "./song-details.component.html",
    selector: "song-details",
    styleUrls: ["./song-details.component.css"]
})
export class SongDetailsComponent{
    song={  	
        "songName": "Shape of you",
        // "imageUrl": "assets/images/java8_in_action.jpeg",
        "title": "Shape of you",
        "artist": [
              {"firstName": " Ed ", "lastName": "Sheeran"},
              
         ],
         "category": " Pop",
         "rating": 4.4,
        
         "releaseDate": new Date(2018,5,23)
    }







    
}