<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;omalizumab&quot;}]"></div>

# omalizumab

- **generic name:** omalizumab
- **ATC codes:** `R03DX05`
- **DrugBank:** [DB00043](https://go.drugbank.com/drugs/DB00043) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Omalizumab, a monoclonal antibody, is used to treat allergic conditions such as asthma and chronic urticaria. It is authorised in the European Union for asthma, urticaria, and rhinitis, and is used in clinical practice for these allergic airway and skin conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415392](https://www.wikidata.org/wiki/Q415392) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 2:17 | 0/3/1 | 2/0/0 | 0/0/0 | 198,498/9,406 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q331, Q67 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) | — | 1-compartment (no model) | 7 (+5 cov.) | Oh E et al., PK/PD modeling to characterize placebo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12953](https://doi.org/10.1002/psp4.12953) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hayashi_2007_reference](drugs/drug_omalizumab/Omalizumab_Hayashi2007_reference.md) | — | general linear (no model) | 3 | Hayashi N et al., A mechanism-based binding model for the…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2006.02803.x](https://doi.org/10.1111/j.1365-2125.2006.02803.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2022_chinese_subjects](drugs/drug_omalizumab/Omalizumab_Li2022_chinese_subjects.md) | — | general linear (no model) | 8 | Li J et al., Efficacy and safety of omalizumab in pa…, Asian Pacific journal of al… (2022) | [10.12932/AP-260819-0630](https://doi.org/10.12932/AP-260819-0630) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2022_predominantly_caucasian_subjects](drugs/drug_omalizumab/Omalizumab_Li2022_predominantly_caucasian_subjects.md) | — | general linear (no model) | 8 | Li J et al., Efficacy and safety of omalizumab in pa…, Asian Pacific journal of al… (2022) | [10.12932/AP-260819-0630](https://doi.org/10.12932/AP-260819-0630) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Oh_2023_itch_severity_score](drugs/drug_omalizumab/pd_Oh_2023_itch_severity_score.md) | weekly itch severity score ← total omalizumab · delayed effect through an effect compartment | — | Oh E et al., PK/PD modeling to characterize placebo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12953](https://doi.org/10.1002/psp4.12953) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_2024_CFB_UAS7](drugs/drug_omalizumab/pd_Zhao_2024_CFB_UAS7.md) | change from baseline in Urticaria Activity Score ← omalizumab · inhibition effect | — | Zhao A et al., Time-course and dose-effect of omalizum…, European journal of clinica… (2024) | [10.1007/s00228-024-03725-2](https://doi.org/10.1007/s00228-024-03725-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=omalizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FCER1G (modulator), IGHE (antibody), IGHE (neutralizer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayashi_2007.pdf` | Hayashi N et al., A mechanism-based binding model for the…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2006.02803.x](https://doi.org/10.1111/j.1365-2125.2006.02803.x) | [17096680](https://pubmed.ncbi.nlm.nih.gov/17096680) | The evidence provides quantitative population pharmacokinetic parameters (clearance, volume of distribution) and half-life for omalizumab in the abstract. |
| `Lowe_2009.pdf` | Lowe PJ et al., Relationship between omalizumab pharmac…, British journal of clinical… (2009) | popPK | 10 | [10.1111/j.1365-2125.2009.03401.x](https://doi.org/10.1111/j.1365-2125.2009.03401.x) | [19660004](https://pubmed.ncbi.nlm.nih.gov/19660004) | The paper is a population PK/PD study of omalizumab in humans, but specific quantitative parameter values (CL, V, etc.) are likely in tables or supplementary material not fully reproduced in the provided abstract text. |
| `Zhu_2021.pdf` | Zhu R et al., Pharmacokinetics and exposure-efficacy…, Pulmonary pharmacology & th… (2021) | popPK | 8 | [10.1016/j.pupt.2021.102080](https://doi.org/10.1016/j.pupt.2021.102080) | [34592476](https://pubmed.ncbi.nlm.nih.gov/34592476) | The paper describes a population PK/PD modeling study of omalizumab in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| `Lowe_2010.pdf` | Lowe PJ et al., On setting the first dose in man: quant…, Basic & clinical pharmacolo… (2010) | popPK | 7 | [10.1111/j.1742-7843.2009.00513.x](https://doi.org/10.1111/j.1742-7843.2009.00513.x) | [20050847](https://pubmed.ncbi.nlm.nih.gov/20050847) | The paper describes population PK/PD modeling methodology using omalizumab data, but the specific quantitative parameter values are not provided in the evidence text. |
| `Lowe_2011.pdf` | Lowe PJ et al., Omalizumab decreases IgE production in…, British journal of clinical… (2011) | popPK | 5 | [10.1111/j.1365-2125.2011.03962.x](https://doi.org/10.1111/j.1365-2125.2011.03962.x) | [21392073](https://pubmed.ncbi.nlm.nih.gov/21392073) | The paper models omalizumab-IgE binding and IgE production/elimination (PKPD), but the specific quantitative PK parameter values (CL, V, etc.) for omalizumab are not provided in the text evidence. |

<sub>queue written 2026-10-07T22:06:50.009476+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gibiansky_2009 | irrelevant | 0 | 0 | The paper is a theoretical/simulation study on TMDD model approximations and does not report original quantitative PK parameter values for omalizumab. |
| popPK | Koutsokera_2020 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety analysis of omalizumab in cystic fibrosis patients, reporting clinical outcomes (FEV1, steroid use) rather than pharmacokinetic disposition parameters. |
| popPK | Lowe_2009 | relevant | 10 | 4 | The paper is a population PK/PD study of omalizumab in humans, but specific quantitative parameter values (CL, V, etc.) are likely in tables or supplementary material not fully reproduced in the provided abstract text. |
| popPK | Lowe_2010 | relevant | 7 | 2 | The paper describes population PK/PD modeling methodology using omalizumab data, but the specific quantitative parameter values are not provided in the evidence text. |
| popPK | Lowe_2011 | relevant | 5 | 0 | The paper models omalizumab-IgE binding and IgE production/elimination (PKPD), but the specific quantitative PK parameter values (CL, V, etc.) for omalizumab are not provided in the text evidence. |
| popPK | Meno-Tetang_2005 | irrelevant | 2 | 0 | The paper is a mechanistic PK/PD approach using omalizumab (Xolair) as an illustrative example of a modeling strategy, but it does not report specific numeric population PK parameter values (CL, V, etc.) for omalizumab in the provided text. |
| popPK | Owora_2026 | irrelevant | 0 | 0 | This is a clinical effectiveness study reporting odds ratios for exacerbations, not a pharmacokinetic study with disposition parameters. |
| popPK | Prosty_2024 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study analyzing cytokine biomarkers in human patients, not a pharmacokinetic study reporting disposition parameters for omalizumab. |
| popPK | Tadrous_2018 | irrelevant | 0 | 0 | The study is a health economic analysis examining costs and clinical effectiveness (hospitalizations/ED visits) rather than pharmacokinetic parameters. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of clinical efficacy (Urticaria Activity Score), not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2). |
| popPK | Zhu_2021 | relevant | 8 | 0 | The paper describes a population PK/PD modeling study of omalizumab in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| popPK | Zhu_2023 | irrelevant | 0 | 0 | The paper describes a population pharmacodynamic (PD) model relating IgE to FEV1, not a pharmacokinetic (PK) model with disposition parameters for omalizumab. |
| popPK | Zhu_2024 | irrelevant | 3 | 0 | The paper is a simulation study comparing dosing tables using previously established PK/PD models, and it does not report the specific quantitative disposition parameters (CL, V, ka) for omalizumab in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:06 UTC</sub>
