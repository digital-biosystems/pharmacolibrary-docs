<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;datopotamab deruxtecan&quot;}]"></div>

# datopotamab deruxtecan

- **generic name:** datopotamab deruxtecan
- **ATC codes:** `L01FX35`
- **DrugBank:** [DB16410](https://go.drugbank.com/drugs/DB16410) · **PubChem:** none
- **groups:** approved, investigational

## About

Datopotamab deruxtecan is an antibody-drug conjugate used to treat breast cancer and non-small-cell lung cancer. It is authorised in the European Union and remains under investigation for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| DXd | metabolite | 493.5 | — | the paper | — | Hong_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q1, Q66, Q364, Q47 — no SI value to…</sub> | [Hong_2025_reference](drugs/drug_datopotamab_deruxtecan/DatopotamabDeruxtecan_Hong2025_reference.md) | — | parent + metabolite (no model) | 9 (+14 cov.) | Hong Y et al., Population Pharmacokinetic Analysis of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70118](https://doi.org/10.1002/psp4.70118) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_OS](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OS.md) | Overall survival (OS) ← Dato‐DXd AUC1 · time-to-event model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_OSE_G2](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OSE_G2.md) | Ocular surface event ≥ Grade 2 ← Dato‐DXd Cavg · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_OSE_any](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OSE_any.md) | Ocular surface event any grade ← Dato‐DXd Cavg · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_Stomatitis_G2](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_Stomatitis_G2.md) | Oral mucositis/stomatitis ≥ Grade 2 ← Dato‐DXd AUC1 · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_Stomatitis_any](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_Stomatitis_any.md) | Oral mucositis/stomatitis any grade ← Dato‐DXd Cavg · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_TEAE_di](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_TEAE_di.md) | TEAE leading to dose interruption ← Dato‐DXd AUC1 · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_TEAE_dr](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_TEAE_dr.md) | TEAE leading to dose reduction ← Dato‐DXd AUC1 · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=datopotamab_deruxtecan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCC1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TACSTD2 (antibody), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:29 | 9:18 | 1/0/0 | 1/0/0 | 0/0/0 | 257,394/54,504 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lu_2024 | relevant | 9 | 2 | The paper describes a population pharmacokinetic (PopPK) model for datopotamab deruxtecan and its payload, which is highly relevant, but the actual numeric parameter estimates (CL, V, etc.) are explicitly stated to be in Tables S6 and S7, which are not provided in the evidence. |
| popPK | Shia_2025 | relevant | 8 | 3 | The paper provides a comparative preclinical PK study for datopotamab deruxtecan (Dato-DXd) in rats and mice, reporting specific clearance and exposure values, but detailed parameter tables are largely in supplementary material or figures. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdatopotamab_deruxtecan%5D&body=Drug%3A%20datopotamab_deruxtecan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_datopotamab_deruxtecan/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 13:25 UTC</sub>
