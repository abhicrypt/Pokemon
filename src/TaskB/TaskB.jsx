import React from "react";

function TaskB() {
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
                  <h5 class="card-title">Pokedex</h5>
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
                        <img
                          src="http://www.serebii.net/pokemongo/pokemon/003.png"
                          alt="Girl in a jacket"
                          width="120"
                          height="150"
                        ></img>
                        <h3>#Name</h3>
                        <h5>Type</h5>
                        <h5>#001</h5>
                        
                        <div><h4 bg-primary>Grass</h4></div>
                      </div>
                      <div className="col-sm">
                        <br/>
                        <h4>Height</h4>
                        <h3>5.3</h3>
                        <h4>Weakness</h4>
                        $theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);

                      </div>
                      <div className="col-sm">
                        <br/>
                        <h4>Weight</h4>
                        <h3>5 kg</h3>
                        <h4>Evolution</h4>
                        <h4>Evo Type</h4>
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

export default TaskB;
