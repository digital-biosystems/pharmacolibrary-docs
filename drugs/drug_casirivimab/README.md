<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Casirivimab&quot;}]"></div>

# Casirivimab

- **generic name:** Casirivimab
- **ATC codes:** `J06BD07`
- **DrugBank:** [DB15941](https://go.drugbank.com/drugs/DB15941) · **PubChem:** not captured
- **groups:** approved, investigational

## About

It is an approved antiviral antibody, typically given together with another antibody of the same type, and has been used in many countries during the pandemic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99329744](https://www.wikidata.org/wiki/Q99329744) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:14 | 6:56 | 0/0/0 | 0/1/2 | 0/0/0 | 220,969/2,908 | einfracz / qwen3.8-27b | 32 | 3/16 | 32/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rao_2023_VL](drugs/drug_casirivimab/pd_Rao_2023_VL.md) | viral load biomarker turnover ← casirivimab | — | Rao R et al., A quantitative systems pharmacology mod…, NPJ systems biology and app… (2023) | [10.1038/s41540-023-00269-6](https://doi.org/10.1038/s41540-023-00269-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Stadler_2023_efficacy](drugs/drug_casirivimab/pd_Stadler_2023_efficacy.md) | protection from symptomatic SARS-CoV-2 infection ← casirivimab/imdevimab (normalized to IC50) · direct log-linear effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rao_2021_viral_load](drugs/drug_casirivimab/pd_Rao_2021_viral_load.md) | viral load ← casirivimab and imdevimab · direct Emax (saturable) effect | — | Rao R et al., A Quantitative Systems Pharmacology Mod… (2021) | [10.1101/2021.12.07.21267277](https://doi.org/10.1101/2021.12.07.21267277) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 96 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ballotta_2022 | not_relevant | 0 | 0 | The paper is a clinical case report on the efficacy of casirivimab in patients with CLL, focusing on viral clearance and clinical symptoms, and does not report any pharmacokinetic or pharmacodynamic parameters or their variation based on host gene variants/genotypes. |
| popPK | Gonzalez-Bocco_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sotrovimab, not casirivimab. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | This is a clinical efficacy review of monoclonal antibodies that reports clinical outcomes (infection, symptoms) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | The paper reports viral resistance mutations and clinical outcomes in immunocompromised patients, not pharmacogenomic effects of human gene variants on PK/PD parameters. |
| PGx | Iwasaki_2024 | not_relevant | 0 | 0 | The paper reports a case of delayed viral clearance due to Good syndrome (primary immunodeficiency), which is a disease phenotype, not a pharmacogenomic effect (germline or somatic gene variant). |
| PGx | Norton_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of casirivimab in pregnant women but does not investigate or report effects of gene variants/genotypes on PK or PD parameters. |
| PGx | Perrotta_2024 | not_relevant | 0 | 0 | The paper evaluates the impact of SARS-CoV-2 vaccination status on clinical outcomes and virological clearance, not the effect of a host gene variant on the pharmacokinetics or pharmacodynamics of casirivimab. |
| popPK | Rao_2021 | irrelevant | 2 | 0 | The paper is a QSP model of disease pathogenesis and treatment efficacy; while it uses PK parameters for casirivimab to model the drug's effect, it does not report new quantitative disposition parameters (CL, V, Q) for casirivimab itself as the primary subject of a PK study, and the specific PK values are referenced as coming from external sources (EUA/ref [24]) or supplementary figures not provided. |
| popPK | Rao_2023 | irrelevant | 1 | 0 | The paper describes a QSP model of viral dynamics and immune response for COVID-19 treatment, mentioning REGEN-COV only as a therapeutic intervention to simulate efficacy, without reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for casirivimab. |
| PGx | Schilling_2023 | not_relevant | 0 | 0 | The paper evaluates antiviral efficacy (viral clearance) of ivermectin and casirivimab but does not investigate pharmacogenomic effects or gene variants on PK/PD parameters. |
| PGx | Taha_2021 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of casirivimab in clearing persistent infection in immunodeficient patients and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Tatham_2024 | not_relevant | 0 | 0 | The paper is a preclinical study in mice assessing viral load and histopathology following treatment; it does not report a pharmacogenomic effect (human genetic variant impact) on PK/PD parameters. |
| PGx | Wilhelm_2022 | not_relevant | 0 | 0 | The study reports viral escape from monoclonal antibody neutralization due to viral mutations, not the effect of human gene variants on the PK or PD of casirivimab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
