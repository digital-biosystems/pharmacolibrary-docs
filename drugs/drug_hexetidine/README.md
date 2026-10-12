<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hexetidine&quot;}]"></div>

# hexetidine

- **generic name:** hexetidine
- **ATC codes:** `A01AB12`, `G01AX16`
- **DrugBank:** [DB08958](https://go.drugbank.com/drugs/DB08958) · **PubChem:** [CID 3607](https://pubchem.ncbi.nlm.nih.gov/compound/3607)
- **molar mass:** 339.6021 g/mol (C21H45N3) — DrugBank
- **groups:** approved, withdrawn

## About

Hexetidine is an antifungal and local anti-infective agent used as an antiseptic for local oral treatment and in gynecological antiinfective preparations. It has been withdrawn, though it was once an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419749](https://www.wikidata.org/wiki/Q419749) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:24 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 4,636/228 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewis_2022.pdf` | Lewis DSM et al., Aloin isoforms (A and B) selectively in…, Scientific reports (2022) | pd | 4 | [10.1038/s41598-022-06104-y](https://doi.org/10.1038/s41598-022-06104-y) | [35140265](https://www.ncbi.nlm.nih.gov/pubmed/35140265) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T01:24:13.587321+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fritzsche_1989 | irrelevant | 0 | 0 | The study focuses on fluoride clearance and retention, with hexetidine only present as a component of a combination mouthrinse and not the subject of pharmacokinetic analysis. |
| popPK | Gozalbes_1999 | irrelevant | 0 | 0 | The paper reports in-vitro antimalarial activity (IC50) for hexetidine, not pharmacokinetic disposition parameters. |
| popPK | Lewis_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on SARS-CoV-2 protease inhibition where hexetidine is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Lewis_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for aloin A and B, but explicitly states that hexetidine did not exhibit inhibitory activity against the tested enzymes, providing no numeric PD parameters for hexetidine. |
| popPK | McCoy_2000 | irrelevant | 4 | 0 | The study reports a first-order elimination rate constant for salivary retention (local compartment) rather than systemic population-PK parameters (CL, V, Q), and no specific numeric values are provided in the evidence. |
| PD | McCoy_2000 | not_relevant | 2 | 1 | The paper reports PK parameters (elimination rate constant) and mentions MICs, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) linking hexetidine concentration to antimicrobial efficacy. |
| popPK | Menghini_1980 | irrelevant | 1 | 0 | The paper is a review discussing the use of hexetidine as an antiseptic and mentions pharmacokinetics in general terms but provides no original quantitative PK parameter values. |
| popPK | Shapiro_2002 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of antimicrobial mouthrinses and does not report any pharmacokinetic parameters for hexetidine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
