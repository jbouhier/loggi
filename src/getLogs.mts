import { Request, Response } from "express"
import { createReadStream, createWriteStream } from "node:fs"
import { Transform } from "node:stream"

const dir = process.env.DIR ?? '/var/log'

export const getLogs = ({ query }: Request, res: Response) => {
  const { filename, limit, filter } =  query
  readFile('test.log')
  res.send(query)
} 

function readFile(filePath: string) {
  let data = ""
  const readStream = createReadStream(filePath, 'utf8')
  const reversedDataFilePath = filePath.split('.')[0] + '-reversed.'+ filePath.split('.')[1];
  const writeStream = createWriteStream(reversedDataFilePath);

  readStream.on('error', ({message}: Error) => console.error(message))
  readStream.on('data', chunk => data += chunk)
  // readStream.on('end', () => console.log(data))

  const reverseStream = new Transform({
    transform (data, encoding, callback) {
      const reversedData = data.toString().split("\n").reverse().join("\n")
      this.push(reversedData)
      callback()
    }
  })

  readStream.pipe(reverseStream).pipe(writeStream).on('finish', () => {
    console.log(`Reverted ${filePath}'s content to ${reversedDataFilePath}.`)
  })
}
