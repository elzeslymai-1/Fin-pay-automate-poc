export class receiveComponent {

    // beforeAll
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    homeReceiveBtn = `android=new UiSelector().resourceId("home-actiondock-receive")`

    // Select Token Component
    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    selectTokenTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    selectTokenTextField = `android=new UiSelector().resourceId("home-walletmodal-search")`
    
    selectTokenKUBToken = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    selectTokenKUBTokenFullname = `android=new UiSelector().text("KUB").className("android.widget.TextView")`

    selectTokenWTKToken = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    selectTokenWTKTokenFullname = `android=new UiSelector().text("WToken").className("android.widget.TextView")`

    // Receive Token Component
    receiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    receiveScanBtn = `android=new UiSelector().text("󰘤").className("android.widget.TextView")`
    receiveDownloadQRBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    receiveCopyBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    receiveCopiedText = `android=new UiSelector().text("Copied!").className("android.widget.TextView")`
    
    receiveShareBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    receiveSetAmountBtn = `android=new UiSelector().text("Set Amount").className("android.widget.TextView")`

    receiveTitleText = `android=new UiSelector().text("Receive Token").className("android.view.View")`
    
    receiveHeaderKUBText = `android=new UiSelector().text("KUB Receiving").className("android.widget.TextView")`
    receiveHeaderWTKText = `android=new UiSelector().text("WTK Receiving").className("android.widget.TextView")`
    
    receiveDescriptionText = `android=new UiSelector().text("Scan the QR code to receive").className("android.widget.TextView")`
    receiveBottomText1 = `android=new UiSelector().text("Only send").className("android.widget.TextView")`
    receiveBottomText2 = `android=new UiSelector().text("network assets to this address.").className("android.widget.TextView")`
    receiveBottomText3 = `android=new UiSelector().text("Sending any other coins may result in permanent loss.").className("android.widget.TextView")`
    receiveBottomTextBitkub = `android=new UiSelector().text("Bitkub Chain Testnet (KUB)").className("android.widget.TextView")`

    receiveSetAmount10KUBText = `android=new UiSelector().text("10 KUB").className("android.widget.TextView")`
    receiveSetAmount0KUBText = `android=new UiSelector().text("0 KUB").className("android.widget.TextView")`
    receiveRemoveSetAmountBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Scan Component
    scanPermissionBtn = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")`

    scanTitleText = `android=new UiSelector().text("Scan QR code").className("android.view.View")`
    scanBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Deny Download QR Component
    denyDownloadTitleText = `android=new UiSelector().text("Access Your Photos").className("android.widget.TextView")`
    denyDownloadDescText = `android=new UiSelector().text("Please allow the app to access your photo album in your privacy settings.").className("android.widget.TextView")`
    denyDownloadOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // Download QR Component
    downloadPermissionBtn1 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")`
    downloadPermissionDeny1 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")`

    downloadPermissionBtn2 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_all_button")`
    downloadPermissionDeny2 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")`

    downloadSuccessText = `android=new UiSelector().text("Save to media libary").className("android.widget.TextView")`

    // Share Component
    sharePopupTitleText = `android=new UiSelector().text("Sharing image").className("android.widget.TextView")`

    // Set Amount Component
    setAmountBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    setAmountTitleText = `android=new UiSelector().text("Set Amount").className("android.view.View")`
    setAmountTextField = `android=new UiSelector().className("android.widget.EditText")`
    setAmountPlaceholderText = `android=new UiSelector().text("0").className("android.widget.EditText")`
    setAmountContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}