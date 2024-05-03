## Setting up GoldSky

```sh
# install goldsky cli
curl https://goldsky.com | sh
# authenticate
goldsky login
```

## Building and deploying a new subgraph to GoldSky

```sh
# install node modules
yarn

# build and deploy the subgraph
# nb: pass the name of the chain as the last argument to the cmd
# @see https://xc-labs.atlassian.net/wiki/spaces/XAVE/pages/394231811/Balancer+V2+FXPools+deployment+process
yarn run rebuild artio

# if already have a subgraph live, delete it first
goldsky subgraph delete test-artio/0.0.1 && \

# deploy the goldsky
goldsky subgraph deploy test-artio/0.0.1 --path .

# list subgraphs
goldsky subgraph list

```
