varying vec3 L, N;

void main() {
    float kd = max(0.0, dot(normalize(L), normalize(N)));
    gl_FragColor = vec4(kd);
}
