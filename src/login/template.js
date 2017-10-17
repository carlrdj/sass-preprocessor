var yo = require('yo-yo');
var translate = require('../translate');

module.exports = yo`
<div id="login-container" class="valign-wrapper">
	<div class="container">
    <div class="row">
      <div class="col s12 m6 push-m3 l5 ">				
				<div class="card-panel">
					<h1 class="center-align">${translate.message('app-name')}</h1>
		      <form class="signup-form">
		        <div class="divider"></div>
		        <div class="section">
		          <div class="input-field">
			          <input id="user" type="text" class="validate">
			          <label for="user">Usuario</label>
			        </div>
		          <div class="input-field">
			          <input id="password" type="password" class="validate">
			          <label for="password">Contraseña</label>
			        </div>
		          <!--<button class="btn waves-effect waves-light" type="submit">Ingresar</button>-->		          
		          <a class="btn waves-effect waves-light" href="./order" >Ingresar</a>
		        </div>
		      </form>
		      <div class="copy-right right-align">
		      	<label>${translate.message('developed-by')}: <a href>${translate.message('team-name')}</a></label>
		      </div>
		      
			  </div>

      </div>
    </div>
  </div>
</div>
`;


