export class ReceiveComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'
    homeNetworkBtn = '~home-chainselect-btn'

    // Home Component
    homeReceiveBtn = '~home-actiondock-receive'

    // Network pop-up Component
    networkBitkubBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][1]'

    // Select Receive Token Component
    selectTokenBackBtn = '~'
    selectTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Select Token"`]'
    selectTokenSearchTextField = '~home-walletmodal-search'

    selectTokenKUBTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "KUB KUB $0 0 KUB"`][2]'
    selectTokenWTKTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "WTK WToken $0 0 WTK"`][2]'
    selectTokenETHTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "ETH Goerli $0 0 ETH"`][3]'

    // Receive Token Component
    receiveBackBtn = '~'
    receiveTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Receive Token"`]'
    receiveScanBtn = '~󰘤'
    receiveDownloadQRBtn = '-ios class chain:**/XCUIElementTypeOther[`name == ""`][2]'

    receiveHeaderKUBText = '~KUB Receiving'
    receiveHeaderWTKText = '~WTK Receiving'

    receiveDescriptionText = '~Scan the QR code to receive'
    receiveCopyBtn = '~'
    receiveCopyNotificationText = '-ios class chain:**/XCUIElementTypeToast[`name == "Copied!"`]'
    receiveShareBtn = '~'
    receiveSetAmountBtn = '~Set Amount'

    receiveBottomText1 = '~Only send'
    receiveBottomText2 = '~network assets to this address.'
    receiveBottomText3 = '~Sending any other coins may result in permanent loss.'

    receiveBottomKUBTokenText = '~Bitkub Chain Testnet (KUB)'
    receiveBottomWTKTokenText = '~Bitkub Chain Testnet (WTK)'
    receiveBottomETHTokenText = '~goerli (ETH)'

    receiveSetAmount10KUBText = '~10 KUB'
    receiveSetAmount0KUBText = '~0 KUB'
    receiveRemoveSetAmountBtn = '~'

    // Request Camera Permission Modal Component
    cameraPermissionTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "“FinPay” Would Like to Access the Camera"`]'
    cameraPermissionDescriptionText = '~Allow FinPay to access camera.'
    cameraPermissionAllowBtn = '~Allow'
    cameraPermissionDenyBtn = '~Don’t Allow'

    // Scan Component
    scanBackBtn = '~'
    scanTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Scan QR code"`]'

    // Request Photo Permission Modal Component
    photoPermissionTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "“FinPay” Would Like to Access Your Photo Library"`]'
    photoPermissionDescriptionText = '~The app accesses your photos to let you share them with your friends.'
    PhotoPermissionAllowBtn = '~Allow Full Access'
    photoPermissionDenyBtn = '~Don’t Allow'

    // Deny Photo Permission Warning Modal Component
    denyPermissionWarningTitleText = '~Access Your Photos'
    denyPermissionWarningDescriptionText = '~Please allow the app to access your photo album in your privacy settings.'
    denyPermissionWarningOkBtn = '~OK'

    // Download QR Success Modal Component
    downloadQRHeaderKUBText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "KUB Receiving"`][2]'
    downloadQRDescriptionText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Scan the QR code to receive"`][2]'
    downloadQRWalletAddressText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "0xf1844a7903D97A82450ad4F41dEa1Eecf146f98c"`]'
    downloadQRSetAmountText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "10 KUB"`][2]'
    downloadQRBottomKUBText = '-ios class chain:**/XCUIElementTypeOther[`name == "Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss."`][3]'

    downloadQRHeaderETHText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "ETH Receiving"`][2]'
    downloadQRBottomETHText = '-ios class chain:**/XCUIElementTypeOther[`name == "Only send goerli (ETH) network assets to this address. Sending any other coins may result in permanent loss."`][3]'
    
    // Share Component
    shareModalCloseBtn = '~Close'

    // Set Amount Component
    setAmountBackBtn = '~'
    setAmountTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Set Amount"`]'
    setAmountTextField = '-ios class chain:**/XCUIElementTypeOther[`name == "0 KUB "`][1]'
    setAmountPlaceholderText = '-ios class chain:**/XCUIElementTypeOther[`name == "0 KUB "`][3]'
    setAmountContinueBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Continue"`][2]'

    // Send Component
    sendBackBtn = '~'
    sendTokenAmountField = '-ios class chain:**/XCUIElementTypeTextField[`value == "0.00"`]'
}