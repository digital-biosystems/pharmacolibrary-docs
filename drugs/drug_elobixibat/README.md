<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;elobixibat&quot;}]"></div>

# elobixibat

- **generic name:** elobixibat
- **ATC codes:** `A06AX09`
- **DrugBank:** [DB12486](https://go.drugbank.com/drugs/DB12486) · **PubChem:** [CID 9939892](https://pubchem.ncbi.nlm.nih.gov/compound/9939892)
- **molar mass:** 695.89 g/mol (C36H45N3O7S2) — DrugBank
- **groups:** investigational

## About

Elobixibat is a drug that has been investigated for the treatment of constipation. It remains an investigational compound and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5367035](https://www.wikidata.org/wiki/Q5367035) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:29 | 2:00 | 0/0/0 | 0/0/0 | 0/0/0 | 85,898/1,422 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/3 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Michiba_2025.pdf` | Michiba K et al., Characterization of intestinal transpor…, Drug metabolism and disposi… (2025) | pgx | 5 | [10.1016/j.dmd.2025.100075](https://doi.org/10.1016/j.dmd.2025.100075) | [40319556](https://www.ncbi.nlm.nih.gov/pubmed/40319556) | metadata signals extractable PGX data (SLC46A1) |

<sub>queue written 2026-10-04T15:28:28.512738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study analyzing transporter inhibition (IC50) and cross-reactivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Carreño_2025 | irrelevant | 0 | 0 | The study focuses on linerixibat, not elobixibat, and models the pharmacodynamics of a biomarker (C4) rather than the pharmacokinetics of the subject drug. |
| popPK | Chedid_2018 | irrelevant | 0 | 0 | The paper is a narrative review of elobixibat's mechanism and clinical efficacy for constipation, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Chedid_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical efficacy and mechanism of action but does not report specific numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response data. |
| popPK | Michiba_2025 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PGx | Michiba_2025 | not_relevant | 0 | 0 | The paper focuses on characterizing intestinal transporters in cell models for general drug absorption prediction and does not report pharmacogenomic effects on elobixibat PK/PD. |
| popPK | Wong_2013 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and mechanism of action, lacking original quantitative pharmacokinetic parameter values (CL, V, etc.) for elobixibat. |
| PD | Wong_2013 | not_relevant | 2 | 0 | The text is a qualitative review/overview of Phase II trials and mechanism of action, containing no numeric PD parameters, dose-response curves, or PK/PD model fits. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on bowel movement frequency, not a pharmacokinetic study reporting disposition parameters for elobixibat. |
| PD | Zhang_2020 | not_relevant | 3 | 2 | The paper is a model-based meta-analysis that reports aggregate effect sizes (maximal increase in bowel movements) for elobixibat, but it does not provide specific numeric PD parameters (like Emax, EC50) or an exposure-response curve for elobixibat in the provided text. |
| popPK | Zinsmeister_2013 | irrelevant | 0 | 0 | The paper is a statistical analysis of pharmacodynamic and clinical endpoints (colonic transit, stool frequency) and does not report pharmacokinetic parameters for elobixibat. |
| PD | Zinsmeister_2013 | not_relevant | 1 | 0 | The paper is a statistical review of coefficients of variation for endpoints in Phase IIA trials; it does not report specific concentration-effect or dose-response data or numeric PD parameters for elobixibat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
