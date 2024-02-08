import { Action } from '../../mainComponent/mainFunction/Action.js'

const action = new Action()

export class CreateWalletComponent {
    // Splash Screen Component
    splashScreenCreateWalletBtn = '~guideline-createwallet-btn'

    //  Create Wallet Component
    createWalletBackBtn = '~createwallet-header-backbtn'
    createWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Create Wallet"`]'
    createWalletMnemonicInfoBtn = '~createwallet-header-mnemonicinfobtn'
    createWalletMnemonic12WordBtn = '~createwallet-mnemonic-12word'
    createWalletMnemonic24WordBtn = '~createwallet-mnemonic-24word'
    createWalletContinueBtn = '~createwallet-continue-btn'

    // Mnemonic Info Component
    mnemonicInfoTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Mnemonic code"`]'
    mnemonicInfoXBtn = '~'
    mnemonicInfoHeaderText = '~What is the 12-24 word seed phrase in crypto wallet?'
    mnemonicInfoContentText = '~Your seed phrase is a mnemonic code consisting of 12-24 words that is used to recover your cryptocurrency wallet. It is sometimes called a backup phrase, recovery phrase, or mnemonic sentence. It is the foundation of most modern wallets and the crypto universe in general.'
    mnemonicInfoCloseBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Close"`][2]'

    // Create Wallet Loading Screen Component
    createWalletLoadingText = '~loading-modal-loadingwallet'
    createWalletLoadingSuccessText = '~loading-modal-createwalletsuccess'

    // Create Wallet Success Page Component
    createWalletSuccessHeaderText = "~createwallet-success-title"
    createWalletSuccessDescriptionText = '~createwallet-success-description'
    createWalletSuccessContinueBtn = '~createwallet-success-continue'
    createWalletSuccessBackupBtn = '~createwallet-success-backup'

    // Back Up Page Modal Component
    // backupWalletModalContinueBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "backup-mnemonic-continue"`][2]'
    backupWalletModalContinueBtn = '~backup-mnemonic-continue'

    // Back Up Page Component
    backupWalletBackBtn = '~'
    backupWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Back up Mnemonic phrase"`]'
    
    // Home Page Component
    homeTabHomeBtn = '~Home, tab, 1 of 4'
}

export class CreateWalletModel{
    private component = new CreateWalletComponent()

    async createWallet12Word(){
        await action.click(this.component.splashScreenCreateWalletBtn)
        await action.click(this.component.createWalletMnemonic12WordBtn)
        await action.click(this.component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(this.component.createWalletSuccessContinueBtn)
    }

    async createWallet24Word(){
        await action.click(this.component.splashScreenCreateWalletBtn)
        await action.click(this.component.createWalletMnemonic24WordBtn)
        await action.click(this.component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(this.component.createWalletSuccessContinueBtn)
    }
}

