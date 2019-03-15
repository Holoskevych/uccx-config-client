const Resource = require('./resource')

class Uccx {
  constructor({url, username, password}) {
    this.baseUrl = url
    this.username = username
    this.password = password

    // resources (agents and supervisors)
    this.resource = new Resource(this)
  }

  // REST request options
  baseOptions () {
    return {
      baseUrl: this.baseUrl,
      auth: {
        user: this.username,
        pass: this.password
      },
      headers: {
        'Accept': 'application/json'
      },
      json: true
    }
  }
}

module.exports = Uccx
