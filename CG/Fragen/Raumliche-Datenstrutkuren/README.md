Welche Eigenschaften haben räumliche Datenstrukturen?

Es seien n Dreiecke gegeben.

<table>
    <tr>
        <th rowspan="2">Datenstruktur</th>
        <th rowspan="2">Speicherplatzkomplexit&auml;t</th>
        <th colspan="3">Laufzeitkomplexit&auml;t für Schnittest</th>
        <th rowspan="2">Laufzeitkomplexität für den Aufbau</th>
    </tr>
    <tr>
        <th>Worst Case</th>
        <th>Average Case</th>
        <th>Best Case</th>
    </tr>
    <tr>
        <td>Liste der Primitive</td>
        <td>O(n)</td>
        <td colspan="3" style="text-align: center;">O(n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>BVH mit AABBs und SAH</td>
        <td rowspan="3">O(n)</td>
        <td rowspan="3">O(n)<br/>Alle Dreieck haben die gleichen bounding box</td>
        <td>O(log n)</td>
        <td></td>
        <td>O(n log^2 n)</td>
    </tr>
    <tr>
        <td>BVH mit AABBs und Object median</td>
        <td>O(log n)</td>
        <td></td>
        <td>O(n log^2 n)</td>
    </tr>
    <tr>
        <td>BVH mit AABBs und spatial median</td>
        <td>O(log n)</td>
        <td></td>
        <td>O(n log n)</td>
    </tr>
    <tr>
        <td>Reguläre Gitter</td>
        <td></td>
        <td rowspan="4">O(n)<br/>O(n)<br/>Alle Dreieck sind identisch</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Adaptive Gitter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>kD-B&auml;ume</td>
        <td></td>
        <td>O(log n)</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>BSP-Bäume</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>