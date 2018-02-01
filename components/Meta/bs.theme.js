import Head from "next/head";

const Theme = (props) => (
	<div className='container'>
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
		</Head>
		{props.children}
	</div>
)

export default Theme