import { HelperConfiguration } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';
export declare class PlaywrightHelperConfiguration implements HelperConfiguration {
    readonly _browser: string;
    readonly _url: string;
    constructor(_browser?: string, _url?: string);
    /** @inheritdoc */
    name(): string;
    /** @inheritdoc */
    generate(execOptions: TestScriptExecutionOptions): any;
}
