// Numbers = position in the brand's `gallery` list (first item = 0).
// -1 = empty slot (image not available yet, add it later).
// Slide 1 slots: 1 blue boxes (wide), 2 cream & gold (portrait), 3 burgundy "Two Designs" (portrait),
//                4 heritage (square), 5 baby shower (square), 6 sweets hamper (wide)
// Slide 2 slots: 1 yellow box (tall), 2 burgundy (wide), 3 palace (tall, both rows),
//                4 "Diwali to Wedding" (square), 5 colourful boxes (wide)
export const brandLayouts: Record<string, number[][]> = {
     khokha: [
     [3, -1, 2, -1, 1, -1],
     [6, 2, -1, 5, -1],   // Frame 2: slot 1 Ganesh, 2 burgundy, 3 palace (missing), 4 Diwali, 5 heritage (missing)
   ],
       eurodecor: [
    [4, 5, 2, 6, 3],      // Slide 1: Masterpiece, Laminates, video, bedroom, cabinet
    [-1, 1, -1, 0, 7],    // Slide 2: logo video (missing), Right Surface, ZERO (missing), Every Great Interior, Parquetry
  ],
    mosu: [
    [6],                      // Slide 1: glass mosaic panel
    [4, 5, 1, 0, 3, 2],       // Slide 2: parrots, faces, teal, plates, video, gold woman
  ],
     pbl: [
    [5, 1, 3, 2],     // Slide 1: ring video | 1 Day To Go | Punch Same Job | skyline video
    [-1, 0, 4, 6],    // Slide 2: (missing video) | Delhi's | 2 Days To Go | fight-night video
  ],
    continuity: [
    [3, -1, 2],                // Slide 1: Sugar Pop video | stationery (missing) | caffeine
    [0, 5, -1, -1, -1, 4],     // Slide 2: Pilgrim | hand serum | colour pile (missing) | lime (missing) | tan (missing) | Zudio video
  ],
    saaro: [
    [3, 5, 6, -1],              // Slide 1: Nykaa video | be Premium video | enrich | Nivea (missing)
    [0, 4, -1, 1, 2, -1],       // Slide 2: be boxes | be assorted | pink box video (missing) | Madhuram | red elephant | Raksha video (missing)
  ],
    trisha: [
    [3, 2, -1],              // Slide 1: gift box (video later) | brochure | calendar (missing)
    [-1, 6, -1, -1, 1, 4],   // Slide 2: grey brochure | envelope | notepad | backpack | bookmarks | notebook
  ],
  palm: [
   [5],                     // Slide 1: website (video later)
    [4, 3, 1, 0, 2],         // Slide 2: Our Products | brochure | BIO PALM | Palm Sulf | Farmers Say
  ],
     onestop: [
    [3, 2, 0],            // Slide 1: big video | brochure | acacia board
    [2, 0, 1, 4],         // Slide 2: brochure | acacia board | About Us | price poster
  ],
  terra: [
    [3, 6, 5],            // Slide 1: laptop | serum bottle | serum text
    [0, 2, 1, -1, 4],     // Slide 2: Why you'll love it | cream | product group | MISSING | avocado
  ],
};
