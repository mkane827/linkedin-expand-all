#!/bin/bash

# Check if extension.zip exists and delete it if it does
if [ -f "extension.zip" ]; then
  echo "Deleting existing extension.zip"
  rm extension.zip
fi

# Create a new zip file with the specified files
echo "Creating new extension.zip"
zip -r extension.zip background.js content.js icon_16.png icon_32.png icon_48.png icon128.png manifest.json
echo "extension.zip created successfully"
