import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddSupplier() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const saveSupplier = async (data) => {
    const response = await fetch("/api/stockFinal/supplier", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json(); // deserialise
    if (result.error) {
      alert("Error: " + result.error);
    } else {
      alert("Supplier Added");
      window.location.href = "/supplier";
    }
    console.log(result);
    setData(JSON.stringify(data));
  };

  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa", height: "70px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            height: "100%",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#212529",
            }}
          >
            Supplier Management
          </a>
          <div>
            <Button
              variant="primary"
              onClick={() => {
                window.location.href = "/supplier";
              }}
            >
              Add Supplier
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          width: "500px",
          margin: "2em auto",
        }}
      >
        <Form onSubmit={handleSubmit(saveSupplier)}>
          <Form.Group controlId="supplierName">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              {...register("name", { required: true })}
              placeholder="Ada Lovelace"
            />
          </Form.Group>

          <br />

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              {...register("address", { required: true })}
              placeholder="City, Country"
            />
          </Form.Group>

          <br />

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              {...register("phone", { required: true })}
              placeholder="082-7412-1256"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: "27.5em", marginTop: "2em" }}
          >
            Save
          </Button>
        </Form>
      </div>
      <a
        style={{
          textDecoration: "none",
          marginLeft: "72em",
        }}
        href="../#"
      >
        Go back
      </a>
    </div>
  );
}
