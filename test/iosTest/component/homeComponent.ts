export class HomeComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'
    homeTabHistoryBtn = '~History, tab, 2 of 4'
    homeTabDappBtn = '~DApps, tab, 3 of 4'
    homeTabSettingBtn = '~Setting, tab, 4 of 4'

    // Home Component
    homeWalletIconBtn = '~home-headersection-walletbtn'
    homeNetworkBtn = '~home-chainselect-btn'
    homeNetworkBtnText = '~home-chainselect-name'
    homeNotificationIconBtn = '~home-headersection-notification'
    homeCopyAddressBtn = '~home-walletsection-copy'
    homeCopyToastText = '~Copied'
    homeBalanceText = '~home-walletsection-balance'
    homeSendBtn = '~home-actiondock-send'
    homeReceiveBtn = '~home-actiondock-receive'
    homeScanBtn = '~home-actiondock-scan'
    homeBuyBtn = '~home-actiondock-buy'
    homeSearchTextField = '~home-walletmodal-search'
    homeSearchNoResultText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "No result"`]'

    homeTokenCardKubSymbolText = '~home-walletcardsymbol-KUB'
    homeTokenCardKubNameText = '~home-walletcardname-KUB'
    homeTokenCardKubBalanceText = '~home-walletcardbalancetoken-KUB'
    homeTokenCardKubValueText = '~home-walletcardbalancefiat-KUB'

    homeTokenCardWtkSymbolText = '~home-walletcardsymbol-WTK'
    homeTokenCardWtkNameText = '~home-walletcardname-WToken'
    homeTokenCardWtkBalanceText = '~home-walletcardbalancetoken-WTK'
    homeTokenCardWtkValueText = '~home-walletcardbalancefiat-WTK'

    homeTokenCardETHBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "ETH Goerli 0 $0"`][2]'

    // Transaction History Page Component
    historyTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Transactions History"`][5]'

    // DApps Page Component
    dappsTitleText = ''

    // Setting Page Component
    settingTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Setting"`][5]'

    // Wallet pop-up Component
    walletModalTitleText = '~home-walletmodal-title'
    walletModalSettingBtn = '~home-walletmodal-settingbtn'
    walletModalSearchTextField = '~home-walletmodal-search'
    // walletSearchTextField = '-ios class chain:**/XCUIElementTypeTextField[`name == "home-walletmodal-search"`][2]'
    walletModalMyWalletText = '~home-walletmodal-mywallet'
    walletModalMyWalletTitleText = '~home-mywallet-title'

    // Send Page Component
    sendTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Send"`]'
    sendBackBtn = '~'

    // Receive Page Component
    receiveSelectTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Select Token"`]'
    receiveSelectTokenBackBtn = '~'
    receiveTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Receive Token"`]'
    receiveTokenBackBtn = '~'

    // Scan Page Component
    modalCameraAccessTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "“FinPay” Would Like to Access the Camera"`]'
    modalCameraAccessSubTitleText = '~Allow FinPay to access camera.'

    scanTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Scan QR code"`]'
    scanBackBtn = '~'

    // Token card Component
    tokenCardKUBTitleText = '~KUB'
    tokenCardKUBChainNameText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Bitkub Chain Testnet"`]'
    tokenCardKUBTokenSymbolText = '~home-walletcardsymbol-KUB'
    tokenCardKUBTokenNameText = '~home-walletcardname-KUB'
    tokenCardKUBWarningText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss."`]'

    tokenCardWTKTitleText = '~WTK'
    tokenCardWTKChainNameText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Bitkub Chain Testnet"`]'
    tokenCardWTKTokenSymbolText = '~home-walletcardsymbol-WTK'
    tokenCardWTKTokenNameText = 'WToken'
    tokenCardWTKWarningText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Only send Bitkub Chain Testnet (WTK) network assets to this address. Sending any other coins may result in permanent loss."`]'

    tokenCardETHTitleText = '~ETH'
    tokenCardETHChainNameText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "goerli"`]'
    tokenCardETHTokenSymbolText = '~home-walletcardsymbol-ETH'
    tokenCardETHTokenNameText = '~home-walletcardname-Goerli'
    tokenCardETHWarningText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Only send goerli (ETH) network assets to this address. Sending any other coins may result in permanent loss."`]'

    tokenCardBackBtn = '~'
    tokenCardSendBtn = '~ Send'
    tokenCardReceiveBtn = '~ Receive'
    tokenCardBuyBtn = '~ Buy'
    tokenCardQRCodeTabBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "QR Code QR Code"`][1]'
    tokenCardInfoTabBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Information Information"`][1]'

    // Token card info tab
    tokenCardInfoTabHeaderText = '~Token Info'
    tokenCardInfoTabTokenSymbolText = '~Token Symbol'
    tokenCardInfoTabTokenNameText = '~Token Name'
    tokenCardInfoTabCirculationText = '~Total circulation'
    tokenCardInfoTabAboutText = '~About'

    tokenCardKUBInfoTabTokenSymbolValueText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "KUB"`][2]'
    tokenCardKUBInfoTabTokenNameValueText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "KUB"`][3]'

    tokenCardETHInfoTabTokenSymbolValueText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "ETH"`][2]'
    tokenCardETHInfoTabTokenNameValueText = '~Goerli'

    // Network pop-up Component
    networkTitleText = '~bottomsheet-header-title'
    networkAddNetworkBtn = '~bottomsheet-addnetwork-btn'
    networkBitkubBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][1]'
    networkGoerliBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][2]'

    // Network Management Component
    networkManagementTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Add Network"`]'
    networkManagementCloseIconBtn = '~addnetwork-header-closebtn'
    networkManagementPopularTab = '~addnetwork-tab-popular'
    networkManagementCustomTab = '~addnetwork-tab-custom'
    networkManagementAddCustomNetworkBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Add Custom Network"`][2]'
    networkManagementRemoveCustomNetworkBtn = '~addnetwork-chainlist-remove-5'

    // Custom Network Component
    customNetworkNetworkUrlTextField = '~addcustomnetwork-input-url'
    customNetworkConfirmBtn = '~addcustomnetwork-btn-confirm'

    // Add Network Success Component
    addNetworkSuccessSwitchNetworkBtn = '~addcustomchain-bottomsheet-switchbtn'
}