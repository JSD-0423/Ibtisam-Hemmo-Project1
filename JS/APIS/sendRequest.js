async function sendRequest(url, { params } = {}) {
  const searchPhrase = params?.phrase;
  const searchUrl = searchPhrase ? `${url}?phrase=${searchPhrase}` : url;

  const response = await fetch(searchUrl);

  if (!response.ok) {
    throw new Error('Network response was not OK');
  }

  return response.json();
}

export {
  sendRequest
}
