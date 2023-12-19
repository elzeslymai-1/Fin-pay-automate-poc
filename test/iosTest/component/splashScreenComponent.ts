export class splashScreenComponent {

    //  Action Component

    splashScreenWelcomeText = '~Welcome to the \nFIN PAY'
    splashScreenDescriptionText = '~To get started, create a new wallet or import \none from a seed phrase.'
    splashScreenCreateWalletBtn = '~Create a new wallet'
    splashScreenImportWalletBtn = '~Import a wallet'

    createWalletBackBtn = '~'

    //  Assert Component

    assertTabCreateNewWalletBtn = 'XCUIElementTypeStaticText'
    assertTabImportWalletBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Import Wallet"`]'
}


