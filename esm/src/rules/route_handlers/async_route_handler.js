/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isPresent } from '../../facade/lang';
import { BLANK_ROUTE_DATA, RouteData } from '../../instruction';
export class AsyncRouteHandler {
    constructor(_loader, data = null) {
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = isPresent(data) ? new RouteData(data) : BLANK_ROUTE_DATA;
    }
    resolveComponentType() {
        if (isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then((componentType) => {
            this.componentType = componentType;
            return componentType;
        });
    }
}
//# sourceMappingURL=async_route_handler.js.map