const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/config/Swagger/swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

require('./src/config/Routes/index')(app);

app.use(cors());
app.use(express.json());
app.listen(3333);