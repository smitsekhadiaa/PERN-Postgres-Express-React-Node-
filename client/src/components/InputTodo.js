import React, { Fragment, useState } from 'react';
function InputTodo()
{

    const [description,setDescription]=useState("");

    const onSubmitForm=async e=>{
        e.preventDefault();
        try{
            const body={description};
            const response=await fetch("http://localhost:5000/todos", //requesting data from our browser(backend server)
            {
                method:"POST",  //app.post method me jiska link /todos hai i.e add a blog.
                headers:{"Content-Type":"application/json"},   //what type of response we are sending ? ->json
                body:JSON.stringify(body) //from backend we are sending response in json format that why stringify to json
            });
            console.log(response);
            window.location="/";  //once we have got response, refresh the window

        }
        catch(err)
        {
            console.error(err.message);
        }

    }
    return(
        <Fragment>
            <h1 className='text-center mt-5'>
                input todo;
            </h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type={'text'} className="form-control" value={description} onChange={e=>{
                    setDescription(e.target.value);
                }}
                />
                <button className='btn btn-success'>add</button>
            </form>
        </Fragment>
            
    )
}
export default InputTodo;