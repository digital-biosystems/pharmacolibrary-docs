<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;omalizumab&quot;}]"></div>

# omalizumab

- **generic name:** omalizumab
- **ATC codes:** `R03DX05`
- **DrugBank:** [DB00043](https://go.drugbank.com/drugs/DB00043) · **PubChem:** none
- **groups:** approved, investigational

## About

Omalizumab, a monoclonal antibody, is used to treat allergic conditions such as asthma and chronic urticaria. It is authorised in the European Union for asthma, urticaria, and rhinitis, and is used in clinical practice for these allergic airway and skin conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415392](https://www.wikidata.org/wiki/Q415392) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.07 | L/h | 1.68 L/day | patients with chronic spontaneous urticaria | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) |
| CL | CL/F | 0.01083 | L/h | 0.26 L/day | patients with chronic spontaneous urticaria | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) |
| V | V/F | 8.92 | L | 8.92 L | patients with chronic spontaneous urticaria | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) |
| ka | kabs | 0.03833 | 1/h | 0.92 1/day | patients with chronic spontaneous urticaria | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Oh_2023 · CL</text><circle cx="485.8" cy="30.0" r="4" fill="#ef6c00"><title>Oh_2023 · CL: 0.07 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Oh_2023 · CL/F</text><circle cx="202.2" cy="46.0" r="4" fill="#ef6c00"><title>Oh_2023 · CL/F: 0.01083 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q331, Q67 — no SI value to build fr…</sub> | [Oh_2023_reference](drugs/drug_omalizumab/Omalizumab_Oh2023_reference.md) | — | 1-compartment (no model) | 7 (+5 cov.) | Oh E et al., PK/PD modeling to characterize placebo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12953](https://doi.org/10.1002/psp4.12953) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hayashi_2007_reference](drugs/drug_omalizumab/Omalizumab_Hayashi2007_reference.md) | — | general linear (no model) | 3 | Hayashi N et al., A mechanism-based binding model for the…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2006.02803.x](https://doi.org/10.1111/j.1365-2125.2006.02803.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Li_2022_chinese_subjects](drugs/drug_omalizumab/Omalizumab_Li2022_chinese_subjects.md) | — | general linear (no model) | 8 | Li J et al., Efficacy and safety of omalizumab in pa…, Asian Pacific journal of al… (2022) | [10.12932/AP-260819-0630](https://doi.org/10.12932/AP-260819-0630) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ predominantly_caucasian_subjects](drugs/drug_omalizumab/Omalizumab_Li2022_predominantly_caucasian_subjects.md) | — | general linear (no model) | 8 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Oh_2023_itch_severity_score](drugs/drug_omalizumab/pd_Oh_2023_itch_severity_score.md) | weekly itch severity score ← total omalizumab · delayed effect through an effect compartment | — | Oh E et al., PK/PD modeling to characterize placebo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12953](https://doi.org/10.1002/psp4.12953) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhao_2024_CFB_UAS7](drugs/drug_omalizumab/pd_Zhao_2024_CFB_UAS7.md) | change from baseline in Urticaria Activity Score ← omalizumab · inhibition effect | — | Zhao A et al., Time-course and dose-effect of omalizum…, European journal of clinica… (2024) | [10.1007/s00228-024-03725-2](https://doi.org/10.1007/s00228-024-03725-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=omalizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FCER1G (modulator), IGHE (antibody), IGHE (neutralizer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 2:17 | 1/3/0 | 2/0/0 | 0/0/0 | 198,498/9,406 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayashi_2007.pdf` | Hayashi N et al., A mechanism-based binding model for the…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2006.02803.x](https://doi.org/10.1111/j.1365-2125.2006.02803.x) | [17096680](https://pubmed.ncbi.nlm.nih.gov/17096680) | The evidence provides quantitative population pharmacokinetic parameters (clearance, volume of distribution) and half-life for omalizumab in the abstract. |
| `Lowe_2009.pdf` | Lowe PJ et al., Relationship between omalizumab pharmac…, British journal of clinical… (2009) | popPK | 10 | [10.1111/j.1365-2125.2009.03401.x](https://doi.org/10.1111/j.1365-2125.2009.03401.x) | [19660004](https://pubmed.ncbi.nlm.nih.gov/19660004) | The paper is a population PK/PD study of omalizumab in humans, but specific quantitative parameter values (CL, V, etc.) are likely in tables or supplementary material not fully reproduced in the provided abstract text. |
| `Zhu_2021.pdf` | Zhu R et al., Pharmacokinetics and exposure-efficacy…, Pulmonary pharmacology & th… (2021) | popPK | 8 | [10.1016/j.pupt.2021.102080](https://doi.org/10.1016/j.pupt.2021.102080) | [34592476](https://pubmed.ncbi.nlm.nih.gov/34592476) | The paper describes a population PK/PD modeling study of omalizumab in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| `Lowe_2010.pdf` | Lowe PJ et al., On setting the first dose in man: quant…, Basic & clinical pharmacolo… (2010) | popPK | 7 | [10.1111/j.1742-7843.2009.00513.x](https://doi.org/10.1111/j.1742-7843.2009.00513.x) | [20050847](https://pubmed.ncbi.nlm.nih.gov/20050847) | The paper describes population PK/PD modeling methodology using omalizumab data, but the specific quantitative parameter values are not provided in the evidence text. |
| `Lowe_2011.pdf` | Lowe PJ et al., Omalizumab decreases IgE production in…, British journal of clinical… (2011) | popPK | 5 | [10.1111/j.1365-2125.2011.03962.x](https://doi.org/10.1111/j.1365-2125.2011.03962.x) | [21392073](https://pubmed.ncbi.nlm.nih.gov/21392073) | The paper models omalizumab-IgE binding and IgE production/elimination (PKPD), but the specific quantitative PK parameter values (CL, V, etc.) for omalizumab are not provided in the text evidence. |

<sub>queue written 2026-10-07 22:06 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomalizumab%5D&body=Drug%3A%20omalizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_omalizumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:06 UTC</sub>
