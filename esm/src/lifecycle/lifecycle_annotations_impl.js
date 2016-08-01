/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class RouteLifecycleHook {
    constructor(name) {
        this.name = name;
    }
}
export class CanActivate {
    constructor(fn) {
        this.fn = fn;
    }
}
export const routerCanReuse = new RouteLifecycleHook('routerCanReuse');
export const routerCanDeactivate = new RouteLifecycleHook('routerCanDeactivate');
export const routerOnActivate = new RouteLifecycleHook('routerOnActivate');
export const routerOnReuse = new RouteLifecycleHook('routerOnReuse');
export const routerOnDeactivate = new RouteLifecycleHook('routerOnDeactivate');
//# sourceMappingURL=lifecycle_annotations_impl.js.map