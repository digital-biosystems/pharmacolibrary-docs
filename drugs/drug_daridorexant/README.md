<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;}]"></div>

# daridorexant

- **generic name:** daridorexant
- **ATC codes:** `N05CJ03`
- **DrugBank:** [DB15031](https://go.drugbank.com/drugs/DB15031) · **PubChem:** none
- **molar mass:** 450.93 g/mol (C23H23ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Daridorexant is an orexin receptor antagonist used to treat insomnia. It is taken orally. It is authorized in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q55112806](https://www.wikidata.org/wiki/Q55112806), [Wikipedia](https://en.wikipedia.org/wiki/Daridorexant?oldid=1368786208) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daridorexant | parent | 450.93 | C23H23ClN6O2 | DrugBank | — | Krause_2023 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Krause_2023 · V1</text><circle cx="247.5" cy="30.0" r="4" fill="#ef6c00"><title>Krause_2023 · V1: 14.6 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Krause_2023 · V1</text><circle cx="325.6" cy="46.0" r="4" fill="#ef6c00"><title>Krause_2023 · V1: 24.4 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q65, Q95 — no SI value to build from</sub> | [Krause_2023_all_phase_i_data_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_all_phase_i_data_estimate.md) | — | 2-compartment (no model) | 11 (+6 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub> | [↳ phase_i_data_intense_pk_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_phase_i_data_intense_pk_estimate.md) | — | 2-compartment (no model) | 9 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [↳ all_data_final_model_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_all_data_final_model_estimate.md) | — | 2-compartment (no model) | 10 (+7 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ food](drugs/drug_daridorexant/Daridorexant_Krause2023_food.md) | — | 1-compartment (no model) | 0 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:50 | 0:05 | 2/2/0 | 0/0/0 | 0/0/0 | 4,581/166 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Krause_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic model for daridorexant based on demographic and physiological covariates (weight, age, food status, etc.), but does not investigate or report the impact of any specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ufer_2022 | irrelevant | 2 | 0 | The study is an abuse potential (pharmacodynamic) study; the abstract only qualitatively states PK was consistent with earlier trials without reporting any quantitative PK parameters (CL, V, half-life, etc.). |
| PGx | Ufer_2022 | not_relevant | 0 | 0 | The study assesses abuse potential in a general population and does not report any pharmacogenomic analysis or genotype-stratified PK/PD results. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaridorexant%5D&body=Drug%3A%20daridorexant%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daridorexant/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 12:26 UTC</sub>
