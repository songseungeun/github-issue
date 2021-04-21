const URL = {
  labels: 'http://localhost:3001/labels'
};

export default async function getLabels() {
  const response = await fetch(URL.labels);
  const data = await response.json();

  return data;
}
