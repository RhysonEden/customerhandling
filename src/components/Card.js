import React from "react";

const Card = ({ clients, searchInput, setSearchInput }) => {
  return (
    <div className="App">
      {console.log(searchInput)}
      {clients
        .filter((client) => {
          const clientsId = client.gvr.toLowerCase();
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })
        .map((client, index) => (
          <div key={index} className="card">
            <div className="subcard">Company Name : {client.comp}</div>
            <div className="subcard">GVR ID : {client.gvr}</div>
            <div className="subcard">
              Primary Contact E-Mail : {client.email1}
            </div>
            <div className="subcard">
              Secondary Contact E-Mail : {client.email2}
            </div>
            <div className="subcardwarr">Warranty Handling</div>
            <li className="subcard">Notification : {client.noticewar}</li>
            <li className="subcard">Remote Diagnosis : {client.remodiagwar}</li>
            <li className="subcard">Remotely Repair : {client.remrepwar}</li>
            <li className="subcard">Dispatch Tech : {client.dispwar}</li>
            <div className="subcardwarr">Out of Warranty Handling</div>
            <li className="subcard">Notification : {client.noticeout}</li>
            <li className="subcard">Remotely Repair : {client.remrepout}</li>
            <li className="subcard">Dispatch Tech : {client.dispout}</li>
          </div>
        ))}
    </div>
  );
};

export default Card;
