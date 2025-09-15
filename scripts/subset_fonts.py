#!/usr/bin/env python3
"""
Subset Inter variable font to only the used weights and basic English characters.

Requires:
  pip install "fonttools[woff]" brotli zopfli

Usage examples:
  python scripts/subset_fonts.py \
    --input ./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf \
    --out-dir ./public/fonts \
    --weights 300 400 600 \
    --charset basic \
    --drop-hinting

Options:
  --input         Path to the Inter variable TTF file.
  --out-dir       Output directory for generated WOFF2 files.
  --weights       One or more numeric weights (e.g., 300 400 600).
  --charset       One of: basic, ascii, custom. Default: basic
                  - basic/ascii: U+0020..U+007E (space to tilde)
  --custom-chars  Additional characters to include (only used if provided; can be used with any charset).
  --drop-hinting  Drop TrueType hints to reduce size further.

This script will:
  1) Instantiate the Inter variable font at each target weight.
  2) Subset to the requested character set (English basic ASCII by default).
  3) Save compressed WOFF2 files, e.g. Inter-300.woff2, Inter-400.woff2, Inter-600.woff2
"""
from __future__ import annotations

import argparse
import os
import sys
from typing import Iterable, Set

try:
    from fontTools.ttLib import TTFont
    from fontTools.varLib.instancer import instantiateVariableFont
    from fontTools import subset
except ImportError as e:
    print(
        "Missing dependencies. Install with:\n"
        "  pip install \"fonttools[woff]\" brotli zopfli\n",
        file=sys.stderr,
    )
    raise


def build_charset(kind: str, custom: str | None = None) -> str:
    kind = (kind or "basic").lower()
    chars: Set[str] = set()

    if kind in ("basic", "ascii"):
        # U+0020 (space) to U+007E (~)
        for cp in range(0x20, 0x7F):
            chars.add(chr(cp))
    else:
        raise ValueError(f"Unsupported charset kind: {kind}")

    if custom:
        chars.update(list(custom))

    # Ensure space is present
    chars.add(" ")
    return "".join(sorted(chars))


def instantiate_weight(tt: TTFont, weight: int) -> TTFont:
    """Instantiate a variable font to a static instance at given wght value."""
    axes = {a.axisTag for a in getattr(tt, "fvar", {}).axes} if hasattr(tt, "fvar") else set()
    if "wght" not in axes:
        # If not a variable font, just return the original (copy) for subsetting
        return tt
    return instantiateVariableFont(tt, {"wght": float(weight)}, inplace=False)


def subset_font(tt: TTFont, text: str, drop_hinting: bool) -> TTFont:
    options = subset.Options()
    options.flavor = "woff2"
    options.glyph_names = False
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_languages = ["*"]
    options.layout_features = ["*"]
    options.drop_tables = ["DSIG"]
    options.hinting = not drop_hinting

    ss = subset.Subsetter(options=options)
    ss.populate(text=text)
    ss.subset(tt)
    return tt


def ensure_dir(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Subset Inter font weights and ASCII charset to WOFF2.")
    parser.add_argument("--input", required=True, help="Path to Inter variable TTF (e.g. Inter-VariableFont_opsz,wght.ttf)")
    parser.add_argument("--out-dir", required=True, help="Output directory for WOFF2 files")
    parser.add_argument("--weights", nargs="+", type=int, default=[300, 400, 600], help="Weights to export (e.g. 300 400 600)")
    parser.add_argument("--charset", default="basic", choices=["basic", "ascii"], help="Character set to include")
    parser.add_argument("--custom-chars", default=None, help="Extra characters to include in addition to the selected charset")
    parser.add_argument("--drop-hinting", action="store_true", help="Drop TrueType hints to reduce file size")
    parser.add_argument("--single", action="store_true", help="Produce a single variable WOFF2 (ASCII-only) instead of multiple static weights")

    args = parser.parse_args(list(argv) if argv is not None else None)

    input_path = args.input
    out_dir = args.out_dir
    weights = args.weights

    if not os.path.isfile(input_path):
        print(f"Input font not found: {input_path}", file=sys.stderr)
        return 1

    ensure_dir(out_dir)

    # Build charset string to subset
    text = build_charset(args.charset, args.custom_chars)

    if args.single:
        print("[subset] Inter variable (single file) ...")
        base = TTFont(input_path)
        # Optionally clamp the wght axis range to the provided min/max to reduce variation space
        try:
            if hasattr(base, "fvar") and getattr(base, "fvar", None):
                wghts = sorted(set(int(w) for w in weights))
                wmin, wmax = (wghts[0], wghts[-1]) if wghts else (300, 600)
                for axis in base["fvar"].axes:
                    if axis.axisTag == "wght":
                        # Clamp but keep variable axis
                        axis.minValue = float(wmin)
                        axis.maxValue = float(wmax)
        except Exception as err:
            print(f"  (warn) failed to clamp axis range: {err}")

        sub = subset_font(base, text, drop_hinting=args.drop_hinting)
        out_name = "Antonio-Var-Subset.woff2"
        out_path = os.path.join(out_dir, out_name)
        sub.save(out_path)
        print(f"  -> {out_path}")
    else:
        for w in weights:
            print(f"[subset] Inter weight {w} ...")
            # Load fresh TTFont per weight to avoid cross-contamination
            base = TTFont(input_path)
            inst = instantiate_weight(base, w)
            sub = subset_font(inst, text, drop_hinting=args.drop_hinting)

            # Set metadata: PostScript name and full name can be left as-is; web doesn't rely on them much.
            # Save as WOFF2
            out_name = f"Inter-{w}.woff2"
            out_path = os.path.join(out_dir, out_name)
            # fontTools uses the `flavor` attribute to choose woff2 on save, already set via subset options
            sub.save(out_path)
            print(f"  -> {out_path}")

    print("Done. Update your @font-face declarations to use the new WOFF2 files and preload in index.html.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
