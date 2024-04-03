import { Component } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums!: Album[];
  newAlbum !: Album;

  constructor(private albumService: AlbumsService){}

  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(a => a.id !== id)
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.push(album);
    });
    this.newAlbum.title="";
  }
}
