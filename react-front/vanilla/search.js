const sreach_value = document.getElementById("sreach_value");





function searchInit() {
    const header_search_input = document.getElementById("header_search_input");
    
    header_search_input.value = sreach_value.innerHTML;
    
}

if(sreach_value)
{
    searchInit();
}