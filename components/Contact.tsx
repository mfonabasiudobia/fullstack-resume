import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import Link from "next/link";

const styles = {
    mainWrapper : `relative overflow-hidden py-10`,
    innerWrapper : `container relative z-10 space-y-10`,
    title : `text-3xl md:text-5xl font-bold text-blue-500 text-center`,
    skillsWrapper : `grid sm:grid-cols-3 gap-5 md:gap-10`,
    skillItem : `flex flex-col items-center space-y-1 justify-center text-base md:text-lg font-semibold`,
    skillItemIcon : `w-10 md:w-12 h-10 md:h-12 p-3 rounded-full shadow-lg text-blue-400`
}

const Contact = () => {
  return (
    <section className={styles.mainWrapper} id="contact">
        <div className={styles.innerWrapper}>
          
              <section>
                  <h1 className={styles.title}>Contact</h1>
              </section>
              
              <section className={styles.skillsWrapper}>
                <div className={styles.skillItem}>
                    <AiOutlineMail  className={styles.skillItemIcon} />
                    <h2>Email</h2>
                    <div className="text-base font-normal">mfonabasiisaac@gmail.com</div>
                </div>

                 <div className={styles.skillItem}>
                    <BiLocationPlus  className={styles.skillItemIcon} />
                    <h2>Location</h2>
                    <div className="text-base font-normal">Nigeria</div>
                </div>

                <div className={styles.skillItem}>
                    <BsTelephone  className={styles.skillItemIcon} />
                    <h2>Telephone</h2>
                    <div className="text-base font-normal">+2349036342948</div>
                </div>
              </section>
            
        </div>
        {/*<img src="/images/pic3.png" className="absolute top-0 left-0 z-0" />*/}
    </section>
  )
}

export default Contact;
