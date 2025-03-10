import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./Repoitem";

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repos.prototype = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
