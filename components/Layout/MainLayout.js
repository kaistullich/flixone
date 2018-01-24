import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Theme from '../Meta/bs.theme'

const Layout = (props) => (
	<div className='container'>
		<Theme />
		<Navbar />
		<Jumbotron />
		{props.children}
	</div>
)

export default Layout