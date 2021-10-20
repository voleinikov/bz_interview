import { useState, useEffect } from 'react';

function BasicHomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiTestMsg, setApiTestMsg] = useState('');
  const [location, setLocation] = useState('');
  const [quickDesc, setQuickDesc] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const testData = JSON.stringify({
      'zipcode': '94030'
    })
    
    fetch(
      'http://localhost:3001/api/v1/get_weather',
      {
        method: 'POST',
        body: testData,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      // This actually returns a promise too, because it takes some time 
      // to jsonify the response.  So we need to use another .then() 
      // statement after this
      return response.json();
    }).then((data) => {
      console.log(data)
      
      setApiTestMsg("We're good");
      setLocation(data["name"]);
      setQuickDesc(data["weather"][0]["description"]);
      setIsLoading(false);
    })
  }, []);

  if (isLoading){
    return <section>
      <p>Loading...</p>
    </section>;
  }
  else {
    return <section>
      <h2>Welcome To Your React Frontend</h2>
      <p>Rails API backend says: {apiTestMsg}</p>
      <br />
      <p>Weather in {location} is: {quickDesc}</p>
    </section>;
  }
}

export default BasicHomePage;