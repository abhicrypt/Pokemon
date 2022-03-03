import React from "react";

function TaskC() {
  return (
    <div>
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-6 mx-auto">
            <div class="card h-100 border-primary justify-content-center">
              <div>
                <div class="card-header bg-primary">
                  
                </div>
                <div class="card-body">
                  <h5 class="card-title">Pokemon Finder</h5>
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                  <div className="container-md">
                    <div className="row" background-color="primary">
                      <div className="col-sm">
                        <br/>
                        <h3>Name</h3>
                        <h5>#001</h5>
                        
                      </div>
                      <div className="col-sm">
                        <br/>
                        <h4>Weakness</h4>
                       


                      </div>
                      <div className="col-sm">
                        <br/>
                        <h4>Details</h4>
                        <h3>5 kg</h3>
                        
                        <div className="">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskC;
