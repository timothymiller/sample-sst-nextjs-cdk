import { NextjsSite } from 'sst/constructs'

export default {
  config: () => ({
    name: 'my-app',
    region: 'us-east-1',
  }),
  stacks: async (app) => {
    app.stack(function Web(ctx) {
      new NextjsSite(ctx.stack, 'MySite')
    })
  },
}
