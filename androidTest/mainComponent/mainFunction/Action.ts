export class Action {
    public async waitForDisplayed(locator: string) {
        await (await $(locator)).waitForDisplayed()
    }

    public async click(locator: string) {
        await (await $(locator)).click()
    }

    public async doubleclick(locator: string) {
        await (await $(locator)).doubleClick()
    }

    async enterText(locator: string, value: string) {
        await (await $(locator)).setValue(value)
    }

    async clearText(locator: string) {
        await (await $(locator)).clearValue()
    }

    async addValue(locator: string, value: string) {
        await (await $(locator)).addValue(value)
    }

    public async selectOptionByIndex(locator: string, value: number) {
        await (await $(locator)).selectByIndex(value)
    }

    public async selectOptionByAttr(locator: string, attribute: string, value: number) {
        await (await $(locator)).selectByAttribute(attribute, value)
    }

    async getText(locator: string) {
        await (await $(locator)).getText()
    }

    async getValue(locator: string) {
        await (await $(locator)).getValue()
    }

    async Tap(x: number, y: number) {
        driver.touchAction([
            { action: 'tap', x, y },
        ])
    }

    async waitForElementDisplayed(locator: string) {
        await (await $(locator)).waitForDisplayed()
    }

    async getAttribute(locator: string, attributeName: string) {
        await (await $(locator)).getAttribute(attributeName)
    }

    async acceptAlert() {
        await driver.acceptAlert()
    }

    async removeApps(bundleId: string) {
        await driver.removeApp(bundleId)
    }

    async closeApps(bundleId: string) {
        await driver.terminateApp(bundleId)
    }

    async launchApps(bundleId: string) {
        await driver.executeScript('mobile: launchApp', [{ bundleId: bundleId }])
    }

    async launchAppsAndroid(appID: string) {
        await driver.activateApp(appID)
    }

    async moveTo(locator: string, xOffset: number, yOffset: number) {
        await (await $(locator)).moveTo({ xOffset, yOffset })
    }

}
