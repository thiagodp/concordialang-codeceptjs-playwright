import { HelperConfiguration } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';

export class PlaywrightHelperConfiguration implements HelperConfiguration {

    constructor(
        public readonly _require: string = './node_modules/codeceptjs/lib/helper/Playwright',
        public readonly _browser: string = 'chromium',
        public readonly _url: string = 'http://localhost',
    ) {
    }

    /** @inheritdoc */
    name() {
        return 'Playwright';
    }

    /** @inheritdoc */
    generate( execOptions: TestScriptExecutionOptions ): any {
        const [ browser ] = execOptions.target
            ? execOptions.target.split( ',' ).map( t => t.trim() )
            : [ this._browser ];
        return  {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "show": !( true === execOptions.headless ),
            // "waitForNavigation": [ "domcontentloaded", "networkidle0" ],
            // "windowSize": "800x600",
        };
    }

}