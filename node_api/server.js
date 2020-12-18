const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUI = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerFile = YAML.load('./src/config/Swagger/swagger.yaml');
const swaggerFile = require('./src/config/Swagger/swagger_output.json');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

require('./src/config/Routes/index')(app);

app.use(cors());
app.use(express.json());
app.listen(3000);