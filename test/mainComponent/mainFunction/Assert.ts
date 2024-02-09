import { expect } from '@wdio/globals'
import { Action } from './Action.js'
import { ERC20 } from '../contract/erc20.js'

const erc20 = new ERC20()
const action = new Action()

interface BalanceConfig {
    rpc: string;
    tokenAddress: string;
    walletAddress: string;
}

export class Assertion {
    public async checkToHaveElement(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveLength(1)
    }

    public async checkElementDisplayed(locator: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toBeDisplayed()
    }

    public async checkElementNotDisplayed(locator: string) {
        await expect($(locator)).not.toBeDisplayed()
    }

    public async checkText(locator: string, value: string) {
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveText(value)
    }

    public async checkTokenBalance(locator: string, balanceConfig:BalanceConfig){
        const balance = await erc20.getBalance(balanceConfig.rpc, balanceConfig.tokenAddress, balanceConfig.walletAddress)
       
        await action.waitForDisplayed(locator)
        await expect($(locator)).toHaveText(balance)
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







