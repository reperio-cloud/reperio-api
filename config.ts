export default {
  dev: {
    rds: {
      endpoint: 'localhost',
      username: 'shehbaj',
      password: 'shehbaj',
      database: 'reperio',
      port: '3306'
    }
  },

  prod: {
    rds: {
      endpoint: 'mysql-database.caaeopmj7byg.us-east-1.rds.amazonaws.com',
      username: 'dshehbaj',
      password: 'aHjG2OGVxY87brUtnTZb',
      database: 'reperio',
      port: '3306'
    }
  },
  spoonacular: {
    apiKey: "828149a022284068b8b332623bfb8b23"
  }
}
