"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightHelperConfiguration = void 0;
class PlaywrightHelperConfiguration {
    constructor(_require = './node_modules/codeceptjs/lib/helper/Playwright', _browser = 'chromium', _url = 'http://localhost') {
        this._require = _require;
        this._browser = _browser;
        this._url = _url;
    }
    /** @inheritdoc */
    name() {
        return 'Playwright';
    }
    /** @inheritdoc */
    generate(execOptions) {
        const [browser] = execOptions.target
            ? execOptions.target.split(',').map(t => t.trim())
            : [this._browser];
        return {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "show": !(true === execOptions.headless),
        };
    }
}
exports.PlaywrightHelperConfiguration = PlaywrightHelperConfiguration;
