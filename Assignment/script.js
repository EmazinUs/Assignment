async function getRepositories() {
  const username = document.getElementById("username").value;
  const repositoriesList = document.getElementById("repositories");

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repositories = await response.json();

    repositoriesList.innerHTML = "";

    repositories.forEach((repo) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${repo.name}</strong>: ${repo.description} <a href="${repo.html_url}" target="_blank">Visit Repo</a>`;
      repositoriesList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
    repositoriesList.innerHTML = `<li>Error fetching repositories. Please check the username and try again.</li>`;
  }
}
