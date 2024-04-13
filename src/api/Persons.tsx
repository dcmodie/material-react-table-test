const getPersons = async () => {
  const result = await fetch('http://localhost:8000/persons/');
  const json = await result.json();
  return json;
};

export { getPersons };
