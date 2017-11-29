import xml2js from 'xml2js'

let parser = new xml2js.Parser()
let vesseltracks = []

const ApiStore = {

  getVesselTracks(API_key = 'cf8f05df0b57bfae43e762cc61fd381239c4c042', mmsi = 240389000, days = 1){
    return new Promise((resolve,reject) => {
      fetch(`http://services.marinetraffic.com/api/exportvesseltrack/${API_key}?mmsi=${mmsi}&days=${days}`, {
        method: 'GET'
      })
      .then(response => response.text())
      .then((response) => {
        parser.parseString(response, function (error, result) {
          // console.log(result.VESSELTRACK.POSITION)
          vesseltracks = result.VESSELTRACK.POSITION
        })
        resolve(vesseltracks)
      })
      .catch((error) => {reject(error)})

    })
  }

}

export default ApiStore
