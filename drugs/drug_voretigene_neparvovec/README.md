<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;voretigene neparvovec&quot;}]"></div>

# voretigene neparvovec

- **generic name:** voretigene neparvovec
- **ATC codes:** `S01XA27`
- **DrugBank:** [DB13932](https://go.drugbank.com/drugs/DB13932) · **PubChem:** none
- **groups:** approved, investigational

## About

Voretigene neparvovec is an ophthalmological agent used to treat Leber congenital amaurosis and retinitis pigmentosa. The medication is authorised in the European Union.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [High_2025_11_cis_ROL](drugs/drug_voretigene_neparvovec/pd_High_2025_11_cis_ROL.md) | 11-cis-ROL biomarker turnover ← AAV2-hRPE65v2 | — | High KA et al., Validation of a quantitative cell-based…, Molecular therapy. Methods… (2025) | [10.1016/j.omtm.2025.101423](https://doi.org/10.1016/j.omtm.2025.101423) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:26 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,761/188 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bommakanti_2024 | irrelevant | 0 | 0 | The paper analyzes the progression of chorioretinal atrophy (a safety/toxicity outcome) and does not report pharmacokinetic parameters like clearance, volume, or half-life for voretigene neparvovec. |
| PGx | Bommakanti_2024 | not_relevant | 0 | 0 | The paper describes the incidence and growth rates of chorioretinal atrophy after voretigene neparvovec administration, but does not report a pharmacogenomic effect on a PK or PD parameter. |
| popPK | Galieva_2023 | irrelevant | 0 | 0 | The paper is an in vitro transcriptomic study of AAV9 vectors carrying AIPL1 (not voretigene neparvovec) in ARPE-19 cells, and it reports no pharmacokinetic parameters or disposition data. |
| PGx | Galieva_2023 | not_relevant | 0 | 0 | The paper reports in vitro RNA-seq gene expression changes in cells transduced with a novel AAV9-AIPL1 vector, not pharmacokinetic or pharmacodynamic parameters of voretigene neparvovec. |
| popPK | Gupta_2021 | irrelevant | 0 | 0 | The paper is a review of gene therapy vector development challenges and does not report pharmacokinetic parameters for voretigene_neparvovec. |
| PGx | Gupta_2021 | not_relevant | 0 | 0 | The paper is a general review on gene therapy vector development challenges and does not report any pharmacogenomic effects on PK or PD parameters for voretigene neparvovec. |
| popPK | High_2025 | irrelevant | 0 | 0 | The paper describes the validation of an in-vitro potency assay for the gene therapy vector, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | High_2025 | not_relevant | 0 | 0 | The paper describes the validation of a cell-based potency assay for the gene therapy Luxturna, focusing on assay characteristics like linearity and precision, rather than reporting pharmacogenomic effects on PK or PD parameters. |
| popPK | Lloyd-Williams_2021 | irrelevant | 0 | 0 | The paper is a systematic review of economic evaluations and cost-effectiveness of advanced therapy medicinal products, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, Q, ka, etc.) for voretigene neparvovec. |
| PGx | Lloyd-Williams_2021 | not_relevant | 0 | 0 | The paper is a systematic review of economic evaluations and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The paper describes an in vitro functional assay for RPE65 protein pathogenicity and clinical case reports, not a pharmacokinetic study with quantitative disposition parameters for voretigene neparvovec. |
| PGx | Yang_2019 | not_relevant | 0 | 0 | The paper reports on the functional assay of RPE65 protein variants to determine disease pathogenicity, not the effect of genotypes on the pharmacokinetic or pharmacodynamic parameters of the drug voretigene neparvovec itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvoretigene_neparvovec%5D&body=Drug%3A%20voretigene_neparvovec%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_voretigene_neparvovec/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
