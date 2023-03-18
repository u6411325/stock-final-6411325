import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    reset(supplier);
  }, [reset, supplier]);

  const updateSupplier = async (data) => {
    const response = await fetch(`/api/stockFinal/supplier/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
      alert("Supplier updated");
      window.location.href = "/";
    }
    console.log(result);
    setData(JSON.stringify(data));
  };

  if (!supplier)
    return (
      <div>
        <p>Supplier not found</p>
        <Link href="/">Back</Link>
      </div>
    );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          width: "600px",
          margin: "0 auto",
          marginTop: "6em",
          backgroundColor: "#F9FBFB",
        }}
      >
        <Container style={{ maxWidth: "80%" }}>
          <Form onSubmit={handleSubmit(updateSupplier)}>
            <h3 style={{ marginTop: "2em", marginBottom: "2em" }}>
              Edit Supplier Details
            </h3>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
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
                placeholder="082-1725-7165"
              />
            </Form.Group>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/" passHref>
                <Button
                  style={{
                    marginTop: "2em",
                    marginRight: "1em",
                    width: "10em",
                  }}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                style={{
                  marginTop: "2em",
                  width: "10em",
                  marginLeft: "1em",
                }}
                variant="primary"
                type="submit"
              >
                Update
              </Button>
            </div>

            <p>{data}</p>
          </Form>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await fetch(
    `https://stock-final-6411325.vercel.app/api/stockFinal/supplier/${params.id}`
  );
  const supplier = await res.json();
  return { props: { supplier } };
}
