<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;nivolumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nivolumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/Nivolumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nivolumab

- **generic name:** nivolumab
- **ATC codes:** `L01FF01`, `L01FY02`, `L01XC17`
- **DrugBank:** [DB09035](https://go.drugbank.com/drugs/DB09035) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nivolumab is an anti-PD-1 monoclonal antibody used to treat several cancers, including melanoma, lung, kidney, bladder, and head and neck cancers, Hodgkin lymphoma, and mesothelioma. It is widely used and authorised in the European Union, though one EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7041828](https://www.wikidata.org/wiki/Q7041828) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:51 | 5:31 | 1/4/0 | 1/0/2 | 0/0/0 | 375,860/24,541 | einfracz / qwen3.8-27b | 15 | 2/13 | 15/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6), gpt-oss:120b (partly confirmed, agreement 0.7). Primary extraction retained.">cross-check: partial 0/2</span> | [van_2019_reference](drugs/drug_nivolumab/Nivolumab_van2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | van Bussel MTJ et al., Intracranial antitumor responses of niv…, BMC cancer (2019) | [10.1186/s12885-019-5741-y](https://doi.org/10.1186/s12885-019-5741-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Hu_2024_reference](drugs/drug_nivolumab/Nivolumab_Hu2024_reference.md) | — | 2-compartment (no model) | 9 (+3 cov.) | Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Leven_2019_reference](drugs/drug_nivolumab/Nivolumab_Leven2019_reference.md) | — | 2-compartment (no model) | 3 | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_nivolumab/Nivolumab_Shang2022_reference.md) | — | 2-compartment (no model) | 2 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.895), gpt-oss:120b (not confirmed, agreement 0.895). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tohi_2023_reference](drugs/drug_nivolumab/Nivolumab_Tohi2023_reference.md) | — | 1-compartment (no model) | 0 | Tohi M et al., Population Pharmacokinetics of Nivoluma…, Therapeutic drug monitoring (2023) | [10.1097/FTD.0000000000000996](https://doi.org/10.1097/FTD.0000000000000996) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_normalized_reporter_gene_expression](drugs/drug_nivolumab/pd_De_2019_normalized_reporter_gene_expression.md) | normalized reporter gene expression ← nivolumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sanghavi_2021_DMFS](drugs/drug_nivolumab/pd_Sanghavi_2021_DMFS.md) | distant metastasis-free survival ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sanghavi_2021_RFS](drugs/drug_nivolumab/pd_Sanghavi_2021_RFS.md) | recurrence-free survival ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sanghavi_2021_grade_2_IMAEs](drugs/drug_nivolumab/pd_Sanghavi_2021_grade_2_IMAEs.md) | grade 2+ immune-mediated adverse events ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sanghavi_2021_grade_3_AEs](drugs/drug_nivolumab/pd_Sanghavi_2021_grade_3_AEs.md) | grade 3+ adverse events ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OS](drugs/drug_nivolumab/pd_Sangro_2023_OS.md) | Overall survival ← nivolumab · time-to-event model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OTR](drugs/drug_nivolumab/pd_Sangro_2023_OTR.md) | Objective tumor response ← nivolumab · categorical (graded) response model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nivolumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 66 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peer_2022.pdf` | Peer CJ et al., Pharmacokinetic Simulation Analysis of…, Journal of clinical pharmac… (2022) | popPK | 6 | [10.1002/jcph.1984](https://doi.org/10.1002/jcph.1984) | [34648187](https://pubmed.ncbi.nlm.nih.gov/34648187) | The paper utilizes established population PK models for nivolumab to simulate dosing, but the specific numeric parameter values (CL, V, etc.) are not listed in the text, and key quantitative results are described without explicit numbers. |
| `Hamuro_2022.pdf` | Hamuro L et al., Exposure-Response Analysis to Support N…, Clinical cancer research :… (2022) | popPK | 5 | [10.1158/1078-0432.CCR-21-3149](https://doi.org/10.1158/1078-0432.CCR-21-3149) | [34980597](https://pubmed.ncbi.nlm.nih.gov/34980597) | This is an exposure-response analysis that references nivolumab clearance but does not provide specific quantitative PK parameter values (CL, V, T1/2) in the evidence. |

<sub>queue written 2026-10-15T03:46:48.182075+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albiges_2025 | relevant | 8 | 3 | The study is a Phase III trial evaluating nivolumab PK, but specific disposition parameters (CL, V, t1/2) are in supplementary material or referenced previous papers, while the text only reports concentration metrics (Cavg, Cmin). |
| popPK | Bellesoeur_2019 | relevant | 7 | 4 | The study reports nivolumab trough plasma concentrations (Cmin) and covariate analysis, but does not report explicit quantitative PK parameters (like CL or V) for the cohort, relying instead on a previously published model. |
| popPK | De_2019 | irrelevant | 0 | 0 | The study is an in-vitro functional assay comparing the potency (EC50) and binding of checkpoint inhibitors, not a pharmacokinetic study reporting disposition parameters like clearance or volume for nivolumab. |
| popPK | Desnoyer_2020 | irrelevant | 2 | 0 | The paper is a review article discussing general PK/PD concepts for immune checkpoint inhibitors without providing specific quantitative disposition parameters (CL, V, etc.) for nivolumab. |
| popPK | Hamuro_2022 | relevant | 5 | 0 | This is an exposure-response analysis that references nivolumab clearance but does not provide specific quantitative PK parameter values (CL, V, T1/2) in the evidence. |
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review article discussing clinical PK and PD considerations, but it does not report specific quantitative pharmacokinetic parameter values (e.g., clearance, volume) for nivolumab in the provided text. |
| popPK | Parodi_2024 | irrelevant | 0 | 0 | The paper focuses on FDG-PET imaging kinetics in lung cancer and mentions nivolumab only as the context of the clinical trial, reporting no pharmacokinetic parameters for the drug. |
| popPK | Peer_2022 | relevant | 6 | 3 | The paper utilizes established population PK models for nivolumab to simulate dosing, but the specific numeric parameter values (CL, V, etc.) are not listed in the text, and key quantitative results are described without explicit numbers. |
| popPK | Peissert_2022 | irrelevant | 0 | 0 | The study describes the discovery and structural characterization of a new anti-PD-1 antibody candidate (D12) in vitro, with nivolumab serving only as a comparator for binding affinity, and does not report pharmacokinetic parameters for nivolumab. |
| popPK | Sanghavi_2021 | irrelevant | 3 | 1 | The paper is an exposure-response (E-R) analysis that uses nivolumab as the subject drug but relies on previously published PPK models for exposure predictions; it does not report original quantitative PK parameter estimates (CL, V, etc.) in the text, and specific concentration values are in supplementary tables not provided. |
| popPK | Sangro_2023 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that relies on previously published population PK models and reports only efficacy odds ratios/hazard ratios, with no original quantitative PK parameters (CL, V, etc.) for nivolumab present in the text. |
| popPK | Tran_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics and exposure-response of cabozantinib, with nivolumab serving only as a co-administered agent whose clearance is used as a covariate, not as the subject drug. |
| popPK | Turner_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (ORR and OS) for NSCLC, not a pharmacokinetic study of nivolumab. |
| popPK | Wang_2026 | irrelevant | 1 | 1 | The study is a modeling and simulation analysis for dosing optimization that does not report quantitative disposition parameters (CL, V, ka, Q, half-life) for nivolumab, but rather relies on pre-existing PK models and reports exposure metrics (AUC, Ctrough). |
| popPK | Zhao_2025 | relevant | 5 | 0 | The paper describes a population PK model for nivolumab but the actual numeric parameter estimates are located in Supplementary Table S2, which is not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:46 UTC</sub>
