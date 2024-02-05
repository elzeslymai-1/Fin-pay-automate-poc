export class SettingComponent{
    // Menu Bar
    homeTabSettingBtn = '~Setting, tab, 4 of 4'

    // Setting Page Component
    settingTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Setting"`][5]'
    settingGeneralText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "General"`]'
    settingOthersText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Others"`]'
    settingMyWalletBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " My Wallet 1 wallets "`][3]'
    settingCurrencyBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Currency USD "`][2]'
    settingNetworkManageBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Network Management "`][2]'
    settingImportWalletBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "󰋻 Import Wallet "`][2]'
    settingCustomTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Custom Token "`][3]'
    settingNotificationBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Notification "`][3]'
    settingContactsBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Contacts "`][2]'
    settingSessionsBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Sessions "`][3]'

    // Currency Page Component
    currencyTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Currency"`]'
    currencyBackBtn = '~'

    // Network Management Component
    networkManagementTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Add Network"`]'
    networkManagementCloseIconBtn = '~addnetwork-header-closebtn'
    
    // Custom Token Page Component
    customTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Custom token"`]'
    customTokenBackBtn = '~'

    // Sessions Page Component
    sessionsTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Sessions"`]'
    sessionsBackBtn = '~'
}