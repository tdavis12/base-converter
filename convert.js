"use strict"

function convert(form)
{
  var number = form.number.value;
  var cBase = form.currentBase.value;
  var dBase = form.desiredBase.value;
  var result = 0;

  if (dBase == 10)
  {
    result = toTen(number, cBase);
  }
  else
  {
    if (cBase != 10)
    {
      number = toTen(number, cBase);
    }
    result = fromTen(number, dBase);
  }

  alert(result);
}

function toTen(number, cBase)
{
  var result = 0;
  var numberDigits = [];
  var sNumber = number.toString();
  for (var i = 0, l = sNumber.length; i < l; i++)
  {
    numberDigits.push(+sNumber.charAt(i));
  }
  // Ex: 123b10 -> b5 = 1*5^2 + 2*5^1 +3*5^0
  for (var i = 0; i < numberDigits.length; i++)
  {
    var digit = numberDigits[numberDigits.length - i - 1];
    var power = Math.pow(cBase, i);
    result += (digit * power);
  }
  return result;
}

function fromTen(number, dBase)
{
  var result = 0;
  var pos = 1;
  while (number != 0)
  {
    var remainder = number % dBase;
    result += remainder * pos;
    number = (number - remainder) / dBase;
    pos *= 10;
  }
  return result;
}