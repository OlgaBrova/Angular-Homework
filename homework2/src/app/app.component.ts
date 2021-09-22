import { Component } from '@angular/core';
import { Game } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework2-angular';

  gameToBePrinted: Game;

  games: Game[] = [
    {
      id: 1,
      title:  "Call of Duty: Modern Warfare 2",
      releaseDate: "Nov 10 2009 01:05:18 GMT+0200 (Central European Summer Time",
      rating: 0.5422,
      price: 32,
      imageUrl: "https://i.insider.com/58c1a0d96e20048c028b515d?width=700&format=jpeg&auto=webp",
      shortDescription: "'Modern Warfare 2' continues the gripping and heart-racing action as players face off against a new threat dedicated to bringing the world to the brink of collapse. An entirely new gameplay mode which supports 2-player co-operative play online that is unique from the single player story campaign. Special Ops pits players into a gauntlet of time-trial and objective-based missions. Rank-up as players unlock new Special Ops missions, each more difficult. Missions include highlights from the single player campaign, fan favorites from 'Call of Duty 4: Modern Warfare' and all new, exclusive missions. Setting a new bar for online multiplayer, 'Modern Warfare 2' multiplayer delivers new capabilities, customization, game states and modes, including: Create-a-Class Evolved.",
      genre: "first-person-shooter",
      publisher: "Activision",
    },
    {
      id: 2,
      title:  "Red Dead Redemption 2",
      releaseDate: "Oct 26 2018 01:05:18 GMT+0200 (Central European Summer Time",
      rating: 0.7542,
      price: 26,
      imageUrl: "https://i.insider.com/5babc9d239ce1aa8758b456c?width=800&format=jpeg&auto=webp",
      shortDescription: "Developed by the creators of 'Grand Theft Auto V' and 'Red Dead Redemption,' 'Red Dead Redemption 2' is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him.",
      genre: "action-adventure",
      publisher: "Rockstar Games",
    },
    {
      id: 3,
      title:  "Super Mario Galaxy",
      releaseDate: "Nov 01 2007 01:05:18 GMT+0200 (Central European Summer Time",
      rating: 0.8655,
      price: 23,
      imageUrl: "https://i.insider.com/58c19a81402a6ba9608b49d9?width=800&format=jpeg&auto=webp",
      shortDescription: "The ultimate Nintendo hero is taking the ultimate step ... out into space. Join Mario as he ushers in a new era of video games, defying gravity across all the planets in the galaxy. When some creature escapes into space with Princess Peach, Mario gives chase, exploring bizarre planets all across the galaxy. Mario, Peach and enemies new and old are here. Players run, jump and battle enemies as they explore all the planets in the galaxy. Since this game makes full use of all the features of the Wii Remote, players have to do all kinds of things to succeed: pressing buttons, swinging the Wii Remote and the Nunchuk, and even pointing at and dragging things with the pointer. Since he's in space, Mario can perform mind-bending jumps unlike anything he's done before. He'll also have a wealth of new moves that are all based around tilting, pointing and shaking the Wii Remote. Shake, tilt and point! Mario takes advantage of all the unique aspects of the Wii Remote and Nunchuk controller, unleashing new moves as players shake the controller and even point at and drag items with the pointer.",
      genre: "action-adventure",
      publisher: "Nintendo",
    }
  ]

  sendGame(game: Game) {
    this.gameToBePrinted = game;
  }


}
