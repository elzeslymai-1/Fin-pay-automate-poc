import { expect } from '@wdio/globals'
import { Action } from './Action.js'

const action = new Action()
export class Assertion {
    public async checkToHaveElement(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveLength(1)
    }

    public async checkElementDisplayed(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeDisplayed()
    }

    public async checkKeyBoardShowing() {
        await expect(await driver.isKeyboardShown()).toBe(true)
    }

    public async checkElementNotDisplayed(locator: string) {
        await expect($(locator)).not.toBeDisplayed()
    }

    public async checkText(locator: string, value: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveText(value)
    }

    public async checkTextContain(locator: string, value: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveText(expect.stringContaining(value))
    }

    public async checkFocused(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeFocused()
    }

    public async checkAttr(locator: string, attr: string, value: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveAttribute(attr, value)
    }

    public async checkAttrContain(locator: string, attr: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveAttribute('attribute', expect.stringContaining(attr))
    }

    public async checkDisabled(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeDisabled()
    }

    public async checkNotDisabled(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).not.toBeDisabled()
    }

    public async checkEnabled(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeEnabled()
    }

    public async checkNotEnabled(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).not.toBeEnabled()
    }

    public async toBeChecked(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeChecked()
    }

    public async checkLength(locator: string, value: number) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeElementsArrayOfSize(value)
    }
}






