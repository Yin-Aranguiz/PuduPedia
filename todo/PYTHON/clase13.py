#Reemplazar subcadenas
#Dada la cadena "Hola mundo, hola universo", reemplaza todas las ocurrencias de "hola" por "Hola".
texto = "Hola mundo, hola universo"
new_text = texto.replace ("hola", "Hola")
print(new_text)

 
#Dividir cadenas
#* Dada la cadena "manzana,pera,plátano,uva", divídela en una lista de frutas

fruit = ('manzana,pera,platano,uva')
new_fruit = fruit.split(',')
print (new_fruit)
 
#Eliminar espacios en blanco
#* Dada la cadena " Hola mundo ", elimina los espacios en blanco al inicio y al final.

c = (' Hola mundo ')
clean_c = c.strip()
print(clean_c)