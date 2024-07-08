import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
	const dataRequest = await fetch(`https://api.github.com/user/${params.accountId}`);
	const data = await dataRequest.json();

	return data;
}

export default function GithubAccountView() {
	const user = useLoaderData();

	return (
		<div>
			<h1>GitHub User Information</h1>
			<div>
				<img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
				<h2>{user.name}</h2>
				<p>ID: {user.id}</p>
				<p>
					<a href={user.html_url} target="_blank" rel="noopener noreferrer">
						View GitHub Profile
					</a>
				</p>
				<p>Bio: {user.bio}</p>
				<p>Company: {user.company}</p>
				<p>Location: {user.location}</p>
				<p>Blog: <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a></p>
				<p>Followers: {user.followers}</p>
				<p>Following: {user.following}</p>
			</div>
		</div>
	);
}