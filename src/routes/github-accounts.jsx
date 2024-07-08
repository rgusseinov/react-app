import { NavLink, useLoaderData } from "react-router-dom";

export async function loader() {
	const reposRequest = await fetch(`https://api.github.com/users?per_page=5`);
	const repos = await reposRequest.json();

	return repos;
}

export default function GithubAccounts() {
	const accounts = useLoaderData();

	const accountElementMarkup = accounts.map(item => (
		<div key={item.id} style={{ marginBottom: "15px" }}>
			<div style={{ display: "flex" }}>
				<img src={item.avatar_url} width="60px" alt="" />
				<p style={{ paddingLeft: "8px", fontSize: "18px" }}>
					<NavLink
						to={`/github-accounts/${item.id}/view`}
					>
						{item.login}
					</NavLink>
				</p>
			</div>
		</div>
	));

	return (
		<div>
			<h1>List of GitHub accounts</h1>
			<div>
				{accountElementMarkup}
			</div>
		</div>
	);
}