import { createWalletComponent } from '../component/createWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new createWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Create Wallet Page Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
    })

    it('[Display] => Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.createWalletBackBtn)
    })

    it('[Display] => Check Mnemonic Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.createWalletInfoIconBtn)
    })

    it('[Display] => Check Mnemonic 12-word Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.createWallet12wordBtn)
    })

    it('[Display] => Check Mnemonic 24-word Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.createWallet24wordBtn)
    })

    it('[Display] => Check Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.createWalletContinueBtn)
        await assert.checkDisabled(component.createWalletContinueBtn)
    })

    it('[Wording] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.createWalletBackBtnText, '')
    })

    it('[Wording] => Check Create Wallet Title Wording', async () => {
        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    it('[Wording] => Check Infomation Btn Text',async () => {
        // assert
        await assert.checkText(component.createWalletInfoIconBtnText, '')
    })

    it('[Wording] => Check Mnemonic 12-word Btn', async () => {
        // assert
        await assert.checkText(component.createWallet12wordBtn, '12-word Mnemonic wallet')
    })

    it('[Wording] => Check Mnemonic 24-word Btn', async () => {
        // assert
        await assert.checkText(component.createWallet24wordBtn, '24-word Mnemonic wallet')
    })

    it('[Wording] => Check Continue Btn', async () => {
        // assert
        await assert.checkText(component.createWalletContinueBtnText, 'Continue')
    })

    it('[Tap] => Check Back Btn tap', async () => {
        // action
        await action.click(component.createWalletBackBtn)

        // assert
        await assert.checkElementDisplayed(component.splashScreenHeaderText)

        // after
        await action.click(component.splashScreenCreateWalletBtn)
    })

    it('[Tap] => Check Information Btn tap', async () => {
        // action
        await action.click(component.createWalletInfoIconBtn)

        // assert
        await assert.checkText(component.infoTitleText, 'Mnemonic code')

        // after
        await action.click(component.infoCloseBtn)
    })

    it('[Tap] => Check 12-word Btn tap', async () => {
        // action
        await action.click(component.createWallet12wordBtn)

        // assert
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    it('[Tap] => Check 24-word Btn tap', async () => {
        // action
        await action.click(component.createWallet24wordBtn)

        // assert
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    it('[Functional] => Check Continue with 12-word Btn', async () => {
        // action
        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)

        // assert
        await assert.checkText(component.loadText, 'LOADING WALLET...')
        await action.pause(3000)
        await assert.checkText(component.successText, "You're all done!")

        // after
        await action.closeApps(`${process.env.PACKAGE_ID}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    it('[Functional] => Check Continue with 24-word Btn', async () => {
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWallet24wordBtn)
        await action.click(component.createWalletContinueBtn)

        // assert
        await assert.checkText(component.loadText, 'LOADING WALLET...')
        await action.pause(3000)
        await assert.checkText(component.successText, "You're all done!")
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})

describe('Mnemonic Info Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWalletInfoIconBtn)
    })

    it('[Display] => Check Information Close Icon', async () => {
        // assert
        await assert.checkElementDisplayed(component.infoCloseIconBtn)
    })
    
    it('[Display] => Check Information Close Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.infoCloseBtn)
    })

    it('[Wording] => Check Mnemonic Info Title Page Wording', async () => {
        // assert
        await assert.checkText(component.infoTitleText, 'Mnemonic code')
    })

    it('[Wording] => Check Mnemonic Info Header Page Wording', async () => {
        // assert
        await assert.checkText(component.infoHeaderText, 'What is the 12-24 word seed phrase in crypto wallet?')
    })

    it('[Wording] => Check Mnemonic Info Description Page Wording', async () => {
        // assert
        await assert.checkText(component.infoDescriptionText, 'Your seed phrase is a mnemonic code consisting of 12-24 words that is used to recover your cryptocurrency wallet. It is sometimes called a backup phrase, recovery phrase, or mnemonic sentence. It is the foundation of most modern wallets and the crypto universe in general.')
    })

    it('[Tap] => Check Information Close Btn', async () => {
        // action
        await action.click(component.infoCloseBtn)

        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')

        // after
        await action.click(component.createWalletInfoIconBtn)
    })

    it('[Tap] => Check Information Close Icon', async () => {
        // action
        await action.click(component.infoCloseIconBtn)

        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})

describe('Create Wallet Success Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)
    })

    it('[Display] => Check Create Wallet Success Continue Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.successContinueBtn)
    })

    it('[Display] => Check Create Wallet Success Back Up Wallet Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.successBackupBtn)
    })

    it('[Wording] => Check Create Success Header Text',async () => {
        // assert
        await assert.checkText(component.successText, "You're all done!")
    })

    it('[Wording] => Check Create Wallet Description Text',async () => {
        // assert
        await assert.checkText(component.successDescriptionText, "You have successfully added a new wallet")
    })

    it('[Wording] => Check Create Wallet Success Continue Btn',async () => {
        // assert
        await assert.checkText(component.successContinueBtnText, 'Continue')
    })

    it('[Wording] => Check Create Wallet Success Back Up Wallet Btn',async () => {
        // assert
        await assert.checkText(component.successBackupBtnText, 'Back Up Wallet')
    })

    it('[Tap] => Check Create Wallet Success Back Up Wallet Tap',async () => {
        // action
        await action.click(component.successBackupBtn)

        // assert
        await assert.checkElementDisplayed(component.backupPagePopupBtn)

        await action.click(component.backupPagePopupBtn)

        // assert
        await assert.checkText(component.backupPageTitleText, 'Back up Mnemonic phrase')

        // after (back to Create Wallet Success)
        await action.click(component.backupPageBackBtn)
    })

    it('[Tap] => Check Create Wallet Success Continue Tap',async () => {
        // action
        await action.click(component.successContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.homeIconBar)
    })

    afterAll(async () => {
        // remove app
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})