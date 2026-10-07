<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Cilgavimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cilgavimab_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilgavimab/Cilgavimab_Li2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cilgavimab_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilgavimab/Cilgavimab_Li2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Cilgavimab

- **generic name:** Cilgavimab
- **ATC codes:** `J06BD03`
- **DrugBank:** [DB16393](https://go.drugbank.com/drugs/DB16393) · **PubChem:** not captured
- **groups:** approved, investigational

## About

It is given by injection, usually together with another antibody called tixagevimab, and its use has declined as coronavirus variants emerged that the antibodies do not neutralise well.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:14 | 7:40 | 2/3/0 | 1/1/0 | 0/0/0 | 402,747/25,703 | ollama / glm-5.3-flash | 29 | 4/22 | 29/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_reference](drugs/drug_cilgavimab/Cilgavimab_Li2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li S et al., Safety, tolerability, pharmacokinetics,…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1117293](https://doi.org/10.3389/fphar.2023.1117293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_reference](drugs/drug_cilgavimab/Cilgavimab_Li2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li N et al., Safety, Tolerability, and Pharmacokinet…, Clinical pharmacology in dr… (2025) | [10.1002/cpdd.1583](https://doi.org/10.1002/cpdd.1583) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Clegg_2024_azd7442](drugs/drug_cilgavimab/Cilgavimab_Clegg2024_azd7442.md) | — | 1-compartment (no model) | 2 | Clegg LE et al., Accelerating therapeutics development d…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01587-23](https://doi.org/10.1128/aac.01587-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Clegg_2024_cilgavimab](drugs/drug_cilgavimab/Cilgavimab_Clegg2024_cilgavimab.md) | — | 1-compartment (no model) | 2 | Clegg LE et al., Accelerating therapeutics development d…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01587-23](https://doi.org/10.1128/aac.01587-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jansen_2026_reference](drugs/drug_cilgavimab/Cilgavimab_Jansen2026_reference.md) | — | 2-compartment (no model) | 3 | Jansen E et al., Characterization of the VHH-Fc construc…, PLoS medicine (2026) | [10.1371/journal.pmed.1004609](https://doi.org/10.1371/journal.pmed.1004609) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gidari_2024_inhibition_20A_EU1](drugs/drug_cilgavimab/pd_Gidari_2024_inhibition_20A_EU1.md) | viral inhibition (plaque reduction, % of inhibition) — 20A.EU1 strain ← tixagevimab/cilgavimab · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Tixagevimab/Cilgavimab: Still a Valid P…, Viruses (2024) | [10.3390/v16030354](https://doi.org/10.3390/v16030354) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gidari_2024_inhibition_EG_5](drugs/drug_cilgavimab/pd_Gidari_2024_inhibition_EG_5.md) | viral inhibition (plaque reduction, % of inhibition) — EG.5 strain ← tixagevimab/cilgavimab · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Tixagevimab/Cilgavimab: Still a Valid P…, Viruses (2024) | [10.3390/v16030354](https://doi.org/10.3390/v16030354) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Stadler_2023_efficacy](drugs/drug_cilgavimab/pd_Stadler_2023_efficacy.md) | Protection from symptomatic COVID-19 infection ← cilgavimab/tixagevimab (total antibody concentration as fold of in vitro IC50) · direct sigmoid Emax (Hill) effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cilgavimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 44 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Basoulis_2024 | not_relevant | 0 | 0 | Clinical efficacy study of tixagevimab/cilgavimab in immunocompromised patients; no gene variant/genotype effects on PK or PD parameters reported. |
| PGx | Beaulieu_2024 | not_relevant | 0 | 0 | The paper examines variant-dependent antiviral efficacy of Evusheld (viral variant, not host gene variant) with no pharmacogenomic effect on PK/PD parameters. |
| PGx | Bender_2025 | not_relevant | 0 | 0 | Reports PK, ADA, and neutralization of tixagevimab/cilgavimab but no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Cai_2024 | irrelevant | 2 | 1 | Cilgavimab is only a co-formulated comparator; no quantitative PK parameters for it are reported, and concentration data are referenced to a population PK model without values. |
| PGx | Cai_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK/PD are reported; only viral escape mutations affect neutralization. |
| PGx | Clegg_2024 | not_relevant | 0 | 0 | Covariates are demographic/clinical (weight, sex, diabetes, race, injection site, TEADA); no gene variant/genotype/phenotype effects on cilgavimab PK/PD are reported. |
| PGx | Clegg_2024_2 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK/PD are reported; only serum concentrations and IC50 correlations. |
| PGx | Focosi_2022 | not_relevant | 3 | 5 | Reports viral Spike mutations affecting in vitro neutralization (PD efficacy), not host gene variants altering cilgavimab PK/PD parameters. |
| PGx | Forte-Soto_2023 | not_relevant | 0 | 0 | Phase 1 PK/safety study of cilgavimab in healthy adults with no gene variant/genotype/phenotype analysis. |
| popPK | Gidari_2024 | irrelevant | 1 | 2 | This is an efficacy/neutralization study; Cmax is taken from literature and EC50 values are pharmacodynamics, not PK disposition parameters (no CL, V, or half-life model for cilgavimab). |
| PGx | Gidari_2024 | not_relevant | 0 | 0 | The paper evaluates viral variant effects on Evusheld neutralization, not host gene variant/genotype effects on PK/PD parameters. |
| popPK | Gonzalez-Bocco_2025 | irrelevant | 0 | 0 | This is a population PK study of sotrovimab; cilgavimab is only mentioned as co-administered prophylaxis in 83 participants, with no cilgavimab PK parameters reported. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | A Cochrane systematic review of prophylaxis efficacy with no PK parameters for cilgavimab; no numeric disposition values present. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK/PD parameters are reported; outcomes are clinical/virological only. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The paper reports PK of rimteravimab (XVR011), a different drug; cilgavimab is only mentioned as a comparator therapeutic antibody with no PK values for it. |
| PGx | Jiménez_2026 | not_relevant | 3 | 2 | Reports viral spike mutations under cilgavimab selection pressure, not a host gene variant effect on cilgavimab PK/PD parameters. |
| popPK | Kekic_2026 | irrelevant | 3 | 1 | This is a covariate-selection methodology paper using cilgavimab popPK data as an example; no numeric PK parameter values (CL, V, ka) for cilgavimab are reported, and details are deferred to original publications/supplementary figures. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper reports PK (CL, Vd, t½, population PK model) for HFB30132A, a different anti-SARS-CoV-2 mAb; cilgavimab is only mentioned as a comparator/EUA context, so no cilgavimab parameters are present. |
| PGx | Li_2025 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK or PD are reported; only dose, safety, and PK/PD data in healthy Chinese adults. |
| PGx | Loo_2022 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK/PD are reported; PK data are from healthy participants without pharmacogenomic stratification. |
| PGx | Massonnaud_2026 | not_relevant | 0 | 0 | No pharmacogenomic/genotype effects on cilgavimab PK or PD parameters are reported; the paper covers clinical efficacy, safety, PK, immunogenicity without gene-variant associations. |
| PGx | Perrotta_2024 | not_relevant | 1 | 3 | No gene variant/genotype/phenotype is studied; only vaccination status and mAb treatment effects on virological clearance are reported. |
| PGx | Reindl-Schwaighofer_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is examined; PK (half-life) and PD outcomes are reported without any pharmacogenomic stratification. |
| PGx | Roe_2023 | not_relevant | 2 | 5 | Describes SARS-CoV-2 viral spike mutations affecting in vitro neutralization (IC50) of cilgavimab, not host gene variants altering PK/PD parameters. |
| PGx | Rycen_2024 | not_relevant | 0 | 0 | Cilgavimab is only mentioned as prior prophylaxis; no gene variant effect on its PK/PD is reported. |
| popPK | Schilling_2024 | irrelevant | 0 | 0 | This is a viral clearance study of molnupiravir vs nirmatrelvir; cilgavimab is only a mentioned treatment arm with no PK parameters reported. |
| PGx | Schilling_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on cilgavimab PK/PD are reported; tixagevimab–cilgavimab is only a listed treatment arm. |
| popPK | Stadler_2023 | irrelevant | 3 | 4 | This is an efficacy/immunocorrelate modeling study, not a PK study; only a half-life (95 days) for the cilgavimab/tixagevimab combination is cited, with no CL/V/compartmental parameters, and detailed values live in supplementary tables not provided. |
| PGx | Tebas_2025 | not_relevant | 0 | 0 | Phase 1 PK/safety study of DNA-encoded mAbs with no pharmacogenomic (gene variant/genotype) effects on PK or PD parameters reported. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | In vitro drug-combination efficacy study of sotrovimab with antivirals; cilgavimab is not the subject and no PK disposition parameters are reported. |
| popPK | Wongnak_2024 | irrelevant | 0 | 0 | This is a viral clearance (SARS-CoV-2) pharmacodynamic study, not a PK study of cilgavimab; the tixagevimab/cilgavimab arm's data are explicitly not included in this manuscript. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | In vitro S-RBD binding/entry-inhibition screening study; cilgavimab is only mentioned as a comparator antibody, with no PK parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:07 UTC</sub>
