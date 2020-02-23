
Chromatic-Solfege
==================

Chromatic-Solfege is a variant of Solfege. While Solfege is base on a diatonic
scale, Chromatic-Solfege is based on the twelve-note chromatic scale. This is
great for improving your skill of improvisation especially in Jazz.

| Ascending Chromatic Scale | Descending Chromatic Scale |
|---------------------------|----------------------------|
| ![do di re ri mi fa fi sol si la li ti do][aug-small] | ![do ti te la le sol se fa mi me re ra do][dim-small] |

For further information of Chromatic-Solfege, see [An Introduction to 
Chromatic-Solfege](an-introduction-to-chromatic-solfege/).

I have written some programs to utilize Chromatic-Solfege.

- [Chromatic-Solfege for Lilypond](./chromatic-solfege-for-lilypond/)          
  a Lilypond library to write music with Chromatic-Solfege. This library 
  includes some utilities to manipulate intervals and notes which are written 
  in Chromatic-Solfege.

- [Chromatic-Solfege for JavaScript](./chromatic-solfege-for-javascript/) 
  JavaScript module to manipulate notes and intervals which are
  written in Chromatic-Solfege. This module also includes the definition of all 
  note names and intervals.

- [Chromadoc](./chromadoc/) A toolkit for writing documentations with
  Chromatic-Solfege which automatically generates tex, synthesis singing audio
  and videos. 

- [An Introduction to Chromatic-Solfege](an-introduction-to-chromatic-solfege/)
  a lengthy description of Chromatic-Solfege. I described : 
    -  The difference between my version of Chromatic-Solfege and others.  I
       have modified the note naming rule of Chromatic-Solfege into a new form
       which I believe is more suitable to improve your ability of improvising.
       The modification covers redefining the naming rule for double, triple
       and quadruple accidentals.  Those irregular accidentals are useful to
       analyzing pieces of polymodal music.

    - A number of practice patterns to build fluency with the modified note
      naming rule.

    - A videos of a computer generated singing which reads aloud the practice
      patterns with the Chromatic-Solfege.

- The source code of the [An Introduction to
  Chromatic-Solfege](an-introduction-to-chromatic-solfege/). The description
  itself is written by [Chromadoc](./chromadoc/). 

<style>
section{
    color : #000;
    background-color : #fff;
}
</style>

[aug-small]: ./an-introduction-to-chromatic-solfege/docs/solfege-aug-small.png
[dim-small]: ./an-introduction-to-chromatic-solfege/docs/solfege-dim-small.png
[modeline]: # ( vim: set spell fo+=a path+=../ suffixesadd+=.md: )
