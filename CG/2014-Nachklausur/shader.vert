uniform mat4 matN; // Normalentransformation (Objekt -> Kamera)
uniform mat4 matM; // Modelltransformation
uniform mat4 matV; // Kameratransformation
uniform mat4 matP; // Projektionstransformation
uniform mat4 matMV; // Model-View-Matrix
uniform mat4 matMVP; // Model-View-Projection-Matrix

in vec3 P; // Eingabe-Vertex in Objektkoordinaten
in vec3 n; // Eingabenormale in Objektkoordinaten

out vec3 P_k; // Vertex-Position in Kamerakoordinaten
out vec3 n_k; // Vertex-Normale in Kamerakoordinaten

void main() {
    P_k = matMV * P;
    n_k = matN * n_k;
    gl_Position = matP * P_k;
}
