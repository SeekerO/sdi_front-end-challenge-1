export async function author_fetcher(setauthorJsonData) {
  const response = await fetch(
    "https://tmsph-sdi-challenges.pages.dev/challenges/authors.json"
  );

  if (!response.ok) {
    throw new Error("Network Error ");
  } else {
    const data = await response.json();
    return setauthorJsonData(data);
  }
}

export async function news_fetcher(setnewsJsonData) {
  const response = await fetch(
    "https://tmsph-sdi-challenges.pages.dev/challenges/news.json"
  );

  if (!response.ok) {
    throw new Error("Network Error ");
  } else {
    const data = await response.json();
    return setnewsJsonData(data);
  }
}
