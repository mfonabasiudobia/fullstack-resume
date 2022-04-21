import React from "react";
import { AiOutlinePlus, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter, AiOutlineFacebook, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

const styles = {
    mainWrapper : `relative overflow-hidden py-10`,
    innerWrapper : `container grid md:grid-cols-2 gap-10 min-h-[70vh] relative z-10`,
    left : `flex flex-col items-center justify-center p-5`,
    right : `flex flex-col items-start justify-start space-y-5 py-8 md:py-0 text-lg`,
    socials : `flex space-x-5 justify-start`,
    title : `text-3xl md:text-5xl font-bold text-blue-500 md:col-span-2 text-center`,
    role : `text-lg md:text-2xl font-bold text-blue-400`,
    cv : `text-blue-400 flex space-x-2 items-center font-semibold`
}

const Intro = () => {
  return (
    <section className={styles.mainWrapper} id="about">
        <div className={styles.innerWrapper}>

            <h1 className={styles.title}>About Me</h1>

            <div className={styles.left}>
                <img src="/images/profile-img.png" className="bounce relative" />
            </div>

            <div className={styles.right}>
              
              <p>What can a "fullstack web developer" do, you ask?</p>
              <p>I can conjur a website from nothing into existence, fully formed. I do not use tricks, nor maggics. Just like any manufacturing process would be, I passed through all the learning process from HTML, CSS, PHP, SQL Javascript, Tailwind, Boostrap, now advanced into  Next.js, React.js, Firebase, Laravel, Mongodb, Postgres, Typescript and many more.</p>

              <p>I can plan, design, build and maintain website myself or as part of a team.</p>

              <p>A fullstack developer has no boundaries and when they find one they cross it without hesitation, boldly going into the unknown to return rich for it.</p>
              
            </div>
        </div>
        <img src="/images/pic3.png" className="absolute top-0 left-0 z-0" />
    </section>
  )
}

export default Intro;
