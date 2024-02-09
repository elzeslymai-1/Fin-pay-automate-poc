import { ReceiveComponent } from '../component/receiveComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import { CustomNetworkModel } from '../component/customNetworkComponent.js'

const action = new Action()
const assert = new Assertion()
const component = new ReceiveComponent()
const importWalletModel = new ImportWalletModel()
const customNetworkModel = new CustomNetworkModel()

describe('Select Token Page Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps('apps/FinPay.app')     // install apps
        await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
        await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
        await action.click(component.homeReceiveBtn)     // go to receive page
    })

    it('[Display] => Check Back Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenBackBtn)
    })

    it('[Display] => Check Search TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenSearchTextField)
    })

    it('[Display] => Check KUB Token Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenKUBTokenBtn)
    })

    it('[Display] => Check KUB Token Should has Correct Token Amount', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenKUBTokenBtn, '0 KUB')
    })

    it('[Display] => Check KUB Token Should has Correct Token Value', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenKUBTokenBtn, '$0')
    })

    it('[Display] => Check WTK Token Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenWTKTokenBtn)
    })

    it('[Display] => Check WTK Token Should has Correct Token Amount', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenWTKTokenBtn, '0 WTK')
    })

    it('[Display] => Check WTK Token Should has Correct Token Value', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenWTKTokenBtn, '$0')
    })

    it('[Wording] => Check Back Btn Wording', async () => {
        // assert
        await assert.checkText(component.selectTokenBackBtn, '')
    })

    it('[Wording] => Check Title Wording', async () => {
        // assert
        await assert.checkText(component.selectTokenTitleText, 'Select Token')
    })

    it('[Wording] => Check Search Placeholder Wording', async () => {
        // assert
        await assert.checkText(component.selectTokenSearchTextField, 'Search...')
    })

    it('[Wording] => Check KUB Token Btn Wording', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenKUBTokenBtn, 'KUB')
    })

    it('[Wording] => Check KUB Token Name Wording', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenKUBTokenBtn, 'KUB')
    })

    it('[Wording] => Check WTK Token Btn Wording', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenWTKTokenBtn, 'WTK')
    })

    it('[Wording] => Check WTK Token Name Wording', async () => {
        // assert
        await assert.checkTextContain(component.selectTokenWTKTokenBtn, 'WToken')
    })

    it('[Tap] => Check Tap Back Btn', async () => {
        // action
        await action.click(component.selectTokenBackBtn)

        // assert
        await assert.checkElementDisplayed(component.homeReceiveBtn)

        // after
        await action.click(component.homeReceiveBtn)
    })

    it('[Tap] => Check Tap KUB Token', async () => {
        // action
        await action.click(component.selectTokenKUBTokenBtn)

        // assert
        await assert.checkText(component.receiveHeaderKUBText, 'KUB Receiving')

        // after
        await action.click(component.receiveBackBtn)
    })

    it('[Tap] => Check WTK Token Tap', async () => {
        // action
        await action.click(component.selectTokenWTKTokenBtn)

        // assert
        await assert.checkText(component.receiveHeaderWTKText, 'WTK Receiving')

        // after
        await action.click(component.receiveBackBtn)
    })

    it('[Search] => Check Search KUB Token', async () => {
        // action
        await action.enterText(component.selectTokenSearchTextField, 'kuB')

        // assert
        await assert.checkElementNotDisplayed(component.selectTokenWTKTokenBtn)
        await assert.checkElementDisplayed(component.selectTokenKUBTokenBtn)

        // after (clear text)
        await action.clearText(component.selectTokenSearchTextField)
    })

    it('[Search] => Check Search WTK Token', async () => {
        // action
        await action.enterText(component.selectTokenSearchTextField, 'Wtk')

        // assert
        await assert.checkElementNotDisplayed(component.selectTokenKUBTokenBtn)
        await assert.checkElementDisplayed(component.selectTokenWTKTokenBtn)

        // after (clear text)
        await action.clearText(component.selectTokenSearchTextField)
    })

    it('[Search] => Check Search Token no result', async () => {
        // action
        await action.enterText(component.selectTokenSearchTextField, 'ETH')

        // assert
        await assert.checkElementNotDisplayed(component.selectTokenWTKTokenBtn)
        await assert.checkElementNotDisplayed(component.selectTokenKUBTokenBtn)

        // after (clear text)
        await action.clearText(component.selectTokenSearchTextField)
        await action.tabKeyboard('return')
    })
})

describe('Receive Token Page Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.selectTokenKUBTokenBtn)
    })

    it('[Display] => Check Back Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveBackBtn)
    })

    it('[Display] => Check Scan Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveScanBtn)
    })

    it('[Display] => Check Download QR Code Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveDownloadQRBtn)
    })

    it('[Display] => Check Copy Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveCopyBtn)
    })

    it('[Display] => Check Share Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveShareBtn)
    })

    it('[Display] => Check Set Amount Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveSetAmountBtn)
    })

    it('[Wording] => Check Back Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveBackBtn, '')
    })

    it('[Wording] => Check Scan Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveScanBtn, '󰘤')
    })

    it('[Wording] => Check Download QR Code Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveDownloadQRBtn, '')
    })

    it('[Wording] => Check Title Wording', async () => {
        // assert
        await assert.checkText(component.receiveTitleText, 'Receive Token')
    })

    it('[Wording] => Check KUB Header Wording', async () => {
        // assert
        await assert.checkText(component.receiveHeaderKUBText, 'KUB Receiving')
    })

    it('[Wording] => Check Description Wording', async () => {
        // assert
        await assert.checkText(component.receiveDescriptionText, 'Scan the QR code to receive')
    })

    it('[Wording] => Check Copy Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveCopyBtn, '')
    })

    it('[Wording] => Check Share Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveShareBtn, '')
    })

    it('[Wording] => Check Set Amount Btn Wording', async () => {
        // assert
        await assert.checkText(component.receiveSetAmountBtn, 'Set Amount')
    })

    it('[Wording] => Check Bottom Text 1 Wording', async () => {
        // assert
        await assert.checkText(component.receiveBottomText1, 'Only send')
    })

    it('[Wording] => Check Bottom Text Chain name Wording', async () => {
        // assert
        await assert.checkText(component.receiveBottomKUBTokenText, 'Bitkub Chain Testnet (KUB)')
    })

    it('[Wording] => Check Bottom Text 2 Wording', async () => {
        // assert
        await assert.checkText(component.receiveBottomText2, 'network assets to this address.')
    })

    it('[Wording] => Check Bottom Text 3 Wording', async () => {
        // assert
        await assert.checkText(component.receiveBottomText3, 'Sending any other coins may result in permanent loss.')
    })

    it('[Tap] => Check Tap Back Btn', async () => {
        // action
        await action.click(component.receiveBackBtn)

        // assert
        await assert.checkElementDisplayed(component.selectTokenTitleText)

        // after (back to Receive)
        await action.click(component.selectTokenKUBTokenBtn)
    })

    it('[Tap] => Check Tap Scan Btn', async () => {
        // action
        await action.click(component.receiveScanBtn)
        await action.click(component.cameraPermissionAllowBtn)  // allow permission to access camera

        // assert
        await assert.checkText(component.scanTitleText, 'Scan QR code')

        // after (back to Receive)
        await action.click(component.scanBackBtn)
    })

    it('[Tap] => Check Tap Download QR Code Btn', async () => {
        // action
        await action.click(component.receiveDownloadQRBtn)

        // assert
        await assert.checkElementDisplayed(component.photoPermissionTitleText)

        // after
        await action.click(component.PhotoPermissionAllowBtn)  // allow permission to access camera
    })

    it('[Tap] => Check Tap Copy Btn', async () => {
        // action
        await action.click(component.receiveCopyBtn)

        // assert
        await assert.checkElementDisplayed(component.receiveCopyNotificationText)
    })

    it('[Tap] => Check Tap Share Btn', async () => {
        // action
        await action.click(component.receiveShareBtn)

        // assert
        await assert.checkElementDisplayed(component.shareModalCloseBtn)

        // after
        await action.click(component.shareModalCloseBtn)
    })

    it('[Tap] => Check Tap Set Amount', async () => {
        // action
        await action.click(component.receiveSetAmountBtn)

        // assert
        await assert.checkElementDisplayed(component.setAmountTitleText)

        // after
        await action.click(component.setAmountBackBtn)
    })

    it('[Tap] => Check Tap Remove Set Amount Btn', async () => {
        // action
        await action.click(component.receiveSetAmountBtn)
        await action.click(component.setAmountContinueBtn)  // confirm set amount
        await action.click(component.receiveRemoveSetAmountBtn)  // remove set amount

        // assert
        await assert.checkElementNotDisplayed(component.receiveRemoveSetAmountBtn)
    })

    xit('[Functional] => Download QR Success', async () => {
        // action
        await action.click(component.receiveDownloadQRBtn)

        // assert
        await assert.checkText(component.downloadQRHeaderKUBText, 'KUB Receiving')
    })

    it('[Functional] => Deny Permission Access to Photo When Download QR', async () => {
        // action
        await action.removeApps(`${process.env.BUNDLE_ID}`)
        await action.pause(2000)
        await action.installApps('apps/FinPay.app')     // install apps
        await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
        await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
        await action.click(component.homeReceiveBtn)     // go to receive page
        await action.click(component.selectTokenKUBTokenBtn)     // select KUB

        await action.click(component.receiveDownloadQRBtn)
        await action.click(component.photoPermissionDenyBtn)    // deny permission

        // assert
        await assert.checkElementDisplayed(component.denyPermissionWarningTitleText)

        // after
        await action.click(component.denyPermissionWarningOkBtn)
        await action.click(component.receiveBackBtn)
    })

    it('[Functional] => Check Bottom Wording When Change Token', async () => {
        // action
        await action.click(component.selectTokenWTKTokenBtn)

        // assert
        await assert.checkText(component.receiveBottomWTKTokenText, 'Bitkub Chain Testnet (WTK)')

        // after
        await action.closeApps(`${process.env.BUNDLE_ID}`)  // close app
        await action.launchApps(`${process.env.BUNDLE_ID}`)     // launch app
        await action.click(component.homeNetworkBtn)    // open select network modal
    })

    it('[Functional] => Check Bottom Wording When Change Network', async () => {
        // action
        await customNetworkModel.addCustomNetwork(`${process.env.TEST_URL}`)
        await action.click(component.homeReceiveBtn)
        await action.click(component.selectTokenETHTokenBtn)

        // assert
        await assert.checkText(component.receiveBottomETHTokenText, 'goerli (ETH)')

        // after
        await action.closeApps(`${process.env.BUNDLE_ID}`)  // close app
        await action.launchApps(`${process.env.BUNDLE_ID}`)     // launch app
        await action.click(component.homeNetworkBtn)    // open select network modal
        await action.click(component.networkBitkubBtn)    // open select network modal
    })
})

describe('Deny Photo Permission Warning Modal Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.homeReceiveBtn)    // go to receive page
        await action.click(component.selectTokenKUBTokenBtn)     // select KUB
        await action.click(component.receiveDownloadQRBtn)    // click download QR
    })

    it('[Display] => Check OK Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.denyPermissionWarningOkBtn)
    })

    it('[Wording] => Check Title Wording', async () => {
        // assert
        await assert.checkText(component.denyPermissionWarningTitleText, 'Access Your Photos')
    })

    it('[Wording] => Check Description Wording', async () => {
        // assert
        await assert.checkText(component.denyPermissionWarningDescriptionText, 'Please allow the app to access your photo album in your privacy settings.')
    })

    it('[Wording] => Check OK Btn Wording', async () => {
        // assert
        await assert.checkText(component.denyPermissionWarningOkBtn, 'OK')
    })

    it('[Tap] => Check Tap OK Btn', async () => {
        // action
        await action.click(component.denyPermissionWarningOkBtn)

        // assert
        await assert.checkElementNotDisplayed(component.denyPermissionWarningTitleText)

        // after
        await action.click(component.receiveDownloadQRBtn)
    })

    it('[Functional] => Check Swipe Down to Close Modal', async () => {
        // action
        await action.swipe('down')

        // assert
        await assert.checkElementNotDisplayed(component.denyPermissionWarningTitleText)
    })
})

describe('Set Amount Page Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.receiveSetAmountBtn)   // go to set amount page
    })

    it('[Display] => Check Back Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountBackBtn)
    })

    it('[Display] => Check TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountTextField)
    })

    it('[Display] => Check Continue Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountContinueBtn)
    })

    it('[Display] => Check Keyboard Still Showing', async () => {
        // assert
        await assert.checkKeyBoardShowing()
    })

    it('[Wording] => Check Back Btn Text', async () => {
        // assert
        await assert.checkText(component.setAmountBackBtn, '')
    })

    it('[Wording] => Check Title Text', async () => {
        // assert
        await assert.checkText(component.setAmountTitleText, 'Set Amount')
    })

    it('[Wording] => Check Placeholder Text', async () => {
        // assert
        await assert.checkTextContain(component.setAmountPlaceholderText, '0')
    })

    it('[Wording] => Check Continue Btn Text', async () => {
        // assert
        await assert.checkText(component.setAmountContinueBtn, 'Continue')
    })

    it('[Tap] => Check Back Btn Tap', async () => {
        // action
        await action.click(component.setAmountBackBtn)

        // assert
        await assert.checkElementDisplayed(component.receiveTitleText)

        // after (back to Set Amount)
        await action.click(component.receiveSetAmountBtn)
    })

    it('[Function] => Check Continue without set amount', async () => {
        // action        
        await action.click(component.setAmountContinueBtn)

        // assert
        await assert.checkText(component.receiveSetAmount0KUBText, '0 KUB')

        // after (back to Set Amount)
        await action.click(component.receiveSetAmountBtn)
        await action.pause(1000)
    })

    it('[Function] => Check Continue with 10 KUB', async () => {
        // action
        await action.click('~1')
        await action.click('~0')

        await action.click(component.setAmountContinueBtn)

        // // assert
        await assert.checkText(component.receiveSetAmount10KUBText, '10 KUB')
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.BUNDLE_ID}`)
    })
})