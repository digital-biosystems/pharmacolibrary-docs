<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;oxygen&quot;}]"></div>

# oxygen

- **generic name:** oxygen
- **ATC codes:** `V03AN01`
- **DrugBank:** [DB09140](https://go.drugbank.com/drugs/DB09140) · **PubChem:** [CID 977](https://pubchem.ncbi.nlm.nih.gov/compound/977)
- **molar mass:** 31.9988 g/mol (O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Oxygen is a medical gas used to treat conditions involving low blood oxygen, such as breathing difficulties and respiratory illness. It is widely used in hospitals and other healthcare settings, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q629](https://www.wikidata.org/wiki/Q629) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lavrinenko_2022_HbO2](drugs/drug_oxygen/pd_Lavrinenko_2022_HbO2.md) | degree of saturation of hemoglobin by oxygen (oxyhemoglobin dissociation curve) ← oxygen · direct sigmoid Emax (Hill) effect | — | Lavrinenko IA et al., A New Model of Hemoglobin Oxygenation, Entropy (Basel, Switzerland) (2022) | [10.3390/e24091214](https://doi.org/10.3390/e24091214) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:13 | 1:19 | 0/0/0 | 0/1/0 | 0/0/0 | 107,088/3,192 | ollama / glm-5.3-flash | 8 | 2/6 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 2603 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2022 | irrelevant | 0 | 0 | This is a hemodynamic/compartmental model of the Fontan circulation with oxygen transport, not a pharmacokinetic study of oxygen as a drug; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Ahn_2023 | irrelevant | 0 | 0 | This is a materials-science paper on alginate multicompartment capsules; oxygen appears only as a gas byproduct of H2O2 decomposition, with no PK parameters. |
| popPK | Arulrajah_2025 | irrelevant | 0 | 0 | This is a review of scale-down bioreactors in bioprocessing; oxygen appears only as dissolved oxygen gradients in fermentation, with no pharmacokinetic parameters for oxygen as a drug. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is an in-vitro ion channel biophysics study of TRPV1/TRPA1 modification by singlet oxygen; no pharmacokinetic parameters for oxygen are reported. |
| popPK | Drábková_2007 | irrelevant | 0 | 0 | This is an algal toxicity study of photosensitizers producing reactive oxygen species; oxygen is not a dosed drug and no PK parameters are reported. |
| popPK | Fortier_2023 | irrelevant | 0 | 0 | This is an MRI relaxometry phantom study of oxygen relaxivity, not a pharmacokinetic study with disposition parameters for oxygen. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | This is a review of paraquat poisoning; oxygen is only mentioned as reactive oxygen species, with no PK parameters for oxygen. |
| popPK | Goutelle_2008 | irrelevant | 0 | 0 | A mathematical review of the Hill equation; oxygen is only mentioned historically, with no PK parameters or numeric values. |
| popPK | Gudelunas_2024 | irrelevant | 0 | 0 | This is a pulse oximeter accuracy study measuring SpO2 bias, not a pharmacokinetic study of oxygen disposition (no CL, V, or PK model). |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory physiology editorial on gas exchange (shunt/dead space), not a pharmacokinetic study of oxygen disposition; no CL, V, or PK model parameters for oxygen are reported. |
| popPK | Kietzmann_2019 | irrelevant | 0 | 0 | This is a review-style text on ROS cell biology with no pharmacokinetic parameters for oxygen as a drug. |
| popPK | Lavrinenko_2022 | irrelevant | 0 | 0 | This is a biophysical model of hemoglobin oxygenation (Hill/Adair curve fitting), not a pharmacokinetic study of oxygen disposition; no CL/V/ka/population-PK parameters are reported. |
| popPK | Lavrinenko_2023 | irrelevant | 0 | 0 | A review of hemoglobin-oxygen binding equations, not a pharmacokinetic study of oxygen disposition; no CL, V, or PK model values present. |
| popPK | Suga_1990 | irrelevant | 0 | 0 | Review of cardiac mechanics concepts; oxygen consumption is only a physiologic correlate, no PK parameters for oxygen. |
| popPK | Thompson_2012 | irrelevant | 0 | 0 | This is a review of hydroxocobalamin (a different drug); oxygen is only mentioned as a co-administered therapy, with no PK parameters for oxygen. |
| popPK | Torda_1997 | irrelevant | 0 | 0 | Oxygen is only mentioned as part of the anaesthetic gas mixture; the PK parameters reported (half-life, effect-compartment equilibration) are for suxamethonium, not oxygen. |
| popPK | Venitz_2007 | irrelevant | 0 | 0 | Oxygen is only a biomarker context (p50, SpO2) for efaproxiral; no PK parameters for oxygen itself and no numeric values present. |
| popPK | Wardman_2022 | irrelevant | 0 | 0 | A review of chemical reaction modeling in radiobiology; oxygen is discussed as a reactant, not a drug with PK disposition parameters, and no numeric PK values are present. |
| popPK | Wilson_2017 | irrelevant | 0 | 0 | This is a mechanistic review of oxidative phosphorylation bioenergetics, not a PK study of oxygen with disposition parameters. |
| popPK | Świerczek_2023 | irrelevant | 0 | 0 | This is a population PK/PD study of dexamethasone in COVID-19 patients; oxygen is only mentioned as a therapy requirement, not the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
