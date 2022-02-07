import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState([])
  const [selectedData, setSelectedData] = useState({
    name: '',
    language	: '',
    description: ''
  })

  const getRepoData = () => {
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(res => setUserData(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
     Enter github username:
     <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
     <button onClick={() => getRepoData()}>Submit</button><br />
     {userData && userData.map((user) => setSelectedData(user))}
     Repo Name: {selectedData.name}<br />
     Language: {selectedData.language}<br />
     Description: {selectedData.description}
    </div>
  );
}

export default App;
