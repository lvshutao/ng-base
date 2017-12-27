import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {WsService} from '../ws-service';

@Component({
  selector: 'app-my-http-index',
  templateUrl: './my-http-index.component.html',
  styleUrls: ['./my-http-index.component.css']
})
export class MyHttpIndexComponent implements OnInit {


  heroes: Hero[] = [];
  myHero: Hero;

  constructor(public heroServ: HeroService, private ws: WsService) {
  }

  ngOnInit() {
    this.doGet();
  }

  // ----------- RestFul 服务 ------------
  doGet() {
    this.heroServ.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  doFind(hero: Hero) {
    this.heroServ.getHero(hero.id)
      .subscribe(hero => this.myHero = hero);
  }

  doSave() {
    if (!this.myHero.id) {
      let name = this.myHero.name.trim();
      if (!name) return;
      this.heroServ.create(this.myHero)
        .subscribe(hero => {
          this.heroes.push(hero);
          this.myHero = null;
        });
      return;
    }
    this.heroServ.update(this.myHero)
      .subscribe(() => {
        this.myHero = null;
        this.doGet();
      });
  }

  add() {
    this.myHero = new Hero();
  }

  doCancel() {
    this.myHero = null;
  }

  doDelete(hero: Hero) {
    this.heroServ.remove(hero)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h.id != hero.id);
      });
  }

//  ---------- web socket 服务
  sendWs() {
    this.ws.send(JSON.stringify({
      type: 'notify',
      id: parseInt(Math.random() * 1000),
      message: 'Hello World:' + Date.now()
    }));
  }

}
