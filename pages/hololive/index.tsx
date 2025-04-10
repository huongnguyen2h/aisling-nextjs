import React from 'react'
import Head from 'next/head'
import Link from '@components/common/Link'
import styles from '../../layout/sass/_hololive.module.scss'

function Hololive() {
  return (
    <div className={styles.hololiveContainer}>
      <Head>
        <title>Mori Calliope - hololive PRODUCTION</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className={styles.talentHeader}>
        <div className={styles.talentImages}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className={styles.thumbnailImage}>
              <div className={styles.thumbnailPlaceholder}></div>
            </div>
          ))}
        </div>
        
        <div className={styles.fullBodyImages}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className={styles.bodyImagePlaceholder}></div>
          ))}
        </div>
      </div>
      
      <div className={styles.talentInfo}>
        <h1 className={styles.talentName}>Mori Calliope<span className={styles.japaneseName}>森カリオペ</span></h1>
        
        <div className={styles.talentQuote}>
          "Dead Beats, listen up! Your Mori's been working hard for you!"
        </div>
        
        <div className={styles.talentDescription}>
          <p>
            The Grim Reaper's first apprentice. Due to modern medical care causing a decline in the reaping business, Calliope decided to become a VTuber to harvest souls instead. It seems that the ascended souls of the people who are vaporized by the wholesome interactions between VTubers go to her as well.
          </p>
          <p>
            That being said, despite the image her hardcore vocals and manner of speech gives off, she's actually a gentle-hearted girl who cares greatly for her friends.
          </p>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>YouTube</a>
          <a href="https://twitter.com/moricalliope" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X</a>
        </div>
      </div>
      
      <div className={styles.talentData}>
        <h2 className={styles.sectionTitle}>DATA</h2>
        
        <div className={styles.dataGrid}>
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Birthday</div>
            <div className={styles.dataValue}>April 4</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Debut Stream</div>
            <div className={styles.dataValue}>September 12, 2020</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Height</div>
            <div className={styles.dataValue}>167 cm</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Unit</div>
            <div className={styles.dataValue}>hololive English -Myth-</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Illustrator</div>
            <div className={styles.dataValue}>Yukisame</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Fan Name</div>
            <div className={styles.dataValue}>Dead Beats</div>
          </div>
          
          <div className={styles.dataItem}>
            <div className={styles.dataLabel}>Hashtags</div>
            <div className={styles.dataValue}>
              Stream Tags: #calliolive #カリオライブ<br />
              Fan Art: #callillust #カリイラスト
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.videoSection}>
        <h2 className={styles.sectionTitle}>VIDEOS <span className={styles.viewAll}>view all</span></h2>
        
        <div className={styles.videoGrid}>
          {[
            {type: 'voice', title: '[New Voice Pack] The spot beside me will always be yours.'},
            {type: 'voice', title: '[New Voice Pack] Between Adventures — Heroes on Their Day Off [#ENreco]'},
            {type: 'voice', title: '[New Voice Pack] Welcome, You\'ve Got Mail'},
            {type: 'voice', title: '[New Voice Packs] To Grill or to Be Grilled'},
            {type: 'assorted-videos', title: 'Mori Gets Scared: Cat Eater(s) #holoEN3DRepeat'},
            {type: 'special', title: '《hololive SUPER EXPO 2025》PV'},
            {type: 'assorted-videos', title: '【#holoGuideTokyo】4 spots you should visit in Tokyo 2025【with hololive English】'},
            {type: 'voice', title: '[New Voice Packs] 🍫Happy Valentine\'s!💝'},
            {type: 'special', title: '【#holoPopLA】hololive English official pop-up store in Los Angeles【#hololiveEN】'},
            {type: 'special', title: '《hololive 6th fes. Color Rise Harmony》PV'}
          ].map((video, index) => (
            <div key={index} className={styles.videoItem}>
              <div className={`${styles.videoThumbnail} ${styles[video.type]}`}></div>
              <div className={styles.videoType}>{video.type}</div>
              <div className={styles.videoTitle}>{video.title}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllLink}>view all</div>
      </div>
      
      <div className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>NEWS <span className={styles.viewAll}>view all</span></h2>
        
        <div className={styles.newsList}>
          {[
            {date: '2025.03.17', title: 'hololive performs at the Final Act of "ENTRY Inc. presents Japan Expo Paris in Osaka 2025" at the Osaka-Kansai Expo!'},
            {date: '2025.03.08', title: 'hololive SUPER EXPO 2025 & hololive 6th fes. – UNDONE Arcade Theme Watch & Merch Collection Now Available for Pre-Order'},
            {date: '2025.01.30', title: 'hololive English LA Pop-Up Store Announces Exclusive Merchandise Drops & Talent Greeting Sessions for Fans'},
            {date: '2025.01.24', title: 'hololive English -Myth- New Merchandise will be available at AVIOT VTuber POP UP SHOP in OIOI'},
            {date: '2025.01.24', title: 'hololive Announces Pop-Up Store at Beverly Center, Los Angeles'},
            {date: '2024.12.21', title: 'Bisoulovely and hololive English Jewelry Collection Release'},
            {date: '2024.12.18', title: 'UNDONE x hololive English Collaboration Automatic Watch will be Available for Pre-Order'},
            {date: '2024.12.06', title: 'OMOCAT x hololive English -Myth- New Winter Collection'},
            {date: '2024.12.04', title: 'COVER Announces Ticket Applications for hololive SUPER EXPO 2025 & 6th fes!'},
            {date: '2024.11.26', title: '"hololive 5th fes. Capture the Moment" Delayed Screening Events in Hong Kong!'}
          ].map((news, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.newsDate}>{news.date}</div>
              <div className={styles.newsTitle}>{news.title}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllLink}>view all</div>
      </div>
      
      <div className={styles.musicSection}>
        <h2 className={styles.sectionTitle}>MUSIC <span className={styles.viewAll}>view all</span></h2>
        
        <div className={styles.musicGrid}>
          {[
            {type: 'singleoriginal', title: 'Odyssey'},
            {type: 'albumoriginal', title: 'hololive English Eurobeat Remix Album'},
            {type: 'singleoriginal', title: 'The Show Goes On!'},
            {type: 'singleoriginal', title: 'START AGAIN'},
            {type: 'singleoriginal', title: 'Breaking Dimensions'},
            {type: 'singleoriginal', title: 'Can You Do the hololive? hololive SUPER EXPO 2024 ver.'},
            {type: 'singleoriginal', title: 'ReUnion'},
            {type: 'singleoriginal', title: 'Fire N Ice feat. Mori Calliope'},
            {type: 'originalsingle', title: 'Connect the World'},
            {type: 'singleidol-project', title: 'Non-Fiction'}
          ].map((music, index) => (
            <div key={index} className={styles.musicItem}>
              <div className={styles.musicThumbnail}></div>
              <div className={styles.musicType}>{music.type}</div>
              <div className={styles.musicTitle}>{music.title}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllLink}>view all</div>
      </div>
      
      <div className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>EVENTS <span className={styles.viewAll}>view all</span></h2>
        
        <div className={styles.eventsList}>
          <div className={styles.eventItem}>
            <div className={styles.eventDate}>2024.11.14</div>
            <div className={styles.eventDay}>Thu</div>
            <div className={styles.eventTitle}>Scheduled for spring 2026 hololive production Store at Tokyo Character Street!</div>
          </div>
        </div>
        
        <div className={styles.viewAllLink}>view all</div>
      </div>
      
      <div className={styles.scheduleSection}>
        <h2 className={styles.sectionTitle}>SCHEDULE <span className={styles.viewAll}>view all</span></h2>
        
        <div className={styles.scheduleList}>
          <div className={styles.scheduleItem}>
            <div className={styles.scheduleStatus}>NOW ON AIR</div>
            <div className={styles.scheduleTitle}>Calli【superchats】various Mori's read your superchats!</div>
          </div>
        </div>
        
        <div className={styles.viewAllLink}>view all</div>
      </div>
    </div>
  )
}

export default Hololive
