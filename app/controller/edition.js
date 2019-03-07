module.exports = app => {
  return class EditionController extends app.Controller {
    async homepage() {
      const { ctx } = this
      await ctx.renderClient('homepage/index.js')
    }
    async edition1() {
      const { ctx } = this
      await ctx.renderClient('edition1/index.js')
    }
    async edition2() {
      const { ctx } = this
      await ctx.renderClient('edition2/index.js')
    }
  }
}
