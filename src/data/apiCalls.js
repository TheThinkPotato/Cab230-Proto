const URL = "http://sefdb02.qut.edu.au:3001/";

export function getURL(url) {
  fetch(`http://sefdb02.qut.edu.au:3001/countries`).then((res) => {
    return res.json();
  });
}
