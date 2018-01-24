const Card = (props) => (

	<div className="card-deck">
		<div className="card">
			<img className="card-img-top" src={`https://image.tmdb.org/t/p/w600${props.backdrop_path}`} alt={props.title} />
			<div className="card-block">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.overview}</p>
			</div>
		</div>
	</div>
)

export default Card