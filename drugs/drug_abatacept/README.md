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
| 2026-10-06 23:33 | 1:14 | 0/2/0 | 2/0/1 | 0/0/0 | 119,609/4,400 | einfracz / qwen3.8-27b | 5 | 1/4 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Emery_2025_reference](drugs/drug_abatacept/Abatacept_Emery2025_reference.md) | — | 1-compartment (no model) | 0 | Emery P et al., Association Between Abatacept Exposure…, The Journal of rheumatology (2025) | [10.3899/jrheum.2024-0498](https://doi.org/10.3899/jrheum.2024-0498) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Gandhi_2021_reference](drugs/drug_abatacept/Abatacept_Gandhi2021_reference.md) | — | 2-compartment (no model) | 8 (+8 cov.) | Gandhi Y et al., Model-Based Selection and Recommendatio…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Li_2019_DAS28](drugs/drug_abatacept/pd_Li_2019_DAS28.md) | Disease Activity Score in 28 joints ← abatacept · direct Emax (saturable) effect | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roy_2007_IL_6](drugs/drug_abatacept/pd_Roy_2007_IL_6.md) | interleukin-6 ← abatacept · indirect response — drug inhibits the loss of interleukin-6 | — | Roy A et al., Modeling and simulation of abatacept ex…, Journal of clinical pharmac… (2007) | [10.1177/0091270007307573](https://doi.org/10.1177/0091270007307573) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2019_ACR20_50_70](drugs/drug_abatacept/pd_Li_2019_ACR20_50_70.md) | American College of Rheumatology response criteria for 20/50/70% improvement ← abatacept · categorical (graded) response model | — | Li X et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1308](https://doi.org/10.1002/jcph.1308) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lon_2013_DIS](drugs/drug_abatacept/pd_Lon_2013_DIS.md) | paw swelling biomarker turnover ← abatacept | — | Lon HK et al., Modeling pharmacokinetics/pharmacodynam…, Journal of pharmacokinetics… (2013) | [10.1007/s10928-013-9341-1](https://doi.org/10.1007/s10928-013-9341-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=abatacept) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CD80 (target), CD86 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:32 UTC</sub>
