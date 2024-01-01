import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css';

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> { //isso importa coisas que ja existem numa tag IMG normal, logo nao preciso declarar as padrões
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true,...props }: Avatar){
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props}
    />
  )
}