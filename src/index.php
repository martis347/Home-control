<?php
header('Access-Control-Allow-Origin: *');

echo json_encode(array('comic' => getComic(), 'quotes' => array('humorists' =>getQuote('humorists'), 'definitions' => getQuote('definitions'))));


function getComic(){
    $html = file_get_contents("http://www.gocomics.com/random/calvinandhobbes");
    preg_match("<meta property=\"og:image\" content=\"(.*)\">", $html, $matches);
    
    return $matches[1];
}

function getQuote($type){
    $result = '';
    while(strlen($result) > 370 || $result == ''){
        $html = file_get_contents("http://subfusion.net/cgi-bin/quote.pl?quote=$type&number=1");
        $string = trim(preg_replace('/\s+/', ' ', $html));
        preg_match("/<hr><br>(.*)<br><br>/", $string, $matches);
        
        $result = $matches[1];
    }
    
    return $result;
}
?>
