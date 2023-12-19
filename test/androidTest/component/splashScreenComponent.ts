export class splashScreenComponent {
    
    //  Action Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    splashScreenWelcomeText = `android=new UiSelector().text("Welcome to the \nFIN PAY").className("android.widget.TextView")`
    splashScreenImportWalletBtn = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`
    splashScreenDescriptionText = `android=new UiSelector().text("To get started, create a new wallet or import \none from a seed phrase.").className("android.widget.TextView")`


    createWalletTitleText = `android=new UiSelector().text("Create wallet").className("android.view.View")`
    createWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    importWalletTitleText = `android=new UiSelector().text("Import Wallet").className("android.view.View")`
    importWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
}


