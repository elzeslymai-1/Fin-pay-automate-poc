export class scanComponent {

    // beforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().resourceId("guideline-createwallet-btn")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").resourceId("createwallet-mnemonic-title")`
    createWalletContinueBtn = `android=new UiSelector().resourceId("createwallet-continue-btn")`
    createWalletSuccessContinueBtn = `android=new UiSelector().resourceId("createwallet-success-continue")`
    homeScanBtn = `android=new UiSelector().resourceId("home-actiondock-scan")`

    // Camera Permission Component
    camPermissionText = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_message")`
    camPermissionWhileAppBtn = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")`
    camPermissionOnlyBtn = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_one_time_button")`
    camPermissionDenyBtn = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")`

    // Scan Component
    scanBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanTitleText = `android=new UiSelector().text("Scan QR code").className("android.view.View")`
    scanReceiveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanReceiveText = `android=new UiSelector().text("Receive").className("android.widget.TextView")`
    scanUploadBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    scanUploadText = `android=new UiSelector().text("Upload QR code").className("android.widget.TextView")`
    scanBottomText = `android=new UiSelector().text("Align QR code within frame to scan").className("android.widget.TextView")`

    // Deny Camera Permission Component
    denyCamTitleText = `android=new UiSelector().text("Access Your Camera").className("android.widget.TextView")`
    denyCamDescText = `android=new UiSelector().text("Please allow the app to access your camera in your privacy settings.").className("android.widget.TextView")`
    denyCamOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // Select Token Component
    selectTokenTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    selectTokenKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    receiveDownloadBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    receiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Photos Permission Component
    photoPermissionAllowBtn1 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")`
    photoPermissionDenyBtn1 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")`
    photoPermissionAllowBtn2 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_all_button")`
    photoPermissionDenyBtn2 = `android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")`

    // Upload Component
    uploadPopupText = `android=new UiSelector().resourceId("com.google.android.providers.media.module:id/privacy_text")`
    uploadPopupPhotoSelected = `android=new UiSelector().resourceId("com.google.android.providers.media.module:id/icon_thumbnail")`

    // Deny Photo Permission Component
    denyPhotoTitleText = `android=new UiSelector().text("Access Your Photos").className("android.widget.TextView")`
    denyPhotoDescText = `android=new UiSelector().text("Please allow the app to access your photo album in your privacy settings.").className("android.widget.TextView")`
    denyPhotoOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // XPath
    uploadPopupCloseBtn = `//android.widget.ImageButton[@content-desc="Cancel"]`

    // Send Component
    sendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
}