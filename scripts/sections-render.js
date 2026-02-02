(() => {
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

  const renderIntro = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }

    const paragraphHtml = (data.paragraphs || [])
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

    const linksHtml = (data.links || [])
      .map((link) => {
        const label = link.label ? ` aria-label="${link.label}" title="${link.label}"` : "";
        return `<a href="${link.href}"${label}><i class="${link.iconClass}"></i></a>`;
      })
      .join(" &nbsp;|&nbsp; ");

    container.innerHTML = `
      <tr>
        <td class="intro-text">
          <p class="name">${data.name}</p>
          ${paragraphHtml}
          <p class="center">${linksHtml}</p>
        </td>
        <td class="intro-photo">
          <a href="${data.avatar.src}"><img alt="${data.avatar.alt}" src="${data.avatar.src}" class="hoverZoomLink avatar"></a>
        </td>
      </tr>
    `;
  };

  const renderAwards = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => `<p>&bull; ${item}</p>`)
      .join("");
  };

  const renderOtherPublications = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => `<p>${highlightAuthor(String(item).trim())}</p>`)
      .join("");
  };

  const renderResearchExperience = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = (items || [])
      .map((item) => {
        const mentorLabel = item.mentorLabel || "Mentor";
        const mentorHtml = item.mentorsHtml
          ? `\n              <br>\n              <strong>${mentorLabel}</strong>: ${item.mentorsHtml}`
          : "";

        return `
          <tr>
            <td class="thumb-cell">
              <a href="${item.logo.src}"><img class="org-logo" src="${item.logo.src}" alt="${item.logo.alt || ""}"></a>
            </td>
            <td class="content-cell">
              <span class="org-title">${item.title}</span>
              <br>
              <br>
              <strong>Topic</strong>: ${item.topic}
              ${mentorHtml}
              <br>
              <br>
              ${item.location}
              <br>
              ${item.dates}
              <br>
            </td>
          </tr>
        `;
      })
      .join("");
  };

  renderAwards(window.awardsData, "selected-awards");
  renderOtherPublications(window.otherPublicationsData, "other-publications");
  renderResearchExperience(window.researchExperienceData, "research-experience");
  renderIntro(window.introData, "intro-section");
})();
