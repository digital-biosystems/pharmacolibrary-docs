<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pembrolizumab&quot;}]"></div>

# pembrolizumab

- **generic name:** pembrolizumab
- **ATC codes:** `L01FF02`
- **DrugBank:** [DB09037](https://go.drugbank.com/drugs/DB09037) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pembrolizumab is a monoclonal antibody that blocks PD-1 and is used to treat several cancers, including melanoma, lung, bladder, kidney, head and neck, and endometrial cancers. It is approved and widely used, including an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13896859](https://www.wikidata.org/wiki/Q13896859) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:58 | 4:30 | 0/2/3 | 2/0/1 | 0/0/0 | 260,875/19,874 | einfracz / qwen3.8-27b | 12 | 2/10 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Freshwater_2017_reference](drugs/drug_pembrolizumab/Pembrolizumab_Freshwater2017_reference.md) | — | 1-compartment (no model) | 4 | Freshwater T et al., Evaluation of dosing strategy for pembr…, Journal for immunotherapy o… (2017) | [10.1186/s40425-017-0242-5](https://doi.org/10.1186/s40425-017-0242-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [de_2025_negative_predictive_value](drugs/drug_pembrolizumab/Pembrolizumab_de2025_negative_predictive_value.md) | — | 1-compartment (no model) | 1 | de Vries F et al., Early pembrolizumab clearance as progno…, International journal of ca… (2025) | [10.1002/ijc.70052](https://doi.org/10.1002/ijc.70052) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [de_2025_positive_predictive_value](drugs/drug_pembrolizumab/Pembrolizumab_de2025_positive_predictive_value.md) | — | 1-compartment (no model) | 1 | de Vries F et al., Early pembrolizumab clearance as progno…, International journal of ca… (2025) | [10.1002/ijc.70052](https://doi.org/10.1002/ijc.70052) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Lindauer_2017_reference](drugs/drug_pembrolizumab/Pembrolizumab_Lindauer2017_reference.md) | — | 2-compartment (no model) | 4 | Lindauer A et al., Translational Pharmacokinetic/Pharmacod…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12130](https://doi.org/10.1002/psp4.12130) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_pembrolizumab/Pembrolizumab_Shang2022_reference.md) | — | 2-compartment (no model) | 2 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_normalized_reporter_gene_expression](drugs/drug_pembrolizumab/pd_De_2019_normalized_reporter_gene_expression.md) | normalized reporter gene expression ← pembrolizumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span> | [Lindauer_2017_RO](drugs/drug_pembrolizumab/pd_Lindauer_2017_RO.md) | Receptor occupancy ← pembrolizumab · target-mediated drug disposition | — | Lindauer A et al., Translational Pharmacokinetic/Pharmacod…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12130](https://doi.org/10.1002/psp4.12130) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span> | [Lindauer_2017_Tumor](drugs/drug_pembrolizumab/pd_Lindauer_2017_Tumor.md) | Tumor volume ← pembrolizumab · disease-progression model | — | Lindauer A et al., Translational Pharmacokinetic/Pharmacod…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12130](https://doi.org/10.1002/psp4.12130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Chatterjee_2017_SLD](drugs/drug_pembrolizumab/pd_Chatterjee_2017_SLD.md) | tumor size ← pembrolizumab AUCss-6weeks · disease-progression model | — | Chatterjee MS et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12140](https://doi.org/10.1002/psp4.12140) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chatterjee_2017_tumor_size](drugs/drug_pembrolizumab/pd_Chatterjee_2017_tumor_size.md) | tumor size ← pembrolizumab AUCss-6weeks · disease-progression model | — | Chatterjee MS et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12140](https://doi.org/10.1002/psp4.12140) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pembrolizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor), PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peer_2022.pdf` | Peer CJ et al., Pharmacokinetic Simulation Analysis of…, Journal of clinical pharmac… (2022) | popPK | 8 | [10.1002/jcph.1984](https://doi.org/10.1002/jcph.1984) | [34648187](https://pubmed.ncbi.nlm.nih.gov/34648187) | The paper uses established population PK models to simulate dosing regimens but does not provide the specific quantitative parameter values (CL, V, etc.) within the text. |
| `Lala_2020.pdf` | Lala M et al., A six-weekly dosing schedule for pembro…, European journal of cancer… (2020) | popPK | 6 | [10.1016/j.ejca.2020.02.016](https://doi.org/10.1016/j.ejca.2020.02.016) | [32305010](https://pubmed.ncbi.nlm.nih.gov/32305010) | The paper uses a population PK model for pembrolizumab in humans to simulate dose regimens, reporting derived exposure metrics (Cavg, Cmin, Cmax) rather than raw model parameter estimates (CL, V) in the text provided. |

<sub>queue written 2026-10-16T08:48:35.448545+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chatterjee_2017 | irrelevant | 2 | 0 | The paper is a population PK/PD modeling study of tumor size dynamics (PD) that uses pembrolizumab exposure (AUC) as a predictor, but it does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for pembrolizumab itself; it references a separate PK analysis for the exposure metrics. |
| popPK | De_2019 | irrelevant | 0 | 0 | The paper is an in-vitro functional study measuring EC50 values for PD-1/PD-L1 blocking activity, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Desnoyer_2020 | irrelevant | 1 | 0 | This is a narrative review summarizing existing literature without providing original quantitative population PK parameter estimates. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | This is a narrative review article that discusses clinical PK and PD concepts for melanoma drugs but provides no original quantitative population pharmacokinetic parameter values for pembrolizumab. |
| popPK | Lala_2020 | relevant | 6 | 1 | The paper uses a population PK model for pembrolizumab in humans to simulate dose regimens, reporting derived exposure metrics (Cavg, Cmin, Cmax) rather than raw model parameter estimates (CL, V) in the text provided. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the novel antibody CS1003, while pembrolizumab is used only as a reference/comparator agent. |
| popPK | Li_2022 | irrelevant | 1 | 2 | The study is a population pharmacokinetic analysis of toripalimab, not pembrolizumab; pembrolizumab is only mentioned in the introduction as a comparator for dosing strategies. |
| popPK | Lindauer_2017 | irrelevant | 4 | 1 | The study reports PK parameters for surrogate antibodies (mouse/rat DX400) in mice and references human PK from a companion article, but does not provide quantitative PK values for pembrolizumab itself. |
| popPK | Op_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and dosing optimization of enfortumab vedotin; pembrolizumab is only mentioned as a co-administered drug for cost calculation and is not the subject of PK analysis. |
| popPK | Peer_2022 | irrelevant | 8 | 0 | The paper uses established population PK models to simulate dosing regimens but does not provide the specific quantitative parameter values (CL, V, etc.) within the text. |
| popPK | Turner_2018 | relevant | 3 | 0 | The study investigates pembrolizumab exposure-response relationships using a baseline clearance parameter (CL0), but it does not report quantitative population PK model parameters (e.g., population means, CVs, V, Q) required for extraction, and specific numeric CL0 values are not listed in the text. |
| popPK | Turner_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy outcomes (ORR and OS) for pembrolizumab in NSCLC, not a pharmacokinetic study, and reports no PK parameters like clearance or volume. |
| popPK | Vázquez-Quiroga_2026 | irrelevant | 1 | 0 | This is a study protocol for an observational exposure-response study that does not report original population pharmacokinetic parameter values (CL, V, etc.), only mentioning a half-life from external sources. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a review of camrelizumab for hepatocellular carcinoma and does not provide quantitative pharmacokinetic parameters for pembrolizumab. |
| popPK | de_2025 | relevant | 6 | 2 | The study fits a two-compartment PK model for pembrolizumab and reports median clearance values, but the specific model parameter estimates (V, Q, etc.) are in supplementary material not provided here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:55 UTC</sub>
