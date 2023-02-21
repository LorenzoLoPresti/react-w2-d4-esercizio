import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Job from "./Job";
import { fetchJobListAction } from "./redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const jobsFromState = useSelector((state) => state.fetch.fetchedJobs.data);
  const loader = useSelector((state) => state.fetch.loading);
  const fetchError = useSelector((state) => state.fetch.errors);
  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    dispatch(fetchJobListAction(baseEndpoint, query + "&limit=20"));
  };

  console.log(useSelector((state) => state.fetch.errors));

  return (
    <Container>
      {(loader && (
        <Row
          className="d-flex text-center"
          style={{
            height: "100vh",
            width: "100%",
          }}
        >
          <Col style={{ lineHeight: "50" }}>
            <Spinner animation="border" variant="primary" />
          </Col>
        </Row>
      )) || (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <Row>
              <Col>
                <h1>Remote Jobs Search</h1>
              </Col>
              <Col className="align-self-end d-flex justify-content-end">
                <Link to={"/favourites"}>
                  <p style={{ fontSize: "1.2rem" }}>Go to favourites</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {(fetchError && (
              <Alert
                className="mt-5 py-3"
                style={{ fontSize: "1.2rem" }}
                key={"danger"}
                variant={"danger"}
              >
                Oops! {fetchError}
              </Alert>
            )) ||
              jobsFromState?.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MainSearch;
