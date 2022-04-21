import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiJavascript1, DiReact } from "react-icons/di";
import { SiTailwindcss, SiAlpinedotjs, SiFirebase, SiJquery, SiTypescript, SiLaravel, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Link from "next/link";

const styles = {
    mainWrapper : `relative overflow-hidden py-10`,
    innerWrapper : `container relative z-10 space-y-10`,
    title : `text-3xl md:text-5xl font-bold text-blue-500 text-center`,
    skillsWrapper : `grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-10`,
    skillItem : `flex flex-col items-center space-y-3 justify-center text-base md:text-lg font-semibold`,
    skillItemIcon : `w-10 md:w-12 h-10 md:h-12 p-2 rounded-lg shadow-lg text-blue-400`
}

const Intro = () => {
  return (
    <section className={styles.mainWrapper} id="skills">
        <div className={styles.innerWrapper}>
          
              <section>
                  <h1 className={styles.title}>Skills</h1>
              </section>
              
              <section className={styles.skillsWrapper}>
                <div className={styles.skillItem}>
                    <AiOutlineHtml5  className={styles.skillItemIcon} />
                    <h2>HTML5</h2>
                </div>

                <div className={styles.skillItem}>
                    <DiCss3  className={styles.skillItemIcon} />
                    <h2>CSS3</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiTailwindcss  className={styles.skillItemIcon} />
                    <h2>Tailwind</h2>
                </div>

                <div className={styles.skillItem}>
                    <BsBootstrapFill  className={styles.skillItemIcon} />
                    <h2>Boostrap</h2>
                </div>

                <div className={styles.skillItem}>
                    <DiJavascript  className={styles.skillItemIcon} />
                    <h2>Javascript</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiTypescript  className={styles.skillItemIcon} />
                    <h2>Typescript</h2>
                </div>

                 <div className={styles.skillItem}>
                    <DiJavascript1  className={styles.skillItemIcon} />
                    <h2>Next.js</h2>
                </div>

                <div className={styles.skillItem}>
                    <DiReact  className={styles.skillItemIcon} />
                    <h2>React.js</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiAlpinedotjs  className={styles.skillItemIcon} />
                    <h2>Alpine.js</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiFirebase  className={styles.skillItemIcon} />
                    <h2>Firebase</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiJquery  className={styles.skillItemIcon} />
                    <h2>Jquery</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiLaravel  className={styles.skillItemIcon} />
                    <h2>Laravel/Php Core</h2>
                </div>

                <div className={styles.skillItem}>
                    <SiMysql  className={styles.skillItemIcon} />
                    <h2>SQL</h2>
                </div>

                 <div className={styles.skillItem}>
                    <SiPostgresql  className={styles.skillItemIcon} />
                    <h2>Postgres SQL</h2>
                </div>

                 <div className={styles.skillItem}>
                    <SiMongodb  className={styles.skillItemIcon} />
                    <h2>Mongo DB</h2>
                </div>




              </section>
            
        </div>
        {/*<img src="/images/pic3.png" className="absolute top-0 left-0 z-0" />*/}
    </section>
  )
}

export default Intro;
