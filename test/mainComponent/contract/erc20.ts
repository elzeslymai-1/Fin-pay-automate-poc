import { ethers, Contract } from "ethers";
import { ERC20_ABI } from "./abi/erc20.abi.ts";

export class ERC20 {

    async getBalance(rpc: string, tokenAddress: string, walletAddress: string): Promise<string> {
        const provider = new ethers.JsonRpcProvider(rpc);
        const tokenContract = new Contract(tokenAddress, ERC20_ABI, provider);

        try {
            const balanceWei = await tokenContract.balanceOf(walletAddress);
            const decimals = await tokenContract.decimals();
            const balance = ethers.formatUnits(balanceWei, decimals);
            return balance;
        } catch (error) {
            console.error("Error fetching balance:", error);
            throw error;
        }
    }
}

