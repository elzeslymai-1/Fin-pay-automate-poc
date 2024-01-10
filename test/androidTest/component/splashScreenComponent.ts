export class splashScreenComponent {
    
    //  Action Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    splashScreenHeaderText = `android=new UiSelector().text("Welcome to the \nFIN PAY").className("android.widget.TextView")`
    splashScreenImportWalletBtn = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`
    splashScreenDescriptionText = `android=new UiSelector().text("To get started, create a new wallet or import \none from a seed phrase.").className("android.widget.TextView")`
    splashScreenHeaderText2 = `android=new UiSelector().text("All your crypto in one place").className("android.widget.TextView")`
    splashScreenDescriptionText2 = `android=new UiSelector().text("Now you can trade crypto directly from the\nCrypto wallet with your existing.").className("android.widget.TextView")`
    splashScreenHeaderText3 = `android=new UiSelector().text("Discover the best of Web3").className("android.widget.TextView")`
    splashScreenDescriptionText3 = `android=new UiSelector().text("Find and connect to leading apps and\ncollections with the in-app browser.").className("android.widget.TextView")`


    createWalletTitleText = `android=new UiSelector().text("Create Wallet").className("android.view.View")`
    createWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    importWalletTitleText = `android=new UiSelector().text("Import Wallet").className("android.view.View")`
    importWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
}


