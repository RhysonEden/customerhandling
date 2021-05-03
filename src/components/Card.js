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
          }
          const companyName = client.comp.toLowerCase();
          if (companyName.includes(searchInput.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })
        .map((client, index) => (
          <div key={index} className="card">
            <div className="subcardhead">Company Name : {client.comp}</div>
            <div className="subcardhead">GVR ID : {client.gvr}</div>
            <div className="subcardhead">Store Number : <a href={`tel:${client.phone}`}>{client.phone}</a></div>
            <div className="subcardhead">
              Primary Contact E-Mail : {" "}
              <a href={`mailto:${client.email1}`}>{client.email1}</a>
            </div>
            <div className="subcardhead">
              Secondary Contact E-Mail : {" "}
              <a href={`mailto:${client.email2}`}>{client.email2} </a>
            </div>
            <div className="subcardwarr">Warranty Handling</div>
            <li className="subcard">Send Notification Email (<a href={`mailto:${client.email1}`}>Primary</a>/<a href={`mailto:${client.email2}`}>Secondary</a>): {client.noticewar}</li>
            <li className="subcard">Remote Diagnosis : {client.remodiagwar}</li>
            <li className="subcard">Remotely Repair : {client.remrepwar}</li>
            <li className="subcard">Dispatch Tech : {client.dispwar}</li>
            <div className="subcardwarr">Out of Warranty Handling</div>
            <li className="subcard">Send Notification Email (<a href={`mailto:${client.email1}`}>Primary</a>/<a href={`mailto:${client.email2}`}>Secondary</a>): {client.noticewar}</li>
            <li className="subcard">Remotely Diagnosis : {client.remdiagout}</li>
            <li className="subcard">Remotely Repair : {client.remrepout}</li>
            <li className="subcard">Dispatch Tech : {client.dispout}</li>
          </div>
        ))}
    </div>
  );
};

export default Card;
