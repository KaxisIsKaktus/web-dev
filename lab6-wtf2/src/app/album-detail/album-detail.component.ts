import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  title: string = '';

  constructor(private route: ActivatedRoute, private albumService: AlbumsService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumService.getAlbum(id).subscribe(album =>{
          this.album = album;
        })
      }
      
    })
  }

  saveTitle(){
    this.album.title = this.title;
  }
}
