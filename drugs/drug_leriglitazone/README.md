<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;leriglitazone&quot;}]"></div>

# leriglitazone

- **generic name:** leriglitazone
- **ATC codes:** `A16AX23`
- **DrugBank:** [DB15021](https://go.drugbank.com/drugs/DB15021) · **PubChem:** not captured
- **molar mass:** 372.438 g/mol (C19H20N2O4S) — DrugBank
- **groups:** investigational

## About

Leriglitazone was investigated as a treatment for adrenoleukodystrophy. It remains investigational; a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27156475](https://www.wikidata.org/wiki/Q27156475) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:14 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 38,777/720 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leriglitazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PPARG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Albassam_2015.pdf` | Albassam AA et al., Inhibitory effect of six herbal extract…, Xenobiotica; the fate of fo… (2015) | pd | 4 | [10.3109/00498254.2014.989935](https://doi.org/10.3109/00498254.2014.989935) | [25430798](https://www.ncbi.nlm.nih.gov/pubmed/25430798) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T03:13:59.281019+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albassam_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C8 inhibition by herbal extracts and does not report pharmacokinetic parameters for leriglitazone. |
| PD | Albassam_2015 | not_relevant | 0 | 0 | The paper reports in vitro CYP2C8 inhibition by herbal extracts, not a pharmacodynamic or exposure-response relationship for leriglitazone. |
| popPK | Albassam_2019 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Albassam_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of pterostilbene on in vitro drug metabolizing enzyme activity and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| PGx | Albassam_2019 | not_relevant | 0 | 0 | The paper investigates the in vitro effect of pterostilbene on CYP and UGT enzyme activities using pioglitazone as a substrate, but does not report pharmacogenomic (gene variant) effects on leriglitazone. |
| popPK | Almeida_2011 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics and bioequivalence of pioglitazone, not leriglitazone. |
| PGx | Cavestro_2026 | not_relevant | 0 | 0 | The paper reports the therapeutic efficacy of leriglitazone in a disease model, but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Chinnalalaiah_2017 | irrelevant | 0 | 0 | The study concerns pioglitazone, not leriglitazone. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metoprolol, not leriglitazone. |
| popPK | Patel_2011 | irrelevant | 0 | 0 | The paper studies saxagliptin and its interactions with metformin, glyburide, and pioglitazone, but does not involve leriglitazone. |
| PD | Patel_2011 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic interactions of saxagliptin with other drugs and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| popPK | Rodríguez-Pascau_2021 | irrelevant | 0 | 0 | The paper is a mechanistic/preclinical study focused on therapeutic efficacy in disease models, with no report of pharmacokinetic parameters (CL, V, etc.) for leriglitazone. |
| PGx | Traver_2024 | not_relevant | 0 | 0 | The paper describes the development of a PBPK model and dose selection for children based on age/weight ontogeny, but does not report a pharmacogenomic effect of a specific gene variant on PK or PD parameters. |
| popPK | Vaidyanathan_2008 | irrelevant | 0 | 0 | The study investigates the drug aliskiren and its interactions with metformin, pioglitazone, and fenofibrate; it does not involve leriglitazone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
