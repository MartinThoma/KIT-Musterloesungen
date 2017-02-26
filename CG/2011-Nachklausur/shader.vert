varying vec3 L, N;

void main() {
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
    vec3 P = vec3(gl_ModelViewMatrix * gl_Vertex);
    L = gl_LightSource[0].position - P;
    N = gl_NormalMatrix * gl_Normal;
}
