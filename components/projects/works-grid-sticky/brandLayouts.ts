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
    [0, 2, 1, 7, 4],      // Slide 2: Why you'll love it | cream | product group | avocado "What is it?" (7) | avocado bottle
  ],
      madhuram: [
    [3],                       // Slide 1: product video
    [6, 7, 2, 8, 5, 0],        // Slide 2: dark purple | gold box + sweets (7) | lotus | green peacock box (8) | Kesar Peda gold | pink geometric
  ],
   nasreen: [
    [1, 3, 2, 7, 0, 6],        // Slide: sunset banner | My Forte | laptop | About Us (7) | Coaching Monthly | Mission
  ],
       srvvasya: [
    [8, 4, 0, 6, 9],     // Slide 1: website mockup | bookmark | book | tree poster | arms-raised poster (edge)
    [9, 1, 2, 5],        // Slide 2: arms-raised poster (edge) | Vriin C poster | Energize You | We evolve together
  ],
    exxpression: [
    [7, 1, 5, 8, 0, 6],    // Slide 1: letterhead (7) | stationery set | brochure | envelopes (8) | logo sign | business cards (hero, 6)
    [3, 4, 2],             // Slide 2: laptop video | floor plan | interior
  ],
       mildas: [
    [3, 5, 4],                // Slide 1: video | drop earring | rose-gold fan necklace
    [0, 1, 2, 7, 6, 8],       // Slide 2: necklace | earring | ring | IIJS sign (7) | showcase | wide showcase (8)
  ],
    pallavi: [
    [0, 4, 3],                // Slide 1: logo | vision/awards collage | video
    [7, 8, 2, 5, 6, 4],       // Slide 2: website hero (7) | news page (8) | tiles | What We Do | tree planting | vision/awards
  ],
     valdaria: [
    [2, 4, 1],                      // Slide 1: video | blue Valdaria box | pendant poster
    [6, 7, 8, 0, 3, 8, 9, 5],       // Slide 2: long necklace | earrings (7) | logo (8) | bangles | flower necklace | logo (8) | U-necklace (9) | emerald choker
  ],
   prisha: [
    [7, 3, 5, 4],           // Slide 1: video clip | beads video | woman painting | Ganesha frame
    [0, 2, 8, 1, 6],     // Slide 2: Get In Touch | shell flower | squares | Shrinathji | laptop video
  ],
     shivdi: [
    [8, 9, 10],          // Slide 1: rain | underwater temple | street
    [3, 0, 4, 1],        // Slide 2: Parampara video | 75th Shivdicha Raja | pink poster | Ganesha poster
  ],
    contentteam: [
    [4, 8, 1],      // Slide 1: TCT BTS | red circular set | BTS Music Ka Mahol
    [0, 3, 2],      // Slide 2: red-jacket | Rajeev Helping | orange stage
  ],
};
  