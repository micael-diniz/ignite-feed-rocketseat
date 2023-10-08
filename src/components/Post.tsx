import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	id: number;
	type: "paragraph" | "link";
	content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
	post: PostType
}

export function Post({ post }: PostProps) {
	const { publishedAt, content, author } = post;
	const submitButton = useRef<HTMLButtonElement>(null);

	const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function removeFocusOfSubmitButton() {
		if (submitButton.current != null) {
			submitButton.current.blur();
		}
	}

	function handleCrateNewComment(event: FormEvent) {
		event.preventDefault();
		setComments([...comments, newCommentText]);

		setNewCommentText("");
		console.log("here");
		removeFocusOfSubmitButton();
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("Esse campo é obrigatório!");
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.id}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={line.id}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>
			<form onSubmit={handleCrateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					name="comment"
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" ref={submitButton} disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
