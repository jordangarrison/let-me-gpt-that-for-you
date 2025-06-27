# Neubrutalism Theme Implementation

## Overview
The entire application has been transformed to use a neubrutalism design aesthetic, characterized by bold typography, high contrast colors, chunky borders, and dramatic shadow effects.

## Key Design Elements

### Colors
- **Primary Background**: Bright yellow (`#FFFF00`)
- **Secondary Backgrounds**: Hot pink (`#FF00FF`), cyan (`#00FFFF`), lime green (`#00FF00`), orange (`#FF6600`)
- **Text**: Bold black text throughout
- **Borders**: Thick black borders (3px-6px)

### Typography
- **Primary Font**: Arial Black for maximum boldness
- **Style**: ALL UPPERCASE text with wide letter spacing
- **Weight**: Font-black (900) used extensively

### Visual Effects
- **Shadows**: Custom "brutal" box shadows with 8px-16px offsets
- **Transforms**: Subtle rotations (-1° to 2°) for dynamic positioning
- **Borders**: Thick (3px-6px) black borders on all interactive elements
- **Hover Effects**: Shadow increases and slight translation on interaction

## Component Classes

### Buttons
- `.btn-brutal` - Basic black button with white text
- `.btn-brutal-primary` - Yellow background with black text
- `.btn-brutal-secondary` - Pink background with black text
- `.btn-brutal-accent` - Cyan background with black text

### Cards & Containers
- `.card-brutal` - White background with thick border and large shadow

### Form Elements
- `.input-brutal` - Thick-bordered input fields with hover effects

### Text Styles
- `.text-brutal` - Bold, uppercase text with wide tracking

## Files Modified

1. **tailwind.config.js** - Added custom colors, shadows, and border widths
2. **src/app.css** - Added component classes for neubrutalism elements
3. **src/routes/+page.svelte** - Transformed main page design
4. **src/routes/chat/[provider]/+page.svelte** - Updated redirect page
5. **src/routes/+layout.svelte** - Minor layout adjustments

## Design Principles Applied

1. **High Contrast**: Black text on bright backgrounds
2. **Bold Typography**: Heavy fonts and uppercase text
3. **Geometric Shapes**: Sharp angles and thick borders
4. **Depth**: Dramatic shadows create layering effects
5. **Movement**: Subtle rotations add dynamism
6. **Functionality**: All interactive elements have clear hover states

## Responsive Considerations
- Text sizes scale appropriately on mobile devices
- Button and card padding adjusts for smaller screens
- Shadow effects remain consistent across device sizes

The transformation maintains all original functionality while providing a bold, modern aesthetic that embraces the neubrutalism design movement.
