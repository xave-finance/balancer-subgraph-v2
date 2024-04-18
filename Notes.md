- there's a vesting period of 1.5 years with a cliff of 6 months

  - wait for 6 months
  - after 6 months, you can start streaming XAV tokens from your Sablier Stream for the next 1.5 years

  ####

  - new USDC:XSGD FXPool 0xD2eA83f95e3E3aa0D7ef1bD08f7267EDDb49728d
  - @tx https://polygonscan.com/tx/0x1122fb4d612f1507fddb7e5f85a641a65db09b9187363f8f2245daf923c55339
  - block 54843118
  - FXPoolDeployer 0x171665a8d7e7306869a43e8efd312dfee6027352

Subgraph failed with non-deterministic error: failed to process trigger: block #54843118 (0x4cfd…971c), transaction 1122fb4d612f1507fddb7e5f85a641a65db09b9187363f8f2245daf923c55339: error while executing at wasm backtrace: 0: 0xb274 - <unknown>!src/types/schema/FXOracle#save 1: 0xb60b - <unknown>!src/mappings/poolFactory/handleNewFXPool 2: 0xb922 - <unknown>!src/mappings/poolFactory/handleNewFXPoolV2: Entity FXOracle[0xf9c53a834f60cbbe40e27702276fbc0819b3afad]: missing value for non-nullable field `divisor`: Entity FXOracle[0xf9c53a834f60cbbe40e27702276fbc0819b3afad]: missing value for non-nullable field `divisor`, retry_delay_s: 894, attempt: 3

TXAU: 0xa6da8c8999c094432c77e7d318951d34019af24b
TXAG: 0x57fcbd6503c8be3b1abad191bc7799ef414a5b31

09/04/2024, 15:58:14

INFO

Done processing trigger, gas_used: 0, data_source: FXPoolDeployer, handler: handleNewFXPoolV2, total_ms: 354, transaction: 0x1122…5339, address: 0x1716…7352, signature: NewFXPool(indexed address,indexed bytes32,indexed address)
