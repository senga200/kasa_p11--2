import React, { useState, useEffect } from 'react';
import './About.css';
import Banner from '../../components/AboutComponents/Banner';
import Collapse from '../../components/LogementComponents/Collapse';
import './About.css';
import DatasAbout from  '../../datas/DatasAbout.json';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DatasAbout.about_container);
  }, []);

  return (
    <div className='about_main'>
      <Banner />

      <section className="about_content">
        <div className="about_container">
          {data.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
