import Head from 'next/head'

export default function Home() {

  let WEB_TITLE = "Aisling's Planet"
  let HOME = `Home`
  
  // IMPORTANT: Replace 'localhost' with your actual website domain for production!
  // You might need multiple parent parameters if you have multiple domains (e.g., preview domains)
  const twitchParentDomain = 'localhost' 

  return (
    <div>
      <Head>
        <title>
          {WEB_TITLE} - {HOME}
        </title>
      </Head>
      
      {/* Twitch Embed Section */}
      <div style={{ display: 'flex', height: '720px', width: '100%', gap: '10px' }}>
        {/* Twitch Video Player */}
        <iframe
          src={`https://player.twitch.tv/?channel=aislingvt&parent=${twitchParentDomain}`}
          height="100%"
          width="75%"
          allowFullScreen={true}
          style={{ border: 'none' }}
          title="Twitch Stream Player"
        ></iframe>
        
        {/* Twitch Chat */}
        <iframe
          src={`https://www.twitch.tv/embed/aislingvt/chat?parent=${twitchParentDomain}`}
          height="100%"
          width="25%"
          style={{ border: 'none' }}
          title="Twitch Stream Chat"
        ></iframe>
      </div>

      {/* You can add other homepage content below */}
      {/* <Component {...pageProps} /> */}
    </div>
  )
}