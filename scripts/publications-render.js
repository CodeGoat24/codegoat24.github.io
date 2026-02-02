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
  };

  renderPublications(data.recentPublications, "recent-publications");
  renderPublications(data.selectedPreprints, "selected-preprints");
})();
