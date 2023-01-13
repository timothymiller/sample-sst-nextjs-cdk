import { StackContext, NextjsSite } from '@serverless-stack/resources'

export function MyStack({ stack, app }: StackContext) {
  // Lambda API
  // Create the Lambda API
  // const api = new Api(stack, 'api', {
  //   routes: {
  //     'GET /': 'functions/lambda.handler'
  //   }
  // })
  // stack.addOutputs({
  //   ApiEndpoint: api.url
  // })

  // DynamoDB Table
  // Create the table
  // const table = new Table(stack, 'Counter', {
  //   fields: {
  //     counter: 'string'
  //   },
  //   primaryIndex: { partitionKey: 'counter' }
  // })

  // Create a Next.js site
  const site = new NextjsSite(stack, 'DemoSite', {
    path: 'frontend',
    environment: {
      // Pass the table details to our app
      REGION: app.region
      // TABLE_NAME: table.tableName
    }
  })

  // Allow the Next.js API to access the table
  // site.attachPermissions([table])

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url
  })
}
