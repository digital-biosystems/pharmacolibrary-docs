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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:13 | 1:19 | 0/0/0 | 0/1/0 | 0/0/0 | 107,088/3,192 | ollama / glm-5.3-flash | 8 | 2/6 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lavrinenko_2022_HbO2](drugs/drug_oxygen/pd_Lavrinenko_2022_HbO2.md) | degree of saturation of hemoglobin by oxygen (oxyhemoglobin dissociation curve) ← oxygen · direct sigmoid Emax (Hill) effect | — | Lavrinenko IA et al., A New Model of Hemoglobin Oxygenation, Entropy (Basel, Switzerland) (2022) | [10.3390/e24091214](https://doi.org/10.3390/e24091214) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxygen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HBA1 (binder), HBB (binder), MT-CO1 (activator), MT-CO1 (target), NOX1 (activator), NOX1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
