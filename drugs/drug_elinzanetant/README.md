<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;elinzanetant&quot;}]"></div>

# elinzanetant

- **generic name:** elinzanetant
- **ATC codes:** `G02CX07`
- **DrugBank:** [DB18968](https://go.drugbank.com/drugs/DB18968) · **PubChem:** not captured
- **molar mass:** 668.657 g/mol (C33H35F7N4O3) — DrugBank
- **groups:** approved, investigational

## About

Elinzanetant is used to treat hot flashes associated with menopause, including in women with breast cancer. It is authorised in the European Union as a recently approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q108453435](https://www.wikidata.org/wiki/Q108453435) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| elinzanetant | parent | 668.657 | C33H35F7N4O3 | DrugBank | — | Willmann_2024 |
| M18/21 | metabolite | — (mass units only) | — | — | — | — |
| M27 | metabolite | — (mass units only) | — | — | — | — |
| M30/34 | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 7.26 | L/h | 7.26 L/h | healthy adults and women with vasomotor symptoms | 366 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willmann_2024_reference](drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference.md) |
| V | V | 23.7 | L | 23.7 L | healthy adults and women with vasomotor symptoms | 366 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willmann_2024_reference](drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference.md) |
| ka | kabs | 2.37 | 1/h | 2.37 1/h | healthy adults and women with vasomotor symptoms | 366 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willmann_2024_reference](drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Willmann_2024_reference](drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference.md) | model (no simulator) | 4-compartment general linear | 20 | Willmann S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willmann_2024_NK_1_RO](drugs/drug_elinzanetant/pd_Willmann_2024_NK_1_RO.md) | NK-1 receptor occupancy ← elinzanetant · direct Emax (saturable) effect | — | Willmann S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willmann_2024_NK_3_RO](drugs/drug_elinzanetant/pd_Willmann_2024_NK_3_RO.md) | NK-3 receptor occupancy ← elinzanetant · direct Emax (saturable) effect | — | Willmann S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:17 | 1:56 | 0/0/1 | 1/0/0 | 0/0/0 | 74,353/7,258 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 08:15 UTC</sub>
