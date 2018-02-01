import Navbar from './Navbar'
import Theme from '../Meta/bs.theme'

const Layout = (props) => (
		<Theme >
			<Navbar />
			{props.children}
		</Theme>
)

export default Layout