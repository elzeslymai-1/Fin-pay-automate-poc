export class Assertion {
    async checkElement(locator: string) {
        await expect($(locator)).toHaveLength(1)
    }

    async checkElemenDisplayed(locator: string) {
        await expect($(locator)).toBeDisplayed()
    }

    async checkText(locator: string, value: string) {
        await expect($(locator)).toHaveText(value)
    }

    async checkTextByIOSClassChain(locator: string, value: string) {
        var selector = await $(`-ios class chain:${locator}`)
        await expect($(selector)).toHaveText(value)
    }

    async checkTextContain(locator: string, value: string) {
        await expect($(locator)).toHaveTextContaining(value)
    }

    async checkFocused(locator: string) {
        await expect($(locator)).toBeFocused()
    }

    async checkAttr(locator: string, attr: string, value: string) {
        await expect($(locator)).toHaveAttribute(attr, value)
    }

    async checkAttrContain(locator: string, attr: string, value: string) {
        await expect($(locator)).toHaveAttributeContaining(attr, value)
    }

    async checkDisabled(locator: string) {
        await expect($(locator)).toBeDisabled()
    }

    async checkNotDisabled(locator: string) {
        await expect($(locator)).not.toBeDisabled()
    }

    async checkEnabled(locator: string) {
        await expect($(locator)).toBeEnabled()
    }

    async checkNotEnabledd(locator: string) {
        await expect($(locator)).not.toBeEnabled()
    }

    async checktoBeChecked(locator: string) {
        await expect($(locator)).toBeChecked()
    }

    async checkLength(locator: string, value: number) {
        await expect($(locator)).toBeElementsArrayOfSize(value)
    }
}






