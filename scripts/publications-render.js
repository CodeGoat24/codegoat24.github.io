(() => {
  const data = window.publicationData;
  if (!data) {
    return;
  }

  const highlightAuthor = (html) => {
    let text = String(html).replace(
      /<strong>Yibin Wang<\/strong>/g,
      '<span class="author-me">Yibin Wang</span>'
    );
    if (!text.includes("author-me")) {
      text = text.replace(/\bYibin Wang\b/g, '<span class="author-me">Yibin Wang</span>');
    }
    return text;
  };

  const renderPublicationItems = (items) =>
    (items || [])
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
          <tr class="publication-row">
            <td class="content-cell">
              <span class="papertitle">${item.title}</span>
              <br>
              <span class="authors-line">${highlightAuthor(item.authors)}</span>
              <br>
              ${venueHtml}
              ${linksHtml}
              ${extraHtml}
            </td>
            <td class="thumb-cell">
              <a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}"></a>
            </td>
          </tr>
        `;
      })
      .join("");

  const renderPublications = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = renderPublicationItems(items);
  };

  const renderPublicationGroups = (groups, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (groups || [])
      .map(
        (group) => `
          <tr class="pub-group-row">
            <td class="pub-group-cell" colspan="2">
              <div class="pub-group-header">
                <h3 class="pub-group-title">${group.title}</h3>
                <span class="pub-group-divider" aria-hidden="true"></span>
              </div>
            </td>
          </tr>
          ${renderPublicationItems(group.items)}
        `
      )
      .join("");
  };

  renderPublicationGroups(data.unifiedRewardSeriesGroups, "unifiedreward-series");
  renderPublications(data.selectedWorks, "selected-works");
})();
