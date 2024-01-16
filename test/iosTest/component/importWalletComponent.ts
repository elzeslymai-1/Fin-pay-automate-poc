export class importWalletComponent {

    // Splash Screen Component
    splashScreenImportWalletBtn = '~Import a wallet'

    // Import Wallet Page Component
    importWalletBackBtn = '~'
    importWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Import Wallet"`]'
    importWalletHeaderText = '~Enter Mnemonic'
    importWalletDescriptionText = '~Input your mnemonic phrases with spacing. Supports 12-word, 24-word mnemonic phrases for all wallet types.'
    importWalletPrivatekeyField = 'XCUIElementTypeTextView'
    importWalletPasteBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Mnemonic phrase 12 word/ Mnemonic phrase 24 word."`][3]/XCUIElementTypeOther[2]'
    importWalletImportBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Import Wallet"`]'
    importWalletMnemonicErrorMessageText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Invalid mnemonic phrase."`]'
    
    // Loading Screen Compoenet
    importWalletLoadingText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "LOADING WALLET..."`]'
    
    // Import Success Component
    importWalletSuccessText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "IMPORT WALLET SUCCESS"`]'    

    // Home Page Component
    homeTabHomeBtn = '~Home, tab, 1 of 4'
}