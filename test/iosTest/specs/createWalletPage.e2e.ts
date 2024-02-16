import { CreateWalletComponent } from "../component/createWalletComponent.js";
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import AllureReporter from "@wdio/allure-reporter";

const action = new Action()
const assert = new Assertion()
const component = new CreateWalletComponent()
describe('Create Wallet Page', () => {

    // Create Wallet Page Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)
            await action.launchApps(`${process.env.BUNDLE_ID}`)
            await action.click(component.splashScreenCreateWalletBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Create Wallet Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletBackBtn)
        })

        it('[Display] => Check Mnemonic Info Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletMnemonicInfoBtn)
        })

        it('[Display] => Check Mnemonic 12 Word Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletMnemonic12WordBtn)
        })

        it('[Display] => Check Mnemonic 24 Word Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletMnemonic24WordBtn)
        })

        it('[Display] => Check Continue Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletContinueBtn)
        })

        it('[Display] => Check Continue Btn Should be Disabled', async () => {
            // assert
            await assert.checkDisabled(component.createWalletContinueBtn)
        })

        it('[Wording] => Check Title Page Wording ', async () => {
            // assert
            await assert.checkText(component.createWalletTitleText, 'Create Wallet')
        })

        it('[Wording] => Check Mnemonic 12 Word Btn Wording', async () => {
            // assert
            await assert.checkText(component.createWalletMnemonic12WordBtn, '12-word Mnemonic wallet A 12-word seed phrase is a collection of randomly generated words during a crypto wallet setup.')
        })

        it('[Wording] => Check Mnemonic 24 Word Btn Wording', async () => {
            // assert
            await assert.checkText(component.createWalletMnemonic24WordBtn, '24-word Mnemonic wallet A 24-word seed phrase is a collection of randomly generated words during a crypto wallet setup.')
        })

        it('[Wording] => Check Continue Btn Wording ', async () => {
            // assert
            await assert.checkText(component.createWalletContinueBtn, 'Continue')
        })

        it('[Tab] => Check Tap Back Btn', async () => {
            await action.click(component.createWalletBackBtn)

            // assert
            await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')

            // after
            await action.click(component.splashScreenCreateWalletBtn)
        })

        it('[Tab] => Check Tap Mnemonic Info Btn', async () => {
            await action.click(component.createWalletMnemonicInfoBtn)

            // assert
            await assert.checkText(component.mnemonicInfoTitleText, 'Mnemonic code')

            // after
            await action.click(component.mnemonicInfoCloseBtn)
        })

        it('[Tab] => Check Tap 12-word Mnemonic Btn', async () => {
            await action.click(component.createWalletMnemonic12WordBtn)

            // assert
            await assert.checkEnabled(component.createWalletContinueBtn)

            // after
            await action.click(component.createWalletBackBtn)
            await action.click(component.splashScreenCreateWalletBtn)
        })

        it('[Tab] => Check Tap 24-word Mnemonic Btn', async () => {
            await action.click(component.createWalletMnemonic24WordBtn)

            // assert
            await assert.checkEnabled(component.createWalletContinueBtn)
        })

        it('[Functional] => Create Wallet with 12-Mnemonic Phrase Success', async () => {
            await action.click(component.createWalletMnemonic12WordBtn)
            await action.click(component.createWalletContinueBtn)

            // assert
            await assert.checkText(component.createWalletLoadingText, 'LOADING WALLET...')
            await action.pause(5000)
            await assert.checkText(component.createWalletLoadingSuccessText, 'CREATE WALLET SUCCESS')
            await assert.checkText(component.createWalletSuccessHeaderText, "You're all done!")

            // after
            await action.closeApps(`${process.env.BUNDLE_ID}`)
            await action.launchApps(`${process.env.BUNDLE_ID}`)
        })

        it('[Functional] => Create Wallet with 24-Mnemonic Phrase Success', async () => {
            await action.click(component.splashScreenCreateWalletBtn)
            await action.click(component.createWalletMnemonic24WordBtn)
            await action.click(component.createWalletContinueBtn)

            // assert
            await assert.checkText(component.createWalletLoadingText, 'LOADING WALLET...')
            await action.pause(5000)
            await assert.checkText(component.createWalletLoadingSuccessText, 'CREATE WALLET SUCCESS')
            await assert.checkText(component.createWalletSuccessHeaderText, "You're all done!")
        })
    })

    // Create Wallet Success Scenario
    describe('', () => {
        beforeEach(async () => {
            AllureReporter.addSubSuite('Create Wallet Success Scenario')   // add sub suite for allure report
        })
        it('[Display] => Check Header Text Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletSuccessHeaderText)
        })

        it('[Display] => Check Content Text Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletSuccessDescriptionText)
        })

        it('[Display] => Check Continue Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletSuccessContinueBtn)
        })

        it('[Display] => Check Back up Wallet Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.createWalletSuccessBackupBtn)
        })

        it('[Wording] => Check Header Text Wording', async () => {
            // assert
            await assert.checkText(component.createWalletSuccessHeaderText, "You're all done!")
        })

        it('[Wording] => Check Content Text Wording', async () => {
            //assert
            await assert.checkText(component.createWalletSuccessDescriptionText, "You have successfully added a new wallet")
        })

        it('[Wording] => Check Continue Btn Wording', async () => {
            // assert
            await assert.checkText(component.createWalletSuccessContinueBtn, 'Continue')
        })

        it('[Wording] => Check Back up Wallet Btn Wording', async () => {
            // assert
            await assert.checkText(component.createWalletSuccessBackupBtn, 'Back Up Wallet')
        })

        it('[Tab] => Check Tap Back up Wallet Btn', async () => {
            await action.click(component.createWalletSuccessBackupBtn)
            await action.click(component.backupWalletModalContinueBtn)

            // assert
            await assert.checkElementDisplayed(component.backupWalletTitleText)

            // after
            await action.click(component.backupWalletBackBtn)
        })

        it('[Tab] => Check Tap Continue Btn', async () => {
            await action.click(component.createWalletSuccessContinueBtn)

            // assert
            await assert.checkElementDisplayed(component.homeTabHomeBtn)
        })

        afterAll(async () => {
            await action.removeApps(`${process.env.BUNDLE_ID}`)     // remove apps
        })
    })

    // Mnemonic Info Page Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)
            await action.launchApps(`${process.env.BUNDLE_ID}`)

            await action.click(component.splashScreenCreateWalletBtn)
            await action.click(component.createWalletMnemonicInfoBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Mnemonic Info Page Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check X Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.mnemonicInfoXBtn)
        })

        it('[Display] => Check Close Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.mnemonicInfoCloseBtn)
        })

        it('[Wording] => Check Mnemonic Title Page Wording', async () => {
            // assert
            await assert.checkText(component.mnemonicInfoTitleText, 'Mnemonic code')
        })

        it('[Wording] => Check Header Page Wording ', async () => {
            // assert
            await assert.checkText(component.mnemonicInfoHeaderText, 'What is the 12-24 word seed phrase in crypto wallet?')
        })

        it('[Wording] => Check Content Page Wording ', async () => {
            // assert
            await assert.checkText(component.mnemonicInfoContentText, 'Your seed phrase is a mnemonic code consisting of 12-24 words that is used to recover your cryptocurrency wallet. It is sometimes called a backup phrase, recovery phrase, or mnemonic sentence. It is the foundation of most modern wallets and the crypto universe in general.')
        })

        it('[Wording] => Check Close Btn Wording', async () => {
            // assert
            await assert.checkText(component.mnemonicInfoCloseBtn, 'Close')
        })

        it('[Tap] => Check Tap X Btn', async () => {
            await action.click(component.mnemonicInfoXBtn)

            // assert
            await assert.checkText(component.createWalletTitleText, 'Create Wallet')

            // after
            await action.click(component.createWalletMnemonicInfoBtn)
        })

        it('[Tap] => Check Tap Close Btn', async () => {
            await action.click(component.mnemonicInfoCloseBtn)

            // assert
            await assert.checkText(component.createWalletTitleText, 'Create Wallet')
        })

        afterAll(async () => {
            await action.removeApps(`${process.env.BUNDLE_ID}`) // remove apps
        })
    })
})