import Head from 'next/head'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'

const Layout = (props) => (
	<div className='container'>
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='stylesheet' href='../../static/bootstrap.min.css' />
		</Head>
		<Navbar />
		<Jumbotron />
		{props.children}
	</div>
)

export default Layout