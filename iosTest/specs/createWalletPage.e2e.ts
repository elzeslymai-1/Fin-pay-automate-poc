import { expect } from '@wdio/globals'
import { Action } from "../mainComponent/mainFunction/Action.js";
import { Assertion } from "../mainComponent/mainFunction/Assert.js";
import { createWalletComponent } from "../mainComponent/component/createWalletComponent.js";

const action = new Action()
const assert = new Assertion()
const component = new createWalletComponent()

describe('Create Wallet Page Scenario',()=>{
    beforeAll(async () => {        
       await action.launchApps(`${process.env.BUNDLE_ID}`)

       await action.click(component.splashScreenCreateWalletBtn)
    })
    
    it('[Wording] => Check Header Page Wording ',async ()=>{
        await action.waitForDisplayed(component.createWalletHeaderText)
        await assert.checkText(component.createWalletHeaderText,'Create wallet')
    })

    it('[Displayed] => 12 Word Mnemonic Btn Should be Displayed',async ()=>{
        await assert.checkElemenDisplayed(component.createWalletMnemonic12WordBtn)
    })

    it('[Displayed] => 24 Word Mnemonic Btn Should be Displayed',async ()=>{
        await assert.checkElemenDisplayed(component.createWalletMnemonic24WordBtn)
    })

    it('[Displayed] => Continue Btn Should be Disable',async ()=>{
        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkDisabled(component.createWalletContinueBtn)
    })
})