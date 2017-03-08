uniform sampler2D tCarColor;  // RGBA-Farbtextur der Autos
uniform sampler2D tTreeColor; // RGBA-Farbtextur der Bäume
uniform sampler2D tCarDepth;  // Tiefentextur der Autos in NDC
uniform sampler2D tTreeDepth; // Tiefentextur der Bäume in NDC

in vec2 tc;     // interpolierte Texturkoordinate
out vec4 color; // Ausgabefarbe des Fragments

void main()
{
    // Tiefe und Farbe der Autos.
    float dCar = texture(tCarDepth, tc).r;
    vec4 cCar = texture(tCarColor, tc);

    // Tiefe und Farbe der Bäume.
    float dTree = texture(tTreeDepth, tc).r;
    vec4 cTree = texture(tTreeColor, tc);

    vec4 c1, c2;
    if (cCar < cTree) {
        c1 = cCar;
        c2 = cTree;
    } else {
        c1 = cTree;
        c2 = cCar;
    }

    color = vec4(c1.rgb, 1.0) * c1.a * (1 - c2.a) +
            vec4(c2.rgb, 1.0) * c2.a;
}
