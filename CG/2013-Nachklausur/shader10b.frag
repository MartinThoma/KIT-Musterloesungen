in vec3 posCamera; // Die Position des Vertex in Kamerakoordinaten.
out vec4 color;    // Die Ausgabefarbe.
uniform vec3 N;    // Die Normale der Clip-Ebene, in Kamerakoordinaten.
uniform vec3 p;    // Der Aufpunkt der Clip-Ebene, in Kamerakoordinaten.

bool clip() {
    // Solution starts here:
	vec3 toVertex = posCamera - p;
	return dot(N, toVertex) < 0.;
}

void main() {
    if (clip()) {
        discard;
    }
    color = vec4(1.0, 0.0, 0.0, 1.0);
}
