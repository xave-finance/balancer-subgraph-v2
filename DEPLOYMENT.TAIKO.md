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

# build and deploy the subgraph

yarn generate-assets katla && \
  yarn generate-manifests && \
  cp subgraph.katla.full.yaml subgraph.yaml && \
  yarn build && \
  goldsky subgraph delete test-katla/0.0.1 && \
  goldsky subgraph deploy test-katla/0.0.1 --path .

# list subgraphs
goldsky subgraph list


```
