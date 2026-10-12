<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;glepaglutide&quot;}]"></div>

# glepaglutide

- **generic name:** glepaglutide
- **ATC codes:** `A16AX26`
- **DrugBank:** [DB14794](https://go.drugbank.com/drugs/DB14794) · **PubChem:** not captured
- **groups:** investigational

## About

Glepaglutide is an investigational drug studied for the treatment of short bowel syndrome. It is not yet approved and remains under clinical investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:43 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 34,180/724 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hargrove_2020.pdf` | Hargrove DM et al., Pharmacological Characterization of Apr…, The Journal of pharmacology… (2020) | popPK | 8 | [10.1124/jpet.119.262238](https://doi.org/10.1124/jpet.119.262238) | [32075870](https://pubmed.ncbi.nlm.nih.gov/32075870) | The paper reports specific quantitative PK parameters (clearance and half-life) for glepaglutide in rats, although it is a comparator to the subject drug apraglutide. |

<sub>queue written 2026-10-05T10:42:34.183843+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Agersnap_2022 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative changes in a PD biomarker (citrulline) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Agersnap_2023 | irrelevant | 0 | 0 | The paper is a correction notice regarding figure numbering and contains no original pharmacokinetic data or numeric parameter values. |
| popPK | Agersnap_2023_2 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax) for glepaglutide in humans, but the specific numeric values are contained in Table 2 and figures which are not fully rendered in the provided text evidence. |
| PD | Hargrove_2020 | not_relevant | 1 | 0 | The paper focuses on apraglutide and only provides qualitative comparisons or basic PK parameters for glepaglutide, without reporting any specific exposure-response or dose-response PD model or numeric PD parameters for glepaglutide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
