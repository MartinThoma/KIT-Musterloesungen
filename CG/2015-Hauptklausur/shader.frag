// ...
uniform float h; // Y-Koordinate der Wasserebene im World Space
in vec3 P; // World-Space-Position des aktuellen Fragments
// ...

void main(void)
{
	// Implementieren Sie hier das Clipping:
	if (P.y < h) {
		discard;
	}

	// Es folgt das spezifische Shading des jeweiligen Objekts
	// ...
}
