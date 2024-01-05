export class customNetworkComponent {
    // BeforeAll Components
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`

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

    // Home with Goerli chain Component
    homeGoerlichain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`

}