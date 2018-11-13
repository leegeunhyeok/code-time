const electron = require('electron')
const fs = require('fs')
const path = require('path')

const fileName = 'user.dat'
const defaultData = {
  total: 0,
  today: 0
}

class Database {
  constructor () {
    this.path = (electron.app || electron.remote.app).getPath('userData')
  }

  load () {
    return new Promise((resolve, reject) => {
      if (!this.path) {
        reject(new Error('Path is empty'))
      }

      fs.readFile(path.join(this.path, fileName), (err, data) => {
        if (err) {
          reject(err)
        } else {
          if (!data) {
            this.save(defaultData).then(() => {
              resolve(defaultData)
            }).catch(e => {
              console.log(e)
            })
          } else {
            resolve(JSON.parse(data))
          }
        }
      })
    })
  }

  save (data) {
    return new Promise((resolve, reject) => {
      if (!this.path) {
        reject(new Error('Path is empty'))
      }

      fs.writeFile(path.join(this.path, fileName), data, {}, err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}

export default new Database()
