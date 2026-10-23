<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;abatacept&quot;}]"></div>

# abatacept

- **generic name:** abatacept
- **ATC codes:** `L04AA24`
- **DrugBank:** [DB01281](https://go.drugbank.com/drugs/DB01281) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Abatacept is an immunosuppressive, disease-modifying antirheumatic drug used to treat forms of arthritis, including rheumatoid, psoriatic, and juvenile arthritis. It is an approved medicine authorised in the European Union, with additional investigational uses being studied.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2697833](https://www.wikidata.org/wiki/Q2697833) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Emery_2025_reference](drugs/drug_abatacept/Abatacept_Emery2025_reference.md) | — | 1-compartment (no model) | 0 | Emery P et al., Association Between Abatacept Exposure…, The Journal of rheumatology (2025) | [10.3899/jrheum.2024-0498](https://doi.org/10.3899/jrheum.2024-0498) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Gandhi_2021_reference](drugs/drug_abatacept/Abatacept_Gandhi2021_reference.md) | — | 2-compartment (no model) | 8 (+8 cov.) | Gandhi Y et al., Model-Based Selection and Recommendatio…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Li_2019_DAS28](drugs/drug_abatacept/pd_Li_2019_DAS28.md) | Disease Activity Score in 28 joints ← abatacept · direct Emax (saturable) effect | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Roy_2007_IL_6](drugs/drug_abatacept/pd_Roy_2007_IL_6.md) | interleukin-6 ← abatacept · indirect response — drug inhibits the loss of interleukin-6 | — | Roy A et al., Modeling and simulation of abatacept ex…, Journal of clinical pharmac… (2007) | [10.1177/0091270007307573](https://doi.org/10.1177/0091270007307573) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2019_ACR20_50_70](drugs/drug_abatacept/pd_Li_2019_ACR20_50_70.md) | American College of Rheumatology response criteria for 20/50/70% improvement ← abatacept · categorical (graded) response model | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lon_2013_DIS](drugs/drug_abatacept/pd_Lon_2013_DIS.md) | paw swelling biomarker turnover ← abatacept | — | Lon HK et al., Modeling pharmacokinetics/pharmacodynam…, Journal of pharmacokinetics… (2013) | [10.1007/s10928-013-9341-1](https://doi.org/10.1007/s10928-013-9341-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:33 | 1:14 | 0/2/0 | 2/0/1 | 0/0/0 | 119,609/4,400 | einfracz / qwen3.8-27b | 5 | 1/4 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2007.pdf` | Roy A et al., Modeling and simulation of abatacept ex…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007307573](https://doi.org/10.1177/0091270007307573) | [17962428](https://pubmed.ncbi.nlm.nih.gov/17962428) | The paper describes a population pharmacokinetic model for abatacept in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Takahashi_2023.pdf` | Takahashi T et al., Higher abatacept exposure after transpl…, Blood (2023) | popPK | 10 | [10.1182/blood.2023020035](https://doi.org/10.1182/blood.2023020035) | [37319437](https://pubmed.ncbi.nlm.nih.gov/37319437) | The paper reports a population PK model structure (2-compartment) and exposure-response relationships for abatacept, but specific numeric parameter estimates (CL, V, Q) are not present in the provided text, likely residing in tables or supplementary material. |
| `Balevic_2024.pdf` | Balevic SJ et al., Abatacept Pharmacokinetics and Exposure…, JAMA network open (2024) | popPK | 9 | [10.1001/jamanetworkopen.2024.7615](https://doi.org/10.1001/jamanetworkopen.2024.7615) | [38662372](https://pubmed.ncbi.nlm.nih.gov/38662372) | The study is a population PK analysis of abatacept in humans, but the specific quantitative clearance and volume parameters are not explicitly listed in the provided abstract text (only AUC and qualitative trends are given). |
| `Lon_2013.pdf` | Lon HK et al., Modeling pharmacokinetics/pharmacodynam…, Journal of pharmacokinetics… (2013) | popPK | 9 | [10.1007/s10928-013-9341-1](https://doi.org/10.1007/s10928-013-9341-1) | [24233383](https://pubmed.ncbi.nlm.nih.gov/24233383) | This is a population PK study in rats with a quantitative model, but the abstract lacks specific numeric values for CL, V, etc., implying they are in the full text or tables not provided. |

<sub>queue written 2026-10-06T23:32:25.864270+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atienza-Mateo_2024 | irrelevant | 0 | 0 | The paper is a clinical observational study evaluating the therapeutic effectiveness of abatacept in rheumatoid arthritis-associated interstitial lung disease, with no pharmacokinetic data, parameters, or models reported. |
| popPK | Bae_2024 | irrelevant | 0 | 0 | This is a clinical study analyzing quantitative CT imaging scores in interstitial lung disease, not a pharmacokinetic study reporting disposition parameters for abatacept. |
| popPK | Balevic_2024 | relevant | 9 | 4 | The study is a population PK analysis of abatacept in humans, but the specific quantitative clearance and volume parameters are not explicitly listed in the provided abstract text (only AUC and qualitative trends are given). |
| popPK | Ebina_2025 | irrelevant | 0 | 0 | The study is a clinical effectiveness and safety retrospective cohort analysis (ANSWER cohort) evaluating treatment retention and disease activity changes, containing no pharmacokinetic parameters such as clearance, volume, or half-life for abatacept. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis treatments, not a pharmacokinetic study, and contains no PK parameters for abatacept. |
| popPK | Lon_2013 | relevant | 9 | 3 | This is a population PK study in rats with a quantitative model, but the abstract lacks specific numeric values for CL, V, etc., implying they are in the full text or tables not provided. |
| popPK | Roy_2007 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for abatacept in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Salvato_2026 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing JAK inhibitors and biologics (including abatacept) in rheumatoid arthritis, reporting no pharmacokinetic parameters. |
| popPK | Takahashi_2023 | relevant | 10 | 3 | The paper reports a population PK model structure (2-compartment) and exposure-response relationships for abatacept, but specific numeric parameter estimates (CL, V, Q) are not present in the provided text, likely residing in tables or supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:32 UTC</sub>
