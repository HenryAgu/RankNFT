import { useState, useEffect } from "react";
// stylesheet
import "./style/Home.scss";

// React beautiful
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// images
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.png";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";

const Home = () => {
  // images
  const images = [
    {
      id: "nft1",
      image: image1,
      name: "Mr Cornea",
    },
    {
      id: "nft2",
      image: image2,
      name: "Lased Ape",
    },
    {
      id: "nft3",
      image: image3,
      name: "Equilibrum",
    },
    {
      id: "nft4",
      image: image4,
      name: "Covid Zombie"
    },
    {
      id: "nft5",
      image: image5,
      name: "Panama",
    },
    {
      id: "nft6",
      image: image6,
      name: "Stoned Ape",
    },
    {
      id: "nft7",
      image: image7,
      name: "Squid Piece",
    },
    {
      id: "nft8",
      image: image8,
      name: "Ghost Town",
    },
  ];
  const [characters, updateCharacters] = useState(images);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  //   Handle on drag end
  const handleOnDragEnd = (result) => {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    console.log(result);
  };

  return (
    <main>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <section>
          <h1>Henry's Upcoming Projects</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="container">
              {(provided) => (
                <ul
                  className="container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map((image, index) => {
                    return (
                      <Draggable
                        key={image.id}
                        draggableId={image.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className="image_container"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="nft_card">
                              <img src={image.image} alt="" />
                              <div className="nft_content">
                                <h2>{image.name}</h2>
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </section>
      )}
    </main>
  );
};

export default Home;
