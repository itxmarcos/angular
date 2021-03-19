import { Component } from '@angular/core';
import { Profile } from './profile-list/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creating-components-social-network';
  profileList: Profile[];

  constructor() {
    this.profileList = this.getProfilesFromServer();
  }

  private getProfilesFromServer(): Profile[]{
    let profiles: Profile[] = [];
    profiles.push(new Profile(1, 'Profile 1'));
    profiles.push(new Profile(2, 'Profile 2'));
    profiles.push(new Profile(3, 'Profile 3'));
    return profiles;
  }

  perfilSeleccionado(p: Profile) {
    console.log('Aqui tengo el profile pero ahora estoy en el app.component: ', p);
  }
}
