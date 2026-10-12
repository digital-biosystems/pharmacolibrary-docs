<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) nanocolloid&quot;}]"></div>

# technetium (99mTc) nanocolloid

- **generic name:** technetium (99mTc) nanocolloid
- **ATC codes:** `V09DB01`, `V09EA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m nanocolloid is a diagnostic radiopharmaceutical used in nuclear medicine imaging, particularly of the liver and reticuloendothelial system and of the respiratory system via inhalation. It remains in use as an imaging agent, classified in the ATC system for diagnostic radiopharmaceuticals.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:33 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 12,370/5,598 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Holmberg_1990.pdf` | Holmberg SB et al., Vascular clearance by the reticuloendot…, Scandinavian journal of cli… (1990) | popPK | 9 | [10.3109/00365519009104954](https://doi.org/10.3109/00365519009104954) | [2084824](https://pubmed.ncbi.nlm.nih.gov/2084824) | Rat nanocoll vascular clearance rate constant is reported numerically (0.49 ± 0.02 × 10⁻² s⁻¹). |
| `Holmberg_1987.pdf` | Holmberg SB et al., Phagocytosis and dynamic RES scintigrap…, Nuclear medicine communicat… (1987) | popPK | 8 | [10.1097/00006231-198705000-00004](https://doi.org/10.1097/00006231-198705000-00004) | [3684100](https://pubmed.ncbi.nlm.nih.gov/3684100) | Rat Nanocoll clearance rates were studied, but absolute numeric k values are not reported in the evidence. |

<sub>queue written 2026-10-07T19:33:21.493426+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bains_2015 | irrelevant | 1 | 7 | Technetium-99m nanocolloid is used as a diagnostic tracer; numeric lymph-flow rate constants are reported, not population-PK parameters. |
| popPK | Forgács_2003 | irrelevant | 1 | 0 | Nanocoll clearance is described only qualitatively as changing, with no numeric disposition parameters provided. |
| popPK | Holmberg_1987 | relevant | 8 | 2 | Rat Nanocoll clearance rates were studied, but absolute numeric k values are not reported in the evidence. |
| popPK | Holmberg_1988 | irrelevant | 2 | 8 | Numeric Nanocoll uptake rates are reported, but Nanocoll is used as a diagnostic probe of RES function rather than studied as the subject drug. |
| popPK | Mechella_2000 | irrelevant | 0 | 0 | This is a human sentinel-node imaging study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Moyer_1996 | irrelevant | 0 | 0 | Technetium-99m-nanocolloid is only an in vivo control, with no disposition parameters reported for it. |
| popPK | Sethi_2013 | irrelevant | 0 | 0 | This is a review that mentions Nanocoll but reports no quantitative pharmacokinetic parameters. |
| popPK | Svensson_1992 | irrelevant | 2 | 8 | Numeric uptake-clearance rates are reported, but nanocolloid is used as a diagnostic probe to assess liver-cell function, not as the subject of a PK study. |
| popPK | Zetterlund_2016 | irrelevant | 2 | 0 | Nanocolloid clearance is described only qualitatively, with no numeric disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
