import React from "react";


function SignIn(){
    return(

    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputUser" class="form-label">User</label>
    <input type="user" class="form-control" id="inputUser"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        I'm a human
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

    )
}

export default SignIn;
