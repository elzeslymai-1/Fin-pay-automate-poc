export class settingComponent {

    // Setting Page Component
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    //// settingMywalletBtn = `android=new UiSelector().text("My Wallet").className("android.widget.TextView")`
    settingCurrencyBtn = `android=new UiSelector().text("Currency").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`
    //// settingImportWalletBtn = `android=new UiSelector().text("Import Wallet").className("android.widget.TextView")`
    settingCustomTokenBtn = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    //// settingNotificationBtn = `android=new UiSelector().text("Notification").className("android.widget.TextView")`
    //// settingContactsBtn = `android=new UiSelector().text("Contacts").className("android.widget.TextView")`
    settingSessionsBtn = `android=new UiSelector().text("Sessions").className("android.widget.TextView")`

    // Currency Page Component
    currencyTitleText = `android=new UiSelector().text("Currency").className("android.view.View")`
    currencyBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    currencySearchIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    currencySearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    currencyJPY = `android=new UiSelector().text("JPY - Japanese Yen").className("android.widget.TextView")`
    currencyEUR = `android=new UiSelector().text("EUR - Euro").className("android.widget.TextView")`

    // Network Management Component
    networkmanagementTitleText = `android=new UiSelector().text("Add Network").className("android.view.View")`
    networkmanagementCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    networkmanagementPopularTab = `android=new UiSelector().text("POPULAR").className("android.widget.TextView")`
    
    networkmanagementCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`
    networkmanagementAddcustomnetBtn = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    networkmanagementRemoveCustomnetBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    // Confirm Remove Pop-up Component
    confirmremoveBtn = `android=new UiSelector().text("Remove").className("android.widget.TextView")`
    confirmremoveCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`

    // Custom Network Component
    customnetTitleText = `android=new UiSelector().text("Custom Network").className("android.view.View")`
    customnetBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customnetCloseIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    customnetNetworkNameTextField = `android=new UiSelector().className("android.widget.EditText").index(3)`
    customnetNetworkUrlTextField = `android=new UiSelector().className("android.widget.EditText").index(7)`
    customnetChainIdTextField = `android=new UiSelector().className("android.widget.EditText").index(11)`
    customnetSymbolTextField = `android=new UiSelector().className("android.widget.EditText").index(15)`
    customnetBlockExplorTextField = `android=new UiSelector().className("android.widget.EditText").index(19)`
    
    customnetCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`
    customnetConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    customnetNetworkNameRequired = `android=new UiSelector().text("Network Name is required").className("android.widget.TextView")`
    customnetSymbolRequired = `android=new UiSelector().text("Symbol is required").className("android.widget.TextView")`

    // Add Network Success
    addnetsuccessTitleText = `android=new UiSelector().text("Add a network success").className("android.widget.TextView")`
    addnetsuccessSwitchgoerliBtn = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`
    addnetsuccessDismissBtn = `android=new UiSelector().text("Dismiss").className("android.widget.TextView")`

    // Custom Token Page Component
    customtokenTitleText = `android=new UiSelector().text("Custom token").className("android.view.View")`
    customtokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customtokenSearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`
    customtokenSearchTextFieldKub = `android=new UiSelector().text("kub").className("android.widget.EditText")`
    customtokenNetworkBtn = `android=new UiSelector().text("Search...").className("android.widget.EditText")`
    customtokenRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    customtokenNetworkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`
    customtokenNetworkBitkubChain = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    customtokenNetworkGoerliChain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

    customtokenKubToken = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    customtokenWToken = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    customtokenFinToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`

    customtokenAddcustomtokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`
    customtokenTokenAddressTextField = `android=new UiSelector().text("Token address (0x...)").className("android.widget.EditText")`
    customtokenAddFintoken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`
    customtokenCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    customtokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Sessions Page Component
    sessionsTitleText = `android=new UiSelector().text("Sessions").className("android.view.View")`
    sessionsBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Home with Goerli chain Component
    homeGoerlichain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

    // Menu Bar Component
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`

}