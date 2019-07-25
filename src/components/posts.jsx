import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const { sortBy } = queryString.parse(location.search);
  const year = match.params.year;
  const month = match.params.month;
  return (
    <div>
      <h1>Posts</h1>
      {year && <p>Year: {year}</p>}
      {month && <p>Month: {month}</p>}
    </div>
  );
};

export default Posts;
