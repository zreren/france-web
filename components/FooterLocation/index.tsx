import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

interface FooterLocationProps {
  left?: boolean;
  right?: boolean;
}

const FooterLocation:React.FC<FooterLocationProps> = (props) => {

  const renderLeft = (leftIcon: string) => {

    return (
        <Link href="/" className={styles.left}>
          <span>RETOUR</span>
          <span>{leftIcon}</span>
        </Link>
    )
  }

  const renderRight = (rightIcon: string) => {

    return (
        <Link href="/" className={styles.right}>
          <span>{rightIcon}</span>
          <span>NOUS&nbsp;&nbsp;CONTACTER</span>
        </Link>
    )
  }

  return (
    <>
    <div className={styles.footer}>
      {renderLeft('<')}
      <div className={styles.copyrightone}>© 2022-2023 E.des/gn</div>
      {renderRight('>')}
    </div>
    <div className={styles.copyrighttwo}>© 2022-2023 E.des/gn</div>
    </>
  )
}

export default FooterLocation;