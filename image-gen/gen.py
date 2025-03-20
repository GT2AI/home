#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
APP_NAME = "CampusViral"
PRIMARY_COLOR = (75, 46, 131)  # #4B2E83 - Purple
SECONDARY_COLOR = (255, 255, 255)  # White
OUTPUT_DIR = "public"
ICONS_DIR = os.path.join(OUTPUT_DIR, "icons")
SPLASHSCREENS_DIR = os.path.join(OUTPUT_DIR, "splashscreens")

# Create output directories if they don't exist
os.makedirs(ICONS_DIR, exist_ok=True)
os.makedirs(SPLASHSCREENS_DIR, exist_ok=True)

# Function to create a simple logo
def create_logo(size, background_color, foreground_color, text="CV", maskable=False):
    # Create a new image with the specified background color
    img = Image.new('RGB', (size, size), background_color)
    draw = ImageDraw.Draw(img)
    
    # Calculate padding for maskable icons (safe zone is 80% of the image)
    padding = 0
    if maskable:
        padding = size * 0.1  # 10% padding on each side
    
    # Calculate circle size and position
    circle_radius = (size - (2 * padding)) / 2
    circle_center = (size // 2, size // 2)
    
    # Draw circle in the foreground color
    draw.ellipse(
        (
            circle_center[0] - circle_radius, 
            circle_center[1] - circle_radius,
            circle_center[0] + circle_radius, 
            circle_center[1] + circle_radius
        ), 
        fill=foreground_color
    )
    
    # Add text
    try:
        # Try to use a nicer font if available
        font_size = int(size * 0.4)
        font = ImageFont.truetype("Arial.ttf", font_size)
    except IOError:
        # Fallback to default font
        font_size = int(size * 0.4)
        font = ImageFont.load_default()
    
    # Get text size
    text_width, text_height = draw.textsize(text, font=font) if hasattr(draw, 'textsize') else (font_size * len(text) * 0.6, font_size)
    
    # Calculate text position to center it
    text_position = (
        circle_center[0] - text_width / 2,
        circle_center[1] - text_height / 2
    )
    
    # Draw text in the background color
    draw.text(text_position, text, fill=background_color, font=font)
    
    return img

# Enhanced share image function in our Python script
def create_share_card(width=1200, height=630):
    # Create a new image with a gradient background
    img = Image.new('RGB', (width, height), PRIMARY_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Add a visual pattern or background element
    for i in range(0, width, 50):
        opacity = int(255 * (i / width) * 0.3)
        draw.line([(i, 0), (i, height)], fill=(255, 255, 255, opacity), width=10)
    
    # Create a white card area in the center
    card_width = int(width * 0.9)
    card_height = int(height * 0.7)
    card_left = (width - card_width) // 2
    card_top = (height - card_height) // 2
    draw.rectangle(
        [card_left, card_top, card_left + card_width, card_top + card_height],
        fill=(255, 255, 255),
        outline=None
    )
    
    # Add app logo at the top of the card
    logo_size = int(min(width, height) * 0.2)
    logo = create_logo(logo_size, PRIMARY_COLOR, SECONDARY_COLOR)
    logo_position = ((width - logo_size) // 2, card_top + int(card_height * 0.1))
    img.paste(logo, logo_position)
    
    # Add app name text
    title_font_size = int(min(width, height) * 0.08)
    try:
        title_font = ImageFont.truetype("Arial Bold.ttf", title_font_size)
    except IOError:
        # Fallback to default font
        title_font = ImageFont.load_default()
    
    title_text = APP_NAME
    # Handle text width calculation for different Pillow versions
    title_width = title_font_size * len(title_text) * 0.6
    title_position = ((width - title_width) // 2, logo_position[1] + logo_size + 30)
    draw.text(title_position, title_text, fill=PRIMARY_COLOR, font=title_font)
    
    # Add tagline
    tagline_font_size = int(min(width, height) * 0.04)
    try:
        tagline_font = ImageFont.truetype("Arial.ttf", tagline_font_size)
    except IOError:
        # Fallback to default font
        tagline_font = ImageFont.load_default()
    
    tagline_text = "Join the Buzz on Campus!"
    tagline_width = tagline_font_size * len(tagline_text) * 0.5
    tagline_position = ((width - tagline_width) // 2, title_position[1] + title_font_size + 20)
    draw.text(tagline_position, tagline_text, fill=PRIMARY_COLOR, font=tagline_font)
    
    # Add a call to action at the bottom
    cta_font_size = int(min(width, height) * 0.035)
    try:
        cta_font = ImageFont.truetype("Arial.ttf", cta_font_size)
    except IOError:
        # Fallback to default font
        cta_font = ImageFont.load_default()
    
    cta_text = "Tap to join me on CampusViral!"
    cta_width = cta_font_size * len(cta_text) * 0.5
    cta_position = ((width - cta_width) // 2, card_top + card_height - cta_font_size - 40)
    draw.text(cta_position, cta_text, fill=PRIMARY_COLOR, font=cta_font)
    
    # Save the image
    img.save(os.path.join(OUTPUT_DIR, "share-card.jpg"), quality=95)
    
    return img

# Function to create a simple share image
def create_share_image(width, height, background_color, foreground_color):
    # Create a new image with the specified background color
    img = Image.new('RGB', (width, height), background_color)
    draw = ImageDraw.Draw(img)
    
    # Add a logo at the top
    logo_size = int(min(width, height) * 0.25)
    logo = create_logo(logo_size, foreground_color, background_color)
    
    # Paste the logo
    logo_position = ((width - logo_size) // 2, int(height * 0.2))
    img.paste(logo, logo_position)
    
    # Add app name text
    try:
        title_font_size = int(min(width, height) * 0.08)
        title_font = ImageFont.truetype("Arial Bold.ttf", title_font_size)
    except IOError:
        title_font_size = int(min(width, height) * 0.08)
        title_font = ImageFont.load_default()
    
    title_text = APP_NAME
    title_width, title_height = draw.textsize(title_text, font=title_font) if hasattr(draw, 'textsize') else (title_font_size * len(title_text) * 0.6, title_font_size)
    
    title_position = (
        (width - title_width) // 2,
        logo_position[1] + logo_size + int(height * 0.05)
    )
    
    draw.text(title_position, title_text, fill=foreground_color, font=title_font)
    
    # Add tagline
    try:
        tagline_font_size = int(min(width, height) * 0.04)
        tagline_font = ImageFont.truetype("Arial.ttf", tagline_font_size)
    except IOError:
        tagline_font_size = int(min(width, height) * 0.04)
        tagline_font = ImageFont.load_default()
    
    tagline_text = "Campus Connection Redefined"
    tagline_width, tagline_height = draw.textsize(tagline_text, font=tagline_font) if hasattr(draw, 'textsize') else (tagline_font_size * len(tagline_text) * 0.6, tagline_font_size)
    
    tagline_position = (
        (width - tagline_width) // 2,
        title_position[1] + title_height + int(height * 0.03)
    )
    
    draw.text(tagline_position, tagline_text, fill=foreground_color, font=tagline_font)
    
    return img

# Generate app icons
icon_sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}

for filename, size in icon_sizes.items():
    icon = create_logo(size, PRIMARY_COLOR, SECONDARY_COLOR)
    icon.save(os.path.join(ICONS_DIR, filename))
    print(f"Generated {filename}")

# Generate maskable icon
maskable_icon = create_logo(512, PRIMARY_COLOR, SECONDARY_COLOR, maskable=True)
maskable_icon.save(os.path.join(ICONS_DIR, "maskable_icon.png"))
print("Generated maskable_icon.png")

# Generate share image (1200x630)
share_image = create_share_card(1200, 630)
print("Generated share-card.jpg")

# Generate iOS splash screens
splash_screen_sizes = [
    (2048, 2732),  # 12.9" iPad Pro
    (1668, 2388),  # 11" iPad Pro
    (1536, 2048),  # 10.5" iPad Pro
    (1125, 2436),  # iPhone X/XS
    (1242, 2688),  # iPhone XS Max
    (750, 1334),   # iPhone 8/7/6s/6
    (640, 1136),   # iPhone SE
]

for width, height in splash_screen_sizes:
    # Create a splash screen with the logo centered
    splash = Image.new('RGB', (width, height), PRIMARY_COLOR)
    
    # Create a logo that's 20% of the smallest dimension
    logo_size = int(min(width, height) * 0.2)
    logo = create_logo(logo_size, PRIMARY_COLOR, SECONDARY_COLOR)
    
    # Calculate position to center the logo
    position = ((width - logo_size) // 2, (height - logo_size) // 2)
    
    # Paste the logo onto the splash screen
    splash.paste(logo, position)
    
    # Save the splash screen
    filename = f"apple-splash-{width}-{height}.jpg"
    splash.save(os.path.join(SPLASHSCREENS_DIR, filename))
    print(f"Generated {filename}")

print("\nAll PWA assets have been generated successfully!")
print(f"\nIcons directory: {ICONS_DIR}")
print(f"Splash screens directory: {SPLASHSCREENS_DIR}")
print(f"Share image: {os.path.join(OUTPUT_DIR, 'share-image.jpg')}")
