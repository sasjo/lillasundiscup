const distinctSponsors = (sponsors) => {
  const visited = [];
  return sponsors.filter(entry => {
    // Support objects and strings.
    const { name = entry } = entry;
    if (visited[name]) {
      return false;
    }
    visited[name] = true;
    return true;
  });
}

module.exports = distinctSponsors;
