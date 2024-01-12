export class homeComponent {

    // Home Component
    homeWalletIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeNetworkBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    // // homeNotiIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeSendBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeReceiveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    homeScanBtn = `android=new UiSelector().text("Scan").className("android.widget.TextView")`
    // // homeBuyBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
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
    bitkubTestnetKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}