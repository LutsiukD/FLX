$(document).ready(function() {
    let displayValue = '0';   
    $('#result').text(displayValue);

    $('.key').each(function() {       
        $(this).click(function(e) {
            if(displayValue === '0') displayValue = '';
            if($(this).text() === 'C') {
                displayValue = '0';
                $('#result').text(displayValue);
            }
            else if($(this).text() === '=') {
                try {
                    displayValue = eval(displayValue);
                    $('#result').text(displayValue);
                }
                catch(e) {
                    displayValue = '0';
                    $('#result').text('ERROR');
                }               
            }
            else {
                displayValue += $(this).text();
                $('#result').text(displayValue);
            }
            e.preventDefault()
        })
    })
})
