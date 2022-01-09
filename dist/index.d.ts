import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plug-in for CodeceptJS with Playwright.
 *
 * @author Thiago Delgado Pinto
 */
export declare class CodeceptJSPlaywright extends CodeceptJS {
    protected createTestScriptExecutor(): TestScriptExecutor;
}
