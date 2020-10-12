export const BLOCKCHAIN_BASE_PATH = '/blockchain';
export const BLOCKCHAIN_BLOCK_BASE_PATH = `${BLOCKCHAIN_BASE_PATH}/block`;
export const BLOCKCHAIN_BLOCK_PARAM_PATH = `${BLOCKCHAIN_BLOCK_BASE_PATH}/:height`;
export const BLOCKCHAIN_MINER_BASE_PATH = `${BLOCKCHAIN_BASE_PATH}/miner`;
export const BLOCKCHAIN_MINER_PARAM_PATH = `${BLOCKCHAIN_MINER_BASE_PATH}/:id`;
export const EXCHANGE_PATH = '/exchange';
export const HELP_PATH = '/help';
export const INDEX_PATH = '/index.html';
export const MASTER_NODES_PATH = '/masternodes';
export const MASTER_NODES_DETAIL_PATH = `${MASTER_NODES_PATH}/:hash`;
export const SETTING_PATH = '/settings';
export const WALLET_PAGE_PATH = '/';
export const WALLET_BASE_PATH = '/wallet';
export const WALLET_CREATE_PATH = '/wallet/create'
export const WALLET_RESTORE_PAGE_PATH = '/wallet/restore';
export const CREATE_NEW_WALLET_PATH = `${WALLET_BASE_PATH}/createnew`;
export const WALLET_SEND_PATH = `${WALLET_BASE_PATH}/send`;
export const WALLET_RECEIVE_PATH = `${WALLET_BASE_PATH}/receive`;
export const WALLET_CREATE_RECEIVE_REQUEST = `${WALLET_BASE_PATH}/receive/request`;
export const WALLET_PAYMENT_REQ_BASE_PATH = `${WALLET_BASE_PATH}/paymentrequest`;
export const WALLET_PAYMENT_REQ_PARAMS_PATH = `${WALLET_PAYMENT_REQ_BASE_PATH}/:id`;
export const CONSOLE_RPC_CALL_BASE_PATH = `/console`;
