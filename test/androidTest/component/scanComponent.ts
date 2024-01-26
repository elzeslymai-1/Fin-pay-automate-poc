export class scanComponent {

    // beforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().resourceId("guideline-createwallet-btn")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").resourceId("createwallet-mnemonic-title")`
    createWalletContinueBtn = `android=new UiSelector().resourceId("createwallet-continue-btn")`
    createWalletSuccessContinueBtn = `android=new UiSelector().resourceId("createwallet-success-continue")`
    homeScanBtn = `android=new UiSelector().resourceId("home-actiondock-scan")`

    // Scan Component
    scanPermissionBtn = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")`

    scanBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanTitleText = `android=new UiSelector().text("Scan QR code").className("android.view.View")`
    scanReceiveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanReceiveText = `android=new UiSelector().text("Receive").className("android.widget.TextView")`
    scanUploadBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanUploadText = `android=new UiSelector().text("Upload QR code").className("android.widget.TextView")`
    scanBottomText = `android=new UiSelector().text("Align QR code within frame to scan").className("android.widget.TextView")`

    // Select Token Component
    selectTokenTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Upload Component
    uploadPermissionBtn1 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")`
    uploadPermissionBtn2 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_all_button")`

    uploadPopupText = `android=new UiSelector().resourceId("com.google.android.providers.media.module:id/privacy_text")`
    uploadPopupPhotoSelected = `android=new UiSelector().resourceId("com.google.android.providers.media.module:id/icon_thumbnail")`

    // XPath
    uploadPopupCloseBtn = `//android.widget.ImageButton[@content-desc="Cancel"]`

    // Send Component
    sendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
}