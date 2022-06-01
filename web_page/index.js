document.getElementById('open_card1').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_NCKU').style.display = 'block';
};

document.getElementById('open_card2').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_TOW').style.display = 'block';
    
};

document.getElementById('open_card3').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_Cluster').style.display = 'block';
};


document.getElementById('card_NCKU_btn').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_NCKU').style.display = 'None';
    document.getElementById('card_TOW').style.display = 'None';
    document.getElementById('card_Cluster').style.display = 'None';
    document.getElementById('card_blur').style.display = 'None';
};

document.getElementById('card_TOW_btn').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_NCKU').style.display = 'None';
    document.getElementById('card_TOW').style.display = 'None';
    document.getElementById('card_Cluster').style.display = 'None';
    document.getElementById('card_blur').style.display = 'None';
};

document.getElementById('card_Cluster_btn').onclick = function () {
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('card_NCKU').style.display = 'None';
    document.getElementById('card_TOW').style.display = 'None';
    document.getElementById('card_Cluster').style.display = 'None';
    document.getElementById('card_blur').style.display = 'None';
};