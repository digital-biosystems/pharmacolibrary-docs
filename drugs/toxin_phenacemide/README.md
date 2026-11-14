<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenacemide&quot;}]"></div>

# Phenacemide

- **generic name:** Phenacemide
- **T3DB:** [T3D2990](http://www.t3db.ca/toxins/T3D2990) · **DrugBank:** [DB01121](https://go.drugbank.com/drugs/DB01121) · **PubChem:** [CID 4753](https://pubchem.ncbi.nlm.nih.gov/compound/4753)
- **groups:** approved

## About

Phenacemide is only found in individuals that have used or taken this drug. It is used to control certain seizures in the treatment of epilepsy. This medicine acts on the central nervous system (CNS) to reduce the number and severity of seizures.Phenacemide binds to and blocks neuronal sodium channels or voltage sensitive calcium channels. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** almost completely absorbed.
- **Sources and uses:** Used to control certain seizures in the treatment of epilepsy.
- **Mechanism of toxicity:** Phenacemide binds to and blocks neuronal sodium channels or voltage sensitive calcium channels. This blocks or suppresses neuronal depolarization and hypersynchronization. …
- **Health effects:** May cause a potentially dangerous rash that may develop into Stevens Johnson syndrome, an extremely rare but potentially fatal skin disease.
- **Acute toxicity:** LD50: 987 mg/kg (Oral, Mouse)
LD50: 2500 mg/kg (Oral, Rabbit)
LD50: 1600 mg/kg (Oral, Rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2990">T3DB T3D2990</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 63-98-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:183000">ChEBI 183000</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenacemide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 10:38 | 6:04 | 0/0/0 | 0/0/0 | 0/0/0 | 140,229/3,531 | einfracz / qwen3.8-flash-next | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 16 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cahen_1994 | irrelevant | 2 | 0 | The paper focuses on creatinine interference and drug-induced creatinine changes, reporting no quantitative toxicokinetic parameters for phenacemide itself. |
| popPK | Cederbaum_2023 | irrelevant | 0 | 0 | The paper concerns sodium phenylbutyrate and its metabolites (phenylacetate, phenylbutyrate), not phenacemide; phenacemide is not mentioned. |
| popPK | Chen_2000 | irrelevant | 0 | 0 | The paper discusses the treatment of hyperammonemia with sodium phenylacetate, not phenacemide, and contains no phenacemide kinetic parameters. |
| popPK | Duggan_1986 | irrelevant | 1 | 1 | The paper reports clinical outcomes (creatinine elevation) and clearance effects on a biomarker, but does not report quantitative toxicokinetic parameters (such as half-life, Vd, or clearance of phenacemide itself) for the substance phenacemide. |
| popPK | Endo_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for sodium phenylacetate and sodium benzoate, which are chemically and pharmacologically distinct from phenacemide. |
| popPK | Fabro_1982 | irrelevant | 0 | 0 | The paper reports teratogenic potency and hazard indices (RTI, tD05) for phenacemide but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Longo_2021 | irrelevant | 0 | 0 | The paper investigates glycerol phenylbutyrate (GPB) and its metabolites (PBA, PAA, PAGN), not phenacemide. |
| popPK | MacArthur_2004 | irrelevant | 0 | 0 | The paper studies sodium phenylacetate and sodium benzoate, not phenacemide; phenacemide is not mentioned. |
| popPK | Nakajima_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for 4-phenylbutyrate (PB/NaPB), not phenacemide, which does not appear in the text. |
| popPK | Ono_1976 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics (behavioral and anticonvulsant effects) of clonazepam, using phenacemide only as a comparator for potency ratios and LD50; no toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for phenacemide are reported. |
| popPK | Simell_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for benzoate and phenylacetate, not phenacemide. |
| popPK | Wada_2026 | irrelevant | 0 | 0 | The paper studies glycerol phenylbutyrate and its metabolites, not phenacemide; phenacemide is not mentioned as a substance of interest. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of Phenylacetic Acid (PAA) and its conjugate Phenylacetylglutamine (PAGN) derived from Ornithine Phenylacetate (L-OPA), not Phenacemide. |
| popPK | van_2017 | irrelevant | 0 | 0 | The paper investigates sodium benzoate and sodium phenylacetate in dogs; phenacemide is not mentioned or studied. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenacemide%5D&body=Drug%3A%20phenacemide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenacemide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
