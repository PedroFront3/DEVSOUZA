document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (this.checkValidity()) { 
        const alert = document.getElementById('successAlert');
        alert.style.display = 'block'; 
        alert.style.opacity = '1'; 

        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500); 
        }, 3000); 

        this.reset(); 
    } else {
        this.reportValidity(); 
    }
});