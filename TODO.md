# TODO

- [x] README
- [] Endpoint returns **n lines** from a **given log file**
- [] Order logs newest to oldest: From bottom to top of file
- [] REST API query parameters:
  - [] Filename (within `/var/log`)
  - [] Last **n** number of logs to retrieve
  - [] Filter results on **text matches**
- [] Decent performance with **>1GB** files

> **Do not** use external libs for `fs` and `file parsing`

## Bonus

Add a frontend to interact with the API - [Ant Design Pro](https://pro.ant.design/)

## Optional

- Send REST request to “primary” server, subsequently requesting logs from “secondary” servers
- Use any protocol for comm of primary/secondary servers [NodeJS Cluster API](https://nodejs.org/api/cluster.html)?
- Architecture choice is free

## Notes

- NodeJS logger https://github.com/winstonjs/winston
