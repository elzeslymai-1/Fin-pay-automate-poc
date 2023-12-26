export class importWalletComponent {

    // Import Wallet Page Component
    importWalletTitleText = `android=new UiSelector().text("Import Wallet").className("android.view.View")`
    importWalletHeaderText = `android=new UiSelector().text("Enter Mnemonic or Private Key").className("android.widget.TextView")`
    importWalletWrongPrivatekeyText = `android=new UiSelector().text("Invalid mnemonic phrase.").className("android.widget.TextView")`
    
    importWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    importWalletPasteBtn = `//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup`
    importWalletImportBtn = `android=new UiSelector().text("Import Wallet").className("android.widget.TextView")`

    importWalletPrivatekeyField = `android=new UiSelector().className("android.widget.EditText")`

    // Splash Screen Component
    splashScreenWelcomeText = `android=new UiSelector().text("Welcome to the \nFIN PAY").className("android.widget.TextView")`

    // Loading Screen Compoenet
    loadIcon = `android=new UiSelector().className("android.widget.ProgressBar")`
    loadText = `android=new UiSelector().text("LOADING WALLET...").className("android.widget.TextView")`

    // Import Success Component
    importSuccessText = `android=new UiSelector().text("IMPORT WALLET SUCCESS").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenImportWalletBtn = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`

}