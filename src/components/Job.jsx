import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavouriteAction, removeFavouriteAction } from "./redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const actualJob = useSelector((state) => state.jobs.jobList);

  console.log("stato attuale", actualJob);

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
        {!actualJob.includes(data.company_name) ? (
          <Button
            onClick={() => {
              dispatch(addFavouriteAction(data.company_name));
            }}
          >
            Add favourite
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(removeFavouriteAction(data.company_name));
            }}
          >
            Remove Favourite
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
