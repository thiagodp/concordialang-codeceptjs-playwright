"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeceptJSPlaywright = void 0;
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const PlaywrightHelperConfiguration_1 = require("./PlaywrightHelperConfiguration");
/**
 * Plug-in for CodeceptJS with Playwright.
 *
 * @author Thiago Delgado Pinto
 */
class CodeceptJSPlaywright extends concordialang_codeceptjs_core_1.CodeceptJS {
    createTestScriptExecutor() {
        return new concordialang_codeceptjs_core_1.TestScriptExecutor([new PlaywrightHelperConfiguration_1.PlaywrightHelperConfiguration()]);
    }
}
exports.CodeceptJSPlaywright = CodeceptJSPlaywright;
