import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ScanComponent } from '../component/scanComponent.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import { ScanModel } from '../component/scanComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const action = new Action()
const assert = new Assertion()
const component = new ScanComponent()
const importWalletModel = new ImportWalletModel()
const scanModel = new ScanModel()

describe('Scan Page', () => {

    // Request Camera Permission Modal Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeScanBtn)     // go to scan page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Request Camera Permission Modal Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Allow Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.cameraPermissionAllowBtn)
        })

        it('[Display] => Check Deny Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.cameraPermissionDenyBtn)
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.cameraPermissionTitleText, '“FinPay” Would Like to Access the Camera')
        })

        it('[Wording] => Check Description Wording', async () => {
            // assert
            await assert.checkText(component.cameraPermissionDescriptionText, 'Allow FinPay to access camera.')
        })

        it('[Wording] => Check Allow Btn Wording', async () => {
            // assert
            await assert.checkText(component.cameraPermissionAllowBtn, 'Allow')
        })

        it('[Wording] => Check Deny Btn Wording', async () => {
            // assert
            await assert.checkText(component.cameraPermissionDenyBtn, 'Don’t Allow')
        })

        it('[Tap] => Check Tap Allow Btn', async () => {
            // action
            await action.click(component.cameraPermissionAllowBtn)  // allow permission

            // assert
            await assert.checkElementDisplayed(component.scanTitleText)

            // after
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })

        it('[Tap] => Check Tap Deny Btn', async () => {
            // action
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeScanBtn)     // go to scan page
            await action.click(component.cameraPermissionDenyBtn)

            // assert
            await assert.checkElementDisplayed(component.denyCameraPermissionWarningTitleText)
        })
    })

    // Deny Camera Permission Test Scenario
    describe('', () => {
        beforeEach(async () => {
            AllureReporter.addSubSuite('Deny Camera Permission Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check OK Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.denyCameraPermissionWarningOkBtn)
        })

        it('[Wording] => Check Title Text', async () => {
            // assert
            await assert.checkText(component.denyCameraPermissionWarningTitleText, 'Access Your Camera')
        })

        it('[Wording] => Check Description Text', async () => {
            // assert
            await assert.checkText(component.denyCameraPermissionWarningDescriptionText, 'Please allow the app to access your camera in your privacy settings.')
        })

        it('[Wording] => Check OK Btn Text', async () => {
            // assert
            await assert.checkText(component.denyCameraPermissionWarningOkBtn, 'OK')
        })

        it('[Tap] => Check OK Btn Tap', async () => {
            // action
            await action.pause(500)
            await action.click(component.denyCameraPermissionWarningOkBtn)

            // assert
            await assert.checkElementDisplayed(component.homeScanBtn)
        })

        it('[Functional] => Swipe Down to Close Modal', async () => {
            // action
            await action.click(component.homeScanBtn)
            await action.swipe('down')

            // assert
            await assert.checkElementDisplayed(component.homeScanBtn)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })

    // Scan QR code Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeScanBtn)     // go to scan page
            await action.click(component.cameraPermissionAllowBtn)  // allow permission
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Scan QR code Test Scenario')   // add sub suite for allure report
        })

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
            await assert.checkTextContain(component.scanReceiveText, 'Receive')
        })

        it('[Wording] => Check Upload QR code Btn Text', async () => {
            // assert
            await assert.checkTextContain(component.scanUploadText, 'Upload QR code')
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

            // assert
            await assert.checkElementDisplayed(component.photoPermissionTitleText)

            // after (back to Scan)
            await action.click(component.photoPermissionAllowBtn)
            await action.click(component.uploadModalCancelBtn)
        })

        it('[Function] => Upload QR code Success', async () => {
            // action 
            await scanModel.selectPhoto()

            // assert
            await assert.checkElementDisplayed(component.sendTitleText)

            // after 
            await action.click(component.sendBackBtn)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })

    // Request Photo Permission Modal Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeScanBtn)     // go to scan page
            await action.click(component.cameraPermissionAllowBtn)  // allow camera permission
            await action.click(component.scanUploadBtn)    // upload QR code
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Request Photo Permission Modal Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Allow Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.photoPermissionAllowBtn)
        })

        it('[Display] => Check Deny Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.photoPermissionDenyBtn)
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.photoPermissionTitleText, '“FinPay” Would Like to Access Your Photo Library')
        })

        it('[Wording] => Check Description Wording', async () => {
            // assert
            await assert.checkText(component.photoPermissionDescriptionText, 'The app accesses your photos to let you share them with your friends.')
        })

        it('[Wording] => Check Allow Btn Wording', async () => {
            // assert
            await assert.checkText(component.photoPermissionAllowBtn, 'Allow Full Access')
        })

        it('[Wording] => Check Deny Btn Wording', async () => {
            // assert
            await assert.checkText(component.photoPermissionDenyBtn, 'Don’t Allow')
        })

        it('[Tap] => Check Tap Allow Btn', async () => {
            // action
            await action.click(component.photoPermissionAllowBtn)  // allow permission

            // assert
            await assert.checkElementDisplayed(component.uploadModalCancelBtn)

            // after
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })

        it('[Tap] => Check Tap Deny Btn', async () => {
            // action
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeScanBtn)     // go to scan page
            await action.click(component.cameraPermissionAllowBtn)  // allow camera permission
            await action.click(component.scanUploadBtn)    // upload QR code
            await action.click(component.photoPermissionDenyBtn)  // deny photo permission

            // assert
            await assert.checkElementDisplayed(component.denyPhotoPermissionWarningTitleText)
        })
    })

    // Deny Photo Permission Test Scenario
    describe('', () => {
        beforeEach(async () => {
            AllureReporter.addSubSuite('Deny Photo Permission Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check OK Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.denyPhotoPermissionWarningOkBtn)
        })

        it('[Wording] => Check Title Text', async () => {
            // assert
            await assert.checkText(component.denyPhotoPermissionWarningTitleText, 'Access Your Photos')
        })

        it('[Wording] => Check Description Text', async () => {
            // assert
            await assert.checkText(component.denyPhotoPermissionWarningDescriptionText, 'Please allow the app to access your photo album in your privacy settings.')
        })

        it('[Wording] => Check OK Btn Text', async () => {
            // assert
            await assert.checkText(component.denyPhotoPermissionWarningOkBtn, 'OK')
        })

        it('[Tap] => Check OK Btn Tap', async () => {
            // action
            await action.pause(500)
            await action.click(component.denyPhotoPermissionWarningOkBtn)

            // assert
            await assert.checkElementDisplayed(component.scanTitleText)
        })

        it('[Functional] => Swipe Down to Close Modal', async () => {
            // action
            await action.click(component.scanUploadBtn)
            await action.swipe('down')

            // assert
            await assert.checkElementDisplayed(component.scanTitleText)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})