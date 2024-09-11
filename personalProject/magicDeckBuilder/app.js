import express from 'express'
import session from 'express-session'
import ViteExpress from 'vite-express'
import { User } from './server/model.js'

const app = express()
const port = '5173'
ViteExpress.config({ printViteDevServerHost: true })


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({ secret: 'StormCrow', saveUninitialized: true, resave: false}))

const loginRequired = (req,res, next) => {
    if(!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized' })
    } else {
        next()
    }
}

ViteExpress.listen(app, port, () => console.log(`Watch out! The server is listening to you in your walls on http://localhost:${port}`))

// app.get('/api/auth', async (req,res) => {
//     const allUsers = await User.findAll()
//     res.json(allUsers)
// })

app.post('/api/auth', async (req,res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: {email: email } })
    console.log(user.id)
    console.log(req.session.userId)

    if (user && user.password === password) {
        req.session.userId = user.id
        // user.logged_in = true
        res.json({ success: true, logged_in: true })
        console.log(req.session.userId)
    } else {
        res.json({ success: false, logged_in: false })
    }
})

app.post('/api/logout', (req,res) => {
    console.log(req.session.id)
    console.log(req.session.logged_in)
    if (!req.session.userId) {
        res.status(401).json( {error: 'Unauthorized' } )
    }else {
        req.session.destroy()
        res.json({ success: true, logged_in: false })
    }
})





