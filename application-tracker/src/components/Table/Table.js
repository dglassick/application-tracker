import React, { useState, Fragment } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import './Table.css';

function Table() {
  const dummyData = [
    { id: 1, company: 'Viva', date_applied: '09/13/2020', code_assessment: false, personality_assessment: false, coding_interview: true, formal_interview: false, response: true },
    { id: 2, company: 'Yodel', date_applied: '10/03/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: false, response: true },
    { id: 3, company: 'Flipstorm', date_applied: '05/30/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: true, response: false },
    { id: 4, company: 'Flipbug', date_applied: '08/12/2020', code_assessment: true, personality_assessment: true, coding_interview: false, formal_interview: false, response: true },
    { id: 5, company: 'Aimbu', date_applied: '09/07/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: false, response: false },
    { id: 6, company: 'Dabshots', date_applied: '05/27/2020', code_assessment: true, personality_assessment: true, coding_interview: false, formal_interview: false, response: false },
    { id: 7, company: 'Dynabox', date_applied: '02/29/2020', code_assessment: true, personality_assessment: true, coding_interview: true, formal_interview: false, response: true },
    { id: 8, company: 'Teklist', date_applied: '04/03/2020', code_assessment: false, personality_assessment: true, coding_interview: true, formal_interview: true, response: true },
    { id: 9, company: 'Aimbo', date_applied: '12/12/2020', code_assessment: true, personality_assessment: true, coding_interview: true, formal_interview: false, response: true },
    { id: 10, company: 'Yodoo', date_applied: '10/06/2020', code_assessment: false, personality_assessment: true, coding_interview: false, formal_interview: false, response: false },
    { id: 11, company: 'Vidoo', date_applied: '12/22/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: true, response: true },
    { id: 12, company: 'Fivespan', date_applied: '06/28/2020', code_assessment: true, personality_assessment: false, coding_interview: true, formal_interview: false, response: true },
    { id: 13, company: 'Eidel', date_applied: '12/02/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: false, response: false },
    { id: 14, company: 'Edgeclub', date_applied: '05/08/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: true, response: true },
    { id: 15, company: 'Eimbee', date_applied: '11/27/2020', code_assessment: true, personality_assessment: false, coding_interview: true, formal_interview: true, response: false },
    { id: 16, company: 'Realbridge', date_applied: '06/26/2020', code_assessment: false, personality_assessment: false, coding_interview: true, formal_interview: false, response: true },
    { id: 17, company: 'Divanoodle', date_applied: '06/04/2020', code_assessment: false, personality_assessment: false, coding_interview: true, formal_interview: false, response: true },
    { id: 18, company: 'Flashspan', date_applied: '08/02/2020', code_assessment: true, personality_assessment: false, coding_interview: false, formal_interview: false, response: false },
    { id: 19, company: 'Tagfeed', date_applied: '01/15/2020', code_assessment: false, personality_assessment: false, coding_interview: true, formal_interview: false, response: false },
    { id: 20, company: 'Realcube', date_applied: '08/24/2020', code_assessment: true, personality_assessment: false, coding_interview: true, formal_interview: true, response: false }
  ];

  return (
    <div className='table'>
      <table>
        <tr>
          <th>Company</th>
          <th>Date Applied</th>
          <th>Code Assessment In Application</th>
          <th>Personality Assessment</th>
          <th>Formal Coding Assessment</th>
          <th>Formal Interview</th>
          <th>Response</th>
        </tr>
        <tbody>
          {dummyData.map(data => (
            <Fragment>
              <tr key={data.id}>
                <td>{data.company}</td>
                <td>{data.date_applied}</td>
                <td>{data.code_assessment === true ? <CheckIcon /> : <CloseIcon />}</td>
                <td>{data.personality_assessment === true ? <CheckIcon /> : <CloseIcon />}</td>
                <td>{data.coding_interview === true ? <CheckIcon /> : <CloseIcon />}</td>
                <td>{data.formal_interview === true ? <CheckIcon /> : <CloseIcon />}</td>
                <td>{data.response === true ? <CheckIcon /> : <CloseIcon />}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
