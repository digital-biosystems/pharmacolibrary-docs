<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tocilizumab&quot;}]"></div>

# tocilizumab

- **generic name:** tocilizumab
- **ATC codes:** `L04AC07`
- **DrugBank:** [DB06273](https://go.drugbank.com/drugs/DB06273) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tocilizumab, a monoclonal antibody that blocks interleukin signalling, is used to treat rheumatoid and juvenile idiopathic arthritis, giant cell arteritis, cytokine release syndrome, and COVID-19. It is authorised in the European Union and widely used for these inflammatory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425154](https://www.wikidata.org/wiki/Q425154) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.03021 | L/h | 0.725 L/day | adults with rheumatoid arthritis | 35 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bastida_2019_reference](drugs/drug_tocilizumab/Tocilizumab_Bastida2019_reference.md) |
| t½ | t1/2z | — | h | 4.6 weeks | adults with rheumatoid arthritis | 35 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bastida_2019_reference](drugs/drug_tocilizumab/Tocilizumab_Bastida2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Bastida_2019_reference](drugs/drug_tocilizumab/Tocilizumab_Bastida2019_reference.md) | — | 1-compartment (no model) | 2 | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hooijberg_2025_reference](drugs/drug_tocilizumab/Tocilizumab_Hooijberg2025_reference.md) | — | 1-compartment (no model) | 3 | Hooijberg F et al., Precision Dosing of Intravenous Tociliz…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001258](https://doi.org/10.1097/FTD.0000000000001258) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Leung_2022_reference](drugs/drug_tocilizumab/Tocilizumab_Leung2022_reference.md) | — | 1-compartment (no model) | 0 | Leung E et al., Pharmacokinetic/Pharmacodynamic Conside…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01092-0](https://doi.org/10.1007/s40262-021-01092-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kovalenko_2020_ANC](drugs/drug_tocilizumab/pd_Kovalenko_2020_ANC.md) | Absolute Neutrophil Count ← tocilizumab · inhibition effect | — | Kovalenko P et al., Population Pharmacodynamic Model of Neu…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12534](https://doi.org/10.1002/psp4.12534) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Levi_2013_DAS28](drugs/drug_tocilizumab/pd_Levi_2013_DAS28.md) | Disease Activity Score using 28 joints ← tocilizumab · indirect response — drug inhibits the production of Disease Activity Score using 28 joints | — | Levi M et al., Exposure-response relationship of tocil…, Journal of clinical pharmac… (2013) | [10.1177/0091270012437585](https://doi.org/10.1177/0091270012437585) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Levi_2013_2_DAS28](drugs/drug_tocilizumab/pd_Levi_2013_2_DAS28.md) | Disease Activity Score using 28 joints ← tocilizumab · indirect response — drug inhibits the production of Disease Activity Score using 28 joints | — | Levi M et al., Exposure-Exposure Relationship of Tocil…, Journal of clinical pharmac… (2013) | [10.1177/0091270011437585](https://doi.org/10.1177/0091270011437585) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Vaskeikina_2026_FVC](drugs/drug_tocilizumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← tocilizumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Vaskeikina_2026_mRSS](drugs/drug_tocilizumab/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← tocilizumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bastida_2019_CRP_ESR](drugs/drug_tocilizumab/pd_Bastida_2019_CRP_ESR.md) | C-reactive protein and erythrocyte sedimentation rate ← tocilizumab · indirect response — drug inhibits the production of C-reactive protein and erythrocyte sedimentation rate | — | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bastida_2019_TJC_SJC_PGA_VAS](drugs/drug_tocilizumab/pd_Bastida_2019_TJC_SJC_PGA_VAS.md) | Tender and swollen joint counts and patient and evaluator global assessment ← tocilizumab · indirect response — drug inhibits the production of Tender and swollen joint counts and patient and evaluator global assessment | — | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tocilizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IL6R (antibody), IL6R (inhibitor), IL6ST (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:53 | 2:01 | 1/2/0 | 5/0/0 | 0/0/0 | 220,154/11,702 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 1 |

## Coverage

- **PubMed hits:** 45 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frey_2010.pdf` | Frey N et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009350623](https://doi.org/10.1177/0091270009350623) | [20097931](https://pubmed.ncbi.nlm.nih.gov/20097931) | The paper describes a population PK model for tocilizumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| `Hooijberg_2025.pdf` | Hooijberg F et al., Precision Dosing of Intravenous Tociliz…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001258](https://doi.org/10.1097/FTD.0000000000001258) | [39509293](https://pubmed.ncbi.nlm.nih.gov/39509293) | The study reports a population pharmacokinetic model for tocilizumab with specific quantitative values for linear clearance (0.20 L/d) and nonlinear elimination parameters (VM 5.2 mg/d, KM 0.19 mg/L) in the abstract. |
| `Bastida_2019.pdf` | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | popPK | 6 | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) | [30958574](https://pubmed.ncbi.nlm.nih.gov/30958574) | Study performs a population PK/PD analysis of tocilizumab in humans and reports PD parameters (half-life of effect, EC50), but specific PK disposition parameters (CL, Vd) are not explicitly listed in the provided evidence. |
| `Levi_2013_2.pdf` | Levi M et al., Exposure-Exposure Relationship of Tocil…, Journal of clinical pharmac… (2013) | popPK | 6 | [10.1177/0091270011437585](https://doi.org/10.1177/0091270011437585) | [23504875](https://pubmed.ncbi.nlm.nih.gov/23504875) | The paper describes a population PK/PD model for tocilizumab in humans, but the specific numeric PK parameters (CL, V, etc.) are not present in the provided evidence, which focuses on exposure-response relationships and PD metrics. |
| `Bastida_2020.pdf` | Bastida C et al., Evaluation of dose-tapering strategies…, European journal of clinica… (2020) | popPK | 5 | [10.1007/s00228-020-02925-w](https://doi.org/10.1007/s00228-020-02925-w) | [32514745](https://pubmed.ncbi.nlm.nih.gov/32514745) | The paper describes a model-based PK/PD simulation study for tocilizumab, but the extracted evidence contains only summary efficacy/cost results and lacks specific numeric PK parameters (CL, V, etc.) or the underlying model equations. |

<sub>queue written 2026-10-07T00:52:28.406760+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arrivé_2024 | relevant | 10 | 4 | The study reports a population PK model for tocilizumab with quantitative covariate effects on clearance, but specific fixed-effect parameter values (e.g., typical CL, V, ka) are likely in the omitted Table 2. |
| popPK | Aydeniz_2024 | irrelevant | 0 | 0 | The study investigates the effect of tocilizumab on lung mechanics using electrical impedance tomography, not its pharmacokinetic disposition. |
| popPK | Bastida_2020 | relevant | 5 | 0 | The paper describes a model-based PK/PD simulation study for tocilizumab, but the extracted evidence contains only summary efficacy/cost results and lacks specific numeric PK parameters (CL, V, etc.) or the underlying model equations. |
| popPK | Connarn_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response relationships of the CAR T-cell therapy idecabtagene vicleucel, with tocilizumab mentioned only as a medication used to manage cytokine release syndrome, not as the subject drug. |
| popPK | Frey_2010 | relevant | 10 | 0 | The paper describes a population PK model for tocilizumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome study focusing on eGFR and DSA levels, reporting no pharmacokinetic parameters (CL, V, etc.) for tocilizumab. |
| popPK | Jamois_2025 | relevant | 9 | 4 | The paper describes a population pharmacokinetic model for tocilizumab with quantitative parameters (CL, V, Q) and specific comparative values, but the primary parameter estimates are referenced in supplementary tables (Table S1, S5) not provided in the text. |
| popPK | Kovalenko_2020 | irrelevant | 1 | 0 | The study models pharmacodynamics (neutrophil margination/tolerance) rather than pharmacokinetic disposition parameters for tocilizumab, which is treated as a covariate/comparator to the subject drug sarilumab. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (DAS28 scores) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Levi_2013 | irrelevant | 4 | 0 | The paper describes a PKPD exposure-response analysis rather than a primary PK parameter estimation study, and specific quantitative PK values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Levi_2013_2 | relevant | 6 | 2 | The paper describes a population PK/PD model for tocilizumab in humans, but the specific numeric PK parameters (CL, V, etc.) are not present in the provided evidence, which focuses on exposure-response relationships and PD metrics. |
| popPK | Marzolini_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lopinavir and hydroxychloroquine in COVID-19 patients, with tocilizumab acting only as a comparator to assess the effect of inflammation on drug metabolism. |
| popPK | Patel_2023 | irrelevant | 0 | 0 | The study analyzes the effects of tocilizumab on HbA1c levels in giant cell arteritis patients and does not report any pharmacokinetic parameters such as clearance or volume. |
| popPK | Sweiss_2025 | irrelevant | 0 | 0 | The study focuses on fludarabine pharmacokinetics in CAR-T patients; tocilizumab is mentioned only as a co-administered drug for toxicity management, with no PK parameters reported. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) for systemic sclerosis, not a pharmacokinetic study, and reports no PK parameters (CL, V, etc.) for tocilizumab. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study focuses on the cellular kinetics of idecabtagene vicleucel (ide-cel), while tocilizumab is only mentioned as a treatment for cytokine release syndrome (CRS) and is not the subject of pharmacokinetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:52 UTC</sub>
