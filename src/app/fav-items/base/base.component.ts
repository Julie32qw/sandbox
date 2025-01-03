import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  message: string = '';

  constructor(private router: Router) { }

  saveData() {
    this.message = "Saved successfully"
    alert("Saved successfully");
  }

  loadFavouriteFoods(): void {
    this.router.navigate(['/favourite-foods']);
  }

  loadFavouritePlaces(): void {
    console.log("hi");
    this.router.navigate(['/favourite-places']);
  }
}
