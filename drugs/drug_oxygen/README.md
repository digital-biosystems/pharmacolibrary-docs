<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;oxygen&quot;}]"></div>

# oxygen

- **generic name:** oxygen
- **ATC codes:** `V03AN01`
- **DrugBank:** [DB09140](https://go.drugbank.com/drugs/DB09140) · **PubChem:** [CID 977](https://pubchem.ncbi.nlm.nih.gov/compound/977)
- **molar mass:** 31.9988 g/mol (O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Oxygen is a medical gas administered for therapeutic purposes. It is given by inhalation in gas or liquid forms. It is approved and widely used as a therapeutic agent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q629](https://www.wikidata.org/wiki/Q629), [Wikipedia](https://en.wikipedia.org/wiki/Oxygen?oldid=1382172978) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lavrinenko_2022_HbO2](drugs/drug_oxygen/pd_Lavrinenko_2022_HbO2.md) | degree of saturation of hemoglobin by oxygen (oxyhemoglobin dissociation curve) ← oxygen · direct sigmoid Emax (Hill) effect | — | Lavrinenko IA et al., A New Model of Hemoglobin Oxygenation, Entropy (Basel, Switzerland) (2022) | [10.3390/e24091214](https://doi.org/10.3390/e24091214) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:05 | 0:04 | 0/0/0 | 0/1/0 | 0/0/0 | 3,808/149 | einfracz / qwen3.8-27b | 8 | 2/6 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 2603 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2022 | irrelevant | 0 | 0 | This is a hemodynamic/compartmental model of the Fontan circulation with oxygen transport, not a pharmacokinetic study of oxygen as a drug; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Ahn_2023 | irrelevant | 0 | 0 | This is a materials-science paper on alginate multicompartment capsules; oxygen appears only as a gas byproduct of H2O2 decomposition, with no PK parameters. |
| popPK | Arulrajah_2025 | irrelevant | 0 | 0 | This is a review of scale-down bioreactors in bioprocessing; oxygen appears only as dissolved oxygen gradients in fermentation, with no pharmacokinetic parameters for oxygen as a drug. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is an in-vitro ion channel biophysics study of TRPV1/TRPA1 modification by singlet oxygen; no pharmacokinetic parameters for oxygen are reported. |
| popPK | Drábková_2007 | irrelevant | 0 | 0 | The paper discusses photodynamic therapy and toxicity of photosensitizers to algae, not the pharmacokinetics of oxygen as a drug. |
| PGx | Drábková_2007 | not_relevant | 0 | 0 | The paper investigates the toxic effects of photosensitizers and reactive oxygen species on cyanobacteria and algae, with no mention of human gene variants or pharmacokinetic/pharmacodynamic parameters of oxygen as a drug. |
| popPK | Fortier_2023 | irrelevant | 0 | 0 | This study reports magnetic resonance relaxation rates (R1) for oxygenation mapping, not pharmacokinetic disposition parameters like clearance, volume, or half-life for oxygen as a drug. |
| PGx | Fortier_2023 | not_relevant | 0 | 0 | The paper describes an MRI technique (Fat DESPOT) for measuring tissue oxygenation and its sensitivity to oxygen partial pressure, but does not investigate pharmacogenomic variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | The paper is a review of paraquat poisoning, not a pharmacokinetic study of oxygen as the subject drug. |
| PGx | Gawarammana_2011 | not_relevant | 0 | 0 | The paper discusses paraquat toxicokinetics and management, not the pharmacogenetics of oxygen. |
| popPK | Goutelle_2008 | irrelevant | 0 | 0 | The paper is a theoretical review of the Hill equation's mathematical properties and does not report any quantitative pharmacokinetic disposition parameters for oxygen. |
| PGx | Goutelle_2008 | not_relevant | 0 | 0 | The paper is a mathematical review of the Hill equation and does not report any pharmacogenomic effects or clinical data. |
| popPK | Gudelunas_2024 | irrelevant | 0 | 0 | This is a study on pulse oximeter diagnostic accuracy and bias in different skin tones, not a pharmacokinetic study of oxygen disposition parameters. |
| PGx | Gudelunas_2024 | not_relevant | 0 | 0 | The study analyzes pulse oximetry bias in different skin tones, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory physiology editorial on gas exchange (shunt/dead space), not a pharmacokinetic study of oxygen disposition; no CL, V, or PK model parameters for oxygen are reported. |
| popPK | Kietzmann_2019 | irrelevant | 0 | 0 | The paper is a review of cellular redox mechanisms and does not report any quantitative pharmacokinetic parameters for oxygen. |
| PGx | Kietzmann_2019 | not_relevant | 0 | 0 | The text describes general cellular redox biology and ROS signaling pathways, not a pharmacogenomic effect on the PK/PD of a specific drug or oxygen. |
| popPK | Lavrinenko_2022 | irrelevant | 0 | 0 | This is a biophysical model of hemoglobin oxygenation (Hill/Adair curve fitting), not a pharmacokinetic study of oxygen disposition; no CL/V/ka/population-PK parameters are reported. |
| popPK | Lavrinenko_2023 | irrelevant | 0 | 0 | This is a review of mathematical models for oxygen binding to hemoglobin (biochemistry/physics), not a pharmacokinetic study of oxygen disposition in a biological system. |
| PGx | Lavrinenko_2023 | not_relevant | 0 | 0 | The paper reviews mathematical models of oxygen binding to hemoglobin and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Suga_1990 | irrelevant | 0 | 0 | The paper is a review of cardiac mechanics and energetics concepts (Emax, PVA) and does not report pharmacokinetic parameters for oxygen. |
| PGx | Suga_1990 | not_relevant | 0 | 0 | The paper reviews cardiac mechanics and energetics (Emax, PVA) and is unrelated to pharmacogenomics or oxygen pharmacokinetics. |
| popPK | Thompson_2012 | irrelevant | 0 | 0 | The paper is a review of hydroxocobalamin for cyanide poisoning, not a study of oxygen pharmacokinetics. |
| PGx | Thompson_2012 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and efficacy of hydroxocobalamin in cyanide poisoning but does not report any pharmacogenomic effects or genetic variants influencing the PK/PD parameters. |
| popPK | Torda_1997 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for suxamethonium, with oxygen only mentioned as part of the anaesthetic gas mixture. |
| PGx | Torda_1997 | not_relevant | 0 | 0 | The paper describes the PK/PD of suxamethonium, not oxygen, and does not report any gene-variant or genotype effects on these parameters. |
| popPK | Venitz_2007 | irrelevant | 0 | 0 | The paper discusses efaproxiral, a hemoglobin modifier, and oxygen is only mentioned as a biomarker context (oxygen affinity), not as a subject drug for PK parameter estimation. |
| PGx | Venitz_2007 | not_relevant | 0 | 0 | The text discusses biomarkers and PK/PD modeling for efaproxiral but does not report any pharmacogenomic effects of gene variants on these parameters. |
| popPK | Wardman_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of chemical reaction pathways in radiobiology and does not report pharmacokinetic parameters for oxygen. |
| PGx | Wardman_2022 | not_relevant | 0 | 0 | The paper is a review on modeling chemical reaction pathways in radiobiology (FLASH radiotherapy) and does not discuss pharmacogenomics or specific drug PK/PD parameters related to oxygen. |
| popPK | Wilson_2017 | irrelevant | 0 | 0 | The paper is a review of oxidative phosphorylation and mitochondrial biology, not a pharmacokinetic study, and contains no quantitative disposition parameters for oxygen. |
| PGx | Wilson_2017 | not_relevant | 0 | 0 | The paper discusses general physiological regulation of oxidative phosphorylation and metabolic homeostasis, not the pharmacokinetic or pharmacodynamic effects of oxygen influenced by genetic variants. |
| popPK | Świerczek_2023 | irrelevant | 0 | 0 | This is a population PK/PD study of dexamethasone in COVID-19 patients; oxygen is only mentioned as a therapy requirement, not the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxygen%5D&body=Drug%3A%20oxygen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxygen/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
