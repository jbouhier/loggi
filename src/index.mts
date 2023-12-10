import chalk from 'chalk'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import process from 'process'

const host = 'localhost'
const port = process.env.PORT ?? 3000

const app: Application = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.disable('x-powered-by')

app.get('/', (_: Request, res: Response) => res.send('System online'))

app.listen(port, () => {
  console.log(chalk.blue.bold(
    'Server is runnning ' +
    chalk.white.underline(`http://${host}:${port}`) +
    ' 🖥️'
  ))
  // swaggerDocs(app, host, port)
})
