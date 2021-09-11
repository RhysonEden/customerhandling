import React, { useState, useEffect } from "react";
import logo from "../assests/logo.gif";
const Card = ({ clients, searchInput, setSearchInput }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log("test");
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="AppLoading">
          <img src={logo} alt="Loading..." className="loading" />
        </div>
      ) : (
        <div className="App">
          <div className="cardmain">
            {clients
              .filter((client) => {
                const clientsId = client.gvr.toLowerCase();
                if (clientsId.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const gpId = client.gpcus.toLowerCase();
                if (gpId.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const companyName = client.comp.toLowerCase();
                if (companyName.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const storeName = client.name.toLowerCase();
                if (storeName.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const storeStreet = client.street.toLowerCase();
                if (storeStreet.includes(searchInput.toLowerCase())) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((client, index) => (
                <div key={index} className="card">
                  {console.log(client, "client")}
                  <div className="subcardhead">GVR ID : {client.gvr}</div>
                  <div className="subcardhead">
                    GP Customer Number : {client.gpcus}
                  </div>
                  <div className="subcardhead">
                    Company Name : {client.comp}
                  </div>
                  <div className="subcardhead">Store Name : {client.name}</div>
                  <div className="subcardhead">
                    Store Address: {client.street},
                  </div>
                  {(() => {
                    switch (client.gctype) {
                      case "prem":
                        return (
                          <div className="subcardwarr">
                            GC Customer Type : Premium
                          </div>
                        );
                      case "out":
                        return (
                          <div className="subcardwarr">
                            GC Customer Type : Out-Of-Warranty
                          </div>
                        );

                      case "in":
                        return (
                          <div className="subcardwarr">
                            GC Customer Type : In-Warranty
                          </div>
                        );
                      default:
                        return null;
                    }
                  })()}
                  <div className="subcardhead">
                    Primary Contact E-Mail :{" "}
                    <a href={`mailto:${client.email1}`}>{client.email1}</a>
                  </div>
                  <div className="subcardhead">
                    Secondary Contact E-Mail :{" "}
                    <a href={`mailto:${client.email2}`}>{client.email2} </a>
                  </div>
                  <div className="subcardhead">
                    <a href={`mailto:${client.email1}, ${client.email2}`}>
                      Email Both
                    </a>
                  </div>
                  <div className="subcardwarr">Warranty Handling</div>
                  <li className="subcard">
                    Send Notification Email (
                    <a href={`mailto:${client.email1}`}>Primary</a>/
                    <a href={`mailto:${client.email2}`}>Secondary</a>):{" "}
                    {client.noticewar}
                  </li>
                  <li className="subcard">
                    Remote Diagnosis : {client.remodiagwar}
                  </li>
                  <li className="subcard">
                    Remotely Repair : {client.remrepwar}
                  </li>
                  <li className="subcard">Dispatch Tech : {client.dispwar}</li>
                  <div className="subcardwarr">Out of Warranty Handling</div>
                  <li className="subcard">
                    Send Notification Email (
                    <a href={`mailto:${client.email1}`}>Primary</a>/
                    <a href={`mailto:${client.email2}`}>Secondary</a>):{" "}
                    {client.noticewar}
                  </li>
                  <li className="subcard">
                    Remotely Diagnosis : {client.remdiagout}
                  </li>
                  <li className="subcard">
                    Remotely Repair : {client.remrepout}
                  </li>
                  <li className="subcard">Dispatch Tech : {client.dispout}</li>
                  <div className="subcardwarr">
                    Site Active Since : {client.actdate}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
