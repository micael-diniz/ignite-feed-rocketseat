import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images8.alphacoders.com/679/679478.jpg"
      />

      <div className={styles.profile}>
        <strong>Micael Diniz</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}