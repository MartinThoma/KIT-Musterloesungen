vec2 determineTextureCoordinate(in vec3 S, in int index)
{
    vec2 UV;

    switch(index)
    {
        // Vervollständigen Sie die Fälle entsprechend der Aufgabenstellung
        case 0:
        case 1:
            UV = S.yz;
            break;
        case 2:
        case 3:
            UV = S.xy;
            break;
        case 4:
        case 5:
            UV = S.xz;
            break;
    }

    // Fügen Sie ggf. notwendige weitere Anweisungen hier ein
    UV = (UV + vec(1.0)) / 2.0;

    return UV;
}
