#!/bin/sh -ex

# Check if at least one argument is provided
if [ $# -eq 0 ]
then
  echo "Error: Please provide a chain label."
  exit 1
fi

# Access the first argument (modify for specific argument)
CHAIN="$1"


rm -rf src/types && \
yarn generate-assets $CHAIN && \
  yarn generate-manifests && \
  cp subgraph.$CHAIN.full.yaml subgraph.yaml && \
  npx graph codegen --output-dir src/types && \
  yarn build
