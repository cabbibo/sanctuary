function Opening( pArray ){


  this.positions = [];

  for( var i = 0; i < pArray.length; i++ ){

    var p = pArray[i];
    this.positions.push( new THREE.Vector3( p[0] , p[1] , p[2] ) );

  }


  var col = new THREE.Color();
  col.r = Math.random();
  col.g = Math.random();
  col.b = Math.random();


  var m = new THREE.Mesh( new THREE.CubeGeometry() , new THREE.ShaderMaterial({

    uniforms:{
      color: { type:"c" , value: col },
      time:G.time
    },
    vertexShader: shaders.vs.ray,
    fragmentShader: shaders.fs.ray,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
    
  }) );

  this.body = m;

  
  var c = new THREE.Mesh( new THREE.CubeGeometry() , new THREE.MeshBasicMaterial({

    color:col, 
    side: THREE.DoubleSide,
    
  }) );

  this.body = m;
  this.cap = c;

  this.reset();

  mover.add( this.body );
  mover.add( this.cap );

}

Opening.prototype.reset = function(){

  var geo = rayMaker.createGeometry( light , this.positions, rayStoppers );

  this.body.geometry = geo;
  this.body.geometryNeedsUpdate = true;

  var cap = rayMaker.createCapGeometry( light , this.positions, rayStoppers );

  this.cap.geometry = cap;
  this.cap.geometryNeedsUpdate = true;

}
