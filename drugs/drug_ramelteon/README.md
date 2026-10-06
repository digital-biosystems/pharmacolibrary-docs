<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;ramelteon&quot;}]"></div>

# ramelteon

- **generic name:** ramelteon
- **ATC codes:** `N05CH02`
- **DrugBank:** [DB00980](https://go.drugbank.com/drugs/DB00980) · **PubChem:** [CID 208902](https://pubchem.ncbi.nlm.nih.gov/compound/208902)
- **molar mass:** 259.3434 g/mol (C16H21NO2) — DrugBank
- **groups:** approved, investigational

## About

Ramelteon is a melatonin receptor agonist used to treat insomnia and sleep-wake disorders. It is an approved medicine, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417689](https://www.wikidata.org/wiki/Q417689) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:11 | 17:29 | 0/0/0 | 3/0/0 | 0/0/0 | 186,595/3,013 | ollama / glm-5.3-flash | 11 | 1/3 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kuzuhara_2026_KV4_2_current_inhibition](drugs/drug_ramelteon/pd_Kuzuhara_2026_KV4_2_current_inhibition.md) | KV4.2 current inhibition ← ramelteon · direct sigmoid Emax (Hill) effect | — | Kuzuhara H et al., Luzindole and ramelteon share a melaton…, Journal of pharmacological… (2026) | [10.1016/j.jphs.2026.05.008](https://doi.org/10.1016/j.jphs.2026.05.008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wu_2024_I_K_DR](drugs/drug_ramelteon/pd_Wu_2024_I_K_DR.md) | delayed-rectifier K+ current amplitude (I K(DR)) ← ramelteon · inhibition effect | — | Wu PM et al., An unidentified yet notable modificatio…, FASEB bioAdvances (2024) | [10.1096/fba.2024-00008](https://doi.org/10.1096/fba.2024-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wu_2024_I_Na](drugs/drug_ramelteon/pd_Wu_2024_I_Na.md) | voltage-gated Na+ current amplitude (I Na) ← ramelteon · inhibition effect | — | Wu PM et al., An unidentified yet notable modificatio…, FASEB bioAdvances (2024) | [10.1096/fba.2024-00008](https://doi.org/10.1096/fba.2024-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zheng_2020_SL](drugs/drug_ramelteon/pd_Zheng_2020_SL.md) | sleep latency ← ramelteon · model not identified | — | Zheng X et al., Pharmacological interventions for the t…, Sleep medicine (2020) | [10.1016/j.sleep.2020.03.022](https://doi.org/10.1016/j.sleep.2020.03.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zheng_2020_TST](drugs/drug_ramelteon/pd_Zheng_2020_TST.md) | total sleep time ← ramelteon · model not identified | — | Zheng X et al., Pharmacological interventions for the t…, Sleep medicine (2020) | [10.1016/j.sleep.2020.03.022](https://doi.org/10.1016/j.sleep.2020.03.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zheng_2020_WASO](drugs/drug_ramelteon/pd_Zheng_2020_WASO.md) | wake after sleep onset ← ramelteon · model not identified | — | Zheng X et al., Pharmacological interventions for the t…, Sleep medicine (2020) | [10.1016/j.sleep.2020.03.022](https://doi.org/10.1016/j.sleep.2020.03.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zheng_2020_dropout_rate](drugs/drug_ramelteon/pd_Zheng_2020_dropout_rate.md) | dropout rate ← ramelteon · model not identified | — | Zheng X et al., Pharmacological interventions for the t…, Sleep medicine (2020) | [10.1016/j.sleep.2020.03.022](https://doi.org/10.1016/j.sleep.2020.03.022) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zheng_2020_sleep_quality](drugs/drug_ramelteon/pd_Zheng_2020_sleep_quality.md) | sleep quality ← ramelteon · model not identified | — | Zheng X et al., Pharmacological interventions for the t…, Sleep medicine (2020) | [10.1016/j.sleep.2020.03.022](https://doi.org/10.1016/j.sleep.2020.03.022) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ramelteon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MTNR1A (multitarget), MTNR1B (multitarget).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 64 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bettica_2012 | irrelevant | 0 | 0 | This is a clinical efficacy/safety study of SB-649868 (a different drug); ramelteon is not mentioned and no PK parameters are reported. |
| PGx | Di_2023 | not_relevant | 2 | 3 | The paper describes CYP1A1 enzyme contribution to ramelteon clearance via IVIVE, not an effect of a gene variant/genotype/phenotype on a PK parameter. |
| PGx | Hardeland_2016 | not_relevant | 3 | 1 | Review discusses genetic/epigenetic silencing of melatonin receptor genes only theoretically, with no gene-variant effect on ramelteon PK/PD parameters reported. |
| popPK | Iga_2015 | irrelevant | 4 | 2 | Ramelteon is the victim in a DDI modeling study, but the evidence contains no ramelteon disposition parameters (CL, V, ka, etc.); only AUCR and Ki values appear, and detailed PK values likely live in tables/figures not provided. |
| PGx | Iga_2015 | not_relevant | 0 | 0 | Reports a drug-drug interaction (fluvoxamine–ramelteon) via CYP1A2 inhibition, not a gene variant/genotype effect on ramelteon PK/PD. |
| popPK | Iga_2017 | irrelevant | 4 | 3 | This is a review of DDI prediction methodology; ramelteon's own disposition parameters (CL, V, etc.) are only referenced as being in refs. 13/14, with only fragmentary values (Fh=0.03, AUCR≈129) present. |
| popPK | Lalovic_2020 | irrelevant | 0 | 0 | This is a population PK study of lemborexant, not ramelteon; ramelteon is not the subject drug and no ramelteon parameters appear. |
| PGx | Obach_2010 | not_relevant | 3 | 5 | Reports enzyme contributions and DDI magnitudes, but no gene variant/genotype effect on ramelteon PK/PD parameters. |
| PGx | Obach_2016 | not_relevant | 0 | 0 | Paper describes fluorinated analog synthesis and metabolic stability, not gene variant effects on ramelteon PK/PD. |
| PGx | Palacharla_2026 | not_relevant | 2 | 3 | Reports enzyme-mediated DDI prediction (ramelteon-fluvoxamine), not a gene variant/genotype effect on ramelteon PK/PD. |
| popPK | Saha_2022 | irrelevant | 0 | 0 | This is a review of electron diffraction crystallography with no pharmacokinetic data or mention of ramelteon. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | This is an Alzheimer's disease neuroimaging/transcriptomics/drug-repurposing study with no ramelteon PK parameters or any pharmacokinetic modeling. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | PK changes are due to altitude/hypoxia, not a gene variant, genotype, or phenotype. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
