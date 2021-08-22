import React, { Fragment, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Left from '../Images/Left.svg';
import Right from '../Images/Right.svg';

const Arrow = styled.div`
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 45%;
    height: 45%;
    object-fit: contain;
    :hover {
          transform: scale(1.25);
          transition: transform .15s ease;
        }
  }
`;

const StyledCard = styled.div`
    /* background-color: grey;
    border-left: solid thin black; */
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    /* height: 20vh; */
    padding: 0 1em;
    margin-bottom: 15%;
    height: 25vh;

    img {
        /* object-fit: contain; */
        width: 100%;
        height: 100%;
    }
    
`;

const SliderHeading = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;1,700&display=swap');
  
  padding-left: 7%;
  height: 10vh;
  display: flex;
  align-items: center;
  /* margin-top: 5%; */

  h2 {
    font-family: 'Marvel', sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: rgb(190,0,0);
  }
  
`;


function ComicSlider(props) {
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (
        <Fragment>
          <SliderHeading>
              <h2>Trending Comics</h2>
          </SliderHeading>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
          >
            {props.thumb.map(( id ) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                title={id}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
                images={id}
                data={id.substr(44)}

              />)
            )}

          </ScrollMenu>
        </Fragment>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <img src={Left} />
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <img src={Right} />
    </Arrow>
  );
}

function Card ({
            onClick,
            images,
            data
          }) {

  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "15em",
        marginTop: "1em"
      }}
      tabIndex={0}
    >

      <StyledCard>
        <Link to={`/details/${data}`} >
          <img src={images} />
        </Link>
      </StyledCard>
    </div>
  );
}

export default ComicSlider;