
module.exports = app => {
  app.get('/', app.controller.home.homepage);
  app.get('/download', app.controller.home.homepage);
  app.get('/news', app.controller.home.homepage);
  app.get('/companyProfile', app.controller.home.homepage);
};