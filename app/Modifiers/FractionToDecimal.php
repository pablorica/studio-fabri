<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class FractionToDecimal extends Modifier
{
    /**
     * Modify a value.
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
      if (preg_match('#^\d+/\d+$#', $value)) {
        [$numerator, $denominator] = explode('/', $value);
        return floatval($numerator) / floatval($denominator);
      }

      return $value;
    }
}
