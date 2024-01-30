import { Action } from "../../mainComponent/mainFunction/Action.js"
import { Assertion } from "../../mainComponent/mainFunction/Assert.js"

const action = new Action()
const assert = new Assertion()

export class BackUpWalletComponent {
    // Splash Screen Component
    splashScreenCreateWalletBtn = '~guideline-createwallet-btn'

    //  Create Wallet Component
    createWalletMnemonic12WordBtn = '~createwallet-mnemonic-12word'
    createWalletMnemonic24WordBtn = '~createwallet-mnemonic-24word'
    createWalletContinueBtn = '~createwallet-continue-btn'

    // Create Wallet Success Page Component
    createWalletSuccessHeaderText = "~createwallet-success-title"
    createWalletSuccessBackupBtn = '~createwallet-success-backup'

    // Back Up Page Modal Component
    backupWalletModalHeaderText = '~backup-mnemonicmodal-title'
    backupWalletModalDescriptionText = '~backup-mnemonicmodal-description'
    backupWalletModalContinueBtn = '~backup-mnemonic-continue'

    // Back Up Wallet Page Component
    backupWalletBackBtn = '~'
    backupWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Back up Mnemonic phrase"`]'
    backupWalletHeaderText = '~backup-mnemonic-title'
    backupWalletDescriptionText = '~backup-mnemonic-subtitle'
    backupWalletCopyBtn = '~backup-mnemonic-copytext'
    backupWalletCheckboxBtn = '~backup-mnemonic-agreement'
    backupWalletContinueBtn = '~backup-mnemonic-continue'
    backupWalletCopyText = '-ios class chain:**/XCUIElementTypeToast[`name == "Copied!"`]'
    backupWallet12Text = '~backup-mnemonic-position-12'
    backupWallet24Text = '~backup-mnemonic-position-24'

    // Pick Mnemonic Page Component
    pickMnemonicBackBtn = '~'
    pickMnemonicTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Back up Mnemonic phrase"`]'
    pickMnemonicHeaderText = '~backup-mnemonic-title'
    pickMnemonicDescriptionText = '~backup-mnemonic-subtitle'
    pickMnemonicContinueBtn = '~backup-mnemonic-cotinue'
    pickMnemonicCorrectMnemonicText = '~backup-mnemonic-value-'
    pickMnemonicPositionText = '~backup-mnemonic-position-'
    pickMnemonicPhraseBtn = '-ios class chain:**/XCUIElementTypeOther'

    // Backup Done
    backupSuccessHeaderText = '~backup-success-title'
    backupSuccessContentText = '~backup-success-subtitle'
    backupSuccessDoneBtn = '~backup-mnemonic-done'


    // Home Page Component
    homeTabHomeBtn = '~Home, tab, 1 of 4'
}

export class BackUpWalletModel {

    realMnemonic: string[] = []
    realPosition: number[] = []
    validMnemonicList: string[] = []
    invalidMnemonicList: string[] = []

    async setMnemonic(mnemonicConfig: string) {
        this.realMnemonic = mnemonicConfig.split(" ").filter((value) => value !== '');
        this.invalidMnemonicList = [...this.realMnemonic];
    }

    async setPosition() {
        const component = new BackUpWalletComponent();
        this.realPosition = await Promise.all(
            Array.from({ length: 4 }, async (_, i) => {
                return Number(await action.getValue(`${component.pickMnemonicPositionText}${i + 1}`));
            })
        );
    }

    async clearPosition(){
        this.realPosition = []
    }

    async removeCorrectMnemonic() {
        this.validMnemonicList = this.realPosition.map((value) => this.realMnemonic[value - 1]);

        this.validMnemonicList.forEach((validValue) => {
            this.invalidMnemonicList = this.invalidMnemonicList.filter((value) => value !== validValue);
        });
    }

    async checkMnemonicBtnDisable() {
        const component = new BackUpWalletComponent();
        for (const value of this.realPosition) {
            const element: string = component.pickMnemonicPhraseBtn + '[`name == "' + this.realMnemonic[value - 1] + '"`][2]';
            await action.click(element);
            await action.pause(500)
            await assert.checkDisabled(element);
        }
    }

    async checkShowCorrectMnemonic() {
        const component = new BackUpWalletComponent();
        await this.removeCorrectMnemonic();
        for (let i = 0; i < 4; i++) {
            const mnemonicBtn: string = component.pickMnemonicPhraseBtn + '[`name == "' + this.invalidMnemonicList[i] + '"`]';
            const correctMnemonicText: string = component.pickMnemonicCorrectMnemonicText + (i+1);
            
            await action.click(mnemonicBtn);
            await assert.checkText(correctMnemonicText, this.validMnemonicList[i]);
            await action.click(component.pickMnemonicPhraseBtn + '[`name == "' + this.validMnemonicList[i] + '"`]');
        }
    }

    async checkSelectMnemonicPhrase(): Promise<void> {
        const component = new BackUpWalletComponent();
        for (const value of this.realPosition) {
            await action.click(component.pickMnemonicPhraseBtn + '[`name == "' + this.realMnemonic[value - 1] + '"`]');
        }
    }
}