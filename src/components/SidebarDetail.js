import React from "react";

const SidebarDetail = ({ tel, email, social }) => {
  return (
    <div className="sidebar">
      <h4 className="py-2 font-semibold text-lg leading-tight truncate">
        Come Contattarci
      </h4>
      <ul>
        {tel && (
          <a>
            <li className="py-2 inline-block">📞 {tel}</li>
          </a>
        )}
        {email && (
          <a>
            <li className="py-2 inline-block">✉️ {email}</li>
          </a>
        )}
        {social && (
          <a href={social[0]}>
            <li className="py-2 inline-block">📱 facebook</li>
          </a>
        )}
      </ul>
    </div>
  );
};

export default SidebarDetail;
