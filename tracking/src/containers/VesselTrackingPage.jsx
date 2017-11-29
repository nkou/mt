import React, { PureComponent } from 'react'
import ApiStore from '../api'
import Map from '../components/VesselTracking/Map'

class VesselTrackingPage extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      vesseltracks: []
    }
  }

  /* Retrive data for Vessel Tracks using JSON API source. */
  componentDidMount(){
    ApiStore.getVesselTracks().then((vesseltracks) => {
      this.setState({vesseltracks})
    })
  }


  render() {
    const { vesseltracks } = this.state
console.log(vesseltracks)

    return (
      <div>
        {Object.keys(vesseltracks).length !== 0 ?
            <Map vesseltracks={vesseltracks}/>
          :
            // Info Text: on not found Vessel Tracks item.
            <p>No vessel tracks retrieved.</p>
        }
      </div>
    )
  }

}

export default (VesselTrackingPage)
