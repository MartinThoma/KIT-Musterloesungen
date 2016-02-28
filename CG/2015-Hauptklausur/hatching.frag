uniform sampler2D dunkel; // dunkle Textur
uniform sampler2D mittel; // mittlere Textur
uniform sampler2D hell; // helle Textur
in vec2 tex_coord; // Texturkoordinate

vec4 get_hatched_color(float h) // Helligkeit h liegt in [0, 1].
{
	vec4 t_d = texture(dunkel, tex_coord);
	vec4 t_m = texture(mittel, tex_coord);
	vec4 t_h = texture(hell, tex_coord);

	float weight_d = clamp(1. - 4. * (h - .25), 0., 1.);
	float weight_m = clamp(1 - 4. * abs(h - .5), 0., 1.);
	float weight_h = clamp(4. * (h - .5), 0., 1.);

	return weight_d * t_d + weight_m * t_m + weight_h * t_h;
}
