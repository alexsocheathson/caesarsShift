
caesarsShift [![Build Status](https://travis-ci.org/alexsocheathson/caesarsShift.svg?branch=master)](https://travis-ci.org/alexsocheathson/caesarsShift)
caesarsShift
---------------------
caesarsShift is a Node package that allows for the encryption(by a random value) and decryption of a given string following the rules of the Caesars shift.

Usage
---------------------
This library comes with two main functions: `randomEncryption`, and `decryption`. In the example below, the provided message will be encrypted and decrypted.
```
var enc = randomEncryption("He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.")
var dec = decryption(enc);
```
