class HashMap {
    constructor(capacity) {
        this.capacity = capacity;
        this.table = [];
        this.count = 0;
    }

    contains(key){
        let hashCode = key._hash() % this.table.length;
        if(this.table.length == 0){
            return false;
        }else if(this.table[hashCode] == null){
            return false;
        }
        for(let i = 0; i < this.table[hashCode].length; i++){
            if(this.table[hashCode][i][0] == key) return true;
        }
        return false;
    }
}

String.prototype._hash = function() {
    let hash = 0;
    if(this.length == 0) return hash;

    for (let i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash &= hash;
    }

    return hash;
}

HashMap.prototype.Add = function(key, val){
    let index = key._hash() %  this.table.length;
    if(this.table[index] == null){
        this.table[index] = [];
    } 
    for(let i=0; i < this.table[index].length; i++){
        if(this.table[index[i][0]] == key){
            this.table[index][i][1] == val;
            return;
        }
    }
    this.table[index].push([key,val]);
    this.count++;
    if(this.count >= this.table.length*3){
        this._resize();
    }
}

HashMap.Add("Chris","Awesome");
HashMap.Add("Mark","Dude");
console.log(this.table);


HashMap.prototype.Remove = function(key){
    let index = key._hash() %  this.table.length;
    if(this.table[index] == null){
        return false;
    }
    for(let i=0; i < this.table[index].length; i++){
        if(this.table[index][i][0] == key){
            this.table[index][i] = this.table[index][this.table[index].length-1];
            this.table[index].pop();
            this.count--
            break;
        }
    }
}

let myHashMap = new HashMap(50);

myHashMap.Add("name", "Mark");

console.log(myHashMap);

console.log(myHashMap.contains("name"));
