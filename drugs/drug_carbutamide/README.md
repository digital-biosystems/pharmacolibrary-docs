<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;carbutamide&quot;}]"></div>

# carbutamide

- **generic name:** carbutamide
- **ATC codes:** `A10BB06`
- **DrugBank:** [DB13406](https://go.drugbank.com/drugs/DB13406) · **PubChem:** not captured
- **molar mass:** 271.34 g/mol (C11H17N3O3S) — DrugBank
- **groups:** investigational

## About

Carbutamide is a sulfonylurea that was developed as an anti-diabetic medication to lower blood glucose. It is not an approved medicine today; it is classified as investigational and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5038107](https://www.wikidata.org/wiki/Q5038107) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:21 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 1,448/146 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=carbutamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avedissian_2019 | irrelevant | 0 | 0 | The paper is a review of Polymyxin B pharmacokinetics and does not contain data for carbutamide. |
| PD | Avedissian_2019 | not_relevant | 0 | 0 | The paper is a review of Polymyxin B pharmacokinetics and does not mention carbutamide or report any pharmacodynamic parameters. |
| popPK | Michalcová_2016 | irrelevant | 0 | 0 | The study is an in-vitro binding affinity analysis (capillary electrophoresis) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| PD | Michalcová_2016 | not_relevant | 0 | 0 | The paper reports protein binding constants (affinity) via capillary electrophoresis, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of small-molecule agonists for neurotensin receptors and contains no pharmacokinetic data for carbutamide. |
| PD | Panel_2026 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding and functional assay data (EC50/Emax) for novel neurotensin receptor agonists, not pharmacodynamic or exposure-response data for the drug carbutamide. |
| popPK | Pogátsa_1988 | irrelevant | 0 | 0 | The study investigates the cardiotoxic effects of carbutamide on arrhythmias in animals and humans, not its pharmacokinetic disposition parameters. |
| popPK | Schwanstecher_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and channel inhibition, not a pharmacokinetic study reporting disposition parameters for carbutamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
