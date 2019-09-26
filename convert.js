"use strict"

function convert(form)
{
  var sNumber = form.number.value;
  var cBase = form.currentBase.value;
  var dBase = form.desiredBase.value;

  // Convert to b10
  var number = parseInt(sNumber, cBase);
  var result = number;

  if (dBase != 10)
  {
    result = fromTen(number, dBase);
  }

  alert(result);
}

function fromTen(number, dBase)
{
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var pos = 1;
  var str = "";
  while (number != 0)
  {
    var remainder = number % dBase;
    if (pos == 1)
    {
      str = num[remainder];
    }
    else
    {
      str = num[remainder] + str;
    }
    number = (number - remainder) / dBase;
    pos *= 10;
  }
  return str;
}