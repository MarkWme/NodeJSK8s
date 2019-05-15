const Client = require('kubernetes-client').Client
const K8sConfig = require('kubernetes-client').config
const config = K8sConfig.fromKubeconfig
const client = new Client({ config: config.fromKubeconfig(), version: '1.12'})

const namespaces = await client.api.v1.namespaces.get()