import { scanComponent } from '../component/scanComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new scanComponent()
const action = new Action()
const assert = new Assertion()

describe('Scan QR code Test Scenario',() => {
    beforeAll(async () => {
        await action.click(component.splashScreenCreateWalletBtn)
        
        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(5000)

        await action.click(component.createWalletSuccessContinueBtn)

        await action.click(component.homeScanBtn)

        // action for handle permission
        await action.click(component.scanPermissionBtn)
    })

    it('[Display] => Check Back Btn',async () => {
       // assert
       await assert.checkElementDisplayed(component.scanBackBtn) 
    })

    it('[Display] => Check Receive Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.scanReceiveBtn) 
     })

     it('[Display] => Check Upload QR code Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.scanUploadBtn) 
     })

     it('[Wording] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.scanBackBtn, '') 
     })

     it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.scanTitleText, 'Scan QR code') 
     })

     it('[Wording] => Check Receive Btn Text',async () => {
        // assert
        await assert.checkText(component.scanReceiveText, 'Receive') 
     })

     it('[Wording] => Check Upload QR code Btn Text',async () => {
        // assert
        await assert.checkText(component.scanUploadText, 'Upload QR code') 
     })

     it('[Wording] => Check Bottom Text',async () => {
        // assert
        await assert.checkText(component.scanBottomText, 'Align QR code within frame to scan') 
     })

     it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.scanBackBtn)

        // assert
        await assert.checkElementDisplayed(component.homeScanBtn)

        // after (back to Scan)
        await action.click(component.homeScanBtn)
     })

     it('[Tap] => Check Receive Btn Tap',async () => {
        // action
        await action.click(component.scanReceiveBtn)

        // assert
        await assert.checkElementDisplayed(component.selectTokenTitleText)

        // after (back to Scan)
        await action.click(component.selectTokenBackBtn)
     })

     it('[Tap] => Check Upload QR code Btn Tap',async () => {
        // action
        await action.click(component.scanUploadBtn)
    
        // action (for handle permission)
        await action.click(component.uploadPermissionBtn1)
        await action.click(component.uploadPermissionBtn2)
        await action.pause(2000)

        // assert
        await assert.checkElementDisplayed(component.uploadPopupText)

        // after (back to Scan)
        await action.click(component.uploadPopupCloseBtn)
     })

     it('[Function] => Selected upload photo',async () => {
        // action
        await action.click(component.scanUploadBtn)
        await action.pause(2000)

        await action.click(component.uploadPopupPhotoSelected)

        // assert
        await assert.checkElementDisplayed(component.sendTitleText)

        // after (back to Scan)
        await action.click(component.sendBackBtn)

        await action.click(component.homeScanBtn)
     })

     afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
     })
})