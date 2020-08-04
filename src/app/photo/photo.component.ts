
import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  searchQuery: any;
images: any[];
imagesFound: boolean = false;
searching: boolean = false;

handleSuccess(data) {
  this.imagesFound = true;
  this.images = data.hits;
  console.log(data.hits);
}

handleError(error) {
  console.log(error);
}

  constructor(private imageService : ImageService) { }


searchImages(query: string) {
  this.searching = true;
return this.imageService.getImage(query).subscribe(
  data => this.handleSuccess(data),
  error => this.handleError(error),
  () => this.searching = false
)
}
  ngOnInit(): void {
  }

}
