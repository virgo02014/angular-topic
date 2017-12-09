import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService { //HeroService可以从任何地方获取 Hero数据 web服务、本地存储或模拟数据源
    getHeroes(): Promise<Hero[]> {
    	return Promise.resolve(HEROES);
    }
}
// TODO https://angular.cn/tutorial/toh-pt4
