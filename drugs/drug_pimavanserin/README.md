<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;pimavanserin&quot;}]"></div>

# pimavanserin

- **generic name:** pimavanserin
- **ATC codes:** `N05AX17`
- **DrugBank:** [DB05316](https://go.drugbank.com/drugs/DB05316) · **PubChem:** [CID 10071196](https://pubchem.ncbi.nlm.nih.gov/compound/10071196)
- **molar mass:** 427.564 g/mol (C25H34FN3O2) — DrugBank
- **groups:** approved, investigational

## About

Pimavanserin is an atypical antipsychotic used to treat Parkinson’s disease psychosis. The medication is given by mouth in tablet or capsule form. It is authorized for use as a brand-name and generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7194603](https://www.wikidata.org/wiki/Q7194603), [Wikipedia](https://en.wikipedia.org/wiki/Pimavanserin?oldid=1383462804) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pimavanserin | parent | 427.564 | C25H34FN3O2 | DrugBank | [10071196](https://pubchem.ncbi.nlm.nih.gov/compound/10071196) | Darwish_2023 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Darwish_2023_reference](drugs/drug_pimavanserin/Pimavanserin_Darwish2023_reference.md) | — | 1-compartment (no model) | 2 | Darwish M et al., Population Pharmacokinetic Modeling and…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2315](https://doi.org/10.1002/jcph.2315) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Darwish_2022_NSA_16](drugs/drug_pimavanserin/pd_Darwish_2022_NSA_16.md) | Negative Symptom Assessment 16 ← pimavanserin · direct sigmoid Emax (Hill) effect | — | Darwish M et al., Pimavanserin Exposure-Response Analyses…, Journal of clinical psychop… (2022) | [10.1097/JCP.0000000000001611](https://doi.org/10.1097/JCP.0000000000001611) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Darwish_2022_PSP](drugs/drug_pimavanserin/pd_Darwish_2022_PSP.md) | Personal and Social Performance scale ← pimavanserin · direct linear effect | — | Darwish M et al., Pimavanserin Exposure-Response Analyses…, Journal of clinical psychop… (2022) | [10.1097/JCP.0000000000001611](https://doi.org/10.1097/JCP.0000000000001611) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Darwish_2022_CGI_SCH_S](drugs/drug_pimavanserin/pd_Darwish_2022_CGI_SCH_S.md) | Clinical Global Impression of Schizophrenia–Severity ← pimavanserin · categorical (graded) response model | — | Darwish M et al., Pimavanserin Exposure-Response Analyses…, Journal of clinical psychop… (2022) | [10.1097/JCP.0000000000001611](https://doi.org/10.1097/JCP.0000000000001611) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:36 | 0:04 | 0/1/0 | 3/0/0 | 0/0/0 | 4,104/154 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Darwish_2022 | relevant | 5 | 1 | The paper describes a population PK model for pimavanserin (1-compartment, CL/F, V/F) and reports some descriptive PK stats (half-life, V/F), but the final population parameter estimates are explicitly located in Table S2 (supplementary material) which is not provided. |
| PGx | Darwish_2022 | not_relevant | 0 | 0 | The paper reports exposure-response relationships and population PK modeling but does not investigate the impact of any gene variants, genotypes, or phenotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Darwish_2023 | relevant | 9 | 4 | The paper describes a population PK model and provides simulated exposure metrics (AUC, Cmax) for pediatric dose selection, but specific model parameter estimates (CL, V, ka, Q) are not explicitly listed in the provided text. |
| PGx | Darwish_2023 | not_relevant | 0 | 0 | The paper focuses on age- and weight-based PK modeling for pediatric dosing and does not report any genetic variants or pharmacogenomic effects. |
| popPK | Darwish_2023_2 | relevant | 8 | 0 | The paper uses population-PK (popPK) parameters to perform exposure-response modeling, but the specific numeric values for PK parameters (CL, V, etc.) are not reported in the provided text, which focuses on efficacy outcomes and Cmax trends. |
| PGx | Darwish_2023_2 | not_relevant | 0 | 0 | The paper describes exposure-response modeling for pimavanserin but does not report any pharmacogenomic effects or associations with genetic variants. |
| popPK | Dirks_2022 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes for pimavanserin in major depressive disorder, with no pharmacokinetic parameters or disposition data. |
| PGx | Dirks_2022 | not_relevant | 0 | 0 | The paper reports a general clinical trial for efficacy and safety, with no mention of genetic variants, genotyping, or pharmacogenomic subgroup analyses. |
| popPK | Evidente_2024 | irrelevant | 0 | 0 | Clinical efficacy/outcomes study of pimavanserin in Parkinson's disease psychosis with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Hemine_2020 | irrelevant | 0 | 0 | The study focuses on environmental chemistry (adsorption/degradation in wastewater) and does not report pharmacokinetic parameters for pimavanserin. |
| PGx | Hemine_2020 | not_relevant | 0 | 0 | The paper focuses on environmental removal of the drug from wastewater using adsorbents, not pharmacogenomics. |
| popPK | Ridler_2025 | irrelevant | 0 | 0 | This study reports pharmacodynamic receptor occupancy data (ED50/EC50) in non-human primates, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Ridler_2025 | not_relevant | 0 | 0 | The paper reports pharmacodynamics in non-human primates without any mention of genetic variants or pharmacogenomic influences. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpimavanserin%5D&body=Drug%3A%20pimavanserin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pimavanserin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:36 UTC</sub>
