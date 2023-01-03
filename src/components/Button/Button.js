import styles from './Button.module.scss'

const Button = ({children, action}) => {
  return (
    <div 
    className={styles.button}
    onClick={() => action()}
    >
      {children ? children : 'button'}
    </div>
  )
}

export default Button