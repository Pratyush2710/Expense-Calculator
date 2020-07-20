import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form.control"
            id="charge"
            name="charge"
            placeholder="expense name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form.control"
            id="amount"
            name="amount"
            placeholder="expense amount"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
