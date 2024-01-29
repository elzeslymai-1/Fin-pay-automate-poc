export class splashScreenComponent {
    //  Splash Screen Component
    splashScreenHeaderText = this.id('guideline-title-1')
    splashScreenDescriptionText = this.id('guideline-description-1')
    
    splashScreenHeaderText2 = this.id('guideline-title-2')
    splashScreenDescriptionText2 = this.id('guideline-description-2')
    
    splashScreenHeaderText3 = this.id('guideline-title-3')
    splashScreenDescriptionText3 = this.id('guideline-description-3')
    
    splashScreenCreateWalletBtn = this.id('guideline-createwallet-btn')
    splashScreenCreateWalletBtnText = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    
    splashScreenImportWalletBtn = this.id('guideline-importwallet-btn')
    
    splashScreenImportWalletBtnText = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`
    
    // Create Wallet Component
    createWalletTitleText = `android=new UiSelector().text("Create Wallet").className("android.view.View")`
    createWalletBackBtn = this.id('createwallet-header-backbtn')
    
    // Import Wallet Component
    importWalletTitleText = `android=new UiSelector().text("Import Wallet").className("android.view.View")`
    importWalletBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    private id (id: string){
        return (`android=new UiSelector().resourceId("${id}")`)
    }
}


