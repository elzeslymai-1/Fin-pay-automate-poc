export class backUpComponent {

    // Pop-up Component
    backupPopupText = `android=new UiSelector().resourceId("backup-mnemonicmodal-title")`
    backupPopupDescriptionText = `android=new UiSelector().resourceId("backup-mnemonicmodal-description")`
    
    backupPopupContinueBtn = `android=new UiSelector().resourceId("backup-mnemonic-continue")`
    backupPopupContinueBtnText = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Back Up Page Component
    backupTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`
    backupHeaderText = `android=new UiSelector().resourceId("backup-mnemonic-title")`
    backupDescriptionText = `android=new UiSelector().resourceId("backup-mnemonic-subtitle")`
    backup12Text = `android=new UiSelector().resourceId("backup-mnemonic-position-12")`
    backup24Text = `android=new UiSelector().resourceId("backup-mnemonic-position-24")`

    backupBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
        
    backupCopyBtn = `android=new UiSelector().resourceId("backup-mnemonic-copy")`
    backupCopyBtnText = `android=new UiSelector().resourceId("backup-mnemonic-copytext")`

    backupCopiedText = `android=new UiSelector().text("Copied!").className("android.widget.TextView")`

    backupCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    backupCheckboxText = `android=new UiSelector().resourceId("backup-mnemonic-agreement")`
    
    backupContinueBtn = `android=new UiSelector().resourceId("backup-mnemonic-continue")`
    backupContinueBtnText = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Correct Mnemonic Page Component
    correctMnemonicTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`
    correctMnemonicHeaderText = `android=new UiSelector().resourceId("backup-mnemonic-title")`
    correctMnemonicDescriptionText = `android=new UiSelector().resourceId("backup-mnemonic-subtitle")`
    correctMnemonicBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    correctMnemonicContinueBtn = `android=new UiSelector().resourceId("backup-mnemonic-cotinue")`
    correctMnemonicContinueBtnText = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`

    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWallet24wordBtn = `android=new UiSelector().text("24-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`
}