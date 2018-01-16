import { Component, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import Hero from '../../model/hero';
import { HeroService } from './../../service/hero.service';
import { Message } from './../../model/message';
import { MessageService } from './../../service/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnDestroy {
  curHero: Hero;
  hero: Hero;
  receiveMsg: Message[];
  private observer: any;
  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private msgSErvice: MessageService
  ) {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        const originHeroId = parseInt(paramMap.get('id'), 10);
        const curHero = this.curHero = this.heroService.getHeroById(originHeroId);
        this.hero = {
          name: curHero.name,
          id: curHero.id
        };
      });
    this.observer = this.msgSErvice.getHeroRelateMsg(this.curHero.id)
      .subscribe((msgs: Message[]) => {
        this.receiveMsg = msgs;
      });
  }
  save(): void {
    this.curHero.name = this.hero.name;
  }
  reset(): void {
    this.hero.name = this.curHero.name;
  }
  ngOnDestroy() {
    this.observer.unsubscribe();
  }

}