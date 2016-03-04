uniform vec3 eye; //Position des Betrachters in Weltkoord
in vec3 dir;      //Strahlrichtung in Weltkoord
uniform vec3 spheres[10];
out vec4 fragColor;
int main() {
    float t = -1;
    vec3 pos;
    vec3 normal;
    for (i=0; i < 10; i++) {
        vec2 isec = intersectRS(eye, dir, spheres[i].xyz, spheres[i].w);
        if (isec.x < t && isec.x > 0) {
            t = isec.x;
            pos = eye + t * dir;
            normal = normalize(pos - spheres[i].xyz);
        }
    }
    if (t != -1) {
        fragColor = computeShading(pos, normal);
    }
    // ...
}
