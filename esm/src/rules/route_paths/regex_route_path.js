/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular/core';
import { isBlank } from '../../facade/lang';
import { MatchedUrl } from './route_path';
function computeNumberOfRegexGroups(regex) {
    // cleverly compute regex groups by appending an alternative empty matching
    // pattern and match against an empty string, the resulting match still
    // receives all the other groups
    var testRegex = new RegExp(regex + '|');
    return testRegex.exec('').length;
}
export class RegexRoutePath {
    constructor(_reString, _serializer, _groupNames) {
        this._reString = _reString;
        this._serializer = _serializer;
        this._groupNames = _groupNames;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = new RegExp(this._reString);
        if (this._groupNames != null) {
            var groups = computeNumberOfRegexGroups(this._reString);
            if (groups != _groupNames.length) {
                throw new BaseException(`Regex group names [${this._groupNames.join(',')}] must contain names for \
each matching group and a name for the complete match as its first element of regex \
'${this._reString}'. ${groups} group names are expected.`);
            }
        }
    }
    matchUrl(url) {
        var urlPath = url.toString();
        var params = {};
        var match = urlPath.match(this._regex);
        if (isBlank(match)) {
            return null;
        }
        for (let i = 0; i < match.length; i += 1) {
            params[this._groupNames != null ? this._groupNames[i] : i.toString()] = match[i];
        }
        return new MatchedUrl(urlPath, [], params, [], null);
    }
    generateUrl(params) { return this._serializer(params); }
    toString() { return this._reString; }
}
//# sourceMappingURL=regex_route_path.js.map