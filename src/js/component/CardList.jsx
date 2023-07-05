import React from "react";

let cardData = [
  {
    imagen: "https://cdn.shopify.com/s/files/1/0447/2265/1292/products/lytukixn3hhcvn1fvs2g_299f31fb-497e-4461-9e82-d84c33dbb5cf_1024x1024@2x.jpg?v=1675986052",
    titulo: "Ocelote",
    contenido: "Los ocelotes pueden ver los jugadores aunque estén con el efecto de invisibilidad.",
  },
  {
    imagen: "https://i0.wp.com/minecraftsix.com/wp-content/uploads/2019/08/mystic-world-mod-1.png?resize=696%2C696&ssl=1",
    titulo: "Escarabajo",
    contenido: "Mi mejor cualidad es ser muy bonito",
  },
  {
    imagen: "https://media.forgecdn.net/avatars/287/276/637307745393512379.png",
    titulo: "Nethermites",
    contenido: "Ellos son los Silverfish del Nether, ¿tiernos verdad?",
  },
  {
    imagen: "https://media.forgecdn.net/avatars/303/445/637372519838014076.gif",
    titulo: "Abeja",
    contenido: "Los creepers y las abejas son las únicas criaturas que solo pueden atacar una vez.",
  },
];

let cardStyle = {
  width: "18rem"
}

let divButton = {
  background: "#F8F5F6"
}

const CardList = () => {
  return (
    <div className="d-flex justify-content-center" id="cardDiv">
      {cardData.map((card, index) => (
        <div className="card m-2 text-center" key={index} style={cardStyle}>
          <img src={card.imagen} alt="" className="card-img-top" />
          <div className="card-body justify-content-center">
            <h5 className="card-tittle">{card.titulo}</h5>
            <p className="card-text">{card.contenido}</p>
          </div>
          <div className="border p-2" style={divButton}>
            <a href="" className="btn btn-primary">Find out more!</a>
          </div>
            
        </div>

      ))}
    </div>
  );
};

export default CardList
