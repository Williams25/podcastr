import '../src/styles/global.scss'
import { Header, Player } from '../src/components'
import styles from '../src/styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appWrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  )
}

export default MyApp
