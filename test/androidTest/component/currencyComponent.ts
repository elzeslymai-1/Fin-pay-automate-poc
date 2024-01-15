export class currencyComponent {
    // BeforeAll Components
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`
    settingCurrencyBtn = `android=new UiSelector().text("Currency").className("android.widget.TextView")`
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Currency Page Component
    currencyTitleText = `android=new UiSelector().text("Currency").className("android.view.View")`
    currencyBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    currencySearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    currencyJPY = `android=new UiSelector().text("JPY - Japanese Yen").className("android.widget.TextView")`
    currencyEUR = `android=new UiSelector().text("EUR - Euro").className("android.widget.TextView")`

    // Setting Page Component
    settingCurrencyJPYText = `android=new UiSelector().text("JPY").className("android.widget.TextView")`

    // Home Page Component
    homeWalletJPYBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
    homeWTKTokenJPYBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
    homeKUBTokenJPYBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
    homeSendBtn = `android=new UiSelector().text("Send").className("android.widget.TextView")`
    homeReceiveBtn = `android=new UiSelector().text("Receive").className("android.widget.TextView")`

    // Send Page Component
    sendSelectTokenKUBBtn = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    selectTokenKUBBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
    selectTokenWTKBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`

    // Receive Page Component
    receiveBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    receiveTokenKUBBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
    receiveTokenWTKBalance = `android=new UiSelector().text("¥0").className("android.widget.TextView")`
}