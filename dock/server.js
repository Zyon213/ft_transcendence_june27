const express = require('express')
const pool = require ('./db')

const port = 3000 

const app = express()

app.use(express.json())
app.get('/', async(req, res) => {
	try {
		await pool.query('SELECT * FROM school');
		res.status(200).send(data.rows)
	}
	catch(err){
		console.log(err)
		res.sendStatus(500)
	}
})


app.post('/', async(req, res) => {
	const { name, location } = req.body
	try {
		await pool.query('INSERT INTO school (name, address) VALUES ($1, $2)', [name, location]);
		res.status(200).send({messgae: "Succesfully added child"})
	}
	catch(err){
		console.log(err)
		res.sendStatus(500)
	}
})

app.get('/setup', async(req, res) => {
	try {
		await pool.query('CREATE TABLE school (id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))');
		res.status(200).send({messgae: "Succesfully created table"})

	}
	catch(err){
		console.log(err)
		res.sendStatus(500)
	}
})
app.listen(port, () => console.log(`server has started on port: ${port}`))