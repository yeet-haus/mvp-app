import { APP_CONTRACT } from "./contract";

export enum ProposalTypeIds {
  Signal = "SIGNAL",
  IssueSharesLoot = "ISSUE",
  AddShaman = "ADD_SHAMAN",
  TransferErc20 = "TRANSFER_ERC20",
  TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
  UpdateGovSettings = "UPDATE_GOV_SETTINGS",
  UpdateTokenSettings = "TOKEN_SETTINGS",
  TokensForShares = "TOKENS_FOR_SHARES",
  GuildKick = "GUILDKICK",
  WalletConnect = "WALLETCONNECT",
}

export const APP_TX = {
  YEETER_SUMMON: {
    id: "YEETER_SUMMON",
    contract: APP_CONTRACT.YEETER_SUMMONER,
    method: "summonBaalFromReferrer",
    argCallback: "assembleYeeterSummonerArgs",
    // customPoll: {
    //   fetch: pollLastTXSilo,
    //   test: testLastTXSilo,
    // },
  },
};
