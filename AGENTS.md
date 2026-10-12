<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep reusable civic presentation primitives in `src/components/civic.tsx`; shared cards and records ensure consistent citizen-facing design.
- Use individual landscape images for civic cards rather than positioning a shared contact sheet; this preserves subject framing at all card sizes.
- Use Embla with its Auto Scroll plugin for continuous carousels; provide pause, keyboard-accessible controls and reduced-motion support.
- Keep dashboard sample data and pure filtering/report helpers separate from the route; clearly distinguish illustrative records from real citizen data.
