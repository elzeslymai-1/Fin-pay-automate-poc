import { splashScreenComponent } from '../component/splashScreenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import allureReporter from '@wdio/allure-reporter'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page', () => {
    // Splash Screen Page Scenario
    describe('',() => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)
            await action.launchApps(`${process.env.BUNDLE_ID}`)
        })
        beforeEach(async () => {
            allureReporter.addSubSuite('Splash Screen Page Scenario')   // add sub suite for allure report
        })

        it('[Displayed] => Create New Wallet Btn Should be Displayed', async () => {
            //assert
            await assert.checkElementDisplayed(component.splashScreenCreateWalletBtn)
        })

        it('[Displayed] => Import Wallet Btn Should be Displayed', async () => {
            //assert
            await assert.checkElementDisplayed(component.splashScreenImportWalletBtn)
        })

        it('[Wording] => Check Welcome Page Wording [1]', async () => {
            //assert
            await assert.checkText(component.splashScreenWelcomeText1, 'Welcome to the \nFIN PAY')
        })

        it('[Wording] => Check Description Page Wording [1]', async () => {
            //assert
            await assert.checkText(component.splashScreenDescriptionText1, 'To get started, create a new wallet or import \none from a seed phrase.')
        })

        it('[Wording] => Check Welcome Page Wording [2]', async () => {
            await action.swipe('left')

            //assert
            await assert.checkText(component.splashScreenWelcomeText2, 'All your crypto in one place')
        })

        it('[Wording] => Check Description Page Wording [2]', async () => {
            //assert
            await assert.checkText(component.splashScreenDescriptionText2, 'Now you can trade crypto directly from the\nCrypto wallet with your existing.')
        })

        it('[Wording] => Check Welcome Page Wording [3]', async () => {
            await action.swipe('left')
            //assert
            await assert.checkText(component.splashScreenWelcomeText3, 'Discover the best of Web3')
        })

        it('[Wording] => Check Description Page Wording [3]', async () => {
            //assert
            await assert.checkText(component.splashScreenDescriptionText3, 'Find and connect to leading apps and\ncollections with the in-app browser.')
        })

        it('[Wording] => Check Create New Wallet Btn Wording', async () => {
            //assert
            await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')
        })

        it('[Wording] => Check Import Wallet Btn Wording', async () => {
            //assert
            await assert.checkText(component.splashScreenImportWalletBtn, 'Import a wallet')
        })

        it('[Tap] => Create new Wallet Btn', async () => {
            await action.click(component.splashScreenCreateWalletBtn)

            //assert
            await assert.checkText(component.createNewWalletHeaderText, 'Create Wallet')

            //after
            await action.click(component.createWalletBackBtn)
        })

        it('[Tap] => Import Wallet Btn', async () => {
            await action.click(component.splashScreenImportWalletBtn)

            //assert
            await assert.checkText(component.importWalletHeaderText, 'Import Wallet')

            //after
            await action.click(component.importWalletBackBtn)
        })

        afterAll(async () => {
            await action.removeApps(`${process.env.BUNDLE_ID}`)     // remove apps
        })
    })
})