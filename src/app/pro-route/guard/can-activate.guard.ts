import { CanActivate } from "@angular/router";

export class CanActivateGuard implements CanActivate {

    canActivate() {
        var hasPermission: boolean = Math.random() < 0.5;
        console.log('是否有权限:', hasPermission);
        return hasPermission;
    }
    // 如果想验证子路由，则还需要实现 canActivateChild
}