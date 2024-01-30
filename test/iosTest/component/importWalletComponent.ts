import { Action } from "../../mainComponent/mainFunction/Action.js"

const action = new Action()
export class ImportWalletComponent {

    // Splash Screen Component
    splashScreenImportWalletBtn = '~guideline-importwallet-btn'

    // Import Wallet Page Component
    importWalletBackBtn = '~'
    importWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Import Wallet"`]'
    importWalletHeaderText = '~importwallet-header-title'
    importWalletDescriptionText = '~importwallet-header-description'
    importWalletPrivatekeyField = '~importwallet-input-area'
    importWalletPasteBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Mnemonic phrase 12 word/ Mnemonic phrase 24 word."`][3]/XCUIElementTypeOther[2]'
    importWalletImportBtn = '~importwallet-submit-btn'
    importWalletMnemonicErrorMessageText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Invalid mnemonic phrase."`]'
    
    // Loading Screen Component
    importWalletLoadingText = '~loading-modal-loadingwallet'
    
    // Import Success Component
    importWalletSuccessText = '~loading-modal-createwalletsuccess'    

    // Home Page Component
    homeTabHomeBtn = '~Home, tab, 1 of 4'
}

export class ImportWalletModel{
    private component = new ImportWalletComponent()

    async importWallet(mnemonicPhrase: string){
        await action.click(this.component.splashScreenImportWalletBtn)
        await action.setClipboard(mnemonicPhrase)
        await action.click(this.component.importWalletPasteBtn)
        await action.acceptAlert()
        await action.click(this.component.importWalletImportBtn)
        await action.pause(3000)
    }
}