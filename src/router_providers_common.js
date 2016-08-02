/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var exceptions_1 = require('../src/facade/exceptions');
var route_registry_1 = require('./route_registry');
var router_1 = require('./router');
/**
 * The Platform agnostic ROUTER PROVIDERS
 */
exports.ROUTER_PROVIDERS_COMMON = [
    route_registry_1.RouteRegistry, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }, common_1.Location, {
        provide: router_1.Router,
        useFactory: routerFactory,
        deps: [route_registry_1.RouteRegistry, common_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT]
    },
    {
        provide: route_registry_1.ROUTER_PRIMARY_COMPONENT,
        useFactory: routerPrimaryComponentFactory,
        deps: [core_1.ApplicationRef]
    }
];
function routerFactory(registry, location, primaryComponent) {
    return new router_1.RootRouter(registry, location, primaryComponent);
}
function routerPrimaryComponentFactory(app) {
    if (app.componentTypes.length == 0) {
        throw new exceptions_1.BaseException('Bootstrap at least one component before injecting Router.');
    }
    return app.componentTypes[0];
}
//# sourceMappingURL=router_providers_common.js.map