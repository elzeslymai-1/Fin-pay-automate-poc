export class customTokenComponent {

    // BeforeAll Components
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingCustomTokenBtn = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`

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
}