<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;abatacept&quot;}]"></div>

# abatacept

- **generic name:** abatacept
- **ATC codes:** `L04AA24`
- **DrugBank:** [DB01281](https://go.drugbank.com/drugs/DB01281) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Abatacept is an immunosuppressive, disease-modifying antirheumatic drug used to treat forms of arthritis, including rheumatoid, psoriatic, and juvenile arthritis. It is an approved medicine authorised in the European Union, with additional investigational uses being studied.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2697833](https://www.wikidata.org/wiki/Q2697833) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:21 | 3:33 | 0/1/2 | 3/0/0 | 0/0/0 | 198,334/11,894 | einfracz / qwen3.8-27b | 5 | 1/4 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Emery_2025_reference](drugs/drug_abatacept/Abatacept_Emery2025_reference.md) | — | 1-compartment (no model) | 8 | Emery P et al., Association Between Abatacept Exposure…, The Journal of rheumatology (2025) | [10.3899/jrheum.2024-0498](https://doi.org/10.3899/jrheum.2024-0498) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30, Q1, Q63 — no SI value to build…</sub><br><sub>route_to: `human_review`</sub> | [Li_2019_reference](drugs/drug_abatacept/Abatacept_Li2019_reference.md) | — | 2-compartment (no model) | 5 (+2 cov.) | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.344). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gandhi_2021_reference](drugs/drug_abatacept/Abatacept_Gandhi2021_reference.md) | — | 2-compartment (no model) | 6 (+9 cov.) | Gandhi Y et al., Model-Based Selection and Recommendatio…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> | [Li_2019_DAS28](drugs/drug_abatacept/pd_Li_2019_DAS28.md) | Disease Activity Score in 28 joints ← abatacept · direct Emax (saturable) effect | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lon_2013_DIS](drugs/drug_abatacept/pd_Lon_2013_DIS.md) | paw swelling ← abatacept · indirect response — drug inhibits the production of paw swelling | — | Lon HK et al., Modeling pharmacokinetics/pharmacodynam…, Journal of pharmacokinetics… (2013) | [10.1007/s10928-013-9341-1](https://doi.org/10.1007/s10928-013-9341-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Roy_2007_IL_6](drugs/drug_abatacept/pd_Roy_2007_IL_6.md) | interleukin (IL)-6 ← abatacept · indirect response — drug inhibits the production of interleukin (IL)-6 | — | Roy A et al., Modeling and simulation of abatacept ex…, Journal of clinical pharmac… (2007) | [10.1177/0091270007307573](https://doi.org/10.1177/0091270007307573) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Li_2019_ACR20_50_70](drugs/drug_abatacept/pd_Li_2019_ACR20_50_70.md) | American College of Rheumatology response criteria for 20/50/70% improvement ← abatacept · categorical (graded) response model | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=abatacept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CD80 (target), CD86 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2007.pdf` | Roy A et al., Modeling and simulation of abatacept ex…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007307573](https://doi.org/10.1177/0091270007307573) | [17962428](https://pubmed.ncbi.nlm.nih.gov/17962428) | The study is a population PK analysis of abatacept describing a 2-compartmental model with weight-dependent clearance, but the specific numeric parameter values (e.g., typical CL, V) are not listed in the provided abstract/evidence. |
| `Takahashi_2023.pdf` | Takahashi T et al., Higher abatacept exposure after transpl…, Blood (2023) | popPK | 10 | [10.1182/blood.2023020035](https://doi.org/10.1182/blood.2023020035) | [37319437](https://pubmed.ncbi.nlm.nih.gov/37319437) | The paper describes a population PK analysis of abatacept using a 2-compartment model, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided evidence. |
| `Balevic_2024.pdf` | Balevic SJ et al., Abatacept Pharmacokinetics and Exposure…, JAMA network open (2024) | popPK | 9 | [10.1001/jamanetworkopen.2024.7615](https://doi.org/10.1001/jamanetworkopen.2024.7615) | [38662372](https://pubmed.ncbi.nlm.nih.gov/38662372) | The paper describes a population PK study for abatacept in humans and reports exposure metrics (AUC) and qualitative clearance trends, but specific quantitative PK parameter values (e.g., median CL, V, half-life) are likely in supplementary material or figures not fully detailed in the abstract text provided. |
| `Lon_2013.pdf` | Lon HK et al., Modeling pharmacokinetics/pharmacodynam…, Journal of pharmacokinetics… (2013) | popPK | 8 | [10.1007/s10928-013-9341-1](https://doi.org/10.1007/s10928-013-9341-1) | [24233383](https://pubmed.ncbi.nlm.nih.gov/24233383) | The abstract describes a population PK/PD study in rats but only provides the bioavailability (F=59.2%) and model structure, omitting the specific quantitative parameter values (CL, V, etc.) for abatacept. |

<sub>queue written 2026-10-15T00:18:40.656912+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atienza-Mateo_2024 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study of abatacept in rheumatoid arthritis-associated interstitial lung disease and does not report pharmacokinetic parameters. |
| popPK | Bae_2024 | irrelevant | 0 | 0 | The study analyzes high-resolution CT imaging scores and pulmonary function tests in a clinical trial for myositis-associated ILD, but it does not report any pharmacokinetic parameters (such as clearance or volume) for abatacept. |
| popPK | Balevic_2024 | relevant | 9 | 3 | The paper describes a population PK study for abatacept in humans and reports exposure metrics (AUC) and qualitative clearance trends, but specific quantitative PK parameter values (e.g., median CL, V, half-life) are likely in supplementary material or figures not fully detailed in the abstract text provided. |
| popPK | Ebina_2025 | irrelevant | 0 | 0 | This is a clinical effectiveness study evaluating treatment retention and disease activity indices, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis treatments and does not report any pharmacokinetic parameters (CL, V, ka, half-life) for abatacept. |
| popPK | Lon_2013 | irrelevant | 8 | 1 | The abstract describes a population PK/PD study in rats but only provides the bioavailability (F=59.2%) and model structure, omitting the specific quantitative parameter values (CL, V, etc.) for abatacept. |
| popPK | Roy_2007 | relevant | 10 | 2 | The study is a population PK analysis of abatacept describing a 2-compartmental model with weight-dependent clearance, but the specific numeric parameter values (e.g., typical CL, V) are not listed in the provided abstract/evidence. |
| popPK | Salvato_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial in rheumatoid arthritis and does not contain pharmacokinetic data or disposition parameters for abatacept. |
| popPK | Takahashi_2023 | relevant | 10 | 2 | The paper describes a population PK analysis of abatacept using a 2-compartment model, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:18 UTC</sub>
