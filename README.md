Surprise Lipsum
===============

Inspired by James Young and his blog post http://www.welcomebrand.co.uk/thoughts/surprise-lipsum/

Usage
=====

1. Include jQuery
2. Include the surprise_ipsum.js script
3. Add the content ```[lipsum 100w 50%]``` to any element. 

This will generate some lorem ipsum text for you. In this example the ideal length is 100 words but will vary +/- 50% of the ideal. Therefore the text generated will be between 50 and 150 words.

Take a look at ```usage.html``` for an example.

Once you're ready to move to production, just remove the script include :smile:

Warning
=======

This is just a proof of concept. Use it at your own risk!

Things to do
============

* Browser testing (only tried it in Chrome so far).
* Add punctuation to generated text.
* Capitalize words as required.
* Add tests :wink:
* Possibly translate to CoffeeScript.
* Host a minified version on a CDN to keep it as easy as possible to use.