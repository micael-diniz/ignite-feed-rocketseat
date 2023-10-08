import { Fragment } from "react";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/micael-diniz.png",
			name: "Micael Diniz",
			role: "Web Developer",
		},
		content: [
			{ id: 1, type: "paragraph", content: "Fala galera 👋" },
			{
				id: 2,
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ id: 3, type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-03 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @Rocketseat",
		},
		content: [
			{ id: 1, type: "paragraph", content: "Fala galera 👋" },
			{
				id: 2,
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},

			{ id: 3, type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-10 20:00:00"),
	},
];

export function App() {
	return (
		<Fragment>
			<Header />
			<section className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</section>
		</Fragment>
	);
}
