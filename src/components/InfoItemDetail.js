import React from "react";

const InfoItemDetail = () => {
  return (
    <div className="py-12">
      <div>
        <h4 className="mt-4 font-semibold text-lg leading-tight truncate">
          Info consegna a domicilio
        </h4>
        <ul>
          <li className="py-2">Località di consegna</li>
          <li className="py-2">Orario</li>
          <li className="py-2">Costo di consegna</li>
          <li className="py-2">Ordine minimo</li>
          <li className="py-2">Metodo di pagamento</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoItemDetail;
