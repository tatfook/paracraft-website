module.exports = app => {
  return class EditionController extends app.Controller {
    async homepage() {
      const { ctx } = this
      await ctx.renderClient('homepage/index.js')
    }
  }
}
