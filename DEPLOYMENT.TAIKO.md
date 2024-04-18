## Setting up GoldSky

```sh
# install goldsky cli
curl https://goldsky.com | sh
# authenticate
goldsky login
```

## Building and deploying Taiko Katla Testnet subgraph to GoldSky

```sh
# install node modules
yarn

# generate types



# build and deploy the subgraph
rm -rf src/types && \
yarn generate-assets katla && \
  yarn generate-manifests && \
  cp subgraph.katla.full.yaml subgraph.yaml && \
  npx graph codegen --output-dir src/types && \
  yarn build && \
  goldsky subgraph delete andrei-test-katla/0.0.1 && \
  goldsky subgraph deploy andrei-test-katla/0.0.1 --path .
  # goldsky subgraph delete test-katla/0.0.1 && \
  # goldsky subgraph deploy test-katla/0.0.1 --path .

# list subgraphs
goldsky subgraph list


```

### Adding a new network

- add `assets/[NETWORK].json`
- update `src/mappings/helpers/constants.ts`
- add network in `networks.yaml`
