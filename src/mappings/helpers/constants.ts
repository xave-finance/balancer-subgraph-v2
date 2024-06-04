import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

import { assets } from './assets';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProtocolFeeType {
  export const Swap = 0;
  export const FlashLoan = 1;
  export const Yield = 2;
  export const Aum = 3;
}

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const ZERO_BD = BigDecimal.fromString('0');
export const ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export const ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

export const MAX_TIME_DIFF_FOR_PRICING = BigInt.fromI32(600); // 10min

export let MAX_POS_PRICE_CHANGE = BigDecimal.fromString('1'); // +100%
export let MAX_NEG_PRICE_CHANGE = BigDecimal.fromString('-0.5'); // -50%%

export const MIN_POOL_LIQUIDITY = BigDecimal.fromString('2000');
export const MIN_SWAP_VALUE_USD = BigDecimal.fromString('1');

export let FX_ASSET_AGGREGATORS = assets.fxAssetAggregators;

export let USD_STABLE_ASSETS = assets.stableAssets;
export let PRICING_ASSETS = assets.stableAssets.concat(assets.pricingAssets);

class AddressByNetwork {
  public taikokatla: string;
  public berachainpublictestnet: string;
  public taikohekla: string;
}

let network: string = dataSource.network();

// this list should be updated only if vault is deployed on a new chain
// with an address different than the standard vanity address
// in that case, AddressByNetwork and forNetwork must be updated accordingly
// with a new entry for the new network - folowwing subgraph slugs
let vaultAddressByNetwork: AddressByNetwork = {
  taikokatla: '0x7A73FA0Be231B44dbcA23E98F49CAe7F11f367Ba',
  berachainpublictestnet: '0xD6D473f54Cda4eb4396690e35d806131bdffE579',
  taikohekla: '0xfbBf11Ae3E8A4b6D9C866B3f16741D1641ccc4d5',
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  // no `replaceAll` therefore two replaces
  network = network.replace('-', '').replace('-', '');
  if (network == 'taikokatla') {
    return Address.fromString(addressByNetwork.taikokatla);
  } else if (network == 'taikohekla') {
    return Address.fromString(addressByNetwork.taikohekla);
  } else if (network == 'berachainpublictestnet') {
    return Address.fromString(addressByNetwork.berachainpublictestnet);
  } else {
    throw new Error('Unsupported network: ' + network);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
