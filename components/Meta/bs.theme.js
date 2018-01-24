import Head from "next/head";

const Theme = (props) => (
	<div>
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='stylesheet' href='../../static/bootstrap.min.css' />
		</Head>
		{props.children}
	</div>
)

export default Theme