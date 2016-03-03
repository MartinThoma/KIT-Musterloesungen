in vec3 P; // Position des Vertex in Objektkoordinaten.
in float w[3]; // Einfluss der Knochen.

uniform mat4 matVP; // View-Projection-Matrix.
uniform mat4 M1; // Transformation des Fingers (Objekt -> Welt).
uniform mat4 M2; // Transformation von K2 relativ zu K1.
uniform mat4 M3; // Transformation von K3 relativ zu K2.

void main()
{
	vec4 P1 = M1 * vec4(P, 1.);
	vec4 P2 = M2 * P1;
	vec4 P3 = M3 * P2;
	gl_Position = matVP * (w[0] * P1 + w[1] * P2 + w[2] * P3);
}
