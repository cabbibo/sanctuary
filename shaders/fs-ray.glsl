
uniform vec3 color;
uniform float time;
uniform sampler2D  t_audio;

varying float vLookup;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


$simplex

void main(){

  //float a =// snoise( gl_FragCoord.xy * .0001 + vec2( time*.01 , time * .01 ) );
  gl_FragColor = vec4( color.xyz , .1); 

}
