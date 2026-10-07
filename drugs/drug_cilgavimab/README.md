<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Cilgavimab&quot;}]"></div>

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
| 2026-10-07 14:25 | 7:37 | 0/0/0 | 1/1/0 | 0/0/0 | 266,805/3,561 | einfracz / qwen3.8-27b | 29 | 4/22 | 29/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gidari_2024_SARS_CoV_2_viral_titration](drugs/drug_cilgavimab/pd_Gidari_2024_SARS_CoV_2_viral_titration.md) | SARS-CoV-2 viral titration ← tixagevimab/cilgavimab · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Tixagevimab/Cilgavimab: Still a Valid P…, Viruses (2024) | [10.3390/v16030354](https://doi.org/10.3390/v16030354) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gidari_2024_SARS_CoV_2_viral_titration_EG_5](drugs/drug_cilgavimab/pd_Gidari_2024_SARS_CoV_2_viral_titration_EG_5.md) | SARS-CoV-2 viral titration (EG.5) ← tixagevimab/cilgavimab · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Tixagevimab/Cilgavimab: Still a Valid P…, Viruses (2024) | [10.3390/v16030354](https://doi.org/10.3390/v16030354) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Stadler_2023_efficacy](drugs/drug_cilgavimab/pd_Stadler_2023_efficacy.md) | protection from symptomatic SARS-CoV-2 infection ← cilgavimab/tixagevimab · direct Emax (saturable) effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |

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
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Basoulis_2024 | not_relevant | 0 | 0 | The paper describes clinical efficacy and safety outcomes but does not report pharmacokinetic or pharmacodynamic parameters influenced by genetic variants. |
| PGx | Beaulieu_2024 | not_relevant | 0 | 0 | The paper reports the antiviral efficacy of Evusheld (tixagevimab + cilgavimab) based on SARS-CoV-2 viral variants, not human gene variants affecting PK/PD. |
| PGx | Bender_2025 | not_relevant | 0 | 0 | The paper reports general pharmacokinetic and pharmacodynamic data for tixagevimab/cilgavimab, but does not analyze gene variants or genotypes affecting these parameters. |
| PGx | Cai_2024 | not_relevant | 0 | 0 | The paper describes the neutralization activity, safety, and general pharmacokinetics of AZD3152 and the AZD5156 combination, but does not report any pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Clegg_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of cilgavimab and tixagevimab with non-genetic covariates (e.g., body weight, sex, diabetes), and does not analyze gene variants or genotypes. |
| PGx | Forte-Soto_2023 | not_relevant | 0 | 0 | The paper reports a standard Phase 1 safety and PK study in healthy adults with no mention of genetic variants or pharmacogenomic analyses. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | The paper is a systematic review of efficacy outcomes (infection rates, symptoms) for SARS-CoV-2 prophylaxis and does not report quantitative pharmacokinetic disposition parameters for cilgavimab. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes and viral resistance mutations to SARS-CoV-2, not human pharmacogenomic effects on the drug's PK or PD. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of XVR011 (rimteravimab), not cilgavimab, which is only mentioned in the introduction as a different therapeutic antibody. |
| PGx | Jiménez_2026 | not_relevant | 0 | 0 | The paper describes viral evolution and resistance mutations in patients, but does not report pharmacogenomic effects on cilgavimab PK/PD parameters. |
| popPK | Kekic_2026 | irrelevant | 2 | 0 | This is a methodological study on covariate selection using machine learning; it cites cilgavimab as a dataset but does not report quantitative PK parameter values (CL, V, etc.), which are in the referenced original publication [24]. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for HFB30132A, not cilgavimab. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper reports a Phase 1 study in healthy adults and contains no genetic variants, genotypes, or pharmacogenomic data. |
| PGx | Loo_2022 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics and efficacy in non-human primates and healthy humans but does not report any genetic variants, genotypes, or phenotypes influencing the drug's PK or PD. |
| PGx | Massonnaud_2026 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics and immunogenicity of AZD7442 but does not analyze the effect of any gene variant or genotype on these parameters. |
| PGx | Roe_2023 | not_relevant | 0 | 0 | The paper describes viral mutations affecting antibody neutralization (viral resistance), not human host pharmacogenomics affecting drug PK/PD. |
| popPK | Schilling_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for SARS-CoV-2 (viral clearance), not for the drug cilgavimab, which is only listed as a comparator treatment group not included in the reported results. |
| PGx | Schilling_2024 | not_relevant | 0 | 0 | The paper evaluates the antiviral efficacy of molnupiravir and nirmatrelvir in COVID-19 patients and does not report any pharmacogenomic effects (gene variant/genotype/phenotype) on the PK or PD of cilgavimab. |
| PGx | Tebas_2025 | not_relevant | 0 | 0 | The paper describes the safety and pharmacokinetics of DNA-encoded monoclonal antibodies in healthy adults but contains no data on gene variants, genotypes, or pharmacogenomic influences on the drug's parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on in vitro efficacy of drug combinations for COVID-19 (specifically sotrovimab) and does not mention cilgavimab or report its pharmacokinetic parameters. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper studies S-RBD binding compounds (DOTAP, CTM-HCl, etc.) and only mentions cilgavimab in the introduction as a monotherapy with limited activity; it contains no pharmacokinetic data for cilgavimab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
