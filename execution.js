function getModule()
{
   return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div.gQSZO1_zl4H5dNK96Gmc1 > div.ZV1LrApmcV6Ae3HM7BSTK.p-r-10').text();
}


function getDuration()
{
   return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div.gQSZO1_zl4H5dNK96Gmc1 > div._172OcCI1hHODCvaD0TY_o').text();
}

function getModuleName()
{
   return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div._1uaJnIdOwZdV9CrKIJLbJW').text();
}

function getTheCountSessionInTheModule()
{
    return jQuery("#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn").children().length;
}

function getClassDayAndDateDetails(n)
{
   return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child('+n+') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2BNQ-bWDv0-7ggyDXjpMM-._3m498PBrHlcd4hzr8ZWMw1').text();
}

function getClassName(n)
{
    return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child('+n+') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2qANl4R5uQz0h1zE2Fxpqq > a').text();
}

function getClassList()
{
    var class_count =getTheCountSessionInTheModule();
    var class_list = [];

    for(var i=1;i<=class_count;i++)
    {
        var data={ date : getClassDayAndDateDetails(i),class_name :getClassName(i)};
        class_list.push(data);
    }
     
    return class_list;
}
