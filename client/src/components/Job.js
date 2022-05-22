import moment from 'moment'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import react, {useState} from "react";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  job,
  createdAt,
  status,
}) => {
  const [jobType, setJobType] = useState({Type : job});

  const  setEditJob = () => {
    setJobType({Type : "Clerk"});
  };

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <span className='icon'>{date}</span>
          <span className='text' id="type">{jobType.Type}</span>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <button
              type='button'
              className='btn edit-btn'
              id="edit"
              onClick={() => setEditJob()}
            >
              Edit
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
