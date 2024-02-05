import { scanComponent } from '../component/scanComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new scanComponent()
const action = new Action()
const assert = new Assertion()

describe('Deny Camara Permission Test Scenario', () => {
   beforeAll(async () => {
      await action.click(component.splashScreenCreateWalletBtn)

      await action.click(component.createWallet12wordBtn)
      await action.click(component.createWalletContinueBtn)
      await action.pause(5000)

      await action.click(component.createWalletSuccessContinueBtn)

      await action.click(component.homeScanBtn)

      await action.click(component.camPermissionDenyBtn)
   })

   it('[Display] => Check OK Btn',async () => {
      // assert
      await assert.checkElementDisplayed(component.denyCamOKBtn)
   })
   
   it('[Wording] => Check Title Text',async () => {
      // assert
      await assert.checkText(component.denyCamTitleText, 'Access Your Camera')
   })

   it('[Wording] => Check Description Text',async () => {
      // assert
      await assert.checkText(component.denyCamDescText, 'Please allow the app to access your camera in your privacy settings.')
   })

   it('[Wording] => Check OK Btn Text',async () => {
      // assert
      await assert.checkText(component.denyCamOKBtn, 'OK')
   })

   it('[Tap] => Check OK Btn Tap',async () => {
      // action
      await action.click(component.denyCamOKBtn)

      // assert
      await assert.checkElementDisplayed(component.homeScanBtn)
   })
})

describe('Deny Photos Permission Test Scenario', () => {
   beforeAll(async () => {
      await action.click(component.homeScanBtn)
      await action.click(component.camPermissionWhileAppBtn)

      await action.click(component.scanUploadBtn)

      await action.click(component.photoPermissionDenyBtn1)
      
      await action.click(component.photoPermissionDenyBtn2)
   })

   it('[Display] => Check OK Btn',async () => {
      // assert
      await assert.checkElementDisplayed(component.denyPhotoOKBtn)
   })

   it('[Wording] => Check Title Text',async () => {
      // assert
      await assert.checkText(component.denyPhotoTitleText, 'Access Your Photos')
   })

   it('[Wording] => Check Description Text',async () => {
      // assert
      await assert.checkText(component.denyPhotoDescText, 'Please allow the app to access your photo album in your privacy settings.')
   })

   it('[Wording] => Check OK Btn Text',async () => {
      // assert
      await assert.checkText(component.denyPhotoOKBtn, 'OK')
   })

   it('[Tap] => Check OK Btn Tap',async () => {
      // action
      await action.click(component.denyPhotoOKBtn)

      // assert
      await assert.checkElementDisplayed(component.scanUploadBtn)
   })
})

describe('Scan QR code Test Scenario', () => {
   it('[Display] => Check Back Btn', async () => {
      // assert
      await assert.checkElementDisplayed(component.scanBackBtn)
   })

   it('[Display] => Check Receive Btn', async () => {
      // assert
      await assert.checkElementDisplayed(component.scanReceiveBtn)
   })

   it('[Display] => Check Upload QR code Btn', async () => {
      // assert
      await assert.checkElementDisplayed(component.scanUploadBtn)
   })

   it('[Wording] => Check Back Btn Text', async () => {
      // assert
      await assert.checkText(component.scanBackBtn, '')
   })

   it('[Wording] => Check Title Text', async () => {
      // assert
      await assert.checkText(component.scanTitleText, 'Scan QR code')
   })

   it('[Wording] => Check Receive Btn Text', async () => {
      // assert
      await assert.checkText(component.scanReceiveText, 'Receive')
   })

   it('[Wording] => Check Upload QR code Btn Text', async () => {
      // assert
      await assert.checkText(component.scanUploadText, 'Upload QR code')
   })

   it('[Wording] => Check Bottom Text', async () => {
      // assert
      await assert.checkText(component.scanBottomText, 'Align QR code within frame to scan')
   })

   it('[Tap] => Check Back Btn Tap', async () => {
      // action
      await action.click(component.scanBackBtn)

      // assert
      await assert.checkElementDisplayed(component.homeScanBtn)

      // after (back to Scan)
      await action.click(component.homeScanBtn)
   })

   it('[Tap] => Check Receive Btn Tap', async () => {
      // action
      await action.click(component.scanReceiveBtn)

      // assert
      await assert.checkElementDisplayed(component.selectTokenTitleText)

      // after (back to Scan)
      await action.click(component.selectTokenBackBtn)
   })

   it('[Tap] => Check Upload QR code Btn Tap', async () => {
      // action
      await action.click(component.scanUploadBtn)

      // action (for handle permission)
      await action.click(component.photoPermissionAllowBtn1)
      await action.click(component.photoPermissionAllowBtn2)
      await action.pause(2000)

      // assert
      await assert.checkElementDisplayed(component.uploadPopupText)

      // after (back to Scan)
      await action.click(component.uploadPopupCloseBtn)
   })

   it('[Function] => Selected upload photo', async () => {
      // action for add photo
      await action.click(component.scanReceiveBtn)
      await action.click(component.selectTokenKUB)

      await action.click(component.receiveDownloadBtn)
      await action.pause(2000)

      await action.click(component.receiveBackBtn)

      await action.click(component.selectTokenBackBtn)

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