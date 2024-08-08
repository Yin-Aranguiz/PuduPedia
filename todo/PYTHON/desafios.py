#Contar del 1 al 10 Y que estos se sumen hasta el 10|
n = 0
sUm= 1

while n < 10: #mientras que n sea menor que 10 
    n += 1 #aumenta el bucle en cada iteración
    sUm+= n #este suma el numero a cada n
    print(n)
    print("este es la sumatoria: ", sum)
print("-------------------------------------")

#Promedio de notas
#Escribe un programa que permita al usuario introducir notas
#hasta que este decida detenerse.
#Al final el programa debe calcular y mostrar el promedio de las notas
#tip investigar len

Promedio = []

while True:
  Notas = float(input("Introduce las notas (o escribe 0 para salir)"))
  if Notas == 0:
    break
  else:
    Promedio.append(Notas)

    SumaNotas = sum(Promedio) 
    N = len(Promedio)

print(f"El promedio es: ,{SumaNotas/N}") #F-string hace que todo lo que este {} se vuelva string. Lo que deja sumar enteros o float cons str

#OJO Debes clear, y luego llamar al archivo en el que estas trabajando
#Como saber si estoy en la normalidad

