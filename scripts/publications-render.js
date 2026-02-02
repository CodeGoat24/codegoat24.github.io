(() => {
  const data = window.publicationData;
  if (!data) {
    return;
  }

  const renderPublications = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => {
        const linksHtml = (item.links || [])
          .map((link) => {
            const icon = link.icon ? `<i class="${link.icon}"></i>` : "";
            const cls = link.className ? `link-chip ${link.className}` : "link-chip";
            return `<a class="${cls}" href="${link.href}">${icon}${link.text}</a>`;
          })
          .join("");
        const extraHtml = item.extraHtml || "";
        const venueHtml = item.venue ? `${item.venue}
                <br>` : "";

        return `
          <tr>
            <td class="thumb-cell">
              <a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}"></a>
            </td>
            <td class="content-cell">
              <span class="papertitle">${item.title}</span>
              <br>
              ${item.authors}
              <br>
              ${venueHtml}
              ${linksHtml}
              ${extraHtml}
            </td>
          </tr>
        `;
      })
      .join("");
  };

  renderPublications(data.recentPublications, "recent-publications");
  renderPublications(data.selectedPreprints, "selected-preprints");
})();
