
module.exports = app => {
  app.get('/', app.controller.edition.list);
  app.get('/latest', app.controller.edition.edition2);
  app.get('/1', app.controller.edition.edition1);
  app.get('/2', app.controller.edition.edition2);
};
