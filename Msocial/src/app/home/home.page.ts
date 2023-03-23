import { Component } from '@angular/core';
import {FotoService} from '../services/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoService: FotoService) {}
  addNewToGallery() {
    // Código para agregar una nueva imagen a la galería
  }
  addPhotoToGallery()
  {
    this.fotoService.addNewToGallery()
  }
}
