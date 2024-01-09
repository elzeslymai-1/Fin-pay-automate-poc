export class createWalletComponent {

    // Create Wallet Page Component
    createWalletTitleText = `android=new UiSelector().text("Create Wallet").className("android.view.View")`

    createWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    createWalletInfoIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWallet24wordBtn = `android=new UiSelector().text("24-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Information Page Component
    infoTitleText = `android=new UiSelector().text("Mnemonic code").className("android.view.View")`
    infoHeaderText = `android=new UiSelector().text("What is the 12-24 word seed phrase in crypto wallet?").className("android.widget.TextView")`
    infoDescriptionText = `android=new UiSelector().text("Your seed phrase is a mnemonic code consisting of 12-24 words that is used to recover your cryptocurrency wallet. It is sometimes called a backup phrase, recovery phrase, or mnemonic sentence. It is the foundation of most modern wallets and the crypto universe in general.").className("android.widget.TextView")`

    infoCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    infoCloseBtn = `android=new UiSelector().text("Close").className("android.widget.TextView")`

    // Loading Screen Component
    loadIcon = `android=new UiSelector().className("android.widget.ProgressBar")`
    loadText = `android=new UiSelector().text("LOADING WALLET...").className("android.widget.TextView")`
    createSuccessText = `android=new UiSelector().text("CREATE WALLET SUCCESS").className("android.widget.TextView")`

    // Create Wallet Success Page Component
    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`
    successDescriptionText = `android=new UiSelector().text("You have successfully added a new wallet").className("android.widget.TextView")`

    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`

    // Home Page Component
    homeIconBar = `android=new UiSelector().text("Home").className("android.widget.TextView")`

    // Back Up Wallet Page Component
    backupPagePopupText = `android=new UiSelector().text("Do this step in private place").className("android.widget.TextView")`
    backupPagePopupBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    backupPageBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    backupPageTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    splashScreenHeaderText = `android=new UiSelector().text("Welcome to the \nFIN PAY").className("android.widget.TextView")`

}