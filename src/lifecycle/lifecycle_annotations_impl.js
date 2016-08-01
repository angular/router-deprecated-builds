/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var RouteLifecycleHook = (function () {
    function RouteLifecycleHook(name) {
        this.name = name;
    }
    return RouteLifecycleHook;
}());
exports.RouteLifecycleHook = RouteLifecycleHook;
var CanActivate = (function () {
    function CanActivate(fn) {
        this.fn = fn;
    }
    return CanActivate;
}());
exports.CanActivate = CanActivate;
exports.routerCanReuse = new RouteLifecycleHook('routerCanReuse');
exports.routerCanDeactivate = new RouteLifecycleHook('routerCanDeactivate');
exports.routerOnActivate = new RouteLifecycleHook('routerOnActivate');
exports.routerOnReuse = new RouteLifecycleHook('routerOnReuse');
exports.routerOnDeactivate = new RouteLifecycleHook('routerOnDeactivate');
//# sourceMappingURL=lifecycle_annotations_impl.js.map