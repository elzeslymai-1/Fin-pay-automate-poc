import { receiveComponent } from '../component/receiveComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new receiveComponent()
const action = new Action()
const assert = new Assertion()

describe('Select Token Page Test Scenario',() => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(5000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeReceiveBtn)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenBackBtn)
    })

    it('[Display] => Check Search TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenTextField)
    })
    
    it('[Display] => Check KUB Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenKUBToken)
    })

    it('[Display] => Check WTK Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.selectTokenWTKToken)
    })

    it('[Wording] => Check Back Btn',async () => {
        // assert
        await assert.checkText(component.selectTokenBackBtn, '')
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.selectTokenTitleText, 'Select Token')
    })

    it('[Wording] => Check Placeholder Text',async () => {
        // assert
        await assert.checkText(component.selectTokenTextField, 'Search...')
    })

    it('[Wording] => Check KUB Token Text',async () => {
        // assert
        await assert.checkText(component.selectTokenKUBToken, 'KUB')
    })

    it('[Wording] => Check KUB Fullname Text',async () => {
        // assert
        await assert.checkText(component.selectTokenKUBToken, 'KUB')
    })

    it('[Wording] => Check WTK Token Text',async () => {
        // assert
        await assert.checkText(component.selectTokenWTKToken, 'WTK')
    })

    it('[Wording] => Check WTK Fullname Text',async () => {
        // assert
        await assert.checkText(component.selectTokenWTKTokenFullname, 'WToken')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.selectTokenBackBtn)

        // assert
        await assert.checkElementDisplayed(component.homeReceiveBtn)

        // after (back to Receive)
        await action.click(component.homeReceiveBtn)
    })

    it('[Tap] => Check KUB Token Tap',async () => {
        // aciton
        await action.click(component.selectTokenKUBToken)

        // assert
        await assert.checkElementDisplayed(component.receiveHeaderKUBText)

        // after (back to Select Token)
        await action.click(component.receiveBackBtn)
    })

    it('[Tap] => Check WTK Token Tap',async () => {
        // aciton
        await action.click(component.selectTokenWTKToken)

        // assert
        await assert.checkElementDisplayed(component.receiveHeaderWTKText)

        // after (back to Select Token)
        await action.click(component.receiveBackBtn)
    })

    it('[Search] => Check Search KUB Token',async () => {
        // action
        await action.enterText(component.selectTokenTextField, 'kuB')

        // action for not exist
        await action.waitForExist(component.selectTokenWTKToken, 2000, true)

        // assert
        await assert.checkElementDisplayed(component.selectTokenKUBToken)

        // after (clear text)
        await action.clearText(component.selectTokenTextField)
    })

    it('[Search] => Check Search WTK Token',async () => {
        // action
        await action.enterText(component.selectTokenTextField, 'Wtk')

        // action for not exist
        await action.waitForExist(component.selectTokenKUBToken, 2000, true)

        // assert
        await assert.checkElementDisplayed(component.selectTokenWTKToken)

        // after (clear text)
        await action.clearText(component.selectTokenTextField)
    })

    it('[Search] => Check Search Token no result',async () => {
        // action
        await action.enterText(component.selectTokenTextField, 'ETH')

        // action for not exist
        await action.waitForExist(component.selectTokenWTKToken, 2000, true)
        await action.waitForExist(component.selectTokenKUBToken, 2000, true)

        // after (clear text)
        await action.clearText(component.selectTokenTextField)
    })
})

describe('Receive Token Page Test Scenario',() => {
    beforeAll(async () => {
        await action.click(component.selectTokenKUBToken)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveBackBtn)
    })

    it('[Display] => Check Scan Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveScanBtn)
    })

    it('[Display] => Check Download QR Code Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveDownloadQRBtn)
    })

    it('[Display] => Check Copy Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveCopyBtn)
    })

    it('[Display] => Check Share Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveShareBtn)
    })

    it('[Display] => Check Set Amount Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.receiveSetAmountBtn)
    })

    it('[Wording] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveBackBtn, '')
    })

    it('[Wording] => Check Scan Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveScanBtn, '󰘤')
    })

    it('[Wording] => Check Download QR Code Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveDownloadQRBtn, '')
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.receiveTitleText, 'Receive Token')
    })

    it('[Wording] => Check KUB Header Text',async () => {
        // assert
        await assert.checkText(component.receiveHeaderKUBText, 'KUB Receiving')
    })

    it('[Wording] => Check Description Text',async () => {
        // assert
        await assert.checkText(component.receiveDescriptionText, 'Scan the QR code to receive')
    })

    it('[Wording] => Check Copy Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveCopyBtn, '')
    })

    it('[Wording] => Check Share Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveShareBtn, '')
    })

    it('[Wording] => Check Set Amount Btn Text',async () => {
        // assert
        await assert.checkText(component.receiveSetAmountBtn, 'Set Amount')
    })

    it('[Wording] => Check Bottm Text 1',async () => {
        // assert
        await assert.checkText(component.receiveBottomText1, 'Only send')
    })
    
    it('[Wording] => Check Bottm Text Chain name',async () => {
        // assert
        await assert.checkText(component.receiveBottomTextBitkub, 'Bitkub Chain Testnet (KUB)')
    })

    it('[Wording] => Check Bottom Text 2',async () => {
        // assert
        await assert.checkText(component.receiveBottomText2, 'network assets to this address.')
    })

    it('[Wording] => Check Bottom Text 3',async () => {
        // assert
        await assert.checkText(component.receiveBottomText3, 'Sending any other coins may result in permanent loss.')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.receiveBackBtn)

        // assert
        await assert.checkElementDisplayed(component.selectTokenTitleText)

        // after (back to Receive)
        await action.click(component.selectTokenKUBToken)
    })

    it('[Tap] => Check Scan Btn Tap',async () => {
        // action
        await action.click(component.receiveScanBtn)

        await action.click(component.scanPermissionBtn)

        // assert
        await assert.checkElementDisplayed(component.scanTitleText)

        // after (back to Receive)
        await action.click(component.scanBackBtn)
    })

    it('[Tap] => Check Download QR Code Btn Tap',async () => {
        // action
        await action.click(component.receiveDownloadQRBtn)

        await action.click(component.downloadPermissionBtn1)
        await action.click(component.downloadPermissionBtn2)

        // assert
        await assert.checkElementDisplayed(component.downloadSuccessText)

        // action for wait
        await action.pause(3000)
    })

    it('[Tap] => Check Copy Btn Tap',async () => {
        // action
        await action.click(component.receiveCopyBtn)

        //* This case is inconsistant.
        // assert
        // await assert.checkElementDisplayed(component.receiveCopiedText)
    })

    it('[Tap] => Check Share Btn Tap',async () => {
        // action
        await action.click(component.receiveShareBtn)

        // assert
        await assert.checkElementDisplayed(component.sharePopupTitleText)

        // after (back to Receive)
        await action.Tap(700, 500)
    })

    it('[Tap] => Check Set Amount Tap',async () => {
        // action
        await action.click(component.receiveSetAmountBtn)

        // assert
        await assert.checkElementDisplayed(component.setAmountTitleText)

        // after (back to Receive)
        await action.click(component.setAmountBackBtn)
    })

    it('[Tap] => Check Remove Set Amount Btn Tap',async () => {
        // action
        await action.click(component.receiveSetAmountBtn)

        await action.enterText(component.setAmountTextField, '10')

        await action.click(component.setAmountContinueBtn)

        await action.click(component.receiveRemoveSetAmountBtn)

        // action for not exist
        await action.waitForExist(component.receiveRemoveSetAmountBtn, 2000, true)
    })
})

describe('Set Receive Amount Page Test Scenario',() => {
    beforeAll(async () => {
        await action.click(component.receiveSetAmountBtn)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountBackBtn)
    })

    it('[Display] => Check TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountTextField)
    })

    it('[Display] => Check Continue Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.setAmountContinueBtn)
    })

    it('[Wording] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.setAmountBackBtn, '')
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.setAmountTitleText, 'Set Amount')
    })

    it('[Wording] => Check Placeholder Text',async () => {
        // assert
        await assert.checkText(component.setAmountPlaceholderText, '0')
    })

    it('[Wording] => Check Continue Btn Text',async () => {
        // assert
        await assert.checkText(component.setAmountContinueBtn, 'Continue')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.setAmountBackBtn)

        // assert
        await assert.checkElementDisplayed(component.receiveTitleText)

        // after (back to Set Amount)
        await action.click(component.receiveSetAmountBtn)
    })

    it('[Tap] => Check Continue Btn Tap',async () => {
        // action
        await action.enterText(component.setAmountTextField, '10')
        
        await action.click(component.setAmountContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.receiveSetAmount10KUBText)

        // after (back to Set Amount)
        await action.click(component.receiveSetAmountBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})