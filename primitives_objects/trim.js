    function trim( myString ) {

      //check for number as a string - return empty string if input is a number
      if ( !isNaN( parseInt(myString) ) ){
        return "";
      }
      //check for typeof string
      if (!(typeof myString == "string") ){
        return "";
      }
      //check for leading/trailing spaces
      var start = 0;
      var end = 0;
      var bFound = false;
      for (var i = 0 ; i < myString.length; i++ ){
        if ( !bFound && myString.charAt(i) != ' ' ){
          //mark that the beg of string is found
          bFound = true;
          start = i;
        } else if (myString.charAt(i) != ' ') {
          //keep moving loc of end
          end = i;
        }
      }
      //substring returns chars between start and end
      // while I want inclusive so bump end
      end == 0 ? 0 : end++;

      return myString.substring(start, end);
    };