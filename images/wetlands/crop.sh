#!/bin/sh

for i in *.jpg
  do
  # Rotate the images
# convert -rotate 180 $i $i

  # Crop the images
  convert -crop +900-100 $i $i
done
