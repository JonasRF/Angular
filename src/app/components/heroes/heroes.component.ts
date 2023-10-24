import { HEROES } from './../../../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Interfaces/hero';
import { MessageService } from 'src/app/Services/message.service';
import { HeroService } from 'src/app/Services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
