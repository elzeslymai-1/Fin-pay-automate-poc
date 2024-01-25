import { sendComponent } from '../component/sendComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new sendComponent()
const action = new Action()
const assert = new Assertion()

describe('Send Page Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenImportWalletBtn)

        await action.enterText(component.importWalletPrivatekeyField, `${process.env.MNEMONIC_PHRASE}`)
        await assert.checkNotDisabled(component.importWalletImportBtn)

        await action.click(component.importWalletImportBtn)
        await action.pause(5000)

        await action.click(component.homeSendBtn)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendBackBtn)
    })

    it('[Display] => Check Select token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendSelectTokenKUB)
    })

    it('[Display] => Check To TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendToTextField)
    })

    it('[Display] => Check Amount TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendAmountTextField)
    })

    it('[Display] => Check Max Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendAmountMaxBtn)
    })

    it('[Display] => Check Next Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendNextBtn)
    })

    it('[Display] => Check Next Btn should be disable',async () => {
        // assert
        await assert.checkDisabled(component.sendNextBtn)
    })

    it('[Wording] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.sendBackBtn, '')
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.sendTitleText, 'Send')
    })

    it('[Wording] => Check Select Token Header Text',async () => {
        // assert
        await assert.checkText(component.sendSelectTokenHeaderText, 'Select Token')
    })

    it('[Wording] => Check Select Token KUB Text',async () => {
        // assert
        await assert.checkText(component.sendSelectTokenKUB, 'KUB')
    })

    it('[Wording] => Check To Header Text',async () => {
        // assert
        await assert.checkText(component.sendToHeaderText, 'To')
    })

    it('[Wording] => Check To PlaceHolder Text',async () => {
        // assert
        await assert.checkText(component.sendToPlaceHolder, 'Receive address')
    })

    it('[Wording] => Check Amount Header Text',async () => {
        // assert
        await assert.checkText(component.sendAmountHeaderText, 'Amount')
    })

    it('[Wording] => Check Amount PlaceHolder Text',async () => {
        // assert
        await assert.checkText(component.sendAmountPlaceHolder, '0.00')
    })

    it('[Wording] => Check Max Btn Text',async () => {
        // assert
        await assert.checkText(component.sendAmountMaxBtn, 'Max')
    })

    it('[Wording] => Check Next Btn Text',async () => {
        // assert
        await assert.checkText(component.sendNextBtn, 'Next')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.sendBackBtn)

        // assert
        await assert.checkElementDisplayed(component.homeSendBtn)

        // after (back to Send)
        await action.click(component.homeSendBtn)
    })

    it('[Tap] => Check Select Token Btn Tap',async () => {
        // action
        await action.click(component.sendSelectTokenKUB)

        // assert
        await assert.checkElementDisplayed(component.selectTokenTitleText)

        // action (back to Send)
        await action.click(component.selectTokenBackBtn)
    })

    it('[Tap] => Check Max Btn Tap',async () => {
        // action
        await action.click(component.sendAmountMaxBtn)
        
        // action for check don't exist
        await action.waitForExist(component.sendAmountPlaceHolder, 2000, true)

        // after (clear text)
        await action.clearText(component.sendAmountTextField)

    })

    it('[Tap] => Check Next Btn Tap',async () => {
        // action
        await action.enterText(component.sendToTextField, `${process.env.TEST_WALLET}`)
        await action.enterText(component.sendAmountTextField, '0.0001')

        // assert
        await assert.checkNotDisabled(component.sendNextBtn)

        // action
        await action.click(component.sendNextBtn)

        // assert
        await assert.checkElementDisplayed(component.confirmTitleText)

        // after (back to Send)
        await action.click(component.confirmBackBtn)

        await action.clearText(component.sendToTextField)
    })

    it('[Error] => Check To invalid address',async () => {
        // action
        await action.enterText(component.sendToTextField, 'address')

        await action.click(component.sendNextBtn)
        await action.pause(2000)

        // assert
        await assert.checkText(component.sendToInvalidText, 'Recipient address is invalid')

        // after (clear text)
        await action.clearText(component.sendToTextField)
    })
})

