import React from "react";
import { AiOutlinePlus, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter, AiOutlineFacebook, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

const styles = {
    mainWrapper : `relative overflow-hidden py-10`,
    innerWrapper : `container grid md:grid-cols-2 gap-10 min-h-[70vh] relative z-10`,
    right : `flex flex-col items-center justify-center p-5`,
    left : `flex flex-col items-start justify-center space-y-5 py-8 md:py-0`,
    socials : `flex space-x-5 justify-start`,
    title : `text-3xl md:text-5xl font-bold text-blue-500`,
    role : `text-lg md:text-2xl font-bold text-blue-400`,
    cv : `text-blue-400 flex space-x-2 items-center font-semibold`
}

const Intro = () => {
  return (
    <section className={styles.mainWrapper} id="home">
        <div className={styles.innerWrapper}>
            <div className={styles.left}>
              <section>
                  <h1 className={styles.title}>MfonAbasi Udobia</h1>
                  <h3 className={styles.role}>Fullstack Developer</h3>
              </section>
              
              <section className="space-y-3">
                  <div className={styles.socials}>
                  <a href="https://www.linkedin.com/in/mfonabasi-udobia-a84128217"><AiOutlineLinkedin size={30}  /></a>
                   <a href="https://github.com/mfonabasiudobia"><AiOutlineGithub size={30} /></a>
                   <a href="https://www.linkedin.com/in/mfonabasi-udobia-a84128217"><AiOutlineTwitter size={30} /></a>
                   <a href="https://www.linkedin.com/in/mfonabasi-udobia-a84128217"><AiOutlineFacebook size={30} /></a>
                  </div>
                  <p className="text-blue-500">
                    I turn complex problems into simple solutions
                  </p>
                  <div className={styles.cv}>
                    <span>Download CV</span>
                    <AiOutlineDownload />
                  </div>
              </section>
            </div>
            <div className={styles.right}>
                <img src="/images/hero-bg.png" className="bounce relative" />
            </div>
        </div>
        <img src="/images/pic3.png" className="absolute top-0 left-0 z-0" />
    </section>
  )
}

export default Intro;
