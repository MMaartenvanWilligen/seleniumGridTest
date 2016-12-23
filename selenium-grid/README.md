# Selenium grid

##Summary
This directory shows how a selenium grid can be setup using virtual machines(for local setup without virtual machines go to /localGrid directory). Selenium-Grid allows you run your tests on different machines against different browsers in parallel.
Therefore the selenium grid needs one hub and one ore more nodes. The hub distributes the tests to the node with the right platform browser combination. In this directory you can find the necesaary dependecies and start a basic selenium grid. 

## Installation instructions (on virtual machines)

#### setup grid of virtual machines
Make a grid of virtual machines with for example virtualbox. Setup the virtual machines with the following requirements:

**All virtual machines**
- java 8
- 64 bit
- network bridged
- Central file share

**vm 1 Ubuntu 16.04**
- Function: Hub

**Vm 2 Ubuntu 16.04**
 - Function: Node
 - Browser: Firefox 50.0
 
**Vm 3 Ubuntu 16.04**
  - Function: Node
  - Browser: chrome 55.0.2883.75

**Vm 4 Windows 10**
- Function: Node
- Browser: Edge 38.14393.0.0, Edge HTML 14.14393

#### Central file share
Make a central file share between the virtual machines. By cloning this repository in that central file share all virtual machines have access to the required files like the drivers. 

[instructions howtogeek](http://www.howtogeek.com/187703/how-to-access-folders-on-your-host-machine-from-an-ubuntu-virtual-machine-in-virtualbox/)

#### start hub and nodes
Start the hub and nodes by running the startHub and startNode sh files. Run startHub.sh on vm 1, starNodeUbuntuFirefox.sh on vm 2, 
starNodeChrome.sh on vm 3 and starNodeWindowsEdge.sh on vm 4. 

``` command
$ sudo sh startHub.sh
```

#### Grid is ready
You are ready to go! check your grid on http://[your-hub-ip]:[hub-port]/grid/console
