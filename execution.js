function getModule() {
    return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div.gQSZO1_zl4H5dNK96Gmc1 > div.ZV1LrApmcV6Ae3HM7BSTK.p-r-10').text();
}

function getDuration() {
    return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div.gQSZO1_zl4H5dNK96Gmc1 > div._172OcCI1hHODCvaD0TY_o').text();
}

function getModuleName() {
    return jQuery('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div._2umtbV0wAp_ErXetoqJv_p > div._3VMt5SpP8r3EG6hpcET6Jn > div._1uaJnIdOwZdV9CrKIJLbJW').text();
}

function getTheCountSessionInTheModule() {
    return jQuery("#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn").children().length;
}

function getClassDayAndDateDetails(n) {
    var temp_selector = '#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2BNQ-bWDv0-7ggyDXjpMM-._3m498PBrHlcd4hzr8ZWMw1';
    if (checkSelectorIsExists(temp_selector) === false) {
        return false;
    }
    return jQuery(temp_selector).text();
}

function getClassName(n) {
    var temp_selector = '#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2qANl4R5uQz0h1zE2Fxpqq > a';
    if (checkSelectorIsExists(temp_selector) === false) {
        return false;
    }
    return jQuery(temp_selector).text();
}

function getClassList() {
    var class_count = getTheCountSessionInTheModule();

    var class_list = [];

    for (var i = 1; i <= class_count; i++) {
        var optinal_class_val=isOptionalClass(i);
        var contest_val=isContest(i);

        var date_detail='';
        if(optinal_class_val)
        {
             date_detail=getDateDetailsForOptionalClass(i)
        }
        else
        {
            date_detail= getClassDayAndDateDetails(i)
        }

        var class_name_val='';
        if(contest_val)
        {
            class_name_val=getContestValue(i);
        }
        else
        {
            class_name_val=getClassName(i);
        }
        
        var data = {
            date_details: date_detail,
            class_name: class_name_val,
            link: getHref(i),
            optional_class:optinal_class_val,
            is_contest:contest_val,
            module:getModule(),
            module_name:getModuleName()
        };
        class_list.push(data);
    }
    
    return class_list;
}

function getHref(n) 
{
    var temp_selector = '#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2qANl4R5uQz0h1zE2Fxpqq > a';

    if (checkSelectorIsExists(temp_selector) === false) {
        return false;
    }

    return jQuery(temp_selector).attr('href');

}


jQuery.fn.exists = function() 
{
    return this.length > 0;
}

function checkSelectorIsExists(selector) {
    return jQuery(selector).exists() ? true : false;
}

function isOptionalClass(n)
{
    var temp_selector = '#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2qANl4R5uQz0h1zE2Fxpqq > span';
    if (checkSelectorIsExists(temp_selector) === false) {
        return false;
    }
    return true;
}

function getDateDetailsForOptionalClass(n)
{
    return   $('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div._1OXiTCCC2l0j8_9scFM7Op > div._30_yzoGD0eVzPFGtVGWyjn > div._2BNQ-bWDv0-7ggyDXjpMM-').text();
}

function isContest(n)
{
    return checkSelectorIsExists('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div > div > section > article > div._3YYjxxPpyCX9caRRCgDHt2 > div:nth-child(2) > div')

}

function getContestValue(n)
{
    return $('#root > div > div:nth-child(1) > div.me-cc-body > div > div._1lyWUiCXn1OPLIGJ8A5I0R > div > div > div.W2MrnAKwZgc2MVIhxa-kn > div:nth-child(' + n + ') > div > div > div > section > article > div._3YYjxxPpyCX9caRRCgDHt2 > div:nth-child(2) > div').text();
}

// function getModule()
// {
//     //menu based module
//     return $('#root > div > div:nth-child(1) > div.me-cc-body > div > div.RO7KNc0-vb4JUuAPraRrK > div.m-l-20.m-r-20.m-t-20 > div:nth-child(2) > a > div > div.ZV1LrApmcV6Ae3HM7BSTK._2JYdAssc0lyu2x28JaMdLb').text();
// }

// function getModuleName()
// {
//      //menu based module Name
//     return $('#root > div > div:nth-child(1) > div.me-cc-body > div > div.RO7KNc0-vb4JUuAPraRrK > div.m-l-20.m-r-20.m-t-20 > div:nth-child(2) > a > div > div.m-b-5 > div').text();
// }

function insertIntoDB()
{
    //var myKeyVals = { A1984 : 1, A9873 : 5, A1674 : 2, A8724 : 1, A3574 : 3, A1165 : 5 }
    var insertData=getClassList();
    var saveData = $.ajax({
        type: 'POST',
        url: "http://localhost/poc/course-pull-content/script.php",
        data: {datas:insertData},
        //dataType: "json",
        success: function(resultData) { console.log(resultData); }
    });
    //saveData.error(function() { alert("Something went wrong"); });
}
console.log(insertIntoDB());