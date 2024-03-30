import React from 'react';
import './components/style.css';

const Home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div classNameName="carousel-item active">
          <img src="https://ca-times.brightspotcdn.com/dims4/default/aec3b77/2147483647/strip/true/crop/600x400+0+0/resize/840x560!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdf%2F1f%2F72aee3d84bd5b347b36cf4b95029%2Fsexual-assault-guide-homepage.gif" className="d-block w-100 caro" alt="..."/>
        </div>
       
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}


export default Home
