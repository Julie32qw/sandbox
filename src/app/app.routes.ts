import { Routes } from '@angular/router';
import { FavouriteFoodsComponent } from './fav-items/favourite-foods/favourite-foods.component';
import { FavouritePlacesComponent } from './fav-items/favourite-places/favourite-places.component';
import { BaseComponent } from './fav-items/base/base.component';

export const routes: Routes = [
    {
        path: '',
        component: BaseComponent
    },
    {
        path: 'favourite-foods',
        component: FavouriteFoodsComponent
    },

    {
        path: 'favourite-places',
        component: FavouritePlacesComponent
    }

];
