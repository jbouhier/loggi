# TODO

- [x] README
- [x] Read file bottom to top
- [x] Decent performance with **>1GB** files
- [x] Endpoint with query parameters:
  - [] Filename within `/var/log` (and subfolders)
  - [] Last **n** number of logs to retrieve
  - [] Filter results on **text matches**

> **Do not** use external libs for `fs` and `file parsing`

## Bonus

Add a frontend to interact with the API - [Ant Design Pro](https://pro.ant.design/)

## Optional

- Send REST request to “primary” server, subsequently requesting logs from “secondary” servers
- Use any protocol for comm of primary/secondary servers [NodeJS Cluster API](https://nodejs.org/api/cluster.html)?
- Architecture choice is free

## Notes

- NodeJS logger https://github.com/winstonjs/winston
