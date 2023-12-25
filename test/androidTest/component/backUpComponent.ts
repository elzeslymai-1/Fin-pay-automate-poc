export class backUpComponent {

    // Back Up Page Component
    backupPageTitleText = `android=new UiSelector().text("Back up Your Mnemonic phrase").className("android.view.View")`
    backupPageCopiedText = `android=new UiSelector().text("Copied!").className("android.widget.TextView")`
    backupPage12Text = `android=new UiSelector().text("12").className("android.widget.TextView")`
    backupPage24Text = `android=new UiSelector().text("24").className("android.widget.TextView")`
    backupPageRememberPhraseText = `android=new UiSelector().text("Remember to record your words in the same order as they appear below.").className("android.widget.TextView")`

    backupPageBackBtn = `~Navigate up`
    backupInfoPopupBtn = `android=new UiSelector().text("I'm ready").className("android.widget.TextView")`
    backupPageCopyBtn = `android=new UiSelector().text("copy to clipboard").className("android.widget.TextView")`
    backupPageCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    backupPageContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Android Access Component
    androidAccessMusicText = `android=new UiSelector().text("Allow Fins: Defi Wallet to access music and audio on this device?").className("android.widget.TextView")`
    androidAccessPhotoText = `android=new UiSelector().text("Allow Fins: Defi Wallet to access photos and videos on this device?").className("android.widget.Button")`

    androidAccessAllowBtn = `android=new UiSelector().text("Allow").className("android.widget.Button")`
    androidAccessAllowAllBtn = `android=new UiSelector().text("Allow all").className("android.widget.Button")`
    androidAccessDontAllowBtn = `android=new UiSelector().text("Don’t allow").className("android.widget.Button")`
    androidAccessSelectPhotoBtn = `android=new UiSelector().text("Select photos and videos").className("android.widget.Button")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`
}