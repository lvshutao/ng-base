import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PageInfoService} from '../../share/page-info.service';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  menus: Menu[] = [
    // new Menu(0, '首页', '/', 'text-white'),
    new Menu(1, '路由(特性模块)', 'my-route', 'text-red'),
    new Menu(2, '路由守卫', 'pro-route', 'text-green'),
    new Menu(3, '表单', 'my-form', 'text-blue'),
    new Menu(4, '管道', 'my-pipe', 'text-yellow'),
    new Menu(5, 'rxjs', 'my-rxjs', 'text-yellow'),
    new Menu(6, 'http', 'my-http', 'text-yellow'),
    new Menu(7, 'Animation', 'my-animation', 'text-red'),
  ];

  constructor(private router: Router, private pageInfo: PageInfoService, private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    //  问题：当页面加载时，如何判断出当前所选择的菜单
    // console.log(this.routeInfo);
    // this.router.events.subscribe((url: any) => console.log('url:', url));

    // 补充资料:https://stackoverflow.com/questions/34597835/how-to-get-current-route
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        let url = event.url.substr(1);
        this.menus.filter(menu => {
          if (menu.link.indexOf(url) === 0) {
            this.selectMenu(menu);
          }
        });
      });
    this.currentMenu = new Menu(0, '', '');
  }

  currentMenu: Menu;

  nav(menu: Menu) {
    this.selectMenu(menu);
    this.router.navigateByUrl(menu.link);
  }

  selectMenu(menu: Menu) {
    this.currentMenu = menu;
    this.pageInfo.title = menu.name;
  }

}

// 封装菜单
export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string,
              public textColor ?: string,
              public desc ?: string) {
  }
}
