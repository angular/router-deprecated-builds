/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var collection_1 = require('../src/facade/collection');
var lang_1 = require('../src/facade/lang');
var TouchMap = (function () {
    function TouchMap(map) {
        var _this = this;
        this.map = {};
        this.keys = {};
        if (lang_1.isPresent(map)) {
            collection_1.StringMapWrapper.forEach(map, function (value /** TODO #9100 */, key /** TODO #9100 */) {
                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
                _this.keys[key] = true;
            });
        }
    }
    TouchMap.prototype.get = function (key) {
        collection_1.StringMapWrapper.delete(this.keys, key);
        return this.map[key];
    };
    TouchMap.prototype.getUnused = function () {
        var _this = this;
        var unused = {};
        var keys = collection_1.StringMapWrapper.keys(this.keys);
        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
        return unused;
    };
    return TouchMap;
}());
exports.TouchMap = TouchMap;
function normalizeString(obj) {
    if (lang_1.isBlank(obj)) {
        return null;
    }
    else {
        return obj.toString();
    }
}
exports.normalizeString = normalizeString;
//# sourceMappingURL=utils.js.map