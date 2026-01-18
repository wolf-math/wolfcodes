---
slug: encryption1
title: "Encryption Part 1: Overview"
authors: wolf
tags: [encryption, python]
author:
  name: Aaron Wolf
  url: https://wolfcodes.dev
license:
  type: CC BY-NC 4.0
  attribution_required: true
source:
  canonical_url: https://wolfcodes.dev
---
## Intro

This will be a series on Encryption.

It was my turn to give presentation to my work colleagues at our weekly meetings. Instead of talking about the usual webdev / JavaScript / Framework of the week, I spoke about the fundamentals of cryptography (it made me nostalgic for grad school). I think it's good and important to have an understanding of the basics of how our wonderful internet operates. 

This will be split up into several posts. This first one is just an introduction on the topic. 

<!-- truncate -->

## What is encryption?

Scrambling a message so that only the people who _should_ read a message _can_ read a message. 

Or if you want the Google definition:

en•cryp•tion /inˈkripSH(ə)n,enˈkripSH(ə)n/
noun
the process of converting information or data into a code, especially to prevent unauthorized access.
"I use encryption to protect sensitive information transmitted online"


That's about it.

## When was encryption first used?

The first known use of encryption was during Roman times. It's claimed that Julius Caesar used a shift cipher (now known as a Caesar Cipher) with a shift of 3 to encode significant military messages. 

## How does a Caesar (Shift) cipher work?

All we do is shift the letters the number of the encryption key. So if our shift was 4, each letter on the top row of the chart of your message would get replaced by the letter on the bottom.

|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|A|B|C|D|

The message "i like python" would get encrypted to "M PMOI TCXLSR". It's even easier to do with a [printable encryption wheel.](https://www.perkley.com/cipher-wheel/)

There are **TONS** of tutorials on [how to write a Caesar Cipher](https://dev.to/bharadwaj6262/caesar-cipher-in-python-3j09) in various languages on Dev, so I don't feel a need to do it. We'll get into code in Part 2.

## Security
Is a Caesar Cipher secure?

NO.

Don't use it unless you're just passing notes in class (even then it may not be a good idea. A Caesar Cipher can be cracked by a basic linguistic statistical analysis. Meaning look for the letters in the encrypted message that are used the most and they most likely correspond to the letters that are most commonly used in a given language ("a" and "e" in English). 

Another way is to just do a brute force attack. You could write a program that tries all 26 shifts and see which one isn't gibberish.

## Symmetric ciphers & asymmetric ciphers

A Caesar Cipher is known as a symmetric cipher because the key to unlocking it is the same as the key to unlocking it. Also, both parties need to know the key before using it. There are plenty of other examples of Symmetric Ciphers-- the most famous (infamous?) of which was the enigma machine that the Germans used during WWII and was cracked by Alan Turing. 

Asymmetric ciphers are a whole 'nother can of worms. Look out for part 2!