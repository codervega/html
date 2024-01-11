import numpy as np
X=np.array(([2,9],[1,5],[3,6]) ,dtype=float)
Y=np.array(([92],[87],[89]),dtype=float)
X=X/np.amax(X,axis=0)
y=Y/100

def sigmoid(x):
  return 1/(1+np.exp(-x))

def dervied_sigmoid(x):
  return 1*(1-x)

epoch=4000
lr=0.1
inputlayer_neurons=2
hiddenlayer_neurons=3
output_neurons=1

wh=np.random.uniform(size=(inputlayer_neurons,hiddenlayer_neurons))
bh=np.random.uniform(size=(1,hiddenlayer_neurons))
wout=np.random.uniform(size=(hiddenlayer_neurons,output_neurons))
bout=np.random.uniform(size=(1,output_neurons))

for i in range(epoch):
  hinp1=np.dot(X,wh)
  hinp=hinp1+bh
  hlayer_act=sigmoid(hinp)
  outinp1=np.dot(hlayer_act,wout)
  outinp=outinp1+bout
  output=sigmoid(outinp)

  EO=Y-output
  outputgrad=dervied_sigmoid(output)
  d_output=EO*outputgrad

  EH=d_output.dot(wout.T)
  hiddengrad=dervied_sigmoid(hlayer_act)
  h_hiddenlayer=EH*hiddengrad

  wout += hlayer_act.T.dot(d_output) * lr
    # bout += np.sum(d_output, axis=0,keepdims=True) *lr
  wh += X.T.dot(h_hiddenlayer) * lr
    # bh += np.sum(d_hiddenlayer, axis=0,keepdims=True) *lr
print("Input: \n" + str(X))
print("Actual Output: \n" + str(y))
print("Predicted Output: \n", output)


