import { Component, OnInit } from '@angular/core';
import { Images } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  images!: Images[];

  constructor(private route: ActivatedRoute, private albumService: AlbumsService){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumService.getImages(id).subscribe(photos => {
          this.images = photos;
        })
      }
    })
  }
}
