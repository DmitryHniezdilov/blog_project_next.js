const apiUrl = 'https://blog-hniezdilov.herokuapp.com';

const callApi = (endpoint, options) => {
  const url = `${apiUrl}/${endpoint}`;

  return fetch(url, options)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return JSON.parse(data);
    });
};

export const getBlogsByCategory = (category) => callApi(`blogs/and?categories.category=${category}`, {
  method:  'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogById = (id) => callApi(`blogs/${id}`, {
  method:  'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogs = () => callApi('blogs/', {
  method:  'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = () => callApi('categories/', {
  method:  'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});