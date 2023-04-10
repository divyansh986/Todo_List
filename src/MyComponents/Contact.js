import React from 'react'

export const Contact = () => {
    return (
        <div>
           <div class="container my-4">
        <h2>Contact Us</h2>
        <form class="row g-3">
            <div class="col-md-6">
              <label for="input" class="form-label">FirstName</label>
              <input type="email" class="form-control" id="input"/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">LastName</label>
              <input type="password" class="form-control" id="inputPassword4"/>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="inputAddress" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"/>
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        <div class="'row featurette d-flex justify-content-center align-items-center"></div>
    </div>

        </div>
    )
}
