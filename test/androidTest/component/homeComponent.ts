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

    // Network pop-up Component
    networkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`

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

    // Token card Component
    tokencardWTKTitleText = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    tokencardWTKChainNameText = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    tokencardWTKTokenNameText = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    tokencardWTKTokenFullNameText = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    tokencardWTKWarningText = `android=new UiSelector().text("Only send Bitkub Chain Testnet (WTK) network assets to this address. Sending any other coins may result in permanent loss.").className("android.widget.TextView")`

    tokencardKUBTitleText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokencardKUBChainNameText = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    tokencardKUBTokenNameText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokencardKUBTokenFullNameText = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    tokencardKUBWarningText = `android=new UiSelector().text("Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.").className("android.widget.TextView")`

    tokencardBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    tokencardSendBtn = `android=new UiSelector().text("Send").className("android.widget.TextView")`
    tokencardReceiveBtn = `android=new UiSelector().text("Receive").className("android.widget.TextView")`
    tokencardBuyBtn = `android=new UiSelector().text("Buy").className("android.widget.TextView")`
    tokencardQRCodeTab = `android=new UiSelector().text("QR Code").className("android.widget.TextView")`
    tokencardInfoTab = `android=new UiSelector().text("Information").className("android.widget.TextView")`

    tokencardInfoText = `android=new UiSelector().text("Token Info").className("android.widget.TextView")`
    tokencardInfoSymbolText = `android=new UiSelector().text("Token Symbol").className("android.widget.TextView")`
    tokencardInfoNameText = `android=new UiSelector().text("Token Name").className("android.widget.TextView")`
    tokencardInfoCirculationText = `android=new UiSelector().text("Total circulation").className("android.widget.TextView")`
    tokencardInfoAboutText = `android=new UiSelector().text("About").className("android.widget.TextView")`

    tokencardSendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    tokencardSendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    tokencardReceiveTitleText = `android=new UiSelector().text("Receive Token").className("android.view.View")`
    tokencardReceiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}