import React from "react";
import "../style/team.css";
import Alert from "@mui/material/Alert";

export const Team = ({ tabs }) => {
  return (
    <div className="team">
      <div className="nameAndButton">
        <h3 className="name">Hello Jovana Milovic!</h3>
        <button className="btn-menage">MANAGE STORE</button>
      </div>
      <div className="new-member">
        <div className="green-line"></div>
        <Alert severity="success">New team member successifuly added</Alert>
      </div>
      <div className="team-members">
        <h5>Current team member</h5>
        <InputName />
        <InputName />
        <InputName />
      </div>
      <h3> Add new team member</h3>
      <div className="add-new-member-container">
        <div>
          <label htmlFor="">Team member full name</label>
          <input type="text" placeholder="Jovana Milovic" />
        </div>
        <div>
          <label htmlFor="">Team member email</label>
          <input type="text" placeholder="@example.com" />
        </div>
      </div>

      <div className="selectPermition">
        <table name="" id="" className="select">
          <tr>
            <th>Select permission</th>

            <th>
              <input type="checkbox" />
            </th>
          </tr>

          {tabs.map((option, i) => (
            <tr key={i}>
              <td>{option}</td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="buttons">
        <button className="save-changes">Save changes</button>
        <button className="cancel">Cancel</button>
      </div>
      <div className="confirm-adding">
        <p>
          +By adding this team member, you consent to Laganoo's terms and
          conditions. Added team member will recive an email invitation shortly.
        </p>
      </div>
    </div>
  );
};

export const InputName = () => {
  return (
    <div>
      <label htmlFor="">Team member</label>
      <input className="input" type="text" placeholder="Full name" />
      <div className="edit-member">
        <p className="suspend">Suspend</p>
        <p className="remove">Remove</p>
      </div>
    </div>
  );
};
