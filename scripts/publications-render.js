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
        const extraHtml = item.extraHtml || "";
        const hasGithubLinkInExtra = /github\.com/i.test(extraHtml);
        const linksHtml = (item.links || [])
          .filter((link) => !(hasGithubLinkInExtra && /github\.com/i.test(link.href || "")))
          .map((link) => {
            if (link.html) {
              return link.html;
            }
            const icon = link.icon ? `<i class="${link.icon}"></i>` : "";
            const cls = link.className ? `link-chip ${link.className}` : "link-chip";
            return `<a class="${cls}" href="${link.href}">${icon}${link.text}</a>`;
          })
          .join("");
        const venueHtml = item.venue ? `${item.venue}
                <br>` : "";
        const thumbHtml =
          item.image && item.image.src
            ? `<a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}"></a>`
            : `<div class="thumb-placeholder">${item.placeholderText || "Teaser"}</div>`;

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
              ${thumbHtml}
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
