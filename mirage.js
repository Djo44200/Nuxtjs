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
        date: new Date('30/11/2020'),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 0,
        date: new Date('30/08/2020'),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 2,
        date: new Date('30/05/2015'),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date('30/10/2018'),
      })
      server.create('feedback', {
        comment: 'Rien à dire',
        mark: 4,
        date: new Date('30/12/2020'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('11/05/2021'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('14/11/2020'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('11/11/2011'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 5,
        date: new Date('7/04/2019'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(),
      })
      server.create('feedback', {
        comment: 'Parfait, très beau site',
        mark: 5,
        date: new Date(),
      })
      server.create('feedback', {
        comment: 'Rien à dire',
        mark: 4,
        date: new Date('30/12/2020'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('11/05/2021'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('14/11/2020'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date('11/11/2011'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 5,
        date: new Date('7/04/2021'),
      })
      server.create('feedback', {
        comment: 'Médiocre',
        mark: 1,
        date: new Date(),
      })
    },

    routes() {
      this.namespace = 'api'
      this.get('feedbacks', (schema) => {
        return schema.feedbacks.all()
      })
      this.get('/feedbacks/date/:start/:end', (schema, request) => {
        let start = request.params.start
        let end = request.params.end
        return schema.feedbacks.all().filter((item) => {
          let date = new Date(item.date)
          console.log(date)
          console.log(start)
          console.log(end)
          console.log('date >= start', date >= start)
          console.log('date <= end', date <= end)
          return date >= start && date <= end
        })
      })
    },
  })

  return server
}
