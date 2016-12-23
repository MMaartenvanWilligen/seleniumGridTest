# Selenium grid

##Summary
This directory shows how a selenium grid can be setup using virtual machines(or local browsers in the localGrid directory). Selenium-Grid allows you run your tests on different machines against different browsers in parallel.
Therefore the selenium grid needs one hub and one ore more nodes. The hub distributes the tests to the node with the right platform browser combination. In this directory you can find the necesaary dependecies and start a basic selenium grid. 

## Installation instructions (on virtual machines)

#### setup grid of virtual machines
Make a grid of virtual machines with for example virtualbox. Setup the virtual machines with the following requirements:

**All virtual machines**
- java 8
- 64 bit
- network bridged

**vm 1 Ubuntu 16.04**
- Functions as hub
- Central file share

**Vm 2 Ubuntu 16.04**
 - Function: Node
 - Browser: Firefox 50.0
 
**Vm 3 Ubuntu 16.04**
  - Function: Node
  - Browser: chrome 55.0.2883.75

**Vm 4 Windows 10**
- Function: Node
- Browser: Edge 38.14393.0.0, Edge HTML 14.14393

#### Vm 1 Central file share



#### start hub and nodes
Start the hub and nodes by running the starthub and startnode sh files. 

``` command
$ sudo sh startHub.sh
```

#### Grid is ready
The start.sh file initializes the selenium grid and executes the test. 

``` command
$ sudo sh start.sh
```