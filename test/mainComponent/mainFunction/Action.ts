import { join } from 'path'
export class Action {
    public encodeBase64(value: string) {
        return Buffer.from(value, 'utf-8').toString('base64')
    }
    public async setClipboard(value: string){
        await driver.setClipboard(this.encodeBase64(value), 'plaintext')
    }

    public async waitForDisplayed(locator: string) {
        await (await $(locator)).waitForDisplayed()
    }

    public async click(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).click()
    }

    public async doubleclick(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).doubleClick()
    }

    public async enterText(locator: string, value: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).setValue(value)
    }

    public async clearText(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).clearValue()
    }

    public async pause(value: number){
        await driver.pause(value)
    }

    public async swipe(from: object, to: object) {
        await driver.touchPerform(
            [
                {
                    action: 'press',
                    options: from,
                },
                {
                    action: 'wait',
                    options: { ms: 500 },
                },
                {
                    action: 'moveTo',
                    options: to,
                },
                {
                    action: 'release',
                }
            ]
        );
    }

    public async addValue(locator: string, value: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).addValue(value)
    }

    public async hideKeyboard() {
        await browser.hideKeyboard('pressKey', 'Done')
    }

    public async selectOptionByIndex(locator: string, value: number) {
        await (await $(locator)).selectByIndex(value)
    }

    public async selectOptionByAttr(locator: string, attribute: string, value: number) {
        await (await $(locator)).selectByAttribute(attribute, value)
    }

    public async getText(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).getText()
    }

    public async getValue(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).getValue()
    }

    public async Tap(x: number, y: number) {
        driver.touchAction([
            { action: 'tap', x, y },
        ])
    }

    public async waitForElementDisplayed(locator: string) {
        await (await $(locator)).waitForDisplayed()
    }

    public async getAttribute(locator: string, attributeName: string) {
        await (await $(locator)).getAttribute(attributeName)
    }

    public async acceptAlert() {
        await driver.acceptAlert()
    }

    public async removeApps(bundleId: string) {
        await driver.removeApp(bundleId)
    }

    public async closeApps(bundleId: string) {
        await driver.terminateApp(bundleId)
    }

    public async launchApps(bundleId: string) {
        await driver.executeScript('mobile: launchApp', [{ bundleId: bundleId }])
    }

    public async installApps(path: string) {
        await driver.installApp(join(process.cwd(), path))
    }

    public async launchAndroidApps(appID: string) {
        await driver.activateApp(appID) // appID : PackageID
    }

    public async moveTo(locator: string, xOffset: number, yOffset: number) {
        await (await $(locator)).moveTo({ xOffset, yOffset })
    }

}
