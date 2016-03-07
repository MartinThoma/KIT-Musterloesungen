out vec4 color;          // Ausgabefarbe.
in vec3 posWorld;        // Vertex-Position in Weltkoordinaten.
in vec3 normWorld;       // Vertex-Normale in Weltkoordinaten.
uniform vec3 lightWorld; // Position der Lichtquelle in Weltkoordinaten.
uniform float pi;        // Der Wert der Konstante Pi.

vec4 toonShade(int c) {
    // ...
}

void main(void)
{
	vec3 l = normalize(lightWorld - posWorld);
	float theta = acos(dot(l, normWorld));
	int c;
	if (theta < pi / 6.) {
		c = 0;
	} else if (theta < pi / 3.) {
		c = 1;
	} else {
		c = 2;
	}
	color = toonShade(c);
}
