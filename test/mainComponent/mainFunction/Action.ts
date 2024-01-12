import { join } from 'path'
export class Action {
    public encodeBase64(value: string) {
        return Buffer.from(value, 'utf-8').toString('base64')
    }
    public async setClipboard(value: string) {
        await driver.setClipboard(this.encodeBase64(value), 'plaintext')
    }

    public async waitForDisplayed(locator: string) {
        await (await $(locator)).waitForDisplayed()
    }

    public async click(locator: string) {
        await this.waitForDisplayed(locator)
        await (await $(locator)).click()
    }

    public async doubleClick(locator: string) {
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

    public async pause(value: number) {
        await driver.pause(value)
    }

    public async swipe(x: string) {
        // Get the device screen size
        const { width, height } = await browser.getWindowRect();

        // Define the start and end coordinates for the swipe
        let startX = 0
        let startY = 0
        let endX = 0
        let endY = 0

        switch (x) {
            case 'left':

                startX = width * 0.8; // 80% of the screen width
                startY = height / 2; // Center of the screen
                endX = width * 0.2; // 20% of the screen width
                endY = height / 2; // Center of the screen

                await browser.performActions([
                    {
                        type: 'pointer',
                        id: 'finger1',
                        parameters: { pointerType: 'touch' },
                        actions: [
                            { type: 'pointerMove', duration: 0, x: startX, y: startY },
                            { type: 'pointerDown', button: 0 },
                            { type: 'pointerMove', duration: 100, x: endX, y: endY },
                            { type: 'pointerUp', button: 0 },
                        ],
                    },
                ]);
                break

            case 'up':

                startX = width / 2; // Center of the screen
                startY = height * 0.8; // 80% of the screen width
                endX = width / 2; // Center of the screen
                endY = height * 0.2; // 20% of the screen width

                await browser.performActions([
                    {
                        type: 'pointer',
                        id: 'finger1',
                        parameters: { pointerType: 'touch' },
                        actions: [
                            { type: 'pointerMove', duration: 0, x: startX, y: startY },
                            { type: 'pointerDown', button: 0 },
                            { type: 'pointerMove', duration: 100, x: endX, y: endY },
                            { type: 'pointerUp', button: 0 },
                        ],
                    },
                ]);
                break
        }
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

    async waitForExist(locator: string, timeout: number, reverse: boolean) {
        await (await $(locator)).waitForExist({ timeout, reverse })
    }

}
