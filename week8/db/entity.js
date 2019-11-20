const fs = require('fs');
const path = require('path');

const initialState = {
  lastId: 0,
  entities: {}
};

class Entity {
  constructor(name) {
    this.location = path.resolve(`./db/${name}.json`);
    const exists = fs.existsSync(this.location);
    this.data = exists ?
      JSON.parse(fs.readFileSync(this.location, { encoding: 'utf-8' })) :
      initialState;
  }

  insert(entity) {
    const id = this.data.lastId + 1;
    const newEntity = { ...entity, id };
    const newData = {
      lastId: id,
      entities: {
        ...this.data.entities,
        [id]: newEntity
      }
    };
    return this._write(newData, newEntity);
  }

  _write(newData, newEntity) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.location, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
          reject(err);
          return;
        }
        this.data = newData;
        resolve(newEntity);
      });
    });
  }
}

module.exports = Entity;