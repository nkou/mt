import React, { PureComponent } from 'react'

export class PositionMarker extends PureComponent {

  render() {

    return (
      <div style={{cursor: 'pointer'}}>
        <span>{this.props.SPEED}</span>
      </div>
    )

  }
}
