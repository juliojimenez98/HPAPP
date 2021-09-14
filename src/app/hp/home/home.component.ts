import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';
import { HpService } from 'src/app/services/hp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCharacters:Characters[]=[]

  constructor(private service:HpService) { }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(res=>this.listCharacters=res)
  }

}
