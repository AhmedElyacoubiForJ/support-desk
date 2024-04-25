import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
  // Get user from the global state store
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  // Create a new ticket object
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "new",
    user: user.id,
  });
  // Update the new ticket object
 /*  const handleChange = (e) => {
    setNewTicket({
      ...newTicket,
      [e.target.name]: e.target.value,
    });
  }; */
  // Submit the new ticket
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newTicket);
  };
  return (
    <>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the from below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input type="email" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="Macbook Pro">Macbook Pro</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
