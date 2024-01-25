export class sendComponent {

    // beforeAll Component
    splashScreenImportWalletBtn = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`
    importWalletImportBtn = `android=new UiSelector().text("Import Wallet").className("android.widget.TextView")`
    importWalletPrivatekeyField = `android=new UiSelector().className("android.widget.EditText")`
    successContinueBtn = `android=new UiSelector().resourceId("createwallet-success-continue")`
    homeSendBtn = `android=new UiSelector().resourceId("home-actiondock-send")`

    // Send Component
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    sendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`

    sendSelectTokenHeaderText = `android=new UiSelector().text("Select Token").className("android.widget.TextView")`
    sendSelectTokenKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    sendSelectTokenWTK = `android=new UiSelector().text("WTK").className("android.widget.TextView")`

    sendToHeaderText = `android=new UiSelector().text("To").className("android.widget.TextView")`
    sendToTextField = `android=new UiSelector().className("android.widget.EditText")`
    sendToPlaceHolder = `android=new UiSelector().text("Receive address").className("android.widget.EditText")`
    sendToInvalidText = `android=new UiSelector().text("Recipient address is invalid").className("android.widget.TextView")`

    sendAmountHeaderText = `android=new UiSelector().text("Amount").className("android.widget.TextView")`
    // sendAmountTextField = `android=new UiSelector().className("android.widget.EditText")`
    sendAmountPlaceHolder = `android=new UiSelector().text("0.00").className("android.widget.EditText")`
    sendAmountMaxBtn = `android=new UiSelector().text("Max").className("android.widget.TextView")`

    sendNextBtn = `android=new UiSelector().text("Next").className("android.widget.TextView")`

    // Select Token Component
    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    selectTokenTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    selectTokenSearchTextField = `android=new UiSelector().className("android.widget.EditText")`
    selectTokenSearchPlaceHolder = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    selectTokenKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    selectTokenKUBFullName = `android=new UiSelector().text("KUB").className("android.widget.TextView")`

    selectTokenWTK = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    selectTokenWTKFullName = `android=new UiSelector().text("WToken").className("android.widget.TextView")`

    selectTokenBottomText = `android=new UiSelector().text("Didn’t see your token? Import").className("android.widget.TextView")`

    // Insufficient Balance Component
    insuffTitleText = `android=new UiSelector().text("Insufficient Balance").className("android.widget.TextView")`
    insuffDescripText = `android=new UiSelector().text("You do not have enough KUB in this account").className("android.widget.TextView")`

    insuffOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // Confirm Send Component
    confirmBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    confirmTitleText = `android=new UiSelector().text("Confirm Send").className("android.view.View")`
    confirmYouSendText = `android=new UiSelector().text("You send").className("android.widget.TextView")`
    confirmFromText = `android=new UiSelector().text("From").className("android.widget.TextView")`
    confirmToText = `android=new UiSelector().text("To").className("android.widget.TextView")`
    confirmCoinText = `android=new UiSelector().text("Coin").className("android.widget.TextView")`
    confirmAmountText = `android=new UiSelector().text("Transfer amount").className("android.widget.TextView")`
    confirmNetworkText = `android=new UiSelector().text("Network").className("android.widget.TextView")`
    confirmFeeText = `android=new UiSelector().text("Network fee").className("android.widget.TextView")`
    confirmWarningText = `android=new UiSelector().text("Ensure that the address is correct and on the same network. Transactions cannot be cancelled.").className("android.widget.TextView")`

    confirmCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`
    confirmConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Pending Component
    pendingText = `android=new UiSelector().resourceId("loading-modal-loadingwallet")`

    // Send Success Component
    sendSuccessTitleText = `android=new UiSelector().text("We are sending your token").className("android.widget.TextView")`
    sendSuccessDescriptionText = `android=new UiSelector().text("It may take a few minutes for the token to send and appear in your wallet.").className("android.widget.TextView")`

    sendSuccessViewBtn = `android=new UiSelector().text("View Transaction").className("android.widget.TextView")`

    // History Component
    historyTitleText = `android=new UiSelector().text("Transactions History").className("android.view.View")`

    // XPath
    sendAmountTextField = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText`
}