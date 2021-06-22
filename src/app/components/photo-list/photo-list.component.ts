import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../..//services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos = [];

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (resp) => {
        this.photos = resp;
      },
      (error) => console.log(error)
    );
  }

  selectedPhoto(id: string) {
    this.router.navigate(['/photos/', id]);
  }
}
