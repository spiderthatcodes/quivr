import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";
import { useGetTokenQuery, useGetAccountsByRoleQuery } from "../app/authSlice";
// import { useCreateOrderMutation } from "../app/ordersSlice";

/*
  Login:
    user name: jesus
    password: love

    **Notes: it would be GREAT to change numeric inputs to
    a list of incremented integers
  */

const OrderCreate = () => {
  const navigate = useNavigate();
  const { data: accounts, isLoading } = useGetAccountsByRoleQuery("shaper");
  const { data: token, isLoading: isTokenLoading } = useGetTokenQuery();
  console.log(token);
  console.log(accounts);

  const [surfboard_shaper, setShaper] = useState("");
  const [surfboard_model, setModel] = useState("");
  const [surfboard_length, setLength] = useState("");
  const [surfboard_width, setWidth] = useState("");
  const [surfboard_thickness, setThickness] = useState("");
  const [surfboard_construction, setConstruction] = useState("");
  const [surfboard_fin_system, setFinSystem] = useState("");
  const [surfboard_fin_count, setFinCount] = useState("");
  const [surfboard_tail_style, setTailStyle] = useState("");
  const [surfboard_glassing, setGlassing] = useState("");
  const [surfboard_desc, setDesc] = useState("");
  const [addToCart, setAddToCart] = useState([]);
  // const [createOrder, result] = useCreateOrderMutation();
  // const [error, setError] = useState("");
  // const [isValid, setIsValid] = useState(false);

  // for adding to 'selects' and making them REQUIRED
  //   useEffect(() => {
  //     setIsValid(data ? true : false);
  //   }, [data]);

  // if order submission is canceled:
  const handleClick = () => {
    // where should we navigate to??
    navigate("/orders");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const order = {
      date: "2023-11-29", //change
      customer_id: "test", //change
      id: "1794gx977vgg", //change
      order_status: "Order received!",
      surfboard_shaper,
      surfboard_model,
      surfboard_length,
      surfboard_width,
      surfboard_thickness,
      surfboard_construction,
      surfboard_fin_system,
      surfboard_fin_count,
      surfboard_tail_style,
      surfboard_glassing,
      surfboard_desc,
    };
    setAddToCart(...addToCart, order);
  }
  console.log(addToCart);

  //   if (result.isSuccess) {
  //     setShaper("");
  //     setModel("");
  //     setLength("");
  //     setWidth("");
  //     setThickness("");
  //     setConstruction("");
  //     setFinSystem("");
  //     setFinCount("");
  //     setTailStyle("");
  //     setGlassing("");
  //     setDesc("");
  //     // navigate("/order-history");
  //   } else if (result.isError) {
  //     setError(result.error);
  //   }

  if (isLoading || isTokenLoading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <label>
        Choose a shaper...
        <br />
        <select
          onChange={(e) => setShaper(e.target.value)}
          name="shaper"
          id="shaper"
          value={surfboard_shaper}
          required
        >
          <option></option>
          {accounts &&
            accounts.map((obj) => {
              return (
                <option key={obj.username} value={obj.username}>
                  {obj.username}
                </option>
              );
            })}
        </select>
      </label>
      {/* {!isValid && <p>Please shoose a shaper</p>} */}
      <br />

      <input
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={surfboard_model}
        placeholder="board model..."
        required
      />
      <br />

      <input
        type="text"
        onChange={(e) => setLength(e.target.value)}
        value={surfboard_length}
        placeholder="board length..."
        required
      />
      <br />

      <input
        type="text"
        onChange={(e) => setWidth(e.target.value)}
        value={surfboard_width}
        placeholder="board width..."
        required
      />
      <br />

      <input
        type="text"
        onChange={(e) => setThickness(e.target.value)}
        value={surfboard_thickness}
        placeholder="board thickness..."
        required
      />
      <br />

      <select
        onChange={(e) => setConstruction(e.target.value)}
        name="construction"
        id="construction"
        value={surfboard_construction}
      >
        <option> Choose a construction...</option>
        {["PU", "EPS", "XTR", "Other"].map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {/* {!isValid && <p>Please shoose a construction</p>} */}
      <br />

      <select
        onChange={(e) => setFinSystem(e.target.value)}
        name="finSystem"
        id="finSystem"
        value={surfboard_fin_system}
      >
        <option> Choose a fin system...</option>
        {["FCS1", "FCS2", "Futures", "Other"].map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {/* {!isValid && <p>Please shoose a fin system</p>} */}
      <br />

      <select
        onChange={(e) => setFinCount(e.target.value)}
        name="finCount"
        id="finCount"
        value={surfboard_fin_count}
      >
        <option> Number of fins...</option>
        {[5, 4, 3, 2, 1].map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      {/* {!isValid && <p>Please shoose a number of fins</p>} */}
      <br />

      <select
        onChange={(e) => setTailStyle(e.target.value)}
        name="tailStyle"
        id="tailStyle"
        value={surfboard_tail_style}
      >
        <option> Tail style...</option>
        {["squash", "round", "pin", "diamond", "fish", "swallow", "asym"].map(
          (style) => {
            return (
              <option key={style} value={style}>
                {style}
              </option>
            );
          }
        )}
      </select>
      {/* {!isValid && <p>Please shoose a tail style</p>} */}
      <br />

      <select
        onChange={(e) => setGlassing(e.target.value)}
        name="glassing"
        id="glassing"
        value={surfboard_glassing}
      >
        <option> Select glassing...</option>
        {["4 + 4 x 4", "6 + 4 x 4", "6 + 4 x 6", "6 + 6 x 6", "Other"].map(
          (glass) => {
            return (
              <option key={glass} value={glass}>
                {glass}
              </option>
            );
          }
        )}
      </select>
      {/* {!isValid && <p>Please shoose a glassing schedule</p>} */}
      <br />

      <textarea
        name="desc"
        id="desc"
        placeholder="special instructions..."
        cols="60"
        rows="8"
        value={surfboard_desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <br />

      <div id="buttons">
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        <br />

        {/* add conditional to hide button if data is not valid */}
        {/* <button disabled={!isValid} onClick={() => handleClick()}> */}
        <button onClick={() => handleClick()}>Cancel</button>
        {/* {error ? (
          <div>There was an error creating your order. {error}</div>
        ) : null} */}
      </div>
    </Wrapper>
  );
};

export default OrderCreate;
