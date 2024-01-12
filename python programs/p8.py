from sklearn.metrics import classification_report,confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier

iris=datasets.load_iris()
iris_data=iris.data
iris_label=iris.target
x_train,x_test,y_train,y_test=train_test_split(iris_data,iris_label,test_size=0.20)

Classifier=KNeighborsClassifier(n_neighbors=5)
Classifier.fit(x_train,y_train)
y_pred=Classifier.predict(x_test)
print("Confusion matrix is as follow")
print(confusion_matrix(y_test,y_pred))
print('Accuracy Report is')
print(classification_report(y_test,y_pred))



