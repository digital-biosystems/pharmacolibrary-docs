<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final&quot;,&quot;label&quot;:&quot;Vaddady_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final_final_quizartinib_model&quot;,&quot;label&quot;:&quot;Vaddady_2024_final_final_quizartinib_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kang_2021_QTcF&quot;,&quot;label&quot;:&quot;Kang_2021 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/pd_Kang_2021_QTcF.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# quizartinib

- **generic name:** quizartinib
- **ATC codes:** `L01EX11`, `L01XE`
- **DrugBank:** [DB12874](https://go.drugbank.com/drugs/DB12874) · **PubChem:** [CID 24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392)
- **molar mass:** 560.67 g/mol (C29H32N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Quizartinib is a protein kinase inhibitor used to treat acute myeloid leukemia. It is given by mouth as a tablet. The drug is authorised in the European Union and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7272714](https://www.wikidata.org/wiki/Q7272714), [Wikipedia](https://en.wikipedia.org/wiki/Quizartinib?oldid=1360135938) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quizartinib | parent | 560.67 | C29H32N6O4S | DrugBank | [24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392) | Kang_2020, Solana-Altabella_2025, Vaddady_2024 |
| AC886 | metabolite | 576.67 | — | the paper | — | Vaddady_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub> | [Solana-Altabella_2025_mean](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_mean.md) | — | 2-compartment (no model) | 10 | Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025) | [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ median](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_median.md) | — | 2-compartment (no model) | 9 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kang_2020_reference](drugs/drug_quizartinib/Quizartinib_Kang2020_reference.md) | — | parent + metabolite (no model) | 5 (+22 cov.) | Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub> | [Vaddady_2024_final](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md) | ▶ model + simulator | 1-compartment, IV | 6 (+4 cov.) | Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024) | [10.1111/cts.70074](https://doi.org/10.1111/cts.70074) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub> | [↳ final_final_quizartinib_model](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md) | ▶ model + simulator | 1-compartment, oral | 11 (+5 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> | [Kang_2021_QTcF](drugs/drug_quizartinib/pd_Kang_2021_QTcF.md) | QTcF ← quizartinib and AC886 · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Kang D et al., Concentration-QTc analysis of quizartin…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04204-y](https://doi.org/10.1007/s00280-020-04204-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 8:29 | 1/4/0 | 1/0/0 | 0/0/0 | 178,381/46,206 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2021 | irrelevant | 1 | 0 | This is a human concentration–QTc analysis, not a disposition study, and no quizartinib PK parameter values are reported here. |
| popPK | Olíva_2026 | irrelevant | 0 | 0 | This patient-reported-outcomes trial reports no quantitative quizartinib pharmacokinetic parameters. |
| popPK | Vaddady_2024_2 | irrelevant | 2 | 0 | This human concentration–QTcF analysis reports pharmacodynamic parameters, while quizartinib disposition parameters are only referenced from another population-PK model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D&body=Drug%3A%20quizartinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 05:30 UTC</sub>
