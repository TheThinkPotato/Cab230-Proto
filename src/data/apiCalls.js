const URL = "http://sefdb02.qut.edu.au:3001/";
const COUNTRY_LIST_URL = URL + "countries";
const COUNTRY_DATA_URL = URL + "volcanoes?country=";
const LOG_IN_URL = URL + "user/login";
const REGISTER_URL = URL + "user/register";
const VOLCANOE_DATA_URL = URL + "volcano/";

export function getCountryList() {
  return fetch(COUNTRY_LIST_URL).then((res) => res.json());
}

export function getCountryData(country, distance) {
  return fetch(COUNTRY_DATA_URL + `${country}&populatedWithin=${distance}km`)
    .then((res) => res.json())
    .then((works) =>
      works.map((data) => {
        return { ...data };
      })
    );
}

export function getRegisteredVolcanoData(ID) {
  const token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return fetch(VOLCANOE_DATA_URL + ID, { headers }).then((res) => res.json());
}

export function getVolcanoeData(ID) {
  return fetch(VOLCANOE_DATA_URL + ID)
    .then((res) => res.json())
    .then((data) => {
      return {
        ...data,
      };
    });
}

export function login(email, password) {
  return fetch(LOG_IN_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message !== undefined) {
        return { errorMessage: res.message, error: res.error };
      } else {
        let token = res.token;
        localStorage.setItem("token", token);
        return { errorMessage: res.message, error: res.error };
      }
    });
}

export function register(email, password) {
  return fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message !== undefined) {
        return { errorMessage: res.message, error: res.error };
      } else {
        localStorage.setItem("token", res.token);
        return { errorMessage: res.message, error: res.error };
      }
    });
}
