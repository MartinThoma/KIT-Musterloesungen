uniform int W;   // Breite des Bildes in Pixeln
uniform int H;   // Höhe des Bildes in Pixeln
uniform vec2 C0; // Zentrum der 1. Kreisscheibe in Pixeln in $[0,W) \times [0,H)$
uniform vec2 C1; // Zentrum der 2. Kreisscheibe in Pixeln in $[0,W) \times [0,H)$
uniform float R; // Radius der Kreisscheiben in Pixeln

in vec2 uv; // interpolierte Texturkoordinaten des Fragments in $[0,1) \times [0,1)$

in vec3 inColor;   // Eingabefarbe des Fragments
out vec3 outColor; // Ausgabefarbe des Fragments

void main()
{
    vec2 P = vec2(W, H) * uv;

    if (distance(C0, P) > R && distance(C1, P) > R)
        discard;

    outColor = inColor;
}
