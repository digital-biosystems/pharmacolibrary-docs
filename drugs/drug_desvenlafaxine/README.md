<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desvenlafaxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desvenlafaxine_MangasSanjun2023_reference&quot;,&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desvenlafaxine_Nichols2018_reference&quot;,&quot;label&quot;:&quot;Nichols_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_Nichols2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desvenlafaxine_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# desvenlafaxine

- **generic name:** desvenlafaxine
- **ATC codes:** `N06AX23`
- **DrugBank:** [DB06700](https://go.drugbank.com/drugs/DB06700)
- **groups:** approved, investigational

## About

**Description.** Desvenlafaxine (O-desmethylvenlafaxine) is the 0-demetyhlated active metabolite of [venlafaxine]. Like its parent drug, desvenlafaxine is also an antidepressant belonging to the class of serotonin-norepinephrine reuptake inhibitor (SNRI) class.[A261266,A261266] It was approved by the FDA in 2008 for the treatment of adults with major depressive disorder (MDD).[L6016,A261271]

MDD is a highly prevalent psychiatric disorder, with a lifetime prevalence estimate of 16% in the US alone and 12.8% in Europe. Although the exact mechanism of pathophysiology is still unknown, imbalances or deficiencies of monoamines have been heavily implicated, thus the rationale behind the use of SNRI to treat MDD.[A261271] Desvenlafaxine has a very similar pharmacological, efficacy, and safety profile as [venlafaxine]. The major difference is the potential for drug interaction since venlafaxine is mainly metabolized by CYP2D6 while desvenlafaxine is conjugated by UGT; therefore, desvenlafaxine is less likely to cause drug-drug interaction when taken with medications affecting the CYP2D6 pathway.[A261266]

**Indication.** Desvenlafaxine is indicated for the treatment of major depressive disorder in adults.[L47936] It has also been used off-label to treat hot flashes in menopausal women.[A261166]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 20:16 | 6:38 | 0/1/2 | 0/0/0 | 0/0/0 | 98,487/16,629 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 1/4 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> | [Mangas-Sanjuán_2023_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md) | Mangas-Sanjuán V et al., Alternative Pharmacokinetic Metrics in…, Pharmaceutics (2023) | [10.3390/pharmaceutics15020409](https://doi.org/10.3390/pharmaceutics15020409) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Nichols_2018_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_Nichols2018_reference.md) | Nichols AI et al., Population Pharmacokinetics of Desvenla…, Clinical pharmacology in dr… (2018) | [10.1002/cpdd.419](https://doi.org/10.1002/cpdd.419) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2022_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_Wang2022_reference.md) | Wang Z et al., Joint population pharmacokinetic modeli…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.978202](https://doi.org/10.3389/fphar.2022.978202) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=desvenlafaxine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate, `UGT2B17` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate, `UGT2B17` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Desvenlafaxine is mainly excreted in the urine.[A6991] Approximately 45% of desvenlafaxine…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor), SLC6A3 (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nichols_2018.pdf` | Nichols AI et al., Population Pharmacokinetics of Desvenla…, Clinical pharmacology in dr… (2018) | popPK | 10 | [10.1002/cpdd.419](https://doi.org/10.1002/cpdd.419) | [29228473](https://pubmed.ncbi.nlm.nih.gov/29228473) | The paper explicitly reports a population pharmacokinetic model for desvenlafaxine in humans with quantitative parameters (CL/F, V/F, ka) and full covariate equations. |

<sub>queue written 2026-09-23T20:10:52.858149+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2022 | irrelevant | not captured | not captured | The paper focuses on venlafaxine as the subject drug and only reports noncompartmental summary statistics for desvenlafaxine as a metabolite, with no population or compartmental PK modeling provided. |
| popPK | Alves_2026 | irrelevant | 0 | 0 | The study focuses on venlafaxine and its metabolite O-desmethylvenlafaxine (desvenlafaxine) as a metabolite, not as the subject drug, and no specific PK parameters for desvenlafaxine are reported. |
| popPK | Atkinson_2018 | irrelevant | not captured | not captured | The paper focuses exclusively on clinical efficacy and safety, explicitly stating that population pharmacokinetic results will be reported separately. |
| popPK | Katzman_2017 | irrelevant | not captured | not captured | The paper exclusively analyzes clinical efficacy and time to symptom improvement in depression trials, containing no pharmacokinetic parameters or modeling for desvenlafaxine. |
| popPK | Kilpinen_2023 | irrelevant | 0 | 0 | The paper is an environmental study on micropollutants in wastewater and does not report pharmacokinetic parameters for desvenlafaxine. |
| PD | Kilpinen_2023 | not_relevant | 0 | 0 | The paper is an environmental study on micropollutants in wastewater and does not report any pharmacodynamic or exposure-response relationships for desvenlafaxine. |
| popPK | Lindauer_2008 | irrelevant | 0 | 0 | The study focuses on venlafaxine and its metabolite O-desmethylvenlafaxine, not desvenlafaxine. |
| popPK | Men_2024 | irrelevant | 0 | 0 | The paper is about venlafaxine and O-desmethylvenlafaxine, not desvenlafaxine as the subject drug. |
| popPK | Pitts_2025 | irrelevant | 0 | 0 | The paper studies the antiviral obeldesivir (ODV) against RSV and does not report pharmacokinetic parameters for desvenlafaxine. |
| PD | Pitts_2025 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for obeldesivir (ODV), not desvenlafaxine. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study is an environmental toxicology/ecology paper on algal removal of venlafaxine and its metabolite, not a pharmacokinetic study reporting disposition parameters for desvenlafaxine. |
| popPK | Weihs_2018 | irrelevant | not captured | not captured | The paper focuses on clinical efficacy and safety, explicitly stating that pharmacokinetic analyses will be reported separately. |
| popPK | Xiang_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability meta-analysis of antidepressants in pediatric MDD, not a pharmacokinetic study, and contains no PK parameters for desvenlafaxine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 20:10 UTC</sub>
