import numpy as np

from pandas import read_csv
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler 

np.random.seed(13)
x_train=read_csv('sign_mnist_train.csv',dtype='float64').sample(frac=1).reset_index(drop=True)
y_train=x_train['label']; x_train=x_train.drop('label',axis=1)

x_test=read_csv('sign_mnist_test.csv',dtype='float64').sample(frac=1).reset_index(drop=True)
y_test=x_test['label']; x_test=x_test.drop('label',axis=1)

scaler=StandardScaler()
x_train=scaler.fit_transform(x_train)

mlp=MLPClassifier(solver='sgd',hidden_layer_sizes=(50),activation='tanh',
                    alpha=0.01,learning_rate_init=0.1)

mlp.fit(x_train,y_train)
x_test=scaler.transform(x_test)
prediction=mlp.predict(x_test)
print(mlp.predict(x_test)[0:10])
print(mlp.score(x_test,y_test))