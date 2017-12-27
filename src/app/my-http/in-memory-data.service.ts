import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0, name: '超人', age: 29, phone: 'apple'},
      {id: 1, name: '神奇女侠', age: 30, phone: 'nokia'},
      {id: 2, name: '闪电侠', age: 22, phone: 'android'},
      {id: 3, name: '海王', age: 50, phone: 'windows phone'},
      {id: 4, name: '蝙蝠侠', age: 40, phone: 'any'},
      {id: 5, name: '绿灯', age: 30, phone: 'ios'}
    ];

    return {heroes};
  }
}
