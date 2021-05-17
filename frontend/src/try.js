<Route path="/:userId/places" exact>
<UserPlaces />
</Route>
<Route path="/places/new" exact>
<NewPlace />
</Route>
<Route path="/places/:placeId">
<UpdatePlace />
</Route>
<Redirect to="/" />


<form class="form-signin" action="verify.php" method="post">
<div class="text-center mb-4">
  <img class="mb-4" src="assets/img/avtaar.png" alt="" width="144" height="144">
  <h1 class="h3 mb-3 font-weight-normal">User Login</h1>
</div>

<div class="form-label-group">
  <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputEmail">Email address</label>
  <?php 
  if(!empty($Email_err))
  echo "<p class='text-danger'>.$Email_err.</p>";
  ?>
</div>

<div class="form-label-group">
  <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
  <label for="inputPassword">Password</label>
  <?php
  if(!empty($thpassword_err))
  echo "<p class='text-danger'>".$thpassword_err."</p>";
  ?>
</div>
</br><a href="forget.php">Forgost Password?</a>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
<a href="register.php">&nbsp; New user?</a></br></br></br>
<button class="btn btn-lg btn-primary btn-block" type="submit">Continue</button>
</form>