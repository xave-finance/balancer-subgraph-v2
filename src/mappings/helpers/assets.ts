// This file is automatically generated and contains assets from katla.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const USDC_ADDRESS = Address.fromString('0x3481c2314E4D15603A05Ee7e6BE25fcE4B128a5c');
export const Mock_DAI_ADDRESS = Address.fromString('0x9f555A3115C2Da9574c84C4Dfb1617193aA7AFE2');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x3481c2314E4D15603A05Ee7e6BE25fcE4B128a5c'), // USDC
    Address.fromString('0x9f555A3115C2Da9574c84C4Dfb1617193aA7AFE2'), // Mock_DAI
  ],
  pricingAssets: [
  ],
  fxAssetAggregators: [
    [
      Address.fromString('0x3481c2314E4D15603A05Ee7e6BE25fcE4B128a5c'), // USDC
      Address.fromString('0x8Ac6F66307d1bcFBb4a7b7d4EB86b36b644192Ca'), // USDC/USD
    ],
    [
      Address.fromString('0xf7E8Ab78dC91a4FdDA1DFba6c81bAF1870d2D957'), // XSGD
      Address.fromString('0x59847B1314E1A1cad9E0a207F6E53c04F4FAbFBD'), // SGD/USD
    ],
    [
      Address.fromString('0x48623292bD8293b747571934379B9D3E5423DBB6'), // EURS
      Address.fromString('0xf5b0b3b50328B2595BC6a31A526A8A3568CEa42d'), // EUR/USD
    ],
    [
      Address.fromString('0x9f555A3115C2Da9574c84C4Dfb1617193aA7AFE2'), // DAI
      Address.fromString('0x8Ac6F66307d1bcFBb4a7b7d4EB86b36b644192Ca'), // USDC/USD
    ],
    [
      Address.fromString('0xE950eC7Fc508dd86fD9B36671f6B1602007D5B72'), // TXAU
      Address.fromString('0x15d10f0f4a1BF132883a09A4B415f4860271C0Cd'), // XAU/USD
    ],
    [
      Address.fromString('0xFA505d02269bF4Ea59355a4e37fBd882122717e5'), // VCHF
      Address.fromString('0xA8A70c9C8e9EcfB3fddF177103F31D710132c794'), // CHF/USD
    ],
  ],
};
