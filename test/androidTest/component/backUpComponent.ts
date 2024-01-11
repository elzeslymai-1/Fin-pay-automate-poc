export class backUpComponent {

    // Pop-up Component
    backupPopupText = `android=new UiSelector().text("Do this step in private place").className("android.widget.TextView")`
    backupPopupDescriptionText = `android=new UiSelector().text("Your recovery phrase is what grants you ( and anyone who has it ) access to your funds. Be sure to store it in a safe place.").className("android.widget.TextView")`
    backupPopupContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    
    // Back Up Page Component
    backupTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`
    backupHeaderText = `android=new UiSelector().text("Your Mnemonic phrase").className("android.widget.TextView")`
    backupDescriptionText = `android=new UiSelector().text("Remember to record your words in the same order as they appear below.").className("android.widget.TextView")`
    backup12Text = `android=new UiSelector().text("12").className("android.widget.TextView")`
    backup24Text = `android=new UiSelector().text("24").className("android.widget.TextView")`

    backupBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    backupCopyText = `android=new UiSelector().text("Copied!").className("android.widget.TextView")`
    backupCopyBtn = `android=new UiSelector().text("copy to clipboard").className("android.widget.TextView")`
    backupCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    backupContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Correct Mnemonic Page Component
    correctMnemonicTitleText = `android=new UiSelector().text("Back up Mnemonic phrase").className("android.view.View")`
    correctMnemonicHeaderText = `android=new UiSelector().text("Your Mnemonic phrase").className("android.widget.TextView")`
    correctMnemonicDescriptionText = `android=new UiSelector().text("Remember to record your words in the same order as they appear below.").className("android.widget.TextView")`
    correctMnemonicContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`

    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWallet24wordBtn = `android=new UiSelector().text("24-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    successText = `android=new UiSelector().text("You're all done!").className("android.widget.TextView")`
    successBackupBtn = `android=new UiSelector().text("Back Up Wallet").className("android.widget.TextView")`
}