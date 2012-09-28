#!/bin/sh

for i in *.jpg
  do
  # Rotate the images
# convert -rotate 180 $i $i

  # Crop the images
  convert -crop 1600x1600+900+150 $i $i
done
