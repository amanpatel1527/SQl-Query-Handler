import React from 'react';

function Tables() {
  return (
    <div className='p-3 m-3 text-center'>
      {/* <CategoriesTable /> */}
      <h1 className='p-2'>Tables</h1>
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#table1" aria-expanded="false" aria-controls="table1">
          Table 1
        </button>
      </p>
      <div className="collapse" id="table1">
        <div className="card card-body m-2">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#table2" aria-expanded="false" aria-controls="table2">
          Table 2
        </button>
      </p>
      <div className="collapse" id="table2">
        <div className="card card-body m-2">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Tokyo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>India</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Akshay</td>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#table3" aria-expanded="false" aria-controls="table3">
          Table 3
        </button>
      </p>
      <div className="collapse" id="table3">
        <div className="card card-body m-2">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>




      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#table4" aria-expanded="false" aria-controls="table4">
          Table 4
        </button>
      </p>
      <div className="collapse" id="table4">
        <div className="card card-body m-2">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Rohit</td>
                <td>20</td>
                <td>@rohit78</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sunil</td>
                <td>32</td>
                <td>@sunil99</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Karan</td>
                <td>20</td>
                <td>@karan23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Tables;