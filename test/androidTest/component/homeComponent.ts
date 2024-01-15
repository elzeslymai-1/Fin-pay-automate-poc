export class homeComponent {

    // Home Component
    homeWalletIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeNetworkBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeNotiIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeCopyAddressBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeSendBtn = `android=new UiSelector().text("Send").className("android.widget.TextView")`
    homeReceiveBtn = `android=new UiSelector().text("Receive").className("android.widget.TextView")`
    homeScanBtn = `android=new UiSelector().text("Scan").className("android.widget.TextView")`
    homeBuyBtn = `android=new UiSelector().text("Buy").className("android.widget.TextView")`
    homeSearchIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeSearchTextField = `android=new UiSelector().className("android.widget.EditText")`

    // Wallet pop-up Component
    walletTitleText = `android=new UiSelector().text("Wallets").className("android.widget.TextView")`
    walletSettingBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    walletSearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    // Network pop-up Component
    networkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`
    networkAddNetworkBtn = `android=new UiSelector().text("Add Network").className("android.widget.TextView")`
    networkBitkubBtn = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`

    // Network Management Component
    networkManagementTitleText = `android=new UiSelector().text("Add Network").className("android.view.View")`
    networkManagementCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    networkManagementPopularTab = `android=new UiSelector().text("POPULAR").className("android.widget.TextView")`
    
    networkManagementCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`
    networkManagementAddcustomnetBtn = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    networkManagementRemoveCustomnetBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    // Custom Network Component
    customnetNetworkUrlTextField = `android=new UiSelector().className("android.widget.EditText").index(7)`
    customnetConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`
    
    // Add Network Success Component
    addnetSuccessSwitchgoerliBtn = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`

    // Send Page Component
    sendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Receive Page Component
    receiveTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    receiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // History Page Component
    historyTitleText = `android=new UiSelector().text("Transactions History").className("android.view.View")`

    // DApps Page Component
    dappTrendingTitleText = `android=new UiSelector().text("Trending DApps").className("android.widget.TextView")`

    // Setting Page Component
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`

    // Scan Page Component
    androidCameraAccessText = `android=new UiSelector().text("Allow Fins: Defi Wallet to take pictures and record video?").className("android.widget.TextView")`
    androidWhileuseappBtn = `android=new UiSelector().text("While using the app").className("android.widget.Button")`
    androidOnlythistimeBtn = `android=new UiSelector().text("Only this time").className("android.widget.Button")`
    androidDontallowBtn = `android=new UiSelector().text("Don’t allow").className("android.widget.Button")`
    androidAllowBtn = `android=new UiSelector().text("Allow").className("android.widget.Button")`

    scanTitleText = `android=new UiSelector().text("Scan QR code").className("android.view.View")`
    scanBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Menu Bar
    menuHomeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    menuHistoryBtn = `android=new UiSelector().text("History").className("android.widget.TextView")`
    menuDappBtn = `android=new UiSelector().text("DApps").className("android.widget.TextView")`
    menuSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`

    // Bitkub Chain Testnet Token Component (Home)
    bitkubTestnetWTK = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    bitkubTestnetWTKFullName = `android=new UiSelector().text("WToken").className("android.widget.TextView")`

    bitkubTestnetKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    bitkubTestnetKUBFullName = `android=new UiSelector().text("KUB").className("android.widget.TextView")`

    // Goerli Chain Token Component (Home)
    goerliETH = `android=new UiSelector().text("ETH").className("android.widget.TextView")`

    // Token card Component
    tokenCardWTKTitleText = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    tokenCardWTKChainNameText = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    tokenCardWTKTokenNameText = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    tokenCardWTKTokenFullNameText = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    tokenCardWTKWarningText = `android=new UiSelector().text("Only send Bitkub Chain Testnet (WTK) network assets to this address. Sending any other coins may result in permanent loss.").className("android.widget.TextView")`

    tokenCardKUBTitleText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokenCardKUBChainNameText = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    tokenCardKUBTokenNameText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokenCardKUBTokenFullNameText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokenCardKUBWarningText = `android=new UiSelector().text("Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.").className("android.widget.TextView")`

    tokenCardETHChainNameText = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

    tokenCardBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    tokenCardSendBtn = `android=new UiSelector().text("Send").className("android.widget.TextView")`
    tokenCardReceiveBtn = `android=new UiSelector().text("Receive").className("android.widget.TextView")`
    //* vv- Can't find enable = false in Buy Btn here -vv
    tokenCardBuyBtn = `android=new UiSelector().text("Buy").className("android.widget.TextView")`
    tokenCardQRCodeTab = `android=new UiSelector().text("QR Code").className("android.widget.TextView")`
    tokenCardInfoTab = `android=new UiSelector().text("Information").className("android.widget.TextView")`

    tokenCardInfoText = `android=new UiSelector().text("Token Info").className("android.widget.TextView")`
    tokenCardInfoSymbolText = `android=new UiSelector().text("Token Symbol").className("android.widget.TextView")`
    tokenCardInfoNameText = `android=new UiSelector().text("Token Name").className("android.widget.TextView")`
    tokenCardInfoCirculationText = `android=new UiSelector().text("Total circulation").className("android.widget.TextView")`
    tokenCardInfoAboutText = `android=new UiSelector().text("About").className("android.widget.TextView")`

    tokenCardSendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    tokenCardSendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    tokenCardReceiveTitleText = `android=new UiSelector().text("Receive Token").className("android.view.View")`
    tokenCardReceiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // XPATH
    homeBuyBtnXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[4]`
    walletSettingBtnXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}