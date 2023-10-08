import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images8.alphacoders.com/679/679478.jpg"
			/>

			<div className={styles.profile}>
				<Avatar src="https://github.com/micael-diniz.png" />
				<strong>Micael Diniz</strong>
				<span>Full Stack Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
