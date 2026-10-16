// Numbers = position in the brand's `gallery` list (first item = 0).
// -1 = empty slot (image not available yet, add it later).
// Slide 1 slots: 1 blue boxes (wide), 2 cream & gold (portrait), 3 burgundy "Two Designs" (portrait),
//                4 heritage (square), 5 baby shower (square), 6 sweets hamper (wide)
// Slide 2 slots: 1 yellow box (tall), 2 burgundy (wide), 3 palace (tall, both rows),
//                4 "Diwali to Wedding" (square), 5 colourful boxes (wide)
export const brandLayouts: Record<string, number[][]> = {
      khokha: [
    [3, 0, 2, 8, 1, 9],   // Slide 1: blue video | cream & gold | Two Designs | heritage | baby shower | sweets video
    [6, 2, 10, 5, 8],     // Slide 2: Ganesh | Two Designs (crop) | palace video | Diwali | heritage
  ],
      eurodecor: [
    [4, 5, 2, 6, 3],      // Slide 1: Masterpiece, Laminates, video, bedroom, cabinet
    [8, 1, 9, 0, 7],      // Slide 2: door video (8), Right Surface, ZERO (9), Every Great Interior, Parquetry
  ],
      mosu: [
    [8],                   // Slide 1: glass mosaic left (7) | glass mosaic right (6)
    [4, 5, 1, 0, 3, 2],      // Slide 2: parrots, faces, teal, plates, video, gold woman
  ],
       pbl: [
    [5, 1, 3, 2],     // Slide 1: ring video | 1 Day To Go | Punch Same Job | skyline video
    [7, 0, 4, 6],     // Slide 2: dark set video (7) | Delhi's | 2 Days To Go | fight-night video
  ],
        continuity: [
    [3, 8, 2],                 // Slide 1: Sugar Pop video | stationery (8) | caffeine
    [0, 5, 10, 7, 9, 4],       // Slide 2: Pilgrim | hand serum | colour pile (10) | lime (7) | tan (9) | Zudio video
  ],
       saaro: [
    [3, 5, 6, 7],               // Slide 1: Nykaa video | be Premium video | enrich | Nivea (7)
    [0, 4, 8, 1, 2, 9],         // Slide 2: be boxes | be assorted | pink chest video (8) | Madhuram | red elephant | Raksha video (9)
  ],
       trisha: [
    [3, 2, 7],               // Slide 1: gift box video | brochure | calendar
    [2, 6, 8, 9, 1, 4],      // Slide 2: brochure (grey) | envelope | notepad | backpack | bookmarks | notebook
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
    [0, 2, 1, -1, 4],      // Slide 2: Why you'll love it | cream | product group | avocado "What is it?" (7) | avocado bottle
  ],
    madhuram: [
    [3],                       // Slide 1: product video
    [6, -1, 2, -1, 5, 0],      // Slide 2: dark purple | gold box + sweets (missing) | lotus | green peacock box (missing) | Kesar Peda gold | pink geometric
  ],
  nasreen: [
    [1, 3, 2, 7, 0, 6],        // Slide: sunset banner | My Forte | laptop | About Us | Coaching Monthly | Mission
  ],
    srvvasya: [
    [-1, 4, 0, 6, -1],     // Slide 1: website mockup (missing) | bookmark | Soul Leadership book | "Want to level up" poster | edge of next poster (missing)
    [-1, 1, 2, 5],         // Slide 2: edge of previous poster (missing) | Vriin C poster | Energize You | We evolve together
  ],
  exxpression: [
    [-1, 1, 5, -1, 0, -1], // Slide 1: letterhead (missing) | stationery set | brochure | envelopes (missing) | logo sign | business cards (missing)
    [3, 4, 2],             // Slide 2: laptop video | floor plan | interior
  ],
    mildas: [
    [3, 5, 4],                // Slide 1: video | drop earring | rose-gold fan necklace
    [0, 1, 2, -1, 6, -1],     // Slide 2: necklace | earring | ring | IIJS sign (missing) | showcase | wide showcase (missing)
  ],
  pallavi: [
    [0, 4, 3],                // Slide 1: logo | vision/awards collage | video
    [-1, -1, 2, 5, 6, 4],     // Slide 2: website hero (missing) | news page (missing) | What We Do tiles | What We Do carousel | tree planting | vision/awards
  ],
    valdaria: [
    [2, 4, 1],                        // Slide 1: video (choker + IIJS) | blue Valdaria box | pendant poster
    [6, -1, -1, 0, 3, -1, -1, 5],     // Slide 2: long necklace | earrings (missing) | logo tile (missing) | bangles
                                      //          flower necklace | logo tile (missing) | U-necklace (missing) | emerald choker
  ],
  prisha: [
    [7, 3, 5, 4],                     // Slide 1: video clip | beads video | woman painting | Ganesha frame
    [0, 2, -1, 1, 6],                 // Slide 2: Get In Touch | shell flower | squares graphic (missing) | Shrinathji frame | laptop video
  ],
    shivdi: [
    [-1, -1, -1],        // Slide 1: three vertical videos (rain / underwater temple / street) - all missing
    [-1, 0, 4, 1],       // Slide 2: "Parampara" poster (missing) | 75th Shivdicha Raja temple | pink poster | Ganesha poster
  ],
    contentteam: [
    [4, 3, 1],      // Slide 1: street / set BTS video | red circular set video | stage dance video
    [0, -1, 2],     // Slide 2: red-jacket video | dancers video (missing) | orange stage video
  ],
};
