import { expect } from '@wdio/globals'
import { customNetworkComponent } from '../component/customNetworkComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customNetworkComponent()
const action = new Action()
const assert = new Assertion()

describe('Custom Network Page Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.waitForDisplayed(component.homeSettingBtn)

        await action.click(component.homeSettingBtn)

        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
    })

    // === Check Network Management Page ===
    it('[Tap] Check Network Management Btn',async () => {
        await action.waitForDisplayed(component.settingNetworkManageBtn)

        await action.click(component.settingNetworkManageBtn)

        await action.waitForDisplayed(component.networkmanagementTitleText)
        await assert.checkText(component.networkmanagementTitleText, 'Add Network')

        await action.waitForDisplayed(component.networkmanagementCustomTab)
        await assert.checkText(component.networkmanagementCustomTab, 'CUSTOM NETWORK')

        await action.waitForDisplayed(component.networkmanagementPopularTab)
        await assert.checkText(component.networkmanagementPopularTab, 'POPULAR')

        await action.click(component.networkmanagementCustomTab)

        await action.waitForDisplayed(component.networkmanagementAddcustomnetBtn)
    })
    it('[Tap] Check Add Custom Network Btn',async () => {
        await action.waitForDisplayed(component.networkmanagementAddcustomnetBtn)

        await action.click(component.networkmanagementAddcustomnetBtn)

        await action.waitForDisplayed(component.customnetTitleText)
        await assert.checkText(component.customnetTitleText, 'Custom Network')
    })
    it('[Display] Check Error Message Text Field',async () => {
        await action.waitForDisplayed(component.customnetNetworkNameTextField)

        await action.click(component.customnetNetworkNameTextField)

        // Press 'Done' on android keyboard
        await action.Tap(1335, 2831)

        await action.waitForDisplayed(component.customnetNetworkNameRequired)
        await assert.checkText(component.customnetNetworkNameRequired, 'Network Name is required')

        await action.waitForDisplayed(component.customnetSymbolTextField)

        await action.click(component.customnetSymbolTextField)

        // Press 'Done' on android keyboard
        await action.Tap(1335, 2831)

        await action.waitForDisplayed(component.customnetSymbolRequired)
        await assert.checkText(component.customnetSymbolRequired, 'Symbol is required')
    })
    it('[Tap] Check Add Custom Network Success',async () => {
        await action.waitForDisplayed(component.customnetNetworkUrlTextField)

        await action.enterText(component.customnetNetworkUrlTextField, `${process.env.TEST_URL}`)

        await action.waitForDisplayed(component.customnetNetworkNameTextField)
        await assert.checkText(component.customnetNetworkNameTextField, 'goerli')

        await action.click(component.customnetConfirmBtn)

        await action.waitForDisplayed(component.addnetsuccessSwitchgoerliBtn)

        await action.click(component.addnetsuccessSwitchgoerliBtn)

        await action.waitForDisplayed(component.homeBtn)

        await action.waitForDisplayed(component.homeGoerlichain)
        await assert.checkText(component.homeGoerlichain, 'goerli')

        // Go back to Setting page
        await action.click(component.homeSettingBtn)
    })

    // // === Check Network Management Page (Remove) ===
    // it('[Tap] Check Remove Custom Network Btn',async () => {
    //     await action.waitForDisplayed(component.settingNetworkManageBtn)
        
    //     await action.click(component.settingNetworkManageBtn)

    //     await action.waitForDisplayed(component.networkmanagementCustomTab)

    //     await action.click(component.networkmanagementCustomTab)

    //     await action.waitForDisplayed(component.networkmanagementRemoveCustomnetBtn)
    //     await assert.checkElemenDisplayed(component.networkmanagementRemoveCustomnetBtn)

    //     await action.click(component.networkmanagementRemoveCustomnetBtn)

    //     await action.waitForDisplayed(component.confirmremoveBtn)
    //     await assert.checkText(component.confirmremoveBtn, 'Remove')

    //     await action.click(component.confirmremoveBtn)

    //     await action.waitForDisplayed(component.networkmanagementCloseIconBtn)

    //     await action.click(component.networkmanagementCloseIconBtn)
    // })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})