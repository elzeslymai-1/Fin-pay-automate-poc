import { Action } from "../../mainComponent/mainFunction/Action.js"

const action = new Action()
export class CustomTokenComponent {

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'
    homeTabSettingBtn = '~Setting, tab, 4 of 4'

    // Setting Page Component
    settingCustomTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Custom Token "`][3]'
    settingTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Setting"`][5]'

    // Custom Token Page Component
    customTokenBackBtn = '~'
    customTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Custom token"`]'
    customTokenNetworkBtn = '~home-chainselect-btn'
    customTokenSearchTextField = '~home-walletmodal-search'
    customTokenTokenHeaderText = '~Token'
    customTokenCustomTokenHeaderText = '~Custom Token'
    customTokenRemoveBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "WToken WTK "`][2]'

    customTokenNetworkGoerliBtn = ''
    customTokenKubTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "KUB KUB"`][2]'
    customTokenWTokenBtn = '-ios class chain:**/XCUIElementTypeOther[`name == ""`][2]'

    customTokenGoerliToken = '-ios class chain:**/XCUIElementTypeOther[`name == "G Goerli ETH"`][2]'
    customTokenFinTestToken = '-ios class chain:**/XCUIElementTypeOther[`name == "F fins token FST "`][2]'
    customTokenAddCustomTokenBtn = '~ Add Custom Token'

    customTokenNoTokenText = '~No custom token'

    // Network pop-up Component
    networkTitleText = '~bottomsheet-header-title'
    networkAddNetworkBtn = '~bottomsheet-addnetwork-btn'

    networkBitkubBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][1]'
    networkGoerliBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][2]'

    // Network Management Component
    networkManagementTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Add Network"`]'
    networkManagementCloseIconBtn = '~addnetwork-header-closebtn'
    networkManagementPopularTab = '~addnetwork-tab-popular'
    networkManagementCustomTab = '~addnetwork-tab-custom'
    networkManagementAddCustomNetworkBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Add Custom Network"`][2]'
    networkManagementRemoveCustomNetworkBtn = '~addnetwork-chainlist-remove-5'

    // Custom Network Component
    customNetworkNetworkUrlTextField = '~addcustomnetwork-input-url'
    customNetworkConfirmBtn = '~addcustomnetwork-btn-confirm'

    // Add Network Success Component
    addNetworkSuccessSwitchNetworkBtn = '~addcustomchain-bottomsheet-switchbtn'

    // Add Token Component
    addTokenBackBtn = '~'
    addTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Custom token"`]'
    addTokenAddressHeadText = '~Token address'
    addTokenAddressTextField = '-ios class chain:**/XCUIElementTypeTextField[`value == "Token address (0x...)"`]'
    addTokenPasteBtn = '~'

    addTokenFSTTokenNameText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "fins token"`][1]'
    addTokenFSTTokenSymbolText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "FST"`][1]'

    addTokenAddressText = '~Token Address'
    addTokenSymbolText = '~Token Symbol'
    addTokenSymbolValueText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "FST"`][2]'

    addTokenNameText = '~Token Name'
    addTokenNameValueText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "fins token"`][2]'

    addTokenBalanceText = '~Token Balance'
    addTokenBalanceValueText = '~0.0'

    addTokenWarningText = '~By adding this as a custom token, you confirm that all further interactions with it are at your own risk.'

    addTokenNoResultText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "No Result"`]'

    addTokenAlreadyExistText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Token already exist"`]'

    addTokenCheckboxBtn = '~I understand and agree'
    addTokenCancelBtn = '~Cancel'
    addTokenConfirmBtn = '~Confirm'

}

export class CustomTokenModel extends CustomTokenComponent{
    public async addToken(tokenAddress: string){
        await action.click(this.homeTabSettingBtn)
        await action.click(this.settingCustomTokenBtn)

        await action.click(this.customTokenAddCustomTokenBtn)
        switch(tokenAddress){
            case 'FST':
                await action.setClipboard(`${process.env.FST_TOKEN_ADDRESS}`)   // Set FST Address to clipboard
                break
        }

        await action.click(this.addTokenPasteBtn)
        await action.acceptAlert()
        await action.click(this.addTokenCheckboxBtn)
        await action.click(this.addTokenConfirmBtn)
        await action.click(this.customTokenBackBtn)
        await action.click(this.homeTabHomeBtn)
    }
} 