document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("bento-grid");

    async function fetchData() {
        try {
            const response = await fetch("data.json");
            if (!response.ok) throw new Error("Failed to load data");
            const data = await response.json();
            renderGrid(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            gridContainer.innerHTML = '<p style="color: white; grid-column: 1/-1; text-align: center;">Failed to load content. Please try again later.</p>';
        }
    }

    function renderGrid(items) {
        gridContainer.innerHTML = "";

        items.forEach((item) => {
            const card = document.createElement("a");
            card.className = "card";
            card.href = item.url;
            card.dataset.id = item.id;
            card.dataset.type = item.type;

            // Apply dimensions hints
            if (item.colSpan) card.dataset.colSpan = item.colSpan;
            if (item.rowSpan) card.dataset.rowSpan = item.rowSpan;

            // Custom Theme Color
            if (item.themeColor) {
                card.style.setProperty('--card-theme', item.themeColor);
            }

            // Profile icon (squircle)
            let iconImg = null;
            if (item.image && item.type === 'profile') {
                iconImg = document.createElement('img');
                iconImg.className = 'card-icon';
                iconImg.src = item.image;
                iconImg.alt = item.title;
            }

            // Text Content
            const contentDiv = document.createElement('div');
            contentDiv.className = 'card-content';

            const title = document.createElement('div');
            title.className = 'card-title';
            title.textContent = item.title;

            const subtitle = document.createElement('div');
            subtitle.className = 'card-subtitle';
            subtitle.textContent = item.subtitle;

            contentDiv.appendChild(title);
            contentDiv.appendChild(subtitle);

            if (item.description) {
                const desc = document.createElement('div');
                desc.className = 'card-description';
                desc.innerHTML = item.description; // Allow HTML for <br>
                contentDiv.appendChild(desc);
            }

            // Assemble Card
            if (iconImg) card.appendChild(iconImg);
            card.appendChild(contentDiv);

            gridContainer.appendChild(card);
        });
    }

    fetchData();
});

