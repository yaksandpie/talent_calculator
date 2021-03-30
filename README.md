working example: https://talent-calc.netlify.app

## Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. This is a js application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

![Example](public/example.png)

- Responsive.
- Left click to add points.
- Right click to remove points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total.
- The user must select the items in order.
    - For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).

### Implementation notes
- React 17.0.2
- It was made with the idea of reusability.
- No CSS preprocessor (e.g. Sass) was used as the app is simple and doesn't need that technology overhead.
- Responsivity is using a mobile first approach (e.g. `min-width` for media queries).
- Internationalization is in place with a simple object of translations and a function to access them (see: `I18n.js`).

### Assumptions made
During development, there were a few assumptions made. These assumptions would normally be resolved with the appropriate people (design, ux, etc.) before shipping.

#### General
- Targeting a global audience, so text was abstracted out (e.g. i18n).
- The talent calculator would be a component that lives inside a larger codebase using the same React version.
- The talents to display would be obtained from an API call.
- Browser versions targeted are modern (compatibilty with recent tech, e.g. css grid, custom properties).
- Font stack is 'Roboto', 'Helvetica', 'Arial', sans-serif.
- The talents sprite is must-use rather than modifying it.
- The responsive styles are to be reviewed with design later for refinement as no mock was given.
- The colors used were given and not obtained using an eyedropper tool as was done here.

#### UX Interactions
- Keyboard interaction is possible by tabbing around and pressing `Enter` on a talent to add/remove it.
- In order to differentiate between selected and focused, a different box shadow is applied when a talent has focus.
- When selecting a talent whose parent talent is not selected, it also selects that parent given that there are enough talent points left to cover it.
- When removing talent points, if a user removes a parent talent that has selected children, it refunds the talent points between them.
