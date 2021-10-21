import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      feedback:Model,
    },

    seeds(server) {
      server.create("feedback",{
        comment: 'Parfait, très beau site',
        mark: 5,
      },)
      server.create("feedback",{
        comment: 'Rien à dire',
        mark: 4,
      },)
      server.create("feedback",{
        comment: 'Médiocre',
        mark: 1,
      },)
      server.create("feedback",{
        comment: 'Médiocre',
        mark: 1,
      },)
      server.create("feedback",{
        comment: 'Médiocre',
        mark: 1,
      },)
      server.create("feedback",{
        comment: 'Médiocre',
        mark: 1,
      },)
      server.create("feedback",{
        comment: 'Médiocre',
        mark: 1,
      },)
      
    },


    routes() {
      this.namespace = "api"
      this.get("/feedbacks", (schema) => {
        return schema.feedbacks.all()
      })
    },
  })

  return server
}
