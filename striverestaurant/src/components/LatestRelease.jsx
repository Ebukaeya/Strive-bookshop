import myData from "../data";
import { Container, Row, Col } from "react-bootstrap";

const LatestRelease = () => {
 
  return (
    <>
      <Container className="mt-3">
        <h5 className="mb-5">Latest Books</h5>
        <Row>
          {myData.map((book) =>
          
            <Col className="mb-5" key={book.asin} sm={12} md={4} lg={3}>
              <div   className="cardWrapper">
                <div className="imageDiv">
                  <img
                    src={book.img}
                    height="100%"
                    width="100%"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
                <div className="content">
                  <div>
                    <p>
                      <strong>category</strong>
                    </p>
                    <p>
                      <strong>Price</strong>
                    </p>
                  </div>
                  <div>
                    <p>{book.category}</p>
                    <p>{book.price}</p>
                  </div>
                </div>
                <div className="button">
                  <button>Buy</button>
                </div>
              </div>
            </Col>
          
           )}

           
         
        </Row>
      </Container>
    </>
  );
};

export default LatestRelease;
