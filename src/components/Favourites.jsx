import {
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteJobs = useSelector((state) => {
    return state.jobs.jobList;
  });

  const dispatch = useDispatch();

  return (
    <>
      <Link to="/">
        <div className="p-3" style={{ fontSize: "1.2rem" }}>
          <p>Home</p>
        </div>
      </Link>
      <Container>
        <ListGroup>
          <div style={{ textAlign: "center" }}>
            <label
              className="font-weight-bold mb-5"
              style={{ fontSize: "1.8rem" }}
            >
              Favourite List
            </label>
          </div>
          {favouriteJobs.map((job, index) => {
            return (
              <ListGroupItem
                style={{ fontSize: "1.2rem" }}
                key={`JobKey${index}`}
                className="Row"
              >
                <Row className="justify-content-between">
                  <Col xs={8}>{job}</Col>
                  <Col xs={4} style={{ textAlign: "end" }}>
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_JOBS",
                          payload: index,
                        });
                        console.log(favouriteJobs);
                      }}
                    >
                      Remove Favourite
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Container>
    </>
  );
};
export default Favourites;
