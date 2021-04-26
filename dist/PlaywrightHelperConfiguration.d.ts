import { HelperConfiguration } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';
export declare class PlaywrightHelperConfiguration implements HelperConfiguration {
    readonly _require: string;
    readonly _browser: string;
    readonly _url: string;
    constructor(_require?: string, _browser?: string, _url?: string);
    /** @inheritdoc */
    name(): string;
    /** @inheritdoc */
    generate(execOptions: TestScriptExecutionOptions): any;
}
