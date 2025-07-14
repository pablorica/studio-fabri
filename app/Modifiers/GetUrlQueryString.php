<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Illuminate\Support\Facades\Log;


class GetUrlQueryString extends Modifier
{
    /**
     * Extracts the query string from a URL.
     *
     * @param string $url  The URL to extract the query from.
     * @return string|null The query string or null if none exists.
     */
    public function index($url)
    {
        //Log::info("url: ". print_r($url,true));
        // Parse the URL and return only the query part
        return parse_url($url, PHP_URL_QUERY) ?? null;
    }
}
