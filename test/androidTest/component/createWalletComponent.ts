export class createWalletComponent {

    // Create Wallet Page Component
    createWalletTitleText = `android=new UiSelector().text("Create wallet").className("android.view.View")`

    createWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    createWalletInfoIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWallet24wordBtn = `android=new UiSelector().text("24-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Information Page Component
    infoTitleText = `android=new UiSelector().text("Mnemonic code").className("android.view.View")`
    
    infoCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    infoCloseBtn = `android=new UiSelector().text("Close").className("android.widget.TextView")`

    // Loading Screen Component
    loadIcon = `android=new UiSelector().className("android.widget.ProgressBar")`
    loadText = `android=new UiSelector().text("LOADING WALLET...").className("android.widget.TextView")`

    // Create Wallet Success Page Component
    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`

    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`

    // Home Page Component
    homeIconBar = `android=new UiSelector().text("Home").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`

}