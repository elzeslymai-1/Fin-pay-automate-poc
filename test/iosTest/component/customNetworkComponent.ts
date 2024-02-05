import { Action } from "../../mainComponent/mainFunction/Action.js"

const action = new Action()

export class CustomNetworkComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

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
}

export class CustomNetworkModel extends CustomNetworkComponent{

    
    async addCustomNetwork(rpcURL: string) {
        await action.click(this.networkAddNetworkBtn)

        await action.click(this.networkManagementCustomTab)

        await action.click(this.networkManagementAddCustomNetworkBtn)

        await action.setClipboard(rpcURL)   // set rpcURL to clipboard value

        // open option menu
        await action.click(this.customNetworkNetworkUrlTextField)
        await action.click(this.customNetworkNetworkUrlTextField)

        // paste clipboard
        await action.click(this.iosPasteBtn)
        await action.pause(5000)
        await action.tabKeyboard('return')

        await action.click(this.customNetworkConfirmBtn)

        await action.click(this.addNetworkSuccessSwitchNetworkBtn)
    }
}