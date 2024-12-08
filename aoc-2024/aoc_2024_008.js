const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

const findAntinodes = (input) => {
    const lines = input.trim().split('\n');
    const nY = lines.length;
    const nX = lines[0].length;

    const antennasByFreq = new Map();

    for (let y = 0; y < nY; y++) {
        for (let x = 0; x < nX; x++) {
            const char = lines[y][x];
            if (char !== '.') {
                if (!antennasByFreq.has(char)) {
                    antennasByFreq.set(char, []);
                }
                antennasByFreq.get(char).push({x, y});
            }
        }
    }

    const antinodes = new Set();

    for (let y = 0; y < nY; y++) {
        for (let x = 0; x < nX; x++) {
            for (const [freq, antennas] of antennasByFreq) {
                if (antennas.length < 2)
                    continue;
                for (let i = 0; i < antennas.length; i++) {
                    for (let j = i + 1; j < antennas.length; j++) {
                        const antenna1 = antennas[i];
                        const antenna2 = antennas[j];

                        const dist2 = Math.sqrt(Math.pow(x - antenna2.x, 2) + Math.pow(y - antenna2.y, 2));
                        const dist1 = Math.sqrt(Math.pow(x - antenna1.x, 2) + Math.pow(y - antenna1.y, 2));

                        if (Math.abs(dist1 * 2 - dist2) < 0.0001 || Math.abs(dist2 * 2 - dist1) < 0.0001) {
                            const area = antenna1.x * (antenna2.y - y) + antenna2.x * (y - antenna1.y) + x * (antenna1.y - antenna2.y);

                            if (Math.abs(area) < 0.0001) {
                                antinodes.add(`${x},${y}`);
                            }
                        }
                    }
                }
            }
        }
    }
    return antinodes.size;
}

console.log(findAntinodes(input));