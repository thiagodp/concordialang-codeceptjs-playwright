import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plug-in for CodeceptJS with Playwright.
 *
 * @author Thiago Delgado Pinto
 */
export default class CodeceptJSPlaywright extends CodeceptJS {
    protected createTestScriptExecutor(): TestScriptExecutor;
}
