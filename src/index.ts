import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { PlaywrightHelperConfiguration } from './PlaywrightHelperConfiguration';

/**
 * Plug-in for CodeceptJS with Playwright.
 *
 * @author Thiago Delgado Pinto
 */
export class CodeceptJSPlaywright extends CodeceptJS {

    protected createTestScriptExecutor(): TestScriptExecutor {
        return new TestScriptExecutor(
            [ new PlaywrightHelperConfiguration() ]
        );
    }

}