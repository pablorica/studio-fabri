<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Illuminate\Support\Arr; /// Laravel 6.x and up

class Getwords extends Modifier
{
    /**
     * Returns the first n words from a string
     * 
     * @see https://statamic.dev/extending/modifiers#creating-a-modifier
     * @see https://stackoverflow.com/questions/5956610/get-first-n-words-of-a-string
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        // Default to 10 words
        $count = 10;
        // Get the parameter, if there is one
        //$param = array_get($params, 0)
        $param  = Arr::get($params, 0, null); // Replace array_get with Arr::get
        if ($param !== null) {
            // Either get the variable from the context, or if it doesn't exist,
            // use the parameter itself - we'll assume its a number.
            //$count = array_get($context, $param, $param);
            $count = Arr::get($context, $param, $param);// Replace array_get with Arr::get
        }

        //implode(' ', array_slice(explode(' ', $sentence), 0, 10));

        preg_match("/(?:\w+(?:\W+|$)){0,$count}/", $value, $matches);
        return $matches[0];
    }
}
