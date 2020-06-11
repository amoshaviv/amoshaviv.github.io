import qs from "qs";

export function parseConfigFromQueryString() {
  const output = {};
  const querystring = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  if (querystring) {
    // Parse beams configuration
    if (querystring.beams) {
      output.beams = querystring.beams
        .split(",")
        .map((beam) => {
          return Number.parseInt(beam);
        })
        .filter((beam) => !isNaN(beam));
    }

    // Parse maximum beams to display
    if (querystring.maximumBeams) {
      const parsedMaximumBeams = Number.parseInt(querystring.maximumBeams);
      if (!isNaN(parsedMaximumBeams)) output.maximumBeams = parsedMaximumBeams;
    }

    // Parse maximum rings
    if (querystring.maximumRings) {
      const parsedMaximumRings = Number.parseInt(querystring.maximumRings);
      if (!isNaN(parsedMaximumRings)) output.maximumRings = parsedMaximumRings;
    }

    // Parse rings configuration
    if (querystring.rings) {
      output.rings = querystring.rings
        .split(",")
        .map((ring) => {
            console.log(ring)
          if (ring.indexOf("-") > -1) {
            const range = ring
              .split("-")
              .map((ring) => Number.parseInt(ring))
              .filter((ring) => !isNaN(ring));
            if (range.length === 2) return range;
          }

          return Number.parseInt(ring);
        })
        .filter((ring) => { 
            if(Array.isArray(ring)) return true;
            return !isNaN(ring)
        });

        console.log(output.rings);
    }
  }

  return output;
}
