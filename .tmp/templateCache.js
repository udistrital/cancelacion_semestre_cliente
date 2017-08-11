angular.module('financieraClienteApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/home/home.html',
    "<div class=\"container\"> <div class=\"row\"> <h1>Ingresar</h1> <formly-form model=\"m\" fields=\"mFields\"></formly-form> <button class=\"btn btn-primary\" ng-click=\"sendLogin()\"> Entrar </button> </div> </div> "
  );


  $templateCache.put('views/view2/view.html',
    "<p>This is the partial for view 2.</p> <p> Showing of 'interpolate' filter: {{ 'Current version is v%VERSION%.' | interpolate }} </p> <a class=\"btn btn-info\" href=\"#!/home\">Volver</a> "
  );

}]);
