/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
export class RouteConfig {
    constructor(configs) {
        this.configs = configs;
    }
}
export class AbstractRoute {
    constructor({ name, useAsDefault, path, regex, regex_group_names, serializer, data }) {
        this.name = name;
        this.useAsDefault = useAsDefault;
        this.path = path;
        this.regex = regex;
        this.regex_group_names = regex_group_names;
        this.serializer = serializer;
        this.data = data;
    }
}
/**
 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route} from '@angular/router-deprecated';
 *
 * @RouteConfig([
 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
 * ])
 * class MyApp {}
 * ```
 */
export class Route extends AbstractRoute {
    constructor({ name, useAsDefault, path, regex, regex_group_names, serializer, data, component }) {
        super({
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            regex_group_names: regex_group_names,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.component = component;
    }
}
/**
 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
 *
 * It takes an object with the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 *
 * ### Example
 * ```
 * import {RouteConfig, AuxRoute} from '@angular/router-deprecated';
 *
 * @RouteConfig([
 *   new AuxRoute({path: '/home', component: HomeCmp})
 * ])
 * class MyApp {}
 * ```
 */
export class AuxRoute extends AbstractRoute {
    constructor({ name, useAsDefault, path, regex, regex_group_names, serializer, data, component }) {
        super({
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            regex_group_names: regex_group_names,
            serializer: serializer,
            data: data
        });
        this.component = component;
    }
}
/**
 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
 * loaded component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `loader` is a function that returns a promise that resolves to a component.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, AsyncRoute} from '@angular/router-deprecated';
 *
 * @RouteConfig([
 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
 * 'MyLoadedCmp'})
 * ])
 * class MyApp {}
 * ```
 */
export class AsyncRoute extends AbstractRoute {
    constructor({ name, useAsDefault, path, regex, regex_group_names, serializer, data, loader }) {
        super({
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            regex_group_names: regex_group_names,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.loader = loader;
    }
}
/**
 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `redirectTo` is an array representing the link DSL.
 *
 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
 * option.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route, Redirect} from '@angular/router-deprecated';
 *
 * @RouteConfig([
 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
 * ])
 * class MyApp {}
 * ```
 */
export class Redirect extends AbstractRoute {
    constructor({ name, useAsDefault, path, regex, regex_group_names, serializer, data, redirectTo }) {
        super({
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            regex_group_names: regex_group_names,
            serializer: serializer,
            data: data
        });
        this.redirectTo = redirectTo;
    }
}
//# sourceMappingURL=route_config_impl.js.map