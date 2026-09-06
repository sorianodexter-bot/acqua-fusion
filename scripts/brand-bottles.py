#!/usr/bin/env python3
"""Stamp the Acqua Fusion lockup onto measured blank labels."""

from pathlib import Path

from PIL import Image, ImageDraw

RAW = Path("/workspace/public/images/raw")
OUT = Path("/workspace/public/images")
LOGO_PATH = Path("/workspace/artifacts/bottle-logo.png")
DEBUG = Path("/tmp/label-debug")
DEBUG.mkdir(parents=True, exist_ok=True)

# Each box: (x0, y0, x1, y1, fit, y_bias) as image fractions.
SHOTS = {
    "gallon-5.jpg": [
        (0.345, 0.395, 0.655, 0.668, 0.84, 0.02),
    ],
    "gallon-10.jpg": [
        (0.340, 0.405, 0.660, 0.655, 0.84, 0.02),
    ],
    "bottle-4l.jpg": [
        (0.355, 0.410, 0.645, 0.685, 0.84, 0.02),
    ],
    "gallon-small.jpg": [
        (0.365, 0.430, 0.635, 0.680, 0.84, 0.02),
    ],
    "bottle-1l.jpg": [
        (0.422, 0.455, 0.578, 0.700, 0.86, 0.00),
    ],
    "bottle-500.jpg": [
        (0.430, 0.465, 0.570, 0.710, 0.88, 0.00),
    ],
    "bottle-350.jpg": [
        (0.442, 0.470, 0.558, 0.685, 0.90, 0.00),
    ],
    "hero-cluster.jpg": [
        (0.235, 0.335, 0.425, 0.565, 0.84, 0.02),  # 5-gal
        (0.582, 0.445, 0.656, 0.675, 0.90, 0.00),  # 1 L
        (0.778, 0.515, 0.836, 0.700, 0.92, 0.00),  # 500 ml
    ],
    "lineup.jpg": [
        (0.072, 0.385, 0.185, 0.575, 0.86, 0.02),  # 5-gal
        (0.215, 0.385, 0.325, 0.575, 0.86, 0.02),  # 10 L
        (0.338, 0.405, 0.425, 0.610, 0.86, 0.02),  # 4 L
        (0.448, 0.420, 0.528, 0.630, 0.86, 0.02),  # 3 L
        (0.590, 0.400, 0.656, 0.665, 0.90, 0.00),  # 1 L
        (0.704, 0.420, 0.756, 0.685, 0.92, 0.00),  # 500 ml
        (0.806, 0.435, 0.850, 0.685, 0.94, 0.00),  # 350 ml
    ],
}


def fit_logo(logo: Image.Image, box, fit: float, y_bias: float):
    x0, y0, x1, y1 = box
    bw, bh = x1 - x0, y1 - y0
    inner_w = max(8, bw * fit)
    inner_h = max(8, bh * fit)
    scale = min(inner_w / logo.width, inner_h / logo.height)
    nw = max(8, int(logo.width * scale))
    nh = max(8, int(logo.height * scale))
    resized = logo.resize((nw, nh), Image.Resampling.LANCZOS)
    px = x0 + (bw - nw) // 2
    py = y0 + (bh - nh) // 2 + int(bh * y_bias)
    py = min(max(py, y0), y1 - nh)
    return resized, px, py


def main() -> None:
    logo = Image.open(LOGO_PATH).convert("RGBA")
    bbox = logo.getbbox()
    if bbox:
        logo = logo.crop(bbox)
    print("logo", logo.size, "aspect", round(logo.width / logo.height, 3))

    # Restore case to the unlabeled pack shot — individual marks can't sit
    # on those tiny wrapped bottles without covering neighboring bottles.
    case_raw = RAW / "case.jpg"
    if case_raw.exists():
        Image.open(case_raw).convert("RGB").save(OUT / "case.jpg", "JPEG", quality=93, optimize=True)
        print("case.jpg restored unlabeled")

    for name, boxes in SHOTS.items():
        src = Image.open(RAW / name).convert("RGBA")
        w, h = src.size
        out = src.copy()
        dbg = src.convert("RGB")
        draw = ImageDraw.Draw(dbg)
        for x0f, y0f, x1f, y1f, fit, y_bias in boxes:
            box = (int(x0f * w), int(y0f * h), int(x1f * w), int(y1f * h))
            mark, px, py = fit_logo(logo, box, fit, y_bias)
            out.alpha_composite(mark, (px, py))
            draw.rectangle(box, outline=(11, 90, 154), width=3)
            draw.rectangle(
                (px, py, px + mark.width, py + mark.height),
                outline=(31, 184, 214),
                width=2,
            )
            print(f"{name} label={box} logo={mark.size} at=({px},{py})")
        out.convert("RGB").save(OUT / name, "JPEG", quality=93, optimize=True)
        dbg.save(DEBUG / f"placed-{name}", quality=88)


if __name__ == "__main__":
    main()
