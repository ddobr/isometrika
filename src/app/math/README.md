Чтобы перейти от изометрической к декартовой системе координат в приложении используются следующие расчеты:
1. поворот на 45 градусов против часовой стрелки (вращение вектора через матрицу вращения)
2. умножение координат по оси Y на  1 / sqrt(2) и по оси X на sqrt(2)

Нам нужно сжать систему координат так, чтобы
при каждых двух шагах вправо был один шаг вверх (при отрисовке линий это выглядит гораздо приятнее). 
```
      ##
    ##
  ##
##
```
После поворота на 45 градусов мы получили такой результат
```
   #
  #
 #
#
```
Осталось "сжать" систему координат по оси Х.

Однако, при использовании новой системы координат было бы удобнее, если бы перпендикуляр из каждой точки
оси Х декартовой системы координат пересекал бы изометрическую в точке и чтобы эта точка в изометрической системе
координат имела ТУ ЖЕ координату х.

Например: мы проводим перпендикуляр к оси Х декартовой системы в точке х=1. Этот перпендикуляр пересекает ось Х
изометрической системы. И мы хотим, чтобы в изометрической системе координат эта точка тоже имела значение х=1
Можно посмотреть скриншот ```isometric coordinate system.png```, как это должно выглядеть. Черным нарисована декартова
система координат. Синим - изометрическая система координат. Красным - точки, которые на каждой оси идут с шагом 1

Короче говоря, хочется, чтобы скаляры для **изометрической** системы координат имели следующие координаты в **декартовой** системе координат:
Для оси X: x=1, y=0.5
Для оси Y: x=-1, y=0.5
(Напомню, что скаляры декартовой системы координат имеют координаты 1, 0 и 0, 1 для осей X и Y соответственно).

Чтобы это достичь, после вращения на 45 градусов, мы умножаем ось X на sqrt(2) и ось Y на 1 / sqrt(2).