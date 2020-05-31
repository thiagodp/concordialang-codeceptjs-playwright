"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightHelperConfiguration = void 0;
class PlaywrightHelperConfiguration {
    constructor(_browser = 'chromium', _url = 'http://localhost') {
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
            "browser": browser,
            "url": this._url,
            "show": !(true === execOptions.headless),
        };
    }
}
exports.PlaywrightHelperConfiguration = PlaywrightHelperConfiguration;
