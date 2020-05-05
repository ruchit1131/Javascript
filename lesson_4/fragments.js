var standings = [
	{
		name: "New England Patriots",
		wins: 12,
		losses: 4,
		ties: 0
	},
	{
		name: "New York Jets",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Miami Dolphins",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Buffalo Bills",
		wins: 6,
		losses: 10,
		ties: 0
	}
];
var fragment = new DocumentFragment();
for(var i = 0; i < standings.length; i++)
{
    var team = standings[i];
    fragment.appendChild(document.createElement("h1"));
    fragment.querySelectorAll("h1")[i].textContent = team.name;
    var p = document.createElement("p");
    p.textContent = "wins: " + team.wins;
    fragment.appendChild(p);
}
document.body.appendChild(fragment);