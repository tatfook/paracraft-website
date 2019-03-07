module.exports = app => {
  return class EditionController extends app.Controller {
    async list() {
      const { ctx } = this
      await ctx.renderClient('list/index.js')
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
