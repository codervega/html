import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.mixture import GaussianMixture
from sklearn.cluster import kMeans
import pandas as pd
import numpy as np
import sklearn.metrics as su

iris=datasets.load_iris()
X=pd.Dataframe(iris.data)
X.column=['Sepal_Lenght','Sepal_width','Petal_Lenght','Petal_widht']
Y=pd.Dataframe(iris.target)
Y.columns=['targets']

print(X)
print(Y)
colormap=np.array(['red','lime','black'])

plt.subplot(1,2,2)
plt.scatter(X.Petal_Lenght,X.Petal_widht,c=colormap(Y,Targets),s=40)
plt.title("real clustering")

model11=kMean(n_clusters=3)
model11.fit(X)

plt.subplot(1,2,1)
plt.scatter(X.Petal_Lenght,X.Petal_widht,c=colormap(model11.labels_),s=40)
plt.title('K Mean clustering')
plt.show()

model12=GaussianMixture(n_components=3)
model12.fit(X)

plt.subplot(1,2,2)
plt.scatter(X.Petal_Lenght,X.Petal_widht,c=colormap(model12.labels_),s=0)
plt.title("EM Clusting")
plt.show()

print("")



