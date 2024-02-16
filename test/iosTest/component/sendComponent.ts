import { Assertion } from "../../mainComponent/mainFunction/Assert.js"
import { Action } from "../../mainComponent/mainFunction/Action.js"
import { ERC20 } from "../../mainComponent/contract/erc20.js"

const assert = new Assertion()
const action = new Action()
const erc20 = new ERC20()
export class SendComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'
    homeTabHistoryBtn = '~History, tab, 2 of 4'

    // Home Component
    homeSendBtn = '~home-actiondock-send'
    homeReceiveBtn = '~home-actiondock-receive'
    homeNetworkBtn = '~home-chainselect-btn'

    homeTokenCardKubBalanceText = '~home-walletcardbalancetoken-KUB'
    homeTokenCardKubValueText = '~home-walletcardbalancefiat-KUB'

    homeTokenCardWtkBalanceText = '~home-walletcardbalancetoken-WTK'
    homeTokenCardWtkValueText = '~home-walletcardbalancefiat-WTK'

    // Send Page Component
    sendTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Send"`]'
    sendBackBtn = '~'

    sendSelectTokenHeaderText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Select Token"`]'
    sendSelectTokenKUBBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "KUB"`]'
    sendSelectTokenWTKBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "WTK"`]'
    sendSelectTokenFSTBtn = '~F FST'

    sendToHeaderText = '~To'
    sendToTextField = '-ios class chain:**/XCUIElementTypeTextField[`value == "Receive address"`]'
    sendToInvalidAddressText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Recipient address is invalid"`]'

    sendAvailableBalanceText = '~Available: 0 KUB'

    sendAmountHeaderText = '~Amount'
    sendAmountTextField = '-ios class chain:**/XCUIElementTypeTextField[`value == "0.00"`]'
    sendAmountValueTextField = '-ios class chain:**/XCUIElementTypeTextField[`value == "0.0"`]'


    sendAmountMaxBtn = '~Max'
    sendNextBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Next"`][2]'

    // Select Token Page Component
    selectTokenBackBtn = '~'
    selectTokenTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Select Token"`]'
    selectTokenSearchTextField = '~home-walletmodal-search'

    selectTokenKUBBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "KUB KUB $0  0 KUB"`][2]'
    selectTokenWTKBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "WTK WToken $0  0 WTK"`][2]'
    selectTokenFSTBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "F FST fins token $0  0 FST"`][2]'

    selectTokenBottomText = '-ios class chain:**/XCUIElementTypeOther[`name == "Didn’t see your token? Import"`][2]'

    // Insufficient Gas limit Modal Component
    insufficientGasTitleText = '~Transaction Error'
    insufficientGasDescriptionText = '~Insufficient balance a gas limit for the transaction, please try again later.'
    insufficientGasOKBtn = '~OK'

    // Insufficient Balance Modal Component
    insufficientBalanceTitleText = '~Insufficient Balance'
    insufficientBalanceKUBDescriptionText = '~You do not have enough KUB in this account' // need to have test-id
    insufficientBalanceWTKDescriptionText = '~You do not have enough WTK in this account' // need to have test-id
    insufficientBalanceFSTDescriptionText = '~You do not have enough FST in this account' // need to have test-id
    insufficientBalanceOKBtn = '~OK'

    // Confirm Send Component
    confirmSendBackBtn = '~'
    confirmSendTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Confirm Send"`]'

    confirmSendYouSendText = '~You send'
    confirmSendAmount1KUBText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "1 KUB"`][1]' // need to have test-id

    confirmSendFromText = '~From'
    confirmSendToText = '~To'

    confirmSendCoinText = '~Coin'
    confirmSendCoinKUBValueText = '~KUB' // need to have test-id

    confirmSendAmountText = '~Transfer amount'
    confirmSendAmountValue1KUBText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "1 KUB"`][2]' // need to have test-id

    confirmSendNetworkText = '~Network'
    confirmSendNetworkBitkubValueText = '~Bitkub Chain Testnet' // need to have test-id

    confirmSendFeeText = '~Network fee'
    confirmSendFeeValueText = ''    // need to have test-id

    confirmSendWarningText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Ensure that the address is correct and on the same network. Transactions cannot be cancelled."`]'
    confirmSendCancelBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Cancel"`][2]'
    confirmSendConfirmBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Confirm"`][2]'

    // Pending Component
    pendingText = '~loading-modal-loadingwallet'    // PENDING...

    // Send Success Component
    sendSuccessTitleText = '~We are sending your token'
    sendSuccessDescriptionText = '~It may take a few minutes for the token to send and appear in your wallet.'
    sendSuccessViewBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "View Transaction"`][2]'

    // History Component
    historyTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Transactions History"`][5]'
}

export class SendModel extends SendComponent {
    balanceBeforeSend: string = ''
    sendAmount: string = ''

    public async setSendDetails(sendAmount: string) {
        // this.balanceBeforeSend = parseInt(await action.getValue(this.sendAmountTextField))
        this.balanceBeforeSend = await action.getValue('-ios class chain:**/XCUIElementTypeTextField[`value == "999980.186999999"`]') // need to have test-id
        this.sendAmount = sendAmount
    }

    public async compareTokenAmount(balanceConfig: BalanceConfig) {
        const walletBalance: string = await erc20.getBalance(balanceConfig.rpc, balanceConfig.tokenAddress, balanceConfig.walletAddress)
        const mockBalance: string = (parseFloat(this.balanceBeforeSend) - parseFloat(this.sendAmount)).toString()

        if (walletBalance == mockBalance) {
            await assert.checkTokenBalance('-ios class chain:**/XCUIElementTypeTextField[`value == "' + mockBalance + '"`]', balanceConfig) // need to have test-id
        }
    }

    public async sendToken(token: string, toAddress: string, amount: string) {
        await action.click(this.homeSendBtn)
        await action.click(this.sendSelectTokenKUBBtn)

        switch (token) {
            case 'KUB':
                await action.click(this.selectTokenKUBBtn)
                break
            case 'WTK':
                await action.click(this.selectTokenWTKBtn)
                // await action.click('-ios class chain:**/XCUIElementTypeOther[`name == "WTK WToken $2,774.09  100,044 WTK"`][2]')
                break
            case 'FST':
                await action.click(this.selectTokenFSTBtn)
                // await action.click('-ios class chain:**/XCUIElementTypeOther[`name == "F FST fins token $0  999,980.18699999 FST"`][2]')
                break
            default:
                await action.click(this.selectTokenKUBBtn)
                break
        }

        await action.enterText(this.sendToTextField, toAddress) // set to address
        await action.tapKeyboard()   // Out of textfield
        await action.enterText(this.sendAmountTextField, amount)    // set amount
        await action.tapKeyboard()   // Out of textfield
        await action.click(this.sendNextBtn)    // tap next button
        await action.pause(500)
        await action.click(this.confirmSendConfirmBtn)  // tap confirm button
        await action.pause(4000)
    }
}

interface BalanceConfig {
    rpc: string;
    tokenAddress: string;
    walletAddress: string;
}

//9.142038786