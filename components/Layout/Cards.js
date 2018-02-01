const Card = (props) => (
	<div className="row">
		<div className="col s12 m7">
			<div className="card">
				<div className="card-image">
					{console.log(props.backdrop_path)}
					<img src={props.backdrop_path.includes('no-logo') ? props.backdrop_path: `https://image.tmdb.org/t/p/w500${props.backdrop_path}`} alt={props.title}/>
						<h5 className="center-align red-text">{props.title}</h5>
				</div>
				<div className="card-content">
					<p>{props.overview}</p>
				</div>
				<div className="card-action">
					<a href="#">This is a link</a>
				</div>
			</div>
		</div>
	</div>
)

export default Card