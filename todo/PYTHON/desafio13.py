#Ejercicio combinado#'
#Crea una función que tome una cadena de texto y }
#   realice las siguientes operaciones:

#Eliminar espacios blancos al inicio y al final # .strip
#Convertir la cadena en minuscula #.lower
#Reemplazar todas las ocurrencias de 'mundo' por 'universo # .replace
#dividir la cadena en palabras # .split
#contar cuantas veces aparece la palabra 'universo' en la lista resultante # .count

exercise = ('En un mundo donde la tecnología domina cada aspecto de nuestra vida '
            'es importante recordar que la verdadera esencia de la humanidad radica en la conexión con el mundo natural que nos rodea. '
            'Explorar el mundo a través de los ojos de un niño nos permite redescubrir la magia y la maravilla que a menudo pasamos por alto en nuestro día a día. '
            'Juntos, podemos crear un mundo mejor para las generaciones futuras, donde la igualdad, '
            'la compasión y el respeto por el mundo sean los pilares de nuestra sociedad.')

v1_exercise = exercise.strip()

v2_exercise = v1_exercise.replace('mundo', 'universo')

v3_exercise = v2_exercise.split()

v4_exercise = v3_exercise.count('universo')


print(v1_exercise) 
print (v1_exercise.lower()) 
print (v2_exercise)  
print (v4_exercise)


