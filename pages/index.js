import Layout from '../components/Layout/MainLayout'
import Card from '../components/Layout/Cards'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
	<Layout>
		{props.movieDetails.map((movie) => (
			<Card
				backdrop_path={movie.backdrop_path}
				title={movie.title}
				overview={movie.overview}
			/>
		))}
	</Layout>
)

Index.getInitialProps = async function() {
	const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1421255c73535e975df165585fff44c7&language=en-US&query=home%20alone&page=1`)
	const data = await req.json()
	/*
	The `data` variable contains an array with dictionaries

	  results: [
				{
					'vote_count': 34,
					...
				},
				{
					'vote_count': 12
					...
				}
		]
	*/
	return {
		movieDetails: data.results
	}
}

export default Index