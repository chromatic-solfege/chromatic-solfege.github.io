 Chromatic-Solfege and the Utilities
===========================================

Chromatic-Solfege is a variant of Solfege. While Solfege is based on a diatonic
scale, Chromatic-Solfege is based on the twelve-note chromatic scale. This is
a very powerful tool for improving your skill of improvisation especially in 
Jazz.  Following pictures are a summary of the note names of Chromatic-Solfege.

| Ascending Chromatic Scale | Descending Chromatic Scale |
|---------------------------|----------------------------|
| ![do di re ri mi fa fi sol si la li ti do][aug-small] | ![do ti te la le sol se fa mi me re ra do][dim-small] |

## An Introduction to Chromatic-Solfege
I have written a paper [An Introduction to Chromatic-Solfege][aitcs].  I 
described : 
- The difference between my version of Chromatic-Solfege and general 
  Chromatic-Solfege.  
- A number of practice patterns to build fluency with the extended note
  naming rule.
- A videos of a computer generated singing which reads aloud the practice
  patterns with the Chromatic-Solfege.

## Utilities for Chromatic-Solfege
At a time to write the paper, I found that writing music and words at a same 
time needs a lot of work. Therefore, I have also written some helper computer 
programs which converts TeX documents with embedded music data in them.

- [Chromadoc][chromadoc] is a document converter. This converter converts 
  documents written in Chromadoc format into TeX and Lilypond documents and 
  then build them into a PDF file. It also automatically generates audio data
  of reading aloud the document with singing notes then convert it to video 
  file.

- [Chromatic-Solfege for Lilypond][csfly]
  This is a Lilypond library to write music with Chromatic-Solfege. This 
  library includes some utilities to manipulate intervals and notes which are 
  written in Chromatic-Solfege. [Chromadoc][chromadoc] depends on this module.

- [Chromatic-Solfege for JavaScript][csfjs]
  I also had some difficulty to write a large amount of musical notes which 
  should be permutated to all possibilities. Therefore, I have also written 
  some computer programs to automatically transpose a series of notes.
  This is a JavaScript module to manipulate notes and intervals which are 
  written in Chromatic-Solfege. This module also includes the definition of all 
  note names and intervals. [Chromadoc][chromadoc] depends on this module.



## The Source Code of "An Introduction to Chromatic-Solfege"
The source code of the [An Introduction to 
Chromatic-Solfege](an-introduction-to-chromatic-solfege/) is available. It is 
written by [Chromadoc](./chromadoc/). 

<style>
@import "/docs/custom.css"
</style>

[aitcs]: https://chromatic-solfege.github.io/an-introduction-to-chromatic-solfege/
[chromadoc]: https://chromatic-solfege.github.io/chromadoc/
[csfjs]: https://chromatic-solfege.github.io/chromatic-solfege-for-javascript/
[csfly]: https://chromatic-solfege.github.io/chromatic-solfege-for-lilypond/
[aug-small]: ./an-introduction-to-chromatic-solfege/docs/solfege-aug-small.png
[dim-small]: ./an-introduction-to-chromatic-solfege/docs/solfege-dim-small.png
[modeline]: # ( vim: set spell fo+=a path+=../ suffixesadd+=.md: )
