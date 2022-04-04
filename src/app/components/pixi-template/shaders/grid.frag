precision mediump float;

uniform int height;
uniform float dist;
uniform int colorType;
uniform bool drawVertical;

void main() {    

    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

    if (colorType == 1) {
        color = vec4(1.0, 1.0, 1.0, 1.0);
    } 

    if (colorType == 2) {
        color = vec4(0.5412, 0.5412, 0.5412, 1.0);
    }


    vec2 pos = vec2(gl_FragCoord.x, float(height) - gl_FragCoord.y);
    if (
        // up
        (int(mod(pos.y + (pos.x + 1.0) * 0.5, dist)) == 0)
        // down
        || (int(mod(pos.y - (pos.x - 1.0) * 0.5, dist)) == 0)
        || ((int(mod(pos.x + 1.0, dist)) == 0) && drawVertical)
        || ((int(mod(pos.x + 1.0, dist)) == 1) && drawVertical)
       ) 
    {
        gl_FragColor = color;
    } 
    else 
    {
        gl_FragColor = vec4(0);
    }
}
