function vaucherValue(){

    let radioValue = $('.vaucher_value').find('input');
    let customValue = document.getElementById('anderer_betrag');
    
    radioValue.each(function(){
        this.setAttribute('data-value', this.value)
    });

    customValue.addEventListener('change', function(){

        radioValue.each(function(){
            this.value = '';
            this.setAttribute('checked', false);
            this.classList.add('unchecked');
        });

    });
    
    customValue.addEventListener('input', function(){
        radioValue.each(function(){
            this.value = '';
            this.setAttribute('checked', false);
            this.classList.add('unchecked');
        });
    });

    radioValue.each(function(){
        this.addEventListener('click', function(){
            this.setAttribute('checked', true);
            this.classList.remove('unchecked');
            let valueData = this.getAttribute('data-value');
            this.value = valueData;
            customValue.value = '';
        })
    });
    
}
