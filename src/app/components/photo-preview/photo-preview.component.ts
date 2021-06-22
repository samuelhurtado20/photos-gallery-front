import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../..//services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css'],
})
export class PhotoPreviewComponent implements OnInit {
  id: string;
  photo: Photo;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];

      this.photoService.getPhoto(this.id).subscribe(
        (resp) => (this.photo = resp),
        (error) => console.log(error)
      );
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['/photos']);
      },
      (error) => console.log(error)
    );
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.photoService.updatePhoto(this.id, title.value, description.value).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['/photos']);
      },
      (error) => console.log(error)
    );
    return false;
  }
}
