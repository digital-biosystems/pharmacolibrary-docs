<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;}]"></div>

# baricitinib

- **generic name:** baricitinib
- **ATC codes:** `L04AA37`, `L04AF02`
- **DrugBank:** [DB11817](https://go.drugbank.com/drugs/DB11817) · **PubChem:** [CID 44205240](https://pubchem.ncbi.nlm.nih.gov/compound/44205240)
- **molar mass:** 371.42 g/mol (C16H17N7O2S) — DrugBank
- **groups:** approved, investigational

## About

Baricitinib is a JAK inhibitor used to treat rheumatoid arthritis and, in some settings, COVID-19. It is an approved medicine and is authorised in the European Union for rheumatoid arthritis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4860707](https://www.wikidata.org/wiki/Q4860707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| baricitinib | parent | 371.42 | C16H17N7O2S | DrugBank | [44205240](https://pubchem.ncbi.nlm.nih.gov/compound/44205240) | Decker_2024, Decker_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:49 | 3:26 | 0/4/0 | 2/0/0 | 0/0/0 | 268,085/13,929 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_jia_a](drugs/drug_baricitinib/Baricitinib_Decker2024_jia_a.md) | — | 3-compartment (no model) | 9 | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_population_mean_see](drugs/drug_baricitinib/Baricitinib_Decker2024_population_mean_see.md) | — | 3-compartment (no model) | 9 (+2 cov.) | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_ra_b](drugs/drug_baricitinib/Baricitinib_Decker2024_ra_b.md) | — | 3-compartment (no model) | 7 | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2026_reference](drugs/drug_baricitinib/Baricitinib_Decker2026_reference.md) | — | 3-compartment (no model) | 9 (+1 cov.) | Decker RL et al., A Population Pharmacokinetic and Exposu…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01563-8](https://doi.org/10.1007/s40262-025-01563-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vaskeikina_2026_mRSS](drugs/drug_baricitinib/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← baricitinib · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2017_Hgb](drugs/drug_baricitinib/pd_Zhang_2017_Hgb.md) | Hemoglobin ← baricitinib · delayed effect through transit (transduction) compartments | — | Zhang X et al., Dose/Exposure-Response Modeling to Supp…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12251](https://doi.org/10.1002/psp4.12251) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2017_ACRL](drugs/drug_baricitinib/pd_Zhang_2017_ACRL.md) | ACR20/50/70 response rate (latent variable ACRL) ← baricitinib · indirect response — drug inhibits the production of ACR20/50/70 response rate (latent variable ACRL) | — | Zhang X et al., Dose/Exposure-Response Modeling to Supp…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12251](https://doi.org/10.1002/psp4.12251) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=baricitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor/substrate, `SLC47A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), TYK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2018.pdf` | Kim H et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical pharmacology and t… (2018) | popPK | 9 | [10.1002/cpt.936](https://doi.org/10.1002/cpt.936) | [29134648](https://pubmed.ncbi.nlm.nih.gov/29134648) | The paper describes a population PK model for baricitinib and reports summary exposure metrics (AUC) and qualitative covariate effects, but specific quantitative parameter estimates (CL, V, Q, ka, t1/2) are not provided in the evidence text. |

<sub>queue written 2026-10-06T23:46:36.201202+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2025 | irrelevant | 0 | 0 | The paper is a clinical analysis of glucocorticoid sparing effects in RA patients and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Bayat_2022 | irrelevant | 0 | 0 | The study is a clinical efficacy and drug persistence analysis in rheumatoid arthritis patients and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Kim_2018 | relevant | 9 | 2 | The paper describes a population PK model for baricitinib and reports summary exposure metrics (AUC) and qualitative covariate effects, but specific quantitative parameter estimates (CL, V, Q, ka, t1/2) are not provided in the evidence text. |
| popPK | Qi_2025 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for vitiligo treatment and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Rotbain_2023 | irrelevant | 0 | 0 | The study measures the effect of baricitinib on a biomarker (suPAR) and does not report pharmacokinetic disposition parameters. |
| popPK | Sonomoto_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety comparison study that does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Tachet_2025 | irrelevant | 2 | 0 | This is a study protocol that describes the methods for a future pharmacokinetic study; it contains no actual numerical parameter values or model estimates. |
| popPK | Temiz_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study in rheumatoid arthritis and reports no pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study, and contains no PK parameters for baricitinib. |
| popPK | Zhang_2017 | relevant | 8 | 2 | The study reports a population PK model for baricitinib and estimates a terminal half-life of ~14 hours, but the detailed numeric parameters (CL, V, Q, ka) are explicitly stated to be in Supplementary Table S1 which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:46 UTC</sub>
