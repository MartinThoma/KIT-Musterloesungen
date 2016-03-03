in vec4 position;   // Vertex-Position in Objektkoordinaten.
in vec4 normal;     // Vertex-Normale in Objektkoordinaten.
out vec3 posWorld;  // Vertex-Position in Weltkoordinaten.
out vec3 normWorld; // Vertex-Normale in Weltkoordinaten.
uniform mat4 M;     // Model-Matrix.
uniform mat4 V;     // View-Matrix.
uniform mat4 P;     // Projection-Matrix.

void main(void) {
	posWorld = M * position;
	normal = transpose(inverse(M)) * normal;

	gl_Position = P * (V * posWorld);
}
