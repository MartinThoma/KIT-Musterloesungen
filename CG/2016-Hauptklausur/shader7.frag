uniform samplerCube tEnv;         // Environment-Map
uniform samplerCube tEnvFiltered; // vorgefilterte Environment-Map
uniform sampler2D tRC;            // RGB-Textur, die r_c enthält
uniform sampler2D tKD;            // RGB-Textur, die k_d enthält

in vec3 v;  // interpolierter View-Vektor (zur Kamera hin) in Weltkoordinaten
in vec3 n;  // interpolierte Normale in Weltkoordinaten
in vec2 tc; // interpolierte Texturkoordinate

out vec3 color;

void main()
{
    vec3 kd = vec3(texture(tKD, tc));
    vec3 rc = vec3(texture(tRC, tc));

    vec3 F = rc + (1 - rc) * pow(1 - dot(normalize(n), normalize(v)), 5);
    color = mix(vec3(texture(tEnvFiltered, n)) * kd,
                vec3(texture(tEnv, n)), F);
}
