// ts uses import keyword
import express from 'express'

// config express app
const app = express()
// port is a union bc process.env
const PORT: number = 3001

// confunsing to know what type from packages -- ??
app.get('/', (req: any, res: any) => {
  res.send('hello from typescript!')
})

app.listen(PORT, (): void => {
  console.log(`you are listening to typescript fm on port ${PORT}`)
})