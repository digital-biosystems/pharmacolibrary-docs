<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;spironolactone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Zhou2010_reference&quot;,&quot;label&quot;:&quot;Zhou_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/Spironolactone_Zhou2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# spironolactone

- **generic name:** spironolactone
- **ATC codes:** `C03DA01`
- **DrugBank:** [DB00421](https://go.drugbank.com/drugs/DB00421) · **PubChem:** [CID 5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833)
- **molar mass:** 416.573 g/mol (C24H32O4S) — DrugBank
- **groups:** approved, investigational

## About

Spironolactone is a diuretic used to treat fluid build-up caused by heart failure, liver scarring, or kidney disease, and is also used for high blood pressure and hyperaldosteronism. It is widely used and appears on the WHO essential medicines list, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422188](https://www.wikidata.org/wiki/Q422188) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spironolactone | parent | 416.573 | C24H32O4S | DrugBank | [5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833) | Lass_2024, Tatipalli_2021 |
| 7 alphathiomethylspironolactone | metabolite | 388.6 | — | the paper | — | Lass_2024 |
| canrenone | metabolite | 340.5 | — | the paper | — | Lass_2024, Tatipalli_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:12 | 28:15 | 2/0/13 | 0/0/0 | 0/0/0 | 393,729/89,128 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span> | [Lass_2024_model_2](drugs/drug_spironolactone/Spironolactone_Lass2024_model_2.md) | held back | 1-compartment general linear | 3 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> | [Zhou_2010_reference](drugs/drug_spironolactone/Spironolactone_Zhou2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhou XD et al., Population pharmacokinetic model of dig…, Acta pharmacologica Sinica (2010) | [10.1038/aps.2010.51](https://doi.org/10.1038/aps.2010.51) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Chaiben_2026_reference](drugs/drug_spironolactone/Spironolactone_Chaiben2026_reference.md) | — | 2-compartment (no model) | 4 | Chaiben S et al., Blood Never Lies: The PopPK-Based Lie D…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01652-2](https://doi.org/10.1007/s40262-026-01652-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lass_2024_model_1](drugs/drug_spironolactone/Spironolactone_Lass2024_model_1.md) | — | general linear (no model) | 3 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_12_years_female](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_12_years_female.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_12_years_male](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_12_years_male.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_17_years_female](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_17_years_female.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_17_years_male](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_17_years_male.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_2_years_female](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_2_years_female.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_2_years_male](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_2_years_male.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_6_years_female](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_6_years_female.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_6_years_male](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_6_years_male.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tatipalli_2021_adults](drugs/drug_spironolactone/Spironolactone_Tatipalli2021_adults.md) | — | parent + metabolite (no model) | 12 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Lass_2024_value_1](drugs/drug_spironolactone/Spironolactone_Lass2024_value_1.md) | — | — (no model) | 0 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Lass_2024_value_2](drugs/drug_spironolactone/Spironolactone_Lass2024_value_2.md) | — | — (no model) | 0 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=spironolactone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer | DrugBank actor |
| — | adrenal gland | `CYP11B1` inducer | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CYP11B2 (inhibitor), ESR1 (target), NR1I2 (target), NR3C1 (target), NR3C2 (target), PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 15  ·  extracted 2  ·  needs_review 11  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2020 | irrelevant | 0 | 0 | The study is a systematic review of digoxin pharmacokinetics, where spironolactone is only mentioned as a covariate for co-administration, not as the subject drug. |
| popPK | Chadwick_2015 | irrelevant | 0 | 0 | The study is a mechanistic investigation of mineralocorticoid receptor function in skeletal muscle, not a pharmacokinetic study, and reports no disposition parameters for spironolactone. |
| popPK | Chai_2005 | irrelevant | 0 | 0 | The study investigates the nongenomic pharmacodynamic effects of aldosterone on heart tissue, using spironolactone only as a receptor antagonist control, and reports no pharmacokinetic parameters. |
| popPK | Chaiben_2026 | relevant | 8 | 2 | The paper uses a published population PK model for spironolactone and canrenone for simulations, but the specific numeric parameter values are in Table 1 which is not included in the provided evidence. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with spironolactone mentioned only as a co-medication affecting digoxin clearance. |
| popPK | Fedorova_2015 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of spironolactone on vascular fibrosis and blood pressure, not its pharmacokinetic disposition parameters. |
| popPK | Guyonnet_2010 | irrelevant | 0 | 0 | The paper is a consensus statement on feline cardiomyopathy and does not contain pharmacokinetic data for spironolactone. |
| popPK | Harada_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression where spironolactone is used as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Kalogeropoulos_2020 | irrelevant | 0 | 0 | The study is a clinical trial analysis of spironolactone's effects on heart failure outcomes and renal function, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Katsu_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and transcriptional activation, not a pharmacokinetic study reporting disposition parameters for spironolactone. |
| popPK | Lyngsø_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of endothelial function in mice where spironolactone is used as a pharmacological antagonist, not a subject of pharmacokinetic analysis. |
| popPK | Manson_2025 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (AUC, Tmax) for spironolactone's active metabolites (canrenone, TMS) in dogs, but the specific numeric values are in Table 1 which is not included in the evidence. |
| popPK | Okoshi_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldosterone-induced hypertrophy where spironolactone is used only as a receptor blocker, with no pharmacokinetic parameters reported. |
| popPK | Roepke_2006 | irrelevant | 0 | 0 | Spironolactone is used as a mechanistic tool (steroidogenesis inhibitor) in a developmental toxicology study in sea urchins, not as a subject of pharmacokinetic analysis. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The study analyzes frailty indices and clinical outcomes in heart failure patients, containing no pharmacokinetic parameters for spironolactone. |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, with spironolactone serving only as a covariate for drug-drug interaction. |
| popPK | Zhou_2010 | irrelevant | 0 | 0 | The study models the pharmacokinetics of digoxin, with spironolactone included only as a covariate affecting digoxin clearance, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:46 UTC</sub>
