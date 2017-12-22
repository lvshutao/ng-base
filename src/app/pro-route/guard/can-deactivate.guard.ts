import { CanDeactivate } from "@angular/router";
import { ProCanDeactivateComponent } from "../pro-can-deactivate/pro-can-deactivate.component";

// 泛型填写要保护的组件
export class CanDeactivateGuard implements
    CanDeactivate<ProCanDeactivateComponent> {

    // 在这里你已经可以拿到组件的实例，及路由的信息
    canDeactivate(component: ProCanDeactivateComponent): boolean {
        if (!component.hasChecked()) {
            return window.confirm('你确定要离开吗?')
        } else {
            return true;
        }
    }
}