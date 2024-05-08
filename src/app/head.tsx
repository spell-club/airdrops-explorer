import Script from 'next/script'

export default function Head() {
	return (
		<>
			<link rel="apple-touch-icon" href="/logo192.png" />

			<link rel="manifest" href="/manifest.json" />

			<link
				rel="shortcut icon"
				type="image/x-icon"
				href={process.env.NEXT_PUBLIC_BASE_PATH || '' + '/favicon.ico'}
			/>

			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta name="theme-color" content="#000000" />

			<meta property="description" content="Explore Cosmos Airdrops" />

			<Script
				async
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/gtag/js?id=G-94FJ9Y76DL"
			/>

			<Script async strategy="lazyOnload" id="google-analytics">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-94FJ9Y76DL');
          `}
			</Script>
		</>
	)
}
