import React from 'react';

const map = () => {
  return (
    <section id="map">
      <h2>Notre Localisation</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...YOUR_MAP_EMBED_CODE"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Notre carte"
      ></iframe>
    </section>
  );
};

export default map;
