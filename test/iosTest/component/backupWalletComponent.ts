import { Action } from "../../mainComponent/mainFunction/Action.js"
import { Assertion } from "../../mainComponent/mainFunction/Assert.js"

const action = new Action()
const assert = new Assertion()

export class BackUpWalletComponent {
    // Splash Screen Component
    splashScreenCreateWalletBtn = '~Create a new wallet'

    //  Create Wallet Component
    createWalletMnemonic12WordBtn = '~12-word Mnemonic wallet A 12-word seed phrase is a collection of randomly generated words during a crypto wallet setup.'
    createWalletMnemonic24WordBtn = '~24-word Mnemonic wallet A 24-word seed phrase is a collection of randomly generated words during a crypto wallet setup.'
    createWalletContinueBtn = '~Continue'

    // Create Wallet Success Page Component
    createWalletSuccessHeaderText = "~You're all done!"
    createWalletSuccessBackupBtn = '~Back Up Wallet'

    // Back Up Page Modal Component
    backupWalletModalHeaderText = '~Do this step in private place'
    backupWalletModalDescriptionText = '~Your recovery phrase is what grants you ( and anyone who has it ) access to your funds. Be sure to store it in a safe place.'
    backupWalletModalContinueBtn = '~Continue'

    // Back Up Wallet Page Component
    backupWalletBackBtn = '~'
    backupWalletTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Back up Mnemonic phrase"`]'
    backupWalletHeaderText = '~Your Mnemonic phrase'
    backupWalletDescriptionText = '~Remember to record your words in the same order as they appear below.'
    backupWalletCopyBtn = '~copy to clipboard'
    backupWalletCheckboxBtn = '~I understand that if I lose my recovery phrase, I will not be able to access my funds.'
    backupWalletContinueBtn = '~Continue'
    backupWalletCopyText = '-ios class chain:**/XCUIElementTypeToast[`name == "Copied!"`]'
    backupWallet12Text = '~backup-mnemonic-position-12'
    backupWallet24Text = '~backup-mnemonic-position-24'

    // Pick Mnemonic Page Component
    pickMnemonicBackBtn = '~'
    pickMnemonicTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Back up Mnemonic phrase"`]'
    pickMnemonicHeaderText = '~Your Mnemonic phrase'
    pickMnemonicDescriptionText = '~Remember to record your words in the same order as they appear below.'
    pickMnemonicContinueBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Continue"`][2]'
    pickMnemonicCorrectMnemonicText = '-ios class chain:**/XCUIElementTypeStaticText'
    pickMnemonicPositionText = '~backup-mnemonic-position-'
    pickMnemonicPhraseBtn = '-ios class chain:**/XCUIElementTypeOther'

    // Backup Done
    backupSuccessHeaderText = '~You are ready to safely manage your crypto'
    backupSuccessContentText = '~Don’t show your recovery phrase to anyone.'
    backupSuccessDoneBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Done"`][2]'


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
            await assert.checkDisabled(element);
        }
    }

    async checkShowCorrectMnemonic() {
        const component = new BackUpWalletComponent();
        await this.removeCorrectMnemonic();
        for (let i = 0; i < 4; i++) {
            const mnemonicBtn: string = component.pickMnemonicPhraseBtn + '[`name == "' + this.invalidMnemonicList[i] + '"`]';
            const correctMnemonicText: string = component.pickMnemonicCorrectMnemonicText + '[`name == "' + this.validMnemonicList[i] + '"`]';
            
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