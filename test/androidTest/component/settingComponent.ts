export class settingComponent {

    // Setting Page Component
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    settingGeneralText = `android=new UiSelector().text("General").className("android.widget.TextView")`
    settingOthersText = `android=new UiSelector().text("Others").className("android.widget.TextView")`
    settingMyWalletBtn = `android=new UiSelector().text("My Wallet").className("android.widget.TextView")`
    settingMyWalletAmountText = `android=new UiSelector().text("1 wallets").className("android.widget.TextView")`
    settingCurrencyBtn = `android=new UiSelector().text("Currency").className("android.widget.TextView")`
    settingCurrencyTypeText = `android=new UiSelector().text("USD").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`
    settingImportWalletBtn = `android=new UiSelector().text("Import Wallet").className("android.widget.TextView")`
    settingCustomTokenBtn = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    settingNotificationBtn = `android=new UiSelector().text("Notification").className("android.widget.TextView")`
    settingContactsBtn = `android=new UiSelector().text("Contacts").className("android.widget.TextView")`
    settingSessionsBtn = `android=new UiSelector().text("Sessions").className("android.widget.TextView")`

    // XPATH
    settingMyWalletBtnXpath = '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup' 
    settingImportWalletBtnXpath = '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup'
    settingNotificationBtnXpath = '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup'
    settingContactsBtnXpath = '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[9]/android.view.ViewGroup'


    // Currency Page Component
    currencyTitleText = `android=new UiSelector().text("Currency").className("android.view.View")`
    currencyBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Network Management Component
    networkManagementTitleText = `android=new UiSelector().text("Add Network").className("android.view.View")`
    networkManagementCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    // Custom Token Page Component
    customTokenTitleText = `android=new UiSelector().text("Custom token").className("android.view.View")`
    customTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customTokenSearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`
    customTokenSearchTextFieldKub = `android=new UiSelector().text("kub").className("android.widget.EditText")`
    customTokenNetworkBtn = `android=new UiSelector().text("Search...").className("android.widget.EditText")`
    customTokenRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    customTokenNetworkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`
    customTokenNetworkBitkubChain = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    customTokenNetworkGoerliChain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

    customTokenKubToken = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    customTokenWToken = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    customTokenFinToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`

    customTokenAddCustomTokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`
    customTokenTokenAddressTextField = `android=new UiSelector().text("Token address (0x...)").className("android.widget.EditText")`
    customTokenAddFinToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`
    customTokenCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    customTokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Sessions Page Component
    sessionsTitleText = `android=new UiSelector().text("Sessions").className("android.view.View")`
    sessionsBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Home with Goerli chain Component
    homeGoerliChain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

    // Menu Bar Component
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`

    // BeforeAll Component
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}