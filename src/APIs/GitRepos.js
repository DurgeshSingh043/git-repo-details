export const getRepoDetails = (userName, repo) => {
  return window
    .fetch(
      `https://api.github.com/repos/${userName}/${repo}/git/trees/master?recursive=1`,
    )
    .then((res) => res.json());
};
