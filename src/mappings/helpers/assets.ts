// This file is automatically generated and contains assets from artio.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const USDC_ADDRESS = Address.fromString('0x94d81606Dca42D3680c0DFc1d93eeaF6C2D55f2d');
export const Mock_USDT_ADDRESS = Address.fromString('0x6360a8Adb883CA076e7F2c6d2fF37531A771e414');
export const Mock_DAI_ADDRESS = Address.fromString('0xe5d80E9A857BF5cc73e40144cb28c8a401BdAe0c');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x94d81606Dca42D3680c0DFc1d93eeaF6C2D55f2d'), // USDC
    Address.fromString('0x6360a8Adb883CA076e7F2c6d2fF37531A771e414'), // Mock_USDT
    Address.fromString('0xe5d80E9A857BF5cc73e40144cb28c8a401BdAe0c'), // Mock_DAI
  ],
  pricingAssets: [
  ],
  fxAssetAggregators: [
  ],
};
