import { ethers } from "ethers"
import { ERC20_ABI } from '../component/erc20.abi.js'

export class sendComponent {

    // beforeAll Component
    splashScreenImportWalletBtn = `android=new UiSelector().text("Import a wallet").className("android.widget.TextView")`
    importWalletImportBtn = `android=new UiSelector().text("Import Wallet").className("android.widget.TextView")`
    importWalletPrivatekeyField = `android=new UiSelector().className("android.widget.EditText")`
    successContinueBtn = `android=new UiSelector().resourceId("createwallet-success-continue")`
    homeSendBtn = `android=new UiSelector().resourceId("home-actiondock-send")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingCustomTokenBtn = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    customTokenAddTokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`
    customTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    addTokenTextField = `android=new UiSelector().className("android.widget.EditText")`
    addTokenCheckBox = `android=new UiSelector().className("android.widget.CheckBox")`
    addTokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Send Component
    sendBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    sendTitleText = `android=new UiSelector().text("Send").className("android.view.View")`

    sendSelectTokenHeaderText = `android=new UiSelector().text("Select Token").className("android.widget.TextView")`
    sendSelectTokenKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    sendSelectTokenWTK = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    sendSelectTokenFST = `android=new UiSelector().text("FST").className("android.widget.TextView")`

    sendToHeaderText = `android=new UiSelector().text("To").className("android.widget.TextView")`
    sendToTextField = `android=new UiSelector().className("android.widget.EditText").index(3)`
    sendToPlaceHolder = `android=new UiSelector().text("Receive address").className("android.widget.EditText")`
    sendToInvalidText = `android=new UiSelector().text("Recipient address is invalid").className("android.widget.TextView")`

    sendAmountHeaderText = `android=new UiSelector().text("Amount").className("android.widget.TextView")`
    sendAmountTextField = `android=new UiSelector().className("android.widget.EditText").index(0)`
    sendAmountPlaceHolder = `android=new UiSelector().text("0.00").className("android.widget.EditText")`
    sendAmountMaxBtn = `android=new UiSelector().text("Max").className("android.widget.TextView")`

    sendNextBtn = `android=new UiSelector().text("Next").className("android.widget.TextView")`

    // Select Token Component
    selectTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    selectTokenTitleText = `android=new UiSelector().text("Select Token").className("android.view.View")`
    selectTokenSearchTextField = `android=new UiSelector().className("android.widget.EditText")`
    selectTokenSearchPlaceHolder = `android=new UiSelector().text("Search...").className("android.widget.EditText")`

    selectTokenKUB = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    selectTokenKUBFullName = `android=new UiSelector().text("KUB").className("android.widget.TextView")`

    selectTokenWTK = `android=new UiSelector().text("WTK").className("android.widget.TextView")`
    selectTokenWTKFullName = `android=new UiSelector().text("WToken").className("android.widget.TextView")`

    selectTokenFST = `android=new UiSelector().text("FST").className("android.widget.TextView")`
    selectTokenFSTFullName = `android=new UiSelector().text("fins token").className("android.widget.TextView")`

    selectTokenBottomText = `android=new UiSelector().text("Didn’t see your token? Import").className("android.widget.TextView")`

    // Transaction Error Component
    transacErrorTitleText = `android=new UiSelector().text("Transaction Error").className("android.widget.TextView")`
    transacErrorDescText = `android=new UiSelector().text("Insufficient balance a gas limit for the transaction, please try again later.").className("android.widget.TextView")`
    transacErrorOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // Insufficient Balance Component
    insuffTitleText = `android=new UiSelector().text("Insufficient Balance").className("android.widget.TextView")`
    insuffDescripText = `android=new UiSelector().text("You do not have enough KUB in this account").className("android.widget.TextView")`

    insuffOKBtn = `android=new UiSelector().text("OK").className("android.widget.TextView")`

    // Confirm Send Component
    confirmBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    confirmTitleText = `android=new UiSelector().text("Confirm Send").className("android.view.View")`
    confirmYouSendText = `android=new UiSelector().text("You send").className("android.widget.TextView")`
    confirm1KUBText = `android=new UiSelector().text("1 KUB").className("android.widget.TextView")`
    confirmFromText = `android=new UiSelector().text("From").className("android.widget.TextView")`
    confirmToText = `android=new UiSelector().text("To").className("android.widget.TextView")`
    confirmCoinText = `android=new UiSelector().text("Coin").className("android.widget.TextView")`
    confirmAmountText = `android=new UiSelector().text("Transfer amount").className("android.widget.TextView")`
    confirmNetworkText = `android=new UiSelector().text("Network").className("android.widget.TextView")`
    confirmFeeText = `android=new UiSelector().text("Network fee").className("android.widget.TextView")`
    confirmWarningText = `android=new UiSelector().text("Ensure that the address is correct and on the same network. Transactions cannot be cancelled.").className("android.widget.TextView")`

    confirmCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`
    confirmConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Pending Component
    pendingText = `android=new UiSelector().resourceId("loading-modal-loadingwallet")`

    // Send Success Component
    sendSuccessTitleText = `android=new UiSelector().text("We are sending your token").className("android.widget.TextView")`
    sendSuccessDescriptionText = `android=new UiSelector().text("It may take a few minutes for the token to send and appear in your wallet.").className("android.widget.TextView")`

    sendSuccessViewBtn = `android=new UiSelector().text("View Transaction").className("android.widget.TextView")`

    // History Component
    historyTitleText = `android=new UiSelector().text("Transactions History").className("android.view.View")`

    // Home Component
    homeFstBalance = `android=new UiSelector().resourceId("home-walletcardbalancetoken-FST")`
    homeFstFiat = `android=new UiSelector().resourceId("home-walletcardbalancefiat-FST")`

    homeWtkBalance = `android=new UiSelector().resourceId("home-walletcardbalancetoken-WTK")`
    homeWtkFiat = `android=new UiSelector().resourceId("home-walletcardbalancefiat-WTK")`

    homeKubBalance = `android=new UiSelector().resourceid("home-walletcardbalancetoken-KUB")`
    homeKubFiat = `android=new UiSelector().resourceId("home-walletcardbalancefiat-KUB")`
}

export class sendModel {
    async getNativeFst() {
        const customRpcEndpoint = `${process.env.BITKUBTESTNET_RPC}`
        const provider = new ethers.JsonRpcProvider(customRpcEndpoint);

        const fstTokenContract = new ethers.Contract(`${process.env.TEST_ADDTOKEN}`, ERC20_ABI, provider);

        const balanceWei = await fstTokenContract.balanceOf(`${process.env.MNEMONIC_ADDRESS}`);
        const decimals = await fstTokenContract.decimals();

        const balanceFst = ethers.formatUnits(balanceWei, decimals);
        return balanceFst;
    }
}