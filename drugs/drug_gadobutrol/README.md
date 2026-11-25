<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadobutrol&quot;}]"></div>

# gadobutrol

- **generic name:** gadobutrol
- **ATC codes:** `V08CA09`
- **DrugBank:** [DB06703](https://go.drugbank.com/drugs/DB06703) · **PubChem:** [CID 70678987](https://pubchem.ncbi.nlm.nih.gov/compound/70678987)
- **molar mass:** 604.72 g/mol (C18H31GdN4O9) — DrugBank
- **groups:** approved, investigational

## About

Gadobutrol is a gadolinium-based contrast agent used for magnetic resonance imaging. It is administered intravenously as an injection solution. It is used in Canada and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2570844](https://www.wikidata.org/wiki/Q2570844), [Wikipedia](https://en.wikipedia.org/wiki/Gadobutrol?oldid=1382902349) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadobutrol | parent | 604.72 | C18H31GdN4O9 | DrugBank | [70678987](https://pubchem.ncbi.nlm.nih.gov/compound/70678987) | Eide_2023, Hahn_2009, Hovd_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Eide_2023_sleep_deprivation_group](drugs/drug_gadobutrol/Gadobutrol_Eide2023_sleep_deprivation_group.md) | — | 1-compartment (no model) | 5 | Eide PK et al., Mechanisms behind changes of neurodegen…, Brain communications (2023) | [10.1093/braincomms/fcad343](https://doi.org/10.1093/braincomms/fcad343) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ sleep_group](drugs/drug_gadobutrol/Gadobutrol_Eide2023_sleep_group.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Hahn_2009_reference](drugs/drug_gadobutrol/Gadobutrol_Hahn2009_reference.md) | — | 1-compartment (no model) | 3 | Hahn G et al., Pharmacokinetics and safety of gadobutr…, Investigative radiology (2009) | [10.1097/RLI.0b013e3181bfe2d2](https://doi.org/10.1097/RLI.0b013e3181bfe2d2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Hovd_2022_reference](drugs/drug_gadobutrol/Gadobutrol_Hovd2022_reference.md) | — | 1-compartment (no model) | 1 | Hovd MH et al., Population pharmacokinetic modeling of…, Fluids and barriers of the… (2022) | [10.1186/s12987-022-00352-w](https://doi.org/10.1186/s12987-022-00352-w) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:18 | 0:08 | 0/4/0 | 0/0/0 | 0/0/0 | 3,961/152 | einfracz / qwen3.8-27b | 11 | 1/7 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 49 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aumiller_2024 | irrelevant | 0 | 0 | The study uses gadobutrol as an ingredient to create tissue phantoms for MRI/optical property characterization, not as a subject drug for pharmacokinetic analysis. |
| PGx | Aumiller_2024 | not_relevant | 0 | 0 | The study investigates physical tissue properties (optical and NMR) in phantoms and porcine brain for photodynamic therapy, not the pharmacokinetics or pharmacodynamics of gadobutrol in relation to genetic variants. |
| popPK | Backhaus_2020 | irrelevant | 2 | 0 | Gadobutrol is used as an imaging contrast agent, but no quantitative disposition parameters for it are reported. |
| popPK | Blaszczyk_2017 | irrelevant | 1 | 0 | The study focuses on MRI T1 relaxation mapping and partition coefficients rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Blaszczyk_2017 | not_relevant | 0 | 0 | The paper investigates the impact of MRI spatial resolution and gadobutrol dosage on myocardial T1 relaxation times, with no mention of genetic variants or pharmacogenomic effects. |
| popPK | Eide_2026 | irrelevant | 2 | 0 | Gadobutrol is used as a CSF tracer for brain imaging, and the text explicitly states the PK model for gadobutrol was established in previous studies [25, 29], meaning this paper does not report the quantitative PK parameters for gadobutrol itself, but rather for iodixanol. |
| PGx | Eide_2026 | not_relevant | 0 | 0 | The paper investigates population pharmacokinetics of gadobutrol to measure brain fluid clearance in a clinical cohort but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Guenther_2025 | irrelevant | 3 | 2 | The study's primary subject is gadoquatrane, and gadobutrol is represented by a lanthanide analog (Dy-butrol) used as a comparator, with specific quantitative PK parameters for gadobutrol itself not explicitly provided in the evidence (likely in supplementary tables). |
| PGx | Guenther_2025 | not_relevant | 0 | 0 | The study is a preclinical PK analysis in cynomolgus monkeys comparing gadoquatrane to analogs, with no evaluation of genetic variants or pharmacogenomic effects on gadobutrol. |
| popPK | Hadizadeh_2010 | irrelevant | 0 | 0 | This is an MRI image quality comparison study that does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Hadizadeh_2010 | not_relevant | 0 | 0 | The paper compares two different MRI contrast agents for imaging quality and does not investigate genetic variants or pharmacogenomic effects on gadobutrol. |
| PGx | Hahn_2009 | not_relevant | 0 | 0 | The study reports population pharmacokinetics based on age and body weight, with no assessment of genetic variants or genotypes. |
| popPK | Hao_2024 | irrelevant | 0 | 0 | The paper is a review of gadopiclenol where gadobutrol serves only as a comparator for efficacy, with no quantitative pharmacokinetic parameters reported for gadobutrol itself. |
| PGx | Hao_2024 | not_relevant | 0 | 0 | The paper is a review describing the efficacy and safety of gadopiclenol compared to gadobutrol, and does not report any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Heiland_1997 | irrelevant | 1 | 0 | This is a perfusion MRI imaging study in a rat stroke model that uses gadobutrol as a contrast agent to assess imaging sensitivity, not a pharmacokinetic study reporting disposition parameters like clearance, volume of distribution, or compartmental model parameters. |
| PGx | Heiland_1997 | not_relevant | 0 | 0 | The study examines the effects of dose and concentration on MRI signal in a rat stroke model and does not involve genetic variants or pharmacogenomics. |
| popPK | Kunze_2016 | relevant | 10 | 3 | The paper describes a population PK study of gadobutrol using a 2-compartment model, but the specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided evidence text. |
| PGx | Kunze_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of gadobutrol in pediatric patients but does not investigate or report the impact of any gene variant, genotype, or phenotype on these parameters. |
| popPK | Laader_2018 | irrelevant | 0 | 0 | The study is an MRI feasibility study focused on image quality and does not report pharmacokinetic parameters for gadobutrol. |
| PGx | Laader_2018 | not_relevant | 0 | 0 | The paper is a feasibility study of imaging techniques and does not analyze the effect of gene variants on the pharmacokinetics or pharmacodynamics of gadobutrol. |
| popPK | Segeroth_2023 | irrelevant | 2 | 0 | Gadobutrol is an MRI tracer for brain solute-clearance modeling, and no numeric gadobutrol disposition parameters are shown (model results are only referenced in figures). |
| popPK | Spath_2021 | irrelevant | 0 | 0 | Gadobutrol is used only for LGE, and the reported kinetic values are for manganese. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadobutrol%5D&body=Drug%3A%20gadobutrol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadobutrol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:16 UTC</sub>
