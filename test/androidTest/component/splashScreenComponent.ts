export class splashScreenComponent {
    
    //  Splash Screen Component
    splashScreenHeaderText = `android=new UiSelector().resourceId("guideline-title-1")`
    splashScreenDescriptionText = `android=new UiSelector().resourceId("guideline-description-1")`

    splashScreenHeaderText2 = `android=new UiSelector().resourceId("guideline-title-2")`
    splashScreenDescriptionText2 = `android=new UiSelector().resourceId("guideline-description-2")`
    
    splashScreenHeaderText3 = `android=new UiSelector().resourceId("guideline-title-3")`
    splashScreenDescriptionText3 = `android=new UiSelector().resourceId("guideline-description-3")`

    splashScreenCreateWalletBtn = `android=new UiSelector().resourceId("guideline-createwallet-btn")`
    splashScreenCreateWalletBtnText = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    
    splashScreenImportWalletBtn = `android=new UiSelector().resourceId("guideline-importwallet-btn")`
    splashScreenImportWalletBtnText = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`

    // Create Wallet Component
    createWalletTitleText = `android=new UiSelector().text("Create Wallet").className("android.view.View")`
    createWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    // Import Wallet Component
    importWalletTitleText = `android=new UiSelector().text("Import Wallet").className("android.view.View")`
    importWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
}


