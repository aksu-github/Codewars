/*
Instruction:

You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end

Inputs:

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2

Outputs

FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar

*/

//  Codewars - Closest Solution to What I Was Trying To Do

class FileNameExtractor {
  static extractFileName (s) {
      return s.replace(/^\d*_(.*)\..*$/,'$1');
  }
}