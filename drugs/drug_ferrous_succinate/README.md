<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous succinate&quot;}]"></div>

# ferrous succinate

- **generic name:** ferrous succinate
- **ATC codes:** `B03AA06`
- **DrugBank:** [DB14489](https://go.drugbank.com/drugs/DB14489) · **PubChem:** [CID 159252](https://pubchem.ncbi.nlm.nih.gov/compound/159252)
- **molar mass:** 171.917 g/mol (C4H4FeO4) — DrugBank
- **groups:** approved, investigational

## About

Ferrous succinate is an oral iron preparation (a hematinic) used to treat iron deficiency anemia. It is an approved oral bivalent iron medicine, though not widely used compared with other iron salts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27269230](https://www.wikidata.org/wiki/Q27269230) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:11 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 16,027/626 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2011.pdf` | Cao GY et al., Comparative bioavailability of ferrous…, Clinical therapeutics (2011) | popPK | 8 | [10.1016/j.clinthera.2011.10.028](https://doi.org/10.1016/j.clinthera.2011.10.028) | [22129567](https://pubmed.ncbi.nlm.nih.gov/22129567) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Tmax) for ferrous succinate in humans, although it is a bioequivalence study rather than a compartmental population PK model. |

<sub>queue written 2026-10-05T20:11:46.776330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper is a review of novel iron saccharide-iron (III) complexes and does not report original quantitative pharmacokinetic parameters for ferrous succinate. |
| popPK | Hurrell_1989 | irrelevant | 2 | 0 | The study reports relative iron absorption percentages (bioavailability) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ferrous succinate. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not ferrous_succinate. |
| PD | Jiao_2009 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of sirolimus, not pharmacodynamics (PD) or exposure-response relationships for ferrous succinate. |
| popPK | Yan_2025 | irrelevant | 2 | 0 | Ferrous succinate is used only as a control/comparator for polysaccharide-iron complexes, and no quantitative PK parameters (CL, V, etc.) for ferrous succinate are reported in the evidence. |
| popPK | Zhu_2017 | irrelevant | 0 | 0 | The study focuses on the bioavailability of a collagen-iron complex, using ferrous succinate only as a comparator, and does not report pharmacokinetic parameters for ferrous succinate. |
| popPK | Zillessen_1977 | irrelevant | 2 | 0 | The study measures iron absorption rates (bioavailability) rather than reporting compartmental pharmacokinetic parameters like clearance, volume of distribution, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
