import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      feedback: Model,
    },

    seeds(server) {
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date(),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date(2018, 11, 24, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 0,
        date: new Date(2019, 11, 24, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 2,
        date: new Date(2020, 11, 24, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date(2018, 10, 30, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Rien à dire',
        mark: 4,
        date: new Date(2020, 8, 24, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2020, 7, 13, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2018, 11, 16, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2019, 5, 11, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 5,
        date: new Date(2021, 5, 10, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2021, 6, 10, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date(2021, 9, 10, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Rien à dire',
        mark: 4,
        date: new Date(2020, 0, 10, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2021, 2, 24, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2020, 3, 12, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2018, 11, 5, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 5,
        date: new Date(2019, 0, 5, 10, 33, 30, 0),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(2021, 6, 10, 10, 33, 30, 0),
      })
    },

    routes() {
      this.namespace = 'api'
      this.get('feedbacks', (schema) => {
        return schema.feedbacks.all()
      })
      this.get('/feedbacks/date/:start/:end', (schema, request) => {
        let start = new Date(request.params.start)
        let end = new Date(request.params.end)
        console.log(start)
        console.log(end)
        return schema.feedbacks.all().filter((item) => {
          let date = new Date(item.date)
          return date >= start && date <= end
        })
      })
    },
  })

  return server
}
