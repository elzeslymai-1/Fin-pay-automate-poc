export class backUpComponent {

    // Back Up Page Component
    backupPageTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`
    backupPage12Text = `android=new UiSelector().text("12").className("android.widget.TextView")`
    backupPage24Text = `android=new UiSelector().text("24").className("android.widget.TextView")`
    backupPageRememberPhraseText = `android=new UiSelector().text("Remember to record your words in the same order as they appear below.").className("android.widget.TextView")`
    backupPagePopupText = `android=new UiSelector().text("Do this step in private place").className("android.widget.TextView")`

    backupPageBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    backupPagePopupBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    backupPageCopyBtn = `android=new UiSelector().text("copy to clipboard").className("android.widget.TextView")`
    backupPageCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    backupPageContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`
}