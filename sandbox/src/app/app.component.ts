import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message: string ='';
  saveData(){
    this.message= "Saved successfully"
    alert("Saved successfully");
  }
}
