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
};