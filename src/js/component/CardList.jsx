import React from "react";

let cardData = [
  {
    imagen: "https://cdn.shopify.com/s/files/1/0447/2265/1292/products/lytukixn3hhcvn1fvs2g_299f31fb-497e-4461-9e82-d84c33dbb5cf_1024x1024@2x.jpg?v=1675986052",
    titulo: "Chita de Minecraft",
    contenido: "Contenido de la card 1",
  },
  {
    imagen: "https://cdnx.jumpseller.com/zippylabs/image/17200072/resize/480/480?1648307766",
    titulo: "Abeja de Minecraft",
    contenido: "Contenido de la card 2",
  },
  {
    imagen: "https://i0.wp.com/minecraftsix.com/wp-content/uploads/2019/08/mystic-world-mod-1.png?resize=696%2C696&ssl=1",
    titulo: "Escarabajo de Minecraft",
    contenido: "Contenido de la card 3",
  },
  {
    imagen: "https://media.forgecdn.net/avatars/287/276/637307745393512379.png",
    titulo: "Nethermites de Minecraft",
    contenido: "Contenido de la card 4",
  },
];

let cardStyle = {
  width: "18rem"
}

const CardList = () => {
  return (
    <div className="d-flex justify-content-center">
      {cardData.map((card, index) => (
        <div className="card m-2 text-center" key={index} style={cardStyle}>
          <img src={card.imagen} alt="" className="card-img-top" />
          <div className="card-body justify-content-center">
            <h5 className="card-tittle">{card.titulo}</h5>
            <p className="card-text">{card.contenido}</p>
          </div>
          <div className="border p-2">
            <a href="" className="btn btn-primary">Go somewhere</a>
          </div>
            
        </div>

      ))}
    </div>
  );
};

export default CardList
