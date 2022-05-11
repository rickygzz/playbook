const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('./server/node_modules/@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

/**
 * Explorer2
 */

app.get('/explorer2', async (req, res) => {
    const allExplorers =  await prisma.explorer2.findMany({});
    res.json(allExplorers);
});

app.get('/explorer2/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer2.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorer2', async (req, res) => {
    const explorer = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments,
        hasCertification: req.body.hasCertification
    };
    const message = 'Explorer2 creado: ' + req.body.name;
    await prisma.explorer2.create({data: explorer});
    return res.json({message});
});

app.put('/explorer2/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer2.update({
		where: {
			id: id
		},
		data: {
			lang: req.body.lang
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorer2/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer2.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});