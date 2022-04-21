import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const styles = {
    mainWrapper : `relative overflow-hidden py-10`,
    innerWrapper : `container relative z-10 space-y-10`,
    title : `text-3xl md:text-5xl font-bold text-blue-500 text-center`,
    portfolioWrapper : `grid grid-cols-1 md:grid-cols-3 gap-10`,
    portfolioItem : `flex flex-col relative items-center group space-y-3 border justify-center text-base md:text-lg font-semibold`,
    portfolioItemImage : `cursor-pointer relative w-full h-[40vh] object-cover object-top`,
    portfolioDetails : `hidden group-hover:flex flex-col items-center justify-center space-y-3 absolute -top-5 left-0 w-full h-full after:absolute after:bg-white after:opacity-80 after:top-0 after:left-0 after:z-10 after:h-full after:w-full`
}

const Portfolio = () => {

    const details = (title, link) => {
              return (<div className={styles.portfolioDetails}>
                        <h2 className="relative z-20 font-semibold text-xl">{title}</h2>
                        <div className="relative z-20 text-base font-normal">WEB, WEB DESIGN</div>
                        <a href={link} target="_black" className="relative z-20 flex items-center space-x-2"><AiOutlineLink /> <span>LIVE DEMO</span></a>
                    </div>)
    }
  return (
    <section className={styles.mainWrapper} id="portfolio">
        <div className={styles.innerWrapper}>
          
              <section>
                  <h1 className={styles.title}>Portfolio</h1>
              </section>
              
              <section className={styles.portfolioWrapper}>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-1.png" className={styles.portfolioItemImage} />
                    {details('Ricive Web Design','https://musing-raman-0d1eb9.netlify.app/individual')}
                </div>

                 <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-2.png" className={styles.portfolioItemImage} />
                    {details('Studyhub Web Design','https://studyhub.ng/')}
                </div>

                 <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-4.png" className={styles.portfolioItemImage} />
                    {details('Business Registration Design','https://cambiz.cm/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-5.png" className={styles.portfolioItemImage} />
                    {details('Hotel Booking Web Design','https://hotella01.herokuapp.com/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-6.png" className={styles.portfolioItemImage} />
                    {details('Houston Culture Web Design','https://houston-cultures.vercel.app/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-8.png" className={styles.portfolioItemImage} />
                    {details('Heykara Design','https://keen-franklin-1b07c2.netlify.app/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-7.png" className={styles.portfolioItemImage} />
                    {details('Saturn Ramp Web Design','https://saturn-ramp-v2.netlify.app/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-3.png" className={styles.portfolioItemImage} />
                    {details('Landing Page Web Design','https://mystifying-wright-ff0032.netlify.app/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-9.png" className={styles.portfolioItemImage} />
                    {details('Uniswap App Web Design','https://blockchain-uniswap.netlify.app/')}
                </div>

                <div className={styles.portfolioItem}>
                    <img src="/images/portfolio/p-10.png" className={styles.portfolioItemImage} />
                    {details('VinceTechnology Web Design','http://vincetechnologies.com/')}
                </div>

              </section>
            
        </div>
        {/*<img src="/images/pic3.png" className="absolute top-0 left-0 z-0" />*/}
    </section>
  )
}

export default Portfolio;
