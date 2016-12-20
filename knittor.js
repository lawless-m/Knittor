
var StsToGo = 0
var StsGone = 0
var StsTot = 0

var currPatt = new Array()
var nextStitch = ""

function clear() {
	StsToGo = 0
	StsGone = 0
	StsTot = 0
	document.getElementById("co").value = ""
	document.getElementById("nextst").value = ""
	showSts()	
}

function showSts() {
	document.getElementById("counter").value = StsGone + " of " + StsTot + ", " + StsToGo + " to go"
	document.getElementById("stdin").value = ""
	document.getElementById("stdin").focus()
	document.getElementById("nextst").value = currPatt[StsGone]
}

function cntclick() {
	StsToGo--
	StsGone++	
	showSts()
}

function resetAll() {
	if(confirm("No Undo")) {
		clear()
	}
}

function castOn(n){
	if (Math.abs(n) > 0) {
		StsTot += n
		StsToGo = n
		for(i=0; i<n; i++) {
			currPatt.push("CO")
		}
	}
	showSts()
}

function addPatt(sts, n) {
	if(n > 0) {
		for(i=0; i<n; i++) {
			currPatt.push(sts[i%sts.length])		
		}
	}
	showSts()
}
