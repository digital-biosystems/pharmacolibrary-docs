<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Schlachter_2026_2_MMD&quot;,&quot;label&quot;:&quot;Schlachter_2026_2 \u00b7 MMD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# atogepant

- **generic name:** atogepant
- **ATC codes:** `N02CD07`
- **DrugBank:** [DB16098](https://go.drugbank.com/drugs/DB16098) · **PubChem:** not captured
- **molar mass:** 603.525 g/mol (C29H23F6N5O3) — DrugBank
- **groups:** approved, investigational

## About

Atogepant is a CGRP antagonist used to treat migraine. It is an approved medicine, authorised in the European Union for migraine disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76797798](https://www.wikidata.org/wiki/Q76797798) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atogepant | parent | 603.525 | C29H23F6N5O3 | DrugBank | — | Schlachter_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:25 | 2:13 | 1/0/2 | 0/0/1 | 0/0/0 | 191,403/11,266 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.591). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Schlachter_2026_phase_2_modela](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md) | ▶ model + simulator | 2-compartment, oral | 8 (+2 cov.) | Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Schlachter_2026_phase_1_model](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.654). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q82 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Schlachter_2026_phase_3_modela](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md) | — | 3-compartment (no model) | 9 (+6 cov.) | Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Schlachter_2026_2_MMD](drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md) | Monthly migraine days ← atogepant · direct Emax (saturable) effect | ▶ model + simulator | Schlachter L et al., Exposure-Response Modeling of Monthly M…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70154](https://doi.org/10.1002/psp4.70154) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=atogepant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boinpally_2023.pdf` | Boinpally R et al., Effects of CYP3A4 inhibition/induction…, Pain management (2023) | pgx | 7 | [10.2217/pmt-2023-0056](https://doi.org/10.2217/pmt-2023-0056) | [37650778](https://www.ncbi.nlm.nih.gov/pubmed/37650778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Boinpally_2024.pdf` | Boinpally R et al., Pharmacokinetics and Safety of Atogepan…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1407](https://doi.org/10.1002/cpdd.1407) | [38702918](https://www.ncbi.nlm.nih.gov/pubmed/38702918) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:23:51.711531+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boinpally_2023 | irrelevant | 3 | 2 | This is a drug-drug interaction study reporting only summary exposure metrics (AUC/Cmax ratios) rather than a compartmental or population PK model with quantitative disposition parameters (CL, V, ka). |
| PGx | Boinpally_2023_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (enzyme inhibition/induction) rather than effects of genetic variants on pharmacokinetics. |
| PGx | Boinpally_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (quinidine) and does not report any gene variants or pharmacogenomic factors affecting atogepant pharmacokinetics. |
| popPK | Boinpally_2026 | irrelevant | 3 | 0 | The study measures CNS penetration (CSF-to-plasma ratios) and descriptive plasma concentrations, but does not report compartmental population-PK parameters (CL, V, Q, ka) for atogepant. |
| PD | Boinpally_2026 | not_relevant | 2 | 1 | The paper reports PK parameters (CSF/plasma ratios) and cites a preclinical EC50 value, but does not report any clinical exposure-response or dose-response analysis with numeric PD parameters for atogepant. |
| popPK | Iannone_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing sleep quality and adverse events in migraine patients, not a pharmacokinetic study, and contains no disposition parameters (CL, V, ka, etc.). |
| popPK | Iannone_2026 | irrelevant | 0 | 0 | The study is a clinical evaluation of migraine effectiveness and tolerability, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction involving CYP3A4 inhibitors but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Schlachter_2026_2 | irrelevant | 0 | 0 | The paper presents an exposure-response (PD) model for monthly migraine days, not a pharmacokinetic model for atogepant (no CL, V, ka, or Q parameters are estimated for the drug itself). |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review discussing drug-drug interactions (Paxlovid) and general pharmacokinetic considerations, but it does not report any data or findings regarding how specific gene variants or genotypes affect the pharmacokinetics or pharmacodynamics of atogepant. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions mediated by CYP3A, not pharmacogenomic variants or genotypes affecting atogepant PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:23 UTC</sub>
