class Participant {
    constructor(name, maxRunCount, maxJumpCount){
        this.name = name;
        this.maxRunCount = maxRunCount;
        this.maxJumpCount = maxJumpCount;
    }

    run(distance){
        if(distance <= this.maxRunCount){
            console.log(`${this.name} runs distance ${distance} meters`);
            return true;
        }
        else{
            console.log(`${this.name} can't run distance ${distance} meters`);
            return false;
        }
        
    }
    jump(height){
        if(height <= this.maxJumpCount){
            console.log(`${this.name} jumps distance ${height} meters`);
            return true;
        }
        else{
            console.log(`${this.name} can't jump distance ${height} meters`);
            return false;
        }
    }
}



class Racetrack {

    constructor(distance){
        this.distance = distance;
    }

    overcome(participant){
        return participant.run(this.distance);
    }
}

class Wall {

    constructor(height){
        this.height = height;
    }

    overcome(participant){
        return participant.jump(this.height);
    }

}


module.exports = {
    Participant : Participant,
    Racetrack : Racetrack,
    Wall : Wall
};