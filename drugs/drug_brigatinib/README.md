<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;brigatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brigatinib_Gupta2021_reference&quot;,&quot;label&quot;:&quot;Gupta_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# brigatinib

- **generic name:** brigatinib
- **ATC codes:** `L01ED04`, `L01XE43`
- **DrugBank:** [DB12267](https://go.drugbank.com/drugs/DB12267) · **PubChem:** [CID 68165256](https://pubchem.ncbi.nlm.nih.gov/compound/68165256)
- **molar mass:** 584.1 g/mol (C29H39ClN7O2P) — DrugBank
- **groups:** approved, investigational

## About

Brigatinib is a protein kinase inhibitor used to treat non-small-cell lung carcinoma. It is authorised in the European Union for this cancer indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27456393](https://www.wikidata.org/wiki/Q27456393) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| brigatinib | parent | 584.1 | C29H39ClN7O2P | DrugBank | [68165256](https://pubchem.ncbi.nlm.nih.gov/compound/68165256) | Gupta_2021, Gupta_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:02 | 8:21 | 1/3/0 | 1/0/2 | 0/0/0 | 162,161/48,522 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2021_reference](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+1 cov.) | Gupta N et al., Population Pharmacokinetics of Brigatin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00929-4](https://doi.org/10.1007/s40262-020-00929-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2022_reference](drugs/drug_brigatinib/Brigatinib_Gupta2022_reference.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2023_fasted](drugs/drug_brigatinib/Brigatinib_Gupta2023_fasted.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Clinical Pharmacology of Brigatinib: A…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01284-w](https://doi.org/10.1007/s40262-023-01284-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2023_fed](drugs/drug_brigatinib/Brigatinib_Gupta2023_fed.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Clinical Pharmacology of Brigatinib: A…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01284-w](https://doi.org/10.1007/s40262-023-01284-w) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2020_HR](drugs/drug_brigatinib/pd_Gupta_2020_HR.md) | change from baseline in heart rate ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2020_PR](drugs/drug_brigatinib/pd_Gupta_2020_PR.md) | change from baseline in PR interval ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2020_QTcF](drugs/drug_brigatinib/pd_Gupta_2020_QTcF.md) | change from baseline in QTcF interval ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_ORR](drugs/drug_brigatinib/pd_Gupta_2020_ORR.md) | objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_OS](drugs/drug_brigatinib/pd_Gupta_2020_OS.md) | overall survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_PFS](drugs/drug_brigatinib/pd_Gupta_2020_PFS.md) | progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_amylase_elevation](drugs/drug_brigatinib/pd_Gupta_2020_amylase_elevation.md) | grade ≥ 2 amylase elevation ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_iORR](drugs/drug_brigatinib/pd_Gupta_2020_iORR.md) | intracranial objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_iPFS](drugs/drug_brigatinib/pd_Gupta_2020_iPFS.md) | intracranial progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2020_rash](drugs/drug_brigatinib/pd_Gupta_2020_rash.md) | grade ≥ 2 rash ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_AE](drugs/drug_brigatinib/pd_Gupta_2022_AE.md) | Composite grade ≥3 AE endpoint ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_ALT](drugs/drug_brigatinib/pd_Gupta_2022_ALT.md) | ALT increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_ALT_2](drugs/drug_brigatinib/pd_Gupta_2022_ALT_2.md) | ALT increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_AST](drugs/drug_brigatinib/pd_Gupta_2022_AST.md) | AST increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_AST_2](drugs/drug_brigatinib/pd_Gupta_2022_AST_2.md) | AST increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Amylase](drugs/drug_brigatinib/pd_Gupta_2022_Amylase.md) | Amylase increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Amylase_2](drugs/drug_brigatinib/pd_Gupta_2022_Amylase_2.md) | Amylase increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Bradycardia](drugs/drug_brigatinib/pd_Gupta_2022_Bradycardia.md) | Bradycardia (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_CPK](drugs/drug_brigatinib/pd_Gupta_2022_CPK.md) | CPK increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Hyperglycemia](drugs/drug_brigatinib/pd_Gupta_2022_Hyperglycemia.md) | Hyperglycemia (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Hypertension](drugs/drug_brigatinib/pd_Gupta_2022_Hypertension.md) | Hypertension (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Lipase](drugs/drug_brigatinib/pd_Gupta_2022_Lipase.md) | Lipase increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_ORR](drugs/drug_brigatinib/pd_Gupta_2022_ORR.md) | Objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_PFS](drugs/drug_brigatinib/pd_Gupta_2022_PFS.md) | Progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Pulmonary_AEs](drugs/drug_brigatinib/pd_Gupta_2022_Pulmonary_AEs.md) | Pulmonary events (pneumonitis or ILD) (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Rash](drugs/drug_brigatinib/pd_Gupta_2022_Rash.md) | Rash (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_Time_to_first_brigatinib_dose_reduction](drugs/drug_brigatinib/pd_Gupta_2022_Time_to_first_brigatinib_dose_reduction.md) | Time to first brigatinib dose reduction ← brigatinib · time-to-event model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gupta_2022_iORR](drugs/drug_brigatinib/pd_Gupta_2022_iORR.md) | Intracranial objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [unknown_2021_OS](drugs/drug_brigatinib/pd_unknown_2021_OS.md) | overall survival ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [unknown_2021_PFS](drugs/drug_brigatinib/pd_unknown_2021_PFS.md) | progression-free survival ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [unknown_2021_iPFS](drugs/drug_brigatinib/pd_unknown_2021_iPFS.md) | intracranial PFS ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brigatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer/substrate, `SLC22A1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ABCB5 (substrate), ABL1 (inhibitor), ALK (inhibitor), EGFR (inhibitor), ERBB2 (inhibitor), ERBB4 (inhibitor), FLT3 (inhibitor), IGF1R (inhibitor), INSR (binding), MET (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Damoiseaux_2022 | relevant | 10 | 2 | Mouse population-PK models include brigatinib, but numeric CL and other model parameter values are only referenced in supplementary material not provided. |
| popPK | Gupta_2020 | irrelevant | 2 | 0 | This human exposure–response analysis uses a previously developed population-PK model but reports no numeric brigatinib disposition parameters. |
| popPK | unknown_2021 | irrelevant | 1 | 0 | This is an exposure–response corrigendum with efficacy values, not quantitative brigatinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:55 UTC</sub>
