in vec3 position;   // Die Position des Vertex in Objektkoordinaten.
out vec3 posCamera; // Die Position des Vertex in Kamerakoordinaten.

uniform mat4 M; // Die Model-Matrix.
uniform mat4 V; // Die View-Matrix.
uniform mat4 P; // Die Projection-Matrix.

void main() {
	posCamera = vec3(V * M * vec4(position, 1.0));
	gl_Position = P * V * M * vec4(position, 1.0);
}