describe('Select Token Page Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.sendSelectTokenKUB)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenBackBtn)
    })

    it('[Display] => Check Search TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenSearchTextField)
    })

    it('[Display] => Check KUB Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenKUB)
    })

    it('[Display] => Check WTK Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenWTK)
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.selectTokenTitleText, 'Select Token')
    })

    it('[Wording] => Check Search PlacHolder Text',async () => {
        // assert
        await assert.checkText(component.selectTokenSearchPlaceHolder, 'Search...')
    })

    it('[Wording] => Check KUB Token Btn Text',async () => {
        // assert
        await assert.checkText(component.selectTokenKUB, 'KUB')
    })

    it('[Wording] => Check KUB Token Fullname Text',async () => {
        // assert
        await assert.checkText(component.selectTokenKUBFullName, 'KUB')
    })

    it('[Wording] => Check WTK Token Btn Text',async () => {
        // assert
        await assert.checkText(component.selectTokenWTK, 'WTK')
    })

    it('[Wording] => Check WTK Token Fullname Text',async () => {
        // assert
        await assert.checkText(component.selectTokenWTKFullName, 'WToken')
    })

    it('[Wording] => Check Bottom Text',async () => {
        // assert
        await assert.checkText(component.selectTokenBottomText, 'Didn’t see your token? Import')
    })

    it('[Tap] => Check WTK Token Btn Tap',async () => {
        // action
        await action.click(component.selectTokenWTK)

        // assert
        await assert.checkElementDisplayed(component.sendSelectTokenWTK)

        // after (back to Select Token)
        await action.click(component.sendSelectTokenWTK)
    })

    it('[Tap] => Check KUB Token Btn Tap',async () => {
        // action
        await action.click(component.selectTokenKUB)

        // assert
        await assert.checkElementDisplayed(component.sendSelectTokenKUB)

        // after (back to Select Token)
        await action.click(component.sendSelectTokenKUB)
    })

    it('[Search] => Check Search function',async () => {
        // action
        await action.enterText(component.selectTokenSearchTextField, 'kub')

        // action for check not exist
        await action.waitForExist(component.selectTokenWTK, 2000, true)

        // action
        await action.enterText(component.selectTokenSearchTextField, 'eth')

        // action for check not exist
        await action.waitForExist(component.selectTokenKUB, 2000, true)
        await action.waitForExist(component.selectTokenWTK, 2000, true)

        // after (back to Send)
        await action.clearText(component.selectTokenSearchTextField)
        await action.click(component.selectTokenKUB)
    })
})

describe('Confirm Send Page Test Scenario', () => {
    beforeAll(async () => {
        await action.enterText(component.sendToTextField, `${process.env.TEST_WALLET}`)

        await action.click(component.sendNextBtn)
        await action.pause(2000)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmBackBtn)
    })

    it('[Display] => Check Cancel Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmCancelBtn)
    })

    it('[Display] => Check Confirm Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmConfirmBtn)
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.confirmTitleText, 'Confirm Send')
    })

    it('[Wording] => Check You Send Text',async () => {
        // assert
        await assert.checkText(component.confirmYouSendText, 'You send')
    })

    it('[Wording] => Check From Text',async () => {
        // assert
        await assert.checkText(component.confirmFromText, 'From')
    })

    it('[Wording] => Check To Text',async () => {
        // assert
        await assert.checkText(component.confirmToText, 'To')
    })

    it('[Wording] => Check Coin Text',async () => {
        // assert
        await assert.checkText(component.confirmCoinText, 'Coin')
    })

    it('[Wording] => Check Transfer amount Text',async () => {
        // assert
        await assert.checkText(component.confirmAmountText, 'Transfer amount')
    })

    it('[Wording] => Check Network Text',async () => {
        // assert
        await assert.checkText(component.confirmNetworkText, 'Network')
    })

    it('[Wording] => Check Network fee Text',async () => {
        // assert
        await assert.checkText(component.confirmFeeText, 'Network fee')
    })

    it('[Wording] => Check Warning Text',async () => {
        // assert
        await assert.checkText(component.confirmWarningText, 'Ensure that the address is correct and on the same network. Transactions cannot be cancelled.')
    })

    it('[Wording] => Check Cancel Btn Text',async () => {
        // assert
        await assert.checkText(component.confirmCancelBtn, 'Cancel')
    })

    it('[Wording] => Check Confirm Btn Text',async () => {
        // assert
        await assert.checkText(component.confirmConfirmBtn, 'Confirm')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.confirmBackBtn)

        // assert
        await assert.checkElementDisplayed(component.sendNextBtn)

        // after (back to Confirm Send)
        await action.click(component.sendNextBtn)
    })

    it('[Tap] => Check Cancel Btn Tap',async () => {
        // action
        await action.click(component.confirmCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.sendNextBtn)

        // after (back to Confirm Send)
        await action.click(component.sendNextBtn)
    })

    it('[Tap] => Check Confirm Btn Tap',async () => {
        // action
        await action.click(component.confirmConfirmBtn)

        // assert
        await assert.checkElementDisplayed(component.pendingText)

        // action
        await action.pause(5000)

        // assert
        await assert.checkElementDisplayed(component.sendSuccessTitleText)
    })
})

describe('Send Success Page Test Scenario', () => {
    it('[Display] => Check View Transaction Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.sendSuccessViewBtn)
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.sendSuccessTitleText, 'We are sending your token')
    })

    it('[Wording] => Check Description Text',async () => {
        // assert
        await assert.checkText(component.sendSuccessDescriptionText, 'It may take a few minutes for the token to send and appear in your wallet.')
    })

    it('[Wording] => Check View Transaction Btn Text',async () => {
        // assert
        await assert.checkText(component.sendSuccessViewBtn, 'View Transaction')
    })

    it('[Tap] => Check View Transaction Btn Tap',async () => {
        // action
        await action.click(component.sendSuccessViewBtn)

        // assert
        await assert.checkElementDisplayed(component.historyTitleText)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})