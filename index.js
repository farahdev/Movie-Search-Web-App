const fetchData = async (searchTerm) => {
const response = await axios.get('http://www.omdbapi.com/', {
    params: {
        apikey: 'eee7c3f0',
        s:''
    }
});
console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
});