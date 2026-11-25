<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;asciminib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asciminib_Darstein2025_reference&quot;,&quot;label&quot;:&quot;Darstein_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asciminib/Asciminib_Darstein2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# asciminib

- **generic name:** asciminib
- **ATC codes:** `L01EA06`
- **DrugBank:** [DB12597](https://go.drugbank.com/drugs/DB12597) · **PubChem:** [CID 72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228)
- **molar mass:** 449.84 g/mol (C20H18ClF2N5O3) — DrugBank
- **groups:** approved, investigational

## About

Asciminib is a protein kinase inhibitor used to treat chronic myeloid leukemia. It is given by mouth in tablet form. It is authorised in the European Union for this condition.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27074535](https://www.wikidata.org/wiki/Q27074535), [Wikipedia](https://en.wikipedia.org/wiki/Asciminib?oldid=1340735742) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asciminib | parent | 449.84 | C20H18ClF2N5O3 | DrugBank | [72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228) | Darstein_2025 |

## Start here

> **Darstein_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with chronic myeloid leukemia. [Run it in the simulator](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md?tab=Simulation) · [record](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Darstein_2025_reference](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Darstein C et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04755-y](https://doi.org/10.1007/s00280-025-04755-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Combes_2022_BCR_ABL1](drugs/drug_asciminib/pd_Combes_2022_BCR_ABL1.md) | BCR::ABL1 transcript levels ← asciminib · disease-progression model | — | Combes FP et al., Exposure-Efficacy Analysis of Asciminib…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2699](https://doi.org/10.1002/cpt.2699) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Combes_2022_BCR_ABL1_2](drugs/drug_asciminib/pd_Combes_2022_BCR_ABL1_2.md) | BCR::ABL1 transcript levels (T315I mutation subgroup) ← asciminib · direct Emax (saturable) effect | — | Combes FP et al., Exposure-Efficacy Analysis of Asciminib…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2699](https://doi.org/10.1002/cpt.2699) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:45 | 0:03 | 1/0/0 | 2/0/0 | 0/0/0 | 4,250/177 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Combes_2022 | irrelevant | 2 | 0 | The study focuses on an exposure-efficacy/PD model relating asciminib exposure to BCR::ABL1 transcript levels, not a standard population-PK model reporting specific disposition parameters (CL, V, ka) for the drug itself in the provided evidence. |
| PGx | Combes_2022 | not_relevant | 0 | 0 | The paper analyzes exposure-efficacy relationships and the impact of the T315I target mutation on drug effect, but does not report any genetic polymorphism (e.g., in CYPs or transporters) affecting the PK or PD parameters of asciminib. |
| popPK | Combes_2024 | relevant | 9 | 2 | Human PopPK analysis reports AUC and relative Cmax/Cmin, but detailed disposition-model values are referred to a prior publication. |
| PGx | Darstein_2025 | not_relevant | 0 | 0 | The study evaluates standard demographic and organ function covariates (weight, age, ethnicity, renal/hepatic function) rather than genetic variants. |
| popPK | Li_2022 | relevant | 10 | 0 | The paper describes a population PK model for asciminib, but the abstract lacks specific numeric parameter values (CL, V, ka) which are typically found in the results section or supplementary tables not provided in the evidence. |
| PGx | Li_2022 | not_relevant | 2 | 5 | The paper reports population pharmacokinetics and identifies non-genetic covariates (weight, renal function), noting that T315I mutation status had no statistically significant impact on clearance. |
| popPK | Li_2022_2 | relevant | 5 | 1 | The text describes a population PK model including clearance and absorption rate, but no numeric parameter values are present in the evidence. |
| PGx | Li_2022_2 | not_relevant | 0 | 0 | The paper reports covariate analysis (body weight, aGFR, formulation) on PK parameters but contains no information regarding gene variants or genotypes. |
| popPK | Sy_2025 | irrelevant | 1 | 0 | The study analyzes the relationship between asciminib exposure (AUC, Cmin) and efficacy/safety, but it does not report the underlying pharmacokinetic disposition parameters (such as clearance, volume, or half-life) required for a PK model. |
| PGx | Sy_2025 | not_relevant | 0 | 0 | The paper reports population exposure-response relationships but contains no pharmacogenomic data or gene variants. |
| popPK | Sy_2025_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of nilotinib, with asciminib mentioned only in the conclusion as a potential candidate for future extrapolation. |
| PGx | Sy_2025_2 | not_relevant | 0 | 0 | The paper focuses on nilotinib PK/PD modeling in CML and mentions asciminib only in the context of extrapolating responses, with no data or analysis of asciminib PK/PD parameters or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basciminib%5D&body=Drug%3A%20asciminib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asciminib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 18:43 UTC</sub>
