import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  console.log(
    "stato attuale",
    useSelector((state) => state.jobs)
  );

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <Button
          onClick={() => {
            dispatch({
              type: "FAVOURITE_JOBS",
              payload: data.company_name,
            });
          }}
        >
          Add favourite
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
