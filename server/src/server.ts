import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

//MÉTODOS HTTP(response)
// GET: Buscar ou listar uma info
// POST: Criar alguma nova info
// PUT: Atualizar um info ex
// DELETE: deletar um info ex


//Método na requisição
// Corpo (Request Body): Dados para criação ou atualização d um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, Filtros, ordenação
app.use(routes);

app.listen(3333);


