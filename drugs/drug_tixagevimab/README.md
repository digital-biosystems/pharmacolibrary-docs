<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Tixagevimab&quot;}]"></div>

# Tixagevimab

- **generic name:** Tixagevimab
- **ATC codes:** `J06BD03`
- **DrugBank:** [DB16394](https://go.drugbank.com/drugs/DB16394) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tixagevimab is an antiviral monoclonal antibody that targets the spike protein of the coronavirus and was used to help prevent infection in people at high risk.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105908740](https://www.wikidata.org/wiki/Q105908740) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:07 | 8:15 | 0/0/0 | 1/1/1 | 0/0/0 | 316,117/4,322 | einfracz / qwen3.8-27b | 29 | 4/22 | 29/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gidari_2024_PRNT50](drugs/drug_tixagevimab/pd_Gidari_2024_PRNT50.md) | virus neutralization (plaque reduction) ← tixagevimab/cilgavimab · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Tixagevimab/Cilgavimab: Still a Valid P…, Viruses (2024) | [10.3390/v16030354](https://doi.org/10.3390/v16030354) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Edge_2025_symptomatic_COVID_19](drugs/drug_tixagevimab/pd_Edge_2025_symptomatic_COVID_19.md) | symptomatic COVID-19 ← tixagevimab-cilgavimab · time-to-event model | — | Edge R et al., A SARS-CoV-2 variant‑adjusted threshold…, Nature communications (2025) | [10.1038/s41467-025-63972-4](https://doi.org/10.1038/s41467-025-63972-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Stadler_2023_efficacy](drugs/drug_tixagevimab/pd_Stadler_2023_efficacy.md) | protection from symptomatic SARS-CoV-2 infection ← cilgavimab/tixagevimab · direct Emax (saturable) effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tixagevimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 44 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Basoulis_2024 | not_relevant | 0 | 0 | The study assesses the real-world clinical efficacy (breakthrough infection rates) of tixagevimab/cilgavimab in immunocompromised patients and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Beaulieu_2024 | not_relevant | 0 | 0 | The paper analyzes the antiviral efficacy of Evusheld on viral kinetics based on SARS-CoV-2 variant, not pharmacogenomic effects of human gene variants. |
| PGx | Bender_2025 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and safety of tixagevimab in a clinical trial but does not investigate the effect of specific gene variants or genotypes on these parameters. |
| popPK | Cai_2024 | irrelevant | 2 | 0 | The study focuses on AZD3152, and while it mentions a PK model for tixagevimab (in AZD7442) for comparison, it does not report quantitative PK parameter values for tixagevimab. |
| PGx | Cai_2024 | not_relevant | 0 | 0 | The paper describes the activity and PK of AZD3152 and briefly compares it to the tixagevimab/cilgavimab combination, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Clegg_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic analysis of tixagevimab but examines demographic and physiological covariates (weight, race, diabetes, etc.) rather than specific gene variants or pharmacogenomic effects. |
| PGx | Clegg_2024_2 | not_relevant | 0 | 0 | The paper describes assay validation and correlation between serum concentrations and neutralizing titres for tixagevimab, but does not investigate gene variants or pharmacogenomic effects. |
| PGx | Focosi_2022 | not_relevant | 0 | 0 | The paper describes the clinical efficacy and resistance profile of tixagevimab but does not report any pharmacogenomic variants affecting its PK or PD. |
| PGx | Forte-Soto_2023 | not_relevant | 0 | 0 | The paper reports standard safety and pharmacokinetics in a general healthy adult population and does not investigate or report any pharmacogenomic associations or gene variant effects. |
| popPK | Gidari_2024 | irrelevant | 2 | 0 | The study focuses on the virological efficacy (neutralization titers and EC50) of tixagevimab/cilgavimab against SARS-CoV-2 variants, not on its pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Gidari_2024 | not_relevant | 0 | 0 | The paper evaluates the efficacy of tixagevimab/cilgavimab against SARS-CoV-2 variants in immunocompromised patients but does not report any gene variant, genotype, or pharmacogenomic effect on PK/PD parameters. |
| popPK | Gonzalez-Bocco_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sotrovimab, not tixagevimab (tixagevimab is mentioned only as a co-administered prophylactic agent for a subset of patients). |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy outcomes (infection, symptoms) and does not report quantitative pharmacokinetic parameters for tixagevimab. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | The paper reports clinical and virological outcomes of monoclonal antibody therapy in immunocompromised patients but does not contain pharmacokinetic data or investigate human genetic variants affecting drug metabolism or response. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of rimteravimab (XVR011), a different antibody drug, and mentions tixagevimab only as a background comparator. |
| PGx | Jiménez_2026 | not_relevant | 0 | 0 | The paper reports on clinical outcomes and viral evolution of prolonged SARS-CoV-2 infection, noting viral mutations in tixagevimab epitopes, but does not report any pharmacokinetic or pharmacodynamic parameters (e.g., exposure levels, binding affinity, clearance) altered by a human gene variant. |
| popPK | Kekic_2026 | irrelevant | 2 | 0 | The paper applies a machine learning method to select covariates for tixagevimab but does not report any quantitative population PK parameter values (e.g., CL, V, ka estimates). |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of a different monoclonal antibody (HFB30132A), not tixagevimab. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper is a standard Phase 1 safety and PK study in a specific population (healthy Chinese adults) and does not investigate the impact of specific genetic variants or genotypes on drug pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2022 | not_relevant | 0 | 0 | The paper describes preclinical and Phase 1 data for AZD7442 (tixagevimab/cilgavimab) but does not report any pharmacogenomic analysis or link genetic variants to PK/PD parameters. |
| PGx | Massonnaud_2026 | not_relevant | 0 | 0 | The study reports pharmacokinetics and immunogenicity of tixagevimab but does not analyze the impact of gene variants or genotypes on these parameters. |
| PGx | Perrotta_2024 | not_relevant | 0 | 0 | The study evaluates the clinical impact of vaccination on mAb treatment outcomes in SARS-CoV-2 patients and does not investigate any pharmacogenomic (gene variant/genotype) effects on PK or PD parameters. |
| PGx | Reindl-Schwaighofer_2024 | not_relevant | 0 | 0 | The paper reports population-level pharmacokinetics and clinical efficacy of tixagevimab but does not assess the impact of specific genetic variants or genotypes on the drug's PK or PD parameters. |
| PGx | Roe_2023 | not_relevant | 0 | 0 | The paper analyzes the in vitro neutralization potency of tixagevimab against viral variants (viral genotypes), not the effect of human host gene variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Rycen_2024 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic effect (tacrolimus toxicity) due to a drug-drug interaction with ritonavir, but it does not report a pharmacogenomic effect (gene variant) on the PK or PD of tixagevimab. |
| popPK | Schilling_2024 | irrelevant | 0 | 0 | The paper reports viral clearance kinetics (pharmacodynamics) for COVID-19 antivirals, not the pharmacokinetic parameters (CL, V, etc.) of tixagevimab, which is only mentioned as a concurrent arm. |
| PGx | Schilling_2024 | not_relevant | 0 | 0 | The paper reports the antiviral efficacy (viral clearance) of molnupiravir and nirmatrelvir compared to no drug; tixagevimab was in a different arm not reported in the results, and no pharmacogenomic analysis is performed. |
| popPK | Stadler_2023 | irrelevant | 2 | 0 | The paper models the dose-response relationship between antibody concentration and efficacy, but does not report specific pharmacokinetic disposition parameters (CL, V) for tixagevimab. |
| PGx | Tebas_2025 | not_relevant | 0 | 0 | The paper reports the safety and pharmacokinetics of tixagevimab/cilgavimab in a general healthy adult population, but it does not report any pharmacogenomic effects or gene variant analyses that modify PK or PD parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on sotrovimab (STV) and other antivirals against SARS-CoV-2 and does not involve tixagevimab or report pharmacokinetic parameters. |
| popPK | Wongnak_2024 | irrelevant | 0 | 0 | The study analyzes SARS-CoV-2 viral clearance kinetics, not the pharmacokinetics of tixagevimab, and explicitly excludes tixagevimab/cilgavimab data from this analysis. |
| popPK | Wongnak_2024_2 | irrelevant | 0 | 0 | The paper reports viral clearance kinetics for SARS-CoV-2 in patients treated with various antivirals, but does not provide pharmacokinetic parameters (e.g., CL, V) for tixagevimab, which is only mentioned as an agent under analysis in the trial. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
