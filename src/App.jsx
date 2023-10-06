import { Fragment } from "react";
import { Post } from "./Post";

export function App() {
	return (
		<Fragment>
			<Post
				author="Micael Diniz"
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae voluptas hic quidem nobis quas delectus earum consectetur aut. Cupiditate quo in, natus expedita nesciunt fugit illo repellat assumenda asperiores!"
			/>
      <Post
				author="John Doe"
				content="Hello world"
			/>
		</Fragment>
	);
}
