import React from 'react';

function App() {
  const offices = [
    {
      name: "Regus Business Center",
      rent: 45000,
      address: "Jubilee Hills, Hyderabad",
      image: "https://assets.regus.com/images/cities/united-states/illinois-chicago.jpg"
    },
    {
      name: "WeWork Residency",
      rent: 72000,
      address: "MG Road, Bangalore",
      image: "https://cf-cdn.cityinfoservices.com/public/uploads/project/images/default/medium/6162762ce4df1e4d9dWeWork%20Salarpuria%20Symbiosis.jpg"
    },
    {
      name: "SmartWorks Hub",
      rent: 58000,
      address: "Hi-Tech City, Hyderabad",
      image: "https://tse2.mm.bing.net/th/id/OIP.iI43LWga7Ze5WC7M8MSIbwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Office Space Rental Portal</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {offices.map((office, index) => (
          <div key={index} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", width: "250px" }}>
            <img src={office.image} alt={office.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{office.name}</h3>
            <p style={{ color: office.rent < 60000 ? "red" : "green", fontWeight: "bold" }}>
              Rent: ₹{office.rent}
            </p>
            <p>{office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
