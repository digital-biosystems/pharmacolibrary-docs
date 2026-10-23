<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07C&quot;,&quot;href&quot;:&quot;atc/N07C.md&quot;},{&quot;label&quot;:&quot;acetylleucine&quot;}]"></div>

# acetylleucine

- **generic name:** acetylleucine
- **ATC codes:** `N07CA04`
- **DrugBank:** [DB13226](https://go.drugbank.com/drugs/DB13226) · **PubChem:** not captured
- **molar mass:** 173.212 g/mol (C8H15NO3) — DrugBank
- **groups:** investigational

## About

Acetylleucine is a chemical compound classified as an antivertigo preparation, used against vertigo. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2823840](https://www.wikidata.org/wiki/Q2823840) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:54 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 200,080/1,613 | ollama / glm-5.3-flash | 12 | 7/5 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 8285 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Loiseau_1998.pdf` | Loiseau PM et al., In vitro antifilarial activity of organ…, International journal for p… (1998) | pd | 5 | [10.1016/s0020-7519(98)00072-1](https://doi.org/10.1016/s0020-7519(98)00072-1) | [9762575](https://www.ncbi.nlm.nih.gov/pubmed/9762575) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T03:54:08.882218+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bräm_2026 | irrelevant | 0 | 0 | This is a methods paper on NODE-LASSO automated model development using simulated PK data, neonatal weight, and warfarin — acetylleucine is not mentioned at all. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban, not acetylleucine; no acetylleucine parameters are reported. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban in post-TIPS patients, not acetylleucine; no acetylleucine parameters are present. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | This is a simulated popPK benchmarking framework for an unnamed Sanofi molecule, not acetylleucine; no acetylleucine PK parameters are reported. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | This is an LLM-automation methods paper modeling warfarin, theophylline, and tobramycin — acetylleucine is not studied at all. |
| popPK | Loiseau_1998 | irrelevant | 0 | 0 | In vitro antifilarial activity study of organometallic complexes; acetylleucine is only a ligand in a Pt complex, no PK parameters. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | This is a population PKPD study of ocrelizumab, not acetylleucine; no acetylleucine parameters appear. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | This is a systematic review of population-PK models for 5-fluorouracil, not acetylleucine; no acetylleucine parameters are reported. |
| PGx | Szuch_2018 | not_relevant | 0 | 0 | Paper describes MSUD (BCKDHB variants) and N-acetylleucine as a metabolic biomarker, not a pharmacogenomic effect on PK/PD of a drug. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | This is a population-PK study of subcutaneous infliximab, not acetylleucine; no acetylleucine parameters are present. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is a population-PK model library for polymyxin B, not acetylleucine; acetylleucine is not mentioned at all. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | This is a methodological UQ paper using simulated Monolix demo data for an unnamed drug; acetylleucine is not the subject and no acetylleucine PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
