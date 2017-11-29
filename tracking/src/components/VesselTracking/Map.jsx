import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
// import { mapOptions } from './MapOptions'
import { PositionMarker } from './Marker'

class Map extends PureComponent {

  static propTypes = {
    vesseltracks: PropTypes.array,
  }

  render() {
    const { vesseltracks } = this.props
console.log(vesseltracks)
    let positionList = []
    // if (storeCount > 0) {
      positionList = vesseltracks.map(function(position, index) {
        console.log(position['$'])
          return (
            <PositionMarker
              key={index}
              lat={position.LAT}
              lng={position.LON}
              position={position}
            />
          )
        })
    // }

    return (
      <div style={{width: '100%', height: '600px'}}>
        <GoogleMapReact
          center={{lat: 37.944330, lng: 23.638500}}
          zoom={8}
          // options={mapOptions}
          scrollwheel='true'
          fullscreenControl='false'
          mapTypeControl='false'
          // onChildClick={this.onChildClick}
        >
          {positionList}
        </GoogleMapReact>
      </div>
    )
  }

}

export default Map
