import styles from './styles/HomePage.module.css'

export function HomePage({loggedIn}) {
  return (
    <div className={styles.home}>
      <div
        class={`d-flex justify-content-center align-items-center col-md-12 ${styles['main-container']}`}
      >
        <h1 class="display-4 fw-normal">WELCOME!</h1>
        <p class="lead fw-normal">Find your perfect laptop match</p>
      </div>
      {/* <p>Welcome. {!loggedIn?'Navigate over the menu to continue.':'Please, log in to continue.'}</p> */}
    </div>
  )
}
