import { Action } from "../../mainComponent/mainFunction/Action.js"

const action = new Action()

export class ScanComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'

    // Home Component
    homeScanBtn = '~home-actiondock-scan'

    // Select Receive Token Component
    selectTokenBackBtn = '~'
    selectTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Select Token"`]'
    selectTokenKUBTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "KUB KUB $0 0 KUB"`][2]'

    // Receive Token Component
    receiveBackBtn = '~'
    receiveDownloadQRBtn = '-ios class chain:**/XCUIElementTypeOther[`name == ""`][2]'
    receiveSetAmountBtn = '~Set Amount'

    // Set Amount Component
    setAmountContinueBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Continue"`][2]'

    // Scan Component
    scanBackBtn = '~'
    scanTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Scan QR code"`]'
    scanReceiveBtn = '-ios class chain:**/XCUIElementTypeOther[`name == ""`][1]'
    scanUploadBtn = '-ios class chain:**/XCUIElementTypeOther[`name == ""`][1]'
    scanReceiveText = '~ Receive'
    scanUploadText = '~ Upload QR code'
    scanBottomText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Align QR code within frame to scan"`]'

    // Upload QR Photo Modal Component
    uploadModalCancelBtn = '~Cancel'
    uploadModalSelectPhotoBtn = '~Photo, 08 February, 10:45'

    // Request Camera Permission Modal Component
    cameraPermissionTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "“FinPay” Would Like to Access the Camera"`]'
    cameraPermissionDescriptionText = '~Allow FinPay to access camera.'
    cameraPermissionAllowBtn = '~Allow'
    cameraPermissionDenyBtn = '~Don’t Allow'

    // Request Photo Permission Modal Component
    photoPermissionTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "“FinPay” Would Like to Access Your Photo Library"`]'
    photoPermissionDescriptionText = '~The app accesses your photos to let you share them with your friends.'
    photoPermissionAllowBtn = '~Allow Full Access'
    photoPermissionDenyBtn = '~Don’t Allow'

    // Deny Camera Permission Warning Modal Component
    denyCameraPermissionWarningTitleText = '~Access Your Camera'
    denyCameraPermissionWarningDescriptionText = '~Please allow the app to access your camera in your privacy settings.'
    denyCameraPermissionWarningOkBtn = '~OK'

    // Deny Photo Permission Warning Modal Component
    denyPhotoPermissionWarningTitleText = '~Access Your Photos'
    denyPhotoPermissionWarningDescriptionText = '~Please allow the app to access your photo album in your privacy settings.'
    denyPhotoPermissionWarningOkBtn = '~OK'

    // Send Component
    sendBackBtn = '~'
    sendTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Send"`]'
}

export class ScanModel extends ScanComponent {
    async selectPhoto(){
        await action.click(this.scanReceiveBtn)     // go to receive page
        await action.click(this.selectTokenKUBTokenBtn)     // select KUB
        await action.click(this.receiveSetAmountBtn)     // go to set amount page
        await action.click(this.setAmountContinueBtn)     // set amount 0 KUB
        await action.click(this.receiveDownloadQRBtn)     // download QR code
        this.uploadModalSelectPhotoBtn = await this.getPhotoID()     // get photo id

        await action.click(this.receiveBackBtn)     // go back to select token
        await action.click(this.selectTokenBackBtn)     // go back to scan page
        await action.click(this.scanUploadBtn)     // go to upload QR Modal

        await action.click(this.uploadModalSelectPhotoBtn)     // select photo
    }
    
    async getPhotoID(){
        // ~Photo, 08 February, 10:45'
        const dateTime = new Date()

        // if date < 9 put 0 in front of date
        const date = dateTime.getDate() < 9 ? `0${dateTime.getDate()}` : `${dateTime.getDate()}`
        const hour = dateTime.getHours() < 9 ? `0${dateTime.getHours()}` : `${dateTime.getHours()}`
        const minute = dateTime.getMinutes() < 9 ? `0${dateTime.getMinutes()}` : `${dateTime.getMinutes()}`

        return `~Photo, ${date} ${dateTime.toLocaleString('default', { month: 'long' })}, ${hour}:${minute}`
    }
}