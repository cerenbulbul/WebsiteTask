
# Website Task

### Creator: 

- Ceren Bülbül

___



1. [ Introduction ](#Intro)
2. [ Project Overwiev ](#Def)
   * [Algorithms](#Algo) 
   * [Database Structure](#Db)
3. [ Project Tools](#Tools) 
5. [ How It Runs ? ](#Run)  
6. [ Demo ](#Demo) 


<a name="Intro"></a>
## Introduction

This project provides a main dashboard for asset managers. There are functions that must be done while preparing this board.

**These Functions:**
1. Creating a Tile View with Address, Size and Year parameters.
2. Associating the address with google map
3. Creation new properties
4. Creating a map view (via Google map)

<a name="Def"></a>
## Project Overwiev

In this project, I first connected with Firebase and then applied operations such as adding, getting, deleting data. Based on the data, I created Tile view and map view. Finally, I finished the project by creating the design of the dashboard page.

<a name="Algo"></a>
### Algorithms

The algorithms I used in this project are the methods I apply when importing or getting data from the database. As you can see in the example below, I used a function to push the data for the map. In this function, each user's address information is included and these informations are uploaded to the map view.

```
this.UserService.getUsers().subscribe(res => {
      this.MapMark = res
      for (let i = 0; i < res.length; i++) {
        this.markerPositions.push({
          'lat': this.MapMark[i].lat,
          'lng': this.MapMark[i].lng
        })
      }
    })
  }
  
```

<a name="Db"></a>
### Database Structure

I did not use a complex database structure. I used a database structure that could be compatible with the given project. I created the database in Firebase/Firestore. As you see the below, the database structure contains one table that includes 5 attributes. 

 <img src="https://user-images.githubusercontent.com/36292743/134429306-df1949b2-fa04-4156-af24-16d2955f75d7.png" width="200" height="200"> 

<a name="Tools"></a>
## Project Tools&Libraries

While implementing this project I used some tools and libraries. 

**Tools:**
* Visual Studio Code
* Firebase

**Libraries:**
* @angular/google-maps
* firebase
* ngx-google-places-autocomplete

<a name="Run"></a>
## How It Runs ?

**Run:** 

```
npm install 
ng serve 
```

**Build:**
```
ng build
```


<a name="Demo"></a>
## Demo
[![IMAGE ALT TEXT](http://img.youtube.com/vi/DIhBMoruvZM/0.jpg)](http://www.youtube.com/watch?v=DIhBMoruvZM "Video Title")


