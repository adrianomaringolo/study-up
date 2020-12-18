exports.post = (req, res, next) => {
   // #swagger.tags = ['User']
   // #swagger.description = 'Endpoint para adicionar um usuário.'

   /* #swagger.parameters['newUser'] = {
         in: 'body',
         description: 'Informações do usuário.',
         required: true,
         type: 'object',
         schema: { $ref: "#/definitions/AddUser" }
      } */

        const newUser = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'Usuário registrado com sucesso!' }
            return res.status(201).send('Rota POST!')
        }
        return res.status(500)    // #swagger.responses[500]
};
 
exports.put = (req, res, next) => {
   // #swagger.tags = ['User']
   // #swagger.description = 'Endpoint para atualizar um usuário.'
   let id = req.params.id;
   res.status(201).send(`Rota PUT com ID! --> ${id}`);
};
 
exports.delete = (req, res, next) => {
   // #swagger.tags = ['User']
   // #swagger.description = 'Endpoint para apagar um usuário.'
   let id = req.params.id;
   res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};
 
exports.get = (req, res, next) => {
   // #swagger.tags = ['User']
   // #swagger.description = 'Endpoint para buscar usuários.'
   res.status(200).send('Rota GET!');
};
 
exports.getById = (req, res, next) => {
   // #swagger.tags = ['User']
   // #swagger.description = 'Endpoint para buscar um usuário.'
   /* #swagger.parameters['id'] = {
         description: 'ID do usuário.',
         type: 'number'
      } */
   let id = req.params.id;

   /* #swagger.responses[200] = { 
         schema: { $ref: "#/definitions/User" },
         description: 'Usuário encontrado.' 
      } */
   res.status(200).send(`Rota GET com ID! ${id}`);
};