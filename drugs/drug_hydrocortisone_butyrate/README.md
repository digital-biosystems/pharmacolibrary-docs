<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone butyrate&quot;}]"></div>

# hydrocortisone butyrate

- **generic name:** hydrocortisone butyrate
- **ATC codes:** `D07AB02`, `D07BB04`
- **DrugBank:** [DB14540](https://go.drugbank.com/drugs/DB14540) · **PubChem:** none
- **molar mass:** 432.557 g/mol (C25H36O6) — DrugBank
- **groups:** approved, vet_approved

## About

Hydrocortisone butyrate is a moderately potent topical corticosteroid used to treat inflammatory skin conditions. It is an approved medicine, also approved for veterinary use, and is applied to the skin as a dermatological preparation, sometimes combined with antiseptics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5954738](https://www.wikidata.org/wiki/Q5954738) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tapfumaneyi_2022_skin_blanching](drugs/drug_hydrocortisone_butyrate/pd_Tapfumaneyi_2022_skin_blanching.md) | skin blanching ← hydrocortisone butyrate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the Ema…, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydrocortisone_butyrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| distribution | mammary gland | `ABCG2` unknown | DrugBank actor |
| distribution | placenta | `ABCB1` unknown | DrugBank actor |
| distribution | testis | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inducer, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` unknown, `SLC22A8` unknown | DrugBank actor |
| excretion | liver | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| — | adrenal gland | `CYP11B1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ANXA1 (target), CYP11B2 (substrate), HSD11B2 (inhibitor), HSD3B1 (inhibitor), NR3C1 (target), SERPINA6 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:27 | 6:27 | 0/0/0 | 0/1/0 | 0/0/0 | 194,386/1,832 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 7583 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tapfumaneyi_2022.pdf` | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the Ema…, Molecular pharmaceutics (2022) | pd | 4 | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) | [35763717](https://www.ncbi.nlm.nih.gov/pubmed/35763717) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07 23:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric model development using simulated data and warfarin, with no mention of hydrocortisone_butyrate. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, not hydrocortisone butyrate. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for belantamab mafodotin, not hydrocortisone butyrate. |
| popPK | Hofman_2006 | irrelevant | 0 | 0 | The study is an immunological trial comparing tacrolimus and hydrocortisone butyrate for atopic dermatitis, reporting immune response rates rather than pharmacokinetic parameters. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not hydrocortisone_butyrate. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper describes an LLM tool for PK modeling using warfarin, theophylline, and tobramycin datasets, and does not contain any data for hydrocortisone_butyrate. |
| popPK | Nemoto_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of CIM331, and hydrocortisone butyrate is only mentioned as a concomitant topical therapy whose usage decreased. |
| popPK | Oiso_2013 | irrelevant | 0 | 0 | The paper is a case report on vitiligo repigmentation and does not contain any pharmacokinetic data for hydrocortisone butyrate. |
| popPK | Piérard-Franchimont_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing topical corticosteroids for seborrheic dermatitis and does not report pharmacokinetic parameters. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ocrelizumab, not hydrocortisone_butyrate. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of topical corticosteroid potency using vasoconstrictor assays, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Turnbull_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for scalp dermatitis and does not report any pharmacokinetic parameters for hydrocortisone butyrate. |
| popPK | Veien_1984 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing therapeutic outcomes in children, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for infliximab, not hydrocortisone_butyrate. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not hydrocortisone butyrate. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological case study using simulated data from a generic Monolix demo project (Oral1) to demonstrate uncertainty quantification metrics, and does not report pharmacokinetic parameters for hydrocortisone_butyrate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrocortisone_butyrate%5D&body=Drug%3A%20hydrocortisone_butyrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydrocortisone_butyrate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
