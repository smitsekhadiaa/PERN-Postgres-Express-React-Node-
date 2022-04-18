import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);  //initially orignal disc should be written in the input field

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();  //prevent from loading screen everytime we render
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,  //by default fetch makes get req so if u want other type of req u need to specify
        {
          method: "PUT",  //will make a req to the app.put in index.js
          headers: { "Content-Type": "application/json" },  //what type of data do we want to send>->json data
          body: JSON.stringify(body)  //will convert the body into json data 
        }
      );

      window.location = "/";  //update the browser to show the updates content
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}  //here bootstrap haaga ,it will target always the same id soeven if we click edit button of another todo,always the same will be written in the input field so we give id to each acg to todo_id
      >
        Edit
      </button>

     
      <div
        class="modal"
        id={`id${todo.todo_id}`}  //here bootstrap haaga ,
        onClick={() => setDescription(todo.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)} 
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
