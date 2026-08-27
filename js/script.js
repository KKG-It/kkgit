// Snarveier for elever. Legg til, endre eller fjern rader her - du trenger ikke røre HTML/CSS.
// url: "#" er en plassholder. Bytt ut med den faktiske lenken før dette går live.
const hubLinks = [
	{
		title: "Glemt passord",
		description: "Tilbakestill skolepassordet ditt til edu brukeren.",
		url: "https://nyttpassord.ikt-agder.no/",
		icon: "🔑",
	},
	{
		title: "Skoleplattformer",
		description: "Logg inn på Visma",
		url: "https://kristiansand-katedralskole.inschool.visma.no/Login.jsp#/",
		icon: "💻",
	},

];

function renderHubLinks() {
	const grid = document.getElementById("hub-grid");
	if (!grid) return;

	grid.innerHTML = "";

	hubLinks.forEach((link, index) => {
		const card = document.createElement("a");
		card.className = `hub-card hub-card--${index % 6}`;
		card.href = link.url;
		card.dataset.title = link.title.toLowerCase();
		card.dataset.description = link.description.toLowerCase();

		card.innerHTML = `
			<span class="hub-card__icon" aria-hidden="true">${link.icon}</span>
			<span class="hub-card__title">${link.title}</span>
			<p class="hub-card__desc">${link.description}</p>
		`;

		grid.appendChild(card);
	});
}

function setupSearch() {
	const searchInput = document.getElementById("hub-search");
	if (!searchInput) return;

	searchInput.addEventListener("input", (event) => {
		const query = event.target.value.trim().toLowerCase();
		const cards = document.querySelectorAll(".hub-card");

		cards.forEach((card) => {
			const matches =
				card.dataset.title.includes(query) ||
				card.dataset.description.includes(query);
			card.classList.toggle("is-hidden", !matches);
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	renderHubLinks();
	setupSearch();
});
