import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker"
import LocationInfo from "./LocationInfo"

const Map = ({eventData,center,zoom}) =>{
	const [locationinfo,setlocationinfo] =useState(null) 
	const markers = eventData.map(ev => {
		if (ev.categories[0].id ===8)
		{
			return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng= {ev.geometries[0].coordinates[0]} onClick= {() => setlocationinfo({id:ev.id, title:ev.title})} />
		}
		return null
	})
	return (
			<div className="map">
				<GoogleMapReact
					bootstrapURLKeys={{key: 'AIzaSyBq1pxTEh3qNHMzovGX9pRbm2OfECcuxjo' }}
					defaultCenter = {center}
					defaultZoom = {zoom}
				>
				{markers}
				</GoogleMapReact>
				{locationinfo && <LocationInfo info={locationinfo} />}
			</div>
		)
}
Map.defaultProps = {
	center: {
		lat: 42.3625,
		lng : -122.8756
	},
	zoom:4
}
export default Map