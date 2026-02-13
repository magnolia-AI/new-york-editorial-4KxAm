# Fix CSS Rendering and Editorial Design System

## Summary
The CSS is currently failing to render Tailwind utilities correctly, leading to broken layouts and unstyled Shadcn components. This plan will fix the styling configuration and restore the premium New York Editorial aesthetic.

## Approach
The core issue is a mismatch between the Tailwind v4 @theme configuration and the semantic color variables. I will align the CSS variables in index.css with the Tailwind theme block, ensuring 'oklch' values are properly mapped. I will then fix the 'mix-blend-difference' in the navigation which is causing text invisibility, and restore the high-impact typography layout seen in the reference mockup.

## Tasks

- [x] **1. Fix Tailwind v4 @theme variable mapping** <!-- id:n715tW -->
  Update src/index.css to ensure all semantic tokens like --background, --foreground, and --primary are correctly referenced within the @theme block so Tailwind classes actually apply styles.

- [ ] **2. Restore Hero Typography and Button alignment** <!-- id:P1biEV -->
  Update EditorialHero.tsx to fix the layout where text is overlapping. Adjust z-index of the container and ensure the buttons use the correct design system variants (outline/ghost) without breaking their standard padding.

- [ ] **3. Adjust Navbar visibility and blending** <!-- id:ocCN6g -->
  Modify RootLayout.tsx header classes. The 'mix-blend-difference' is likely making the white text invisible against light backgrounds; I will implement a background-aware or translucent blurred header instead.

- [ ] **4. Standardize Button components across sections** <!-- id:VUOWRC -->
  Check all instances of Shadcn Buttons in HomePage.tsx and components/ui/button.tsx. Ensure they use semantic tokens like bg-primary or bg-card instead of hardcoded colors that aren't rendering.

- [ ] **5. Fix Editorial Grid and Story layouts** <!-- id:IKL8im -->
  Audit EditorialGrid.tsx and EditorialStory.tsx to ensure the CSS Grid gap and aspect-ratio utilities are functioning correctly under the unified styling system.

---
plan_id: JEMADjJW
status: executing
created: 2026-02-13T10:59:50.794Z
