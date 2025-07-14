<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Illuminate\Support\Arr; // Laravel 6.x and up

class IsYoutube extends Modifier
{
    /**
     * Return true if the value is a Youtube URL
     *
     * @param mixed  $value    The URL to check
     * @param array  $params   Any parameters used in the modifier
     * @return bool
     */
    public function index(
        $value ,
        $params
    ) {
        $is_youtube = false;

        if(strpos($value, "youtu.be") !== false) {
            $is_youtube = true;
        }
        if(strpos($value, "youtube") !== false) {
            $is_youtube = true;
        }

        //$param = array_get($params, 0)
        $param  = Arr::get($params, 0, null); // Replace array_get with Arr::get
        if ($param !== null) {
            if( $param == 'id'
                && $is_youtube
            ) {

              $youtubeid = null;

              if (preg_match('/(?:v=|shorts\/)([a-zA-Z0-9_-]{11})/',$value, $matches)) {
                $youtubeid =$matches[1];
              }

              if (preg_match('/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/', $value, $matches)) {
                $youtubeid =$matches[1];
              }

              //Log::info("youtubeid: ". print_r($youtubeid,true));

              return $youtubeid;
            }
        }



        return $is_youtube;
    }
}
