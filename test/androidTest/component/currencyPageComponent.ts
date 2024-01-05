export class currencyPageComponent {
    // BeforeAll Components
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`
    settingCurrencyBtn = `android=new UiSelector().text("Currency").className("android.widget.TextView")`

    // Currency Page Component
    currencyTitleText = `android=new UiSelector().text("Currency").className("android.view.View")`
    currencyBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    currencySearchIconBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    currencySearchTextField = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    currencyJPY = `android=new UiSelector().text("JPY - Japanese Yen").className("android.widget.TextView")`
    currencyEUR = `android=new UiSelector().text("EUR - Euro").className("android.widget.TextView")`
}