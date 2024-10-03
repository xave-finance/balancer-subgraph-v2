## Grafting

```sh
./scripts/rebuild.sh bartio

# update build/subgraph.yaml with the following
# nb: the base is the deployment ID of the base subgraph to graft on

# features:
#  - grafting
# graft:
#  # @TODO remove graft for production
#  block: 5042341
#  base: QmRQDzMchNhmGPry1WCYku9Jy72KUcjnQAxNaotDQxTiQ2

# deploy
goldsky subgraph deploy bartio-burr-interactions/0.0.4 --path . --graft-from bartio/0.0.1 --start-block 5042341
```
