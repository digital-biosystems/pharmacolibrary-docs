<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;guselkumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guselkumab_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_Yao2018_reference&quot;,&quot;label&quot;:&quot;Yao_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Yao2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Chen_2022_ACR&quot;,&quot;label&quot;:&quot;Chen_2022 \u00b7 ACR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/pd_Chen_2022_ACR.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Chen_2022_ACR_2&quot;,&quot;label&quot;:&quot;Chen_2022 \u00b7 ACR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/pd_Chen_2022_ACR_2.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Chen_2022_IGA&quot;,&quot;label&quot;:&quot;Chen_2022 \u00b7 IGA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/pd_Chen_2022_IGA.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vaskeikina_2026_mRSS&quot;,&quot;label&quot;:&quot;Vaskeikina_2026 \u00b7 mRSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/pd_Vaskeikina_2026_mRSS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# guselkumab

- **generic name:** guselkumab
- **ATC codes:** `L04AC16`
- **DrugBank:** [DB11834](https://go.drugbank.com/drugs/DB11834) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Guselkumab is a monoclonal antibody that acts as an interleukin inhibitor, belonging to the immunosuppressant class of medicines. It is an approved medicine and has also been investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708315](https://www.wikidata.org/wiki/Q15708315) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:57 | 2:30 | 3/0/1 | 4/0/1 | 0/0/0 | 161,970/12,023 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Chen_2022_reference](drugs/drug_guselkumab/Guselkumab_Chen2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+2 cov.) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_guselkumab/Guselkumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> | [Yao_2018_reference](drugs/drug_guselkumab/Guselkumab_Yao2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Yao Z et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1063](https://doi.org/10.1002/jcph.1063) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tran_2022_reference](drugs/drug_guselkumab/Guselkumab_Tran2022_reference.md) | held back | 1-compartment, oral | 6 | Tran L et al., Population pharmacokinetics analysis of…, British journal of clinical… (2022) | [10.1111/bcp.15364](https://doi.org/10.1111/bcp.15364) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gauntlett_2026_IL_23_neutralization_potency](drugs/drug_guselkumab/pd_Gauntlett_2026_IL_23_neutralization_potency.md) | IL-23 luciferase signal ← Guselkumab · inhibition effect | — | Gauntlett R et al., Biparatopic targeting of IL-23 enables…, mAbs (2026) | [10.1080/19420862.2026.2689777](https://doi.org/10.1080/19420862.2026.2689777) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2014_PASI](drugs/drug_guselkumab/pd_Hu_2014_PASI.md) | Psoriasis Area and Severity Index (PASI) scores ← guselkumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index (PASI) scores | — | Hu C et al., Information contributed by meta-analysi…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9360-6](https://doi.org/10.1007/s10928-014-9360-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2017_PASI](drugs/drug_guselkumab/pd_Hu_2017_PASI.md) | Psoriasis Area and Severity Index (PASI) scores ← guselkumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index (PASI) scores | — | Hu C et al., Improvement in latent variable indirect…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9531-3](https://doi.org/10.1007/s10928-017-9531-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2017_PGA](drugs/drug_guselkumab/pd_Hu_2017_PGA.md) | Physician's Global Assessment (PGA) scores ← guselkumab · indirect response — drug inhibits the production of Physician's Global Assessment (PGA) scores | — | Hu C et al., Improvement in latent variable indirect…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9531-3](https://doi.org/10.1007/s10928-017-9531-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vaskeikina_2026_FVC](drugs/drug_guselkumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← guselkumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR](drugs/drug_guselkumab/pd_Chen_2022_ACR.md) | ACR20, ACR50, and ACR70 improvement criteria ← guselkumab · direct Emax (saturable) effect | ▶ model + simulator | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR_2](drugs/drug_guselkumab/pd_Chen_2022_ACR_2.md) | ACR20, ACR50, and ACR70 improvement criteria ← guselkumab · indirect response — drug inhibits the production of ACR20, ACR50, and ACR70 improvement criteria | ▶ model + simulator | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_IGA](drugs/drug_guselkumab/pd_Chen_2022_IGA.md) | Investigator’s Global Assessment (IGA) of psoriasis scores ← guselkumab · direct Emax (saturable) effect | ▶ model + simulator | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vaskeikina_2026_mRSS](drugs/drug_guselkumab/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← guselkumab · direct Emax (saturable) effect | ▶ model + simulator | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=guselkumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IL23A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tran_2022.pdf` | Tran L et al., Population pharmacokinetics analysis of…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15364](https://doi.org/10.1111/bcp.15364) | [35470450](https://pubmed.ncbi.nlm.nih.gov/35470450) | The abstract provides explicit numeric values for clearance, volumes, intercompartmental flow, absorption rate, bioavailability, and half-life. |
| `Yao_2018.pdf` | Yao Z et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1063](https://doi.org/10.1002/jcph.1063) | [29341192](https://pubmed.ncbi.nlm.nih.gov/29341192) | The abstract explicitly reports quantitative population PK parameters (CL/F, V/F, ka, half-life) for guselkumab in humans. |
| `Shao_2024.pdf` | Shao J et al., Combination Therapy With Guselkumab and…, Clinical pharmacology and t… (2024) | popPK | 9 | [10.1002/cpt.3235](https://doi.org/10.1002/cpt.3235) | [38488354](https://pubmed.ncbi.nlm.nih.gov/38488354) | The paper describes a Population PK (PopPK) model for guselkumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only contains qualitative statements about the comparability of PK parameters. |
| `Ramanathan_2025.pdf` | Ramanathan M et al., Diffusion dimensionality modeling of su…, Journal of pharmacokinetics… (2025) | popPK | 8 | [10.1007/s10928-025-09973-8](https://doi.org/10.1007/s10928-025-09973-8) | [40263185](https://pubmed.ncbi.nlm.nih.gov/40263185) | The study models the subcutaneous absorption PK of guselkumab using a diffusion dimensionality approach, but the specific quantitative parameter values are not provided in the evidence. |
| `Hu_2018.pdf` | Hu C et al., A comprehensive evaluation of exposure-…, Journal of pharmacokinetics… (2018) | popPK | 5 | [10.1007/s10928-018-9581-1](https://doi.org/10.1007/s10928-018-9581-1) | [29549540](https://pubmed.ncbi.nlm.nih.gov/29549540) | The paper describes an exposure-response model that relies on a population PK model, but the evidence text does not contain any specific quantitative PK parameters (CL, V, t1/2) for guselkumab, only efficacy and dose-response outcomes. |

<sub>queue written 2026-10-15T03:55:32.209328+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coates_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting disease activity scores and response rates, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Gauntlett_2026 | irrelevant | 0 | 0 | The paper is an in-vitro biophysical and functional characterization of novel biparatopic antibodies using guselkumab as a parental reference, containing no in-vivo pharmacokinetic data or quantitative disposition parameters for guselkumab. |
| popPK | Hu_2014 | irrelevant | 2 | 0 | The study focuses on exposure-response modeling for dose selection and states that PK parameters were derived from modeling, but no quantitative PK values (CL, V, etc.) are present in the provided evidence. |
| popPK | Hu_2017 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic/exposure-response modeling of clinical endpoints (PASI/PGA) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for guselkumab. |
| popPK | Hu_2018 | irrelevant | 5 | 0 | The paper describes an exposure-response model that relies on a population PK model, but the evidence text does not contain any specific quantitative PK parameters (CL, V, t1/2) for guselkumab, only efficacy and dose-response outcomes. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic exposure-response modeling for combination therapy, not on the pharmacokinetic disposition parameters (clearance, volume, etc.) of guselkumab. |
| popPK | Iwaki_2022 | irrelevant | 2 | 0 | The study performs a PK/PD analysis to link exposure to efficacy, but the evidence provided contains no quantitative PK parameter values (CL, V, etc.) for guselkumab. |
| popPK | Lebwohl_2019 | irrelevant | 2 | 0 | The paper reports pharmacodynamic exposure-response relationships and efficacy endpoints rather than quantitative population pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Ramanathan_2025 | relevant | 8 | 0 | The study models the subcutaneous absorption PK of guselkumab using a diffusion dimensionality approach, but the specific quantitative parameter values are not provided in the evidence. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 3 | 2 | The paper is a narrative review that summarizes multiple drugs, and while it mentions guselkumab, the specific quantitative PK parameter values for guselkumab are not explicitly detailed in the provided text excerpts (unlike adalimumab, ustekinumab, etc., which have specific CL/V estimates listed). |
| popPK | Shao_2024 | relevant | 9 | 0 | The paper describes a Population PK (PopPK) model for guselkumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only contains qualitative statements about the comparability of PK parameters. |
| popPK | Soenen_2024 | irrelevant | 0 | 0 | The study is an exposure-response and biomarker analysis reporting trough concentrations and PASI scores, not a pharmacokinetic study providing disposition parameters like clearance or volume. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study of guselkumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:55 UTC</sub>
