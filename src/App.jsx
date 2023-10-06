import { Fragment } from "react";
import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
	return (
		<Fragment>
			<Header />
			<section className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Micael Diniz"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae voluptas hic quidem nobis quas delectus earum consectetur aut. Cupiditate quo in, natus expedita nesciunt fugit illo repellat assumenda asperiores!"
					/>
					<Post author="John Doe" content="Hello world" />
				</main>
			</section>
		</Fragment>
	);
}
