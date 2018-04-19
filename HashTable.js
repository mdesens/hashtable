HashMap.prototype.Add = function(key, val){
    let index = _hash(key) %  this.table.length;
    if(this.table[index] == null){
        this.table[index] = [];
    } 
    for(let i=0; i < this.table[index].length; i++){
        if(this.table[index[i][0]] == key){
            this.table[index][i][1] == val;
            return;
        }
    }
    this.table.push([key,val]);
    this.count++;
    if(this.count >= this.table.length*3){
        this._resize();
    }
}


HashMap.prototype.Remove = function(key){
    let index = _hash(key) %  this.table.length;
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

