import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Home({ supplier }) {
  function deletesupplier(id) {
    fetch(`/api/stockFinal/supplier/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload(false);
      });
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ height: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            height: "100%",
            backgroundColor: "#106EFD",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "300",
              color: "white",
            }}
          >
            Supplier Management
          </a>
          <div>
            <Button
              variant="dark"
              onClick={() => {
                window.location.href = "/supplier";
              }}
            >
              + Add Supplier
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          width: "50%",
          margin: "0 auto",
          marginTop: "6em",
          backgroundColor: "#F9FBFB",
        }}
      >
        <Table responsive style={{}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {supplier.map((supplier) => {
              return (
                <tr key={supplier._id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.address}</td>
                  <td>{supplier.phone}</td>
                  <td>
                    <>
                      <Link href={`/supplier/update/${supplier._id}`}>
                        Edit
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button onClick={() => deletesupplier(supplier._id)}>
                        Delete
                      </Button>
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `https://stock-final-6411325.vercel.app/api/stockFinal/supplier`
  );
  const supplier = await res.json();
  // Sort suppliers alphabetically
  supplier.sort((first, second) => first.name.localeCompare(second.name));
  return { props: { supplier } };
}
