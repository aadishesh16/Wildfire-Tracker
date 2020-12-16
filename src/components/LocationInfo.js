
const LocationInfo = ({info}) =>{

return (
		<div className="locationinfo">
		<h2>Event Location Info</h2>
		<ul>
			<li>ID: {info.id}</li>
			<li>TITLE: {info.title}</li>
		</ul>
		</div>		
	)
	
}

export default LocationInfo