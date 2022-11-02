

const Section = (props) => {
  return (
    <>
      <div className="App">

        < h2 className="titles" > {props.info.category}</h2>

        <div className="images-container-1">

          {
            props.info.images.map((image, num) => {
              return (<div className="images-container">
                <img key={num} src={image} alt="images netflix" />
              </div>
              );
            })
          }

        </div>

      </div >

    </>
  )
};

export default Section;