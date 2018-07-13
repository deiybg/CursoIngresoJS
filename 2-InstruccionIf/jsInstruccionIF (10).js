function mostrar()
{
	
	var random;

	random = Math.floor(Math.random() * (10))+ 1;

	if (random>=9)
		{
			alert("nota " +  random + " EXCELENTE");
		} 
		else 
		{
			if (random>= 4) 
				{
					alert("nota " +  random + " aprobo");
				} 
				else {
					alert("nota " +  random + " Vamos, la proxima se puede");
				}
		}


}