export async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch dishes');
  }

  return response.json();
}