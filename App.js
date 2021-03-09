  
import React from 'react';
import './App.css';

import requests from './requests';
import {Row} from './Row';

import {Banner} from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />


      <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending" fetchurl={requests.fetchTrending} />
			<Row title="Top Rated" fetchurl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />

      
    </div>
  );
}

export default App;
