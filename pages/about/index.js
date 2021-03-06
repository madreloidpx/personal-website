import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/About.module.css'
import { imgLoader } from '../../constants/imageLoader'

export default function About(req, res) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - madreloidpx</title>
        <meta name="description" content="Freelance Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="about" className={styles.main}>
        <div className={styles.left}>
          <section id="logo" className={styles.logo}>
              <div className={styles.icon}>
                <Link href="/" passHref>
                  <Image loader={imgLoader} src="img/undraw_female_avatar_w3jk 1.svg" width={35} height={35} alt="Logo Placeholder"/>
                </Link>
              </div>
              <h1 className={styles.webname}><Link href="/"><a>MADRELOIDPX</a></Link></h1>
          </section>
          <section id="content" className={styles.content}>
            <div className={styles.container}>
              <Image loader={imgLoader} src="img/selfie1.JPG" width={292} height={355} layout="intrinsic" alt="Profile madreloidpx"/>
            </div>
          </section>
        </div>
        <section id="nav" className={styles.nav}>
          <nav className={styles.nav_list}>
            <ul>
              <li className={styles.upper}>
                <div className={styles.flower}>
                  <svg width="50" height="50" viewBox="0 0 94 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.0403 46.5574C37.8936 36.3837 20.8479 4.46978 42.198 1.23834C66.6403 -2.46114 50.2685 38.0023 47.0403 46.5574Z" stroke="#2D2940"/>
                    <path d="M47.0753 46.9572C56.9293 56.4436 76.2236 87.0432 55.1613 91.8086C31.0483 97.2643 44.4703 55.7232 47.0753 46.9572Z" stroke="#2D2940"/>
                    <path d="M47.0104 46.5816C60.3471 43.618 96.441 44.4819 88.7186 64.7007C79.8777 87.8479 52.8416 53.6157 47.0104 46.5816Z" stroke="#2D2940"/>
                    <path d="M47.1307 46.7291C44.0332 60.0699 27.6598 92.3358 12.8127 76.6159C-4.18492 58.6191 38.2848 48.9627 47.1307 46.7291Z" stroke="#2D2940"/>
                    <path d="M47.2959 46.5512C34.0762 50.0021 -2.02507 50.4627 4.95454 29.9742C12.9451 6.51815 41.2119 39.7357 47.2959 46.5512Z" stroke="#2D2940"/>
                    <path d="M47.1655 46.6742C50.9789 33.5212 69.0709 2.19172 83.0473 18.6948C99.048 37.5882 56.119 44.9242 47.1655 46.6742Z" stroke="#2D2940"/>
                  </svg>
                </div>
                <h2><Link href="/"><a>About</a></Link></h2>
              </li>
              <li className={styles.middle}>
                <h3 className={styles.emphasize}>Hi! I&apos;m Aliya</h3>
                <h3 className={styles.emphasize}>Web Developer</h3>
                <h3 className={styles.emphasize}>Philippines</h3>
                <div className={styles.social_links}>
                  <a target="_blank" rel="noreferrer" href="https://www.behance.net/madreloidpx/"><Image loader={imgLoader} src="img/behance-1.svg" width={50} height={50} alt="Behance Social Link"/></a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/madreloidpx"><Image loader={imgLoader} src="img/github.png" width={50} height={50} alt="Github Social Link"/></a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madreloidpx/"><Image loader={imgLoader} src="img/linkedin.png" width={50} height={50} alt="LinkedIn Social Link"/></a>
                  <a target="_blank" rel="noreferrer" href="https://www.reddit.com/user/madreloidpx"><Image loader={imgLoader} src="img/reddit.png" width={50} height={50} alt="Reddit Social Link"/></a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/madreloidpx"><Image loader={imgLoader} src="img/twitter.png" width={50} height={50} alt="Twitter Social Link"/></a>
                </div>
              </li>
              <li className={styles.lower}>
                <div className={styles.flower}>
                  <svg width="50" height="50" viewBox="0 0 94 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.0403 46.5574C37.8936 36.3837 20.8479 4.46978 42.198 1.23834C66.6403 -2.46114 50.2685 38.0023 47.0403 46.5574Z" stroke="#2D2940"/>
                    <path d="M47.0753 46.9572C56.9293 56.4436 76.2236 87.0432 55.1613 91.8086C31.0483 97.2643 44.4703 55.7232 47.0753 46.9572Z" stroke="#2D2940"/>
                    <path d="M47.0104 46.5816C60.3471 43.618 96.441 44.4819 88.7186 64.7007C79.8777 87.8479 52.8416 53.6157 47.0104 46.5816Z" stroke="#2D2940"/>
                    <path d="M47.1307 46.7291C44.0332 60.0699 27.6598 92.3358 12.8127 76.6159C-4.18492 58.6191 38.2848 48.9627 47.1307 46.7291Z" stroke="#2D2940"/>
                    <path d="M47.2959 46.5512C34.0762 50.0021 -2.02507 50.4627 4.95454 29.9742C12.9451 6.51815 41.2119 39.7357 47.2959 46.5512Z" stroke="#2D2940"/>
                    <path d="M47.1655 46.6742C50.9789 33.5212 69.0709 2.19172 83.0473 18.6948C99.048 37.5882 56.119 44.9242 47.1655 46.6742Z" stroke="#2D2940"/>
                  </svg>
                </div>
                <Link href="/works"><a>Works</a></Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
