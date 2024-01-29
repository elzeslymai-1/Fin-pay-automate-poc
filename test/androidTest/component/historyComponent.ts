export class historyComponent {

    // beforeAll Component
    splashScreenImportBtn = `android=new UiSelector().resourceId("guideline-importwallet-btn")`
    importMnemonicPhraseTextField = `android=new UiSelector().resourceId("importwallet-input-area")`
    importImportBtn = `android=new UiSelector().resourceId("importwallet-submit-btn")`
    homeHistoryBn = `android=new UiSelector().text("History").className("android.widget.TextView")`

    // History Component
    historyTitleText = `android=new UiSelector().text("Transactions History").className("android.view.View")`

    historySendRecordBtn = `android=new UiSelector().text("Send").className("android.widget.TextView")`

    // Send Record Component
    sendRecordBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    sendRecordTitleText = `android=new UiSelector().text("Send").className("android.view.View")`
    sendRecordAmountHeadText = `android=new UiSelector().text("Amount").className("android.widget.TextView")`
    sendRecordConfirmedHeadText = `android=new UiSelector().text("confirmed").className("android.widget.TextView")`
    sendRecordFromHeadText = `android=new UiSelector().text("From").className("android.widget.TextView")`
    sendRecordToHeadText = `android=new UiSelector().text("To").className("android.widget.TextView")`
    sendRecordNetworkHeadText = `android=new UiSelector().text("Network").className("android.widget.TextView")`
    sendRecordCompletedHeadText = `android=new UiSelector().text("Completed on").className("android.widget.TextView")`
    sendRecordGasHeadText = `android=new UiSelector().text("Gas Fee").className("android.widget.TextView")`
    sendRecordTotalHeadText = `android=new UiSelector().text("Total Received").className("android.widget.TextView")`

    sendRecordViewExplorerBtn = `android=new UiSelector().text("View on block explorer").className("android.widget.TextView")`
}