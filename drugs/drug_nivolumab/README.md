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
| 2026-10-07 17:56 | 25:32 | 1/4/0 | 1/0/2 | 0/0/0 | 582,348/54,982 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/13 | 15/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6), gpt-oss:120b (partly confirmed, agreement 0.7). Primary extraction retained.">cross-check: partial 0/2</span> | [van_2019_reference](drugs/drug_nivolumab/Nivolumab_van2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | van Bussel MTJ et al., Intracranial antitumor responses of niv…, BMC cancer (2019) | [10.1186/s12885-019-5741-y](https://doi.org/10.1186/s12885-019-5741-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Hu_2024_reference](drugs/drug_nivolumab/Nivolumab_Hu2024_reference.md) | — | 1-compartment (no model) | 4 (+3 cov.) | Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Leven_2019_reference](drugs/drug_nivolumab/Nivolumab_Leven2019_reference.md) | — | 2-compartment (no model) | 3 | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_nivolumab/Nivolumab_Shang2022_reference.md) | — | 2-compartment (no model) | 2 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.895), gpt-oss:120b (not confirmed, agreement 0.895). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Tohi_2023_reference](drugs/drug_nivolumab/Nivolumab_Tohi2023_reference.md) | — | 2-compartment (no model) | 4 (+4 cov.) | Tohi M et al., Population Pharmacokinetics of Nivoluma…, Therapeutic drug monitoring (2023) | [10.1097/FTD.0000000000000996](https://doi.org/10.1097/FTD.0000000000000996) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_nivolumab/pd_De_2019_eGFP.md) | normalized reporter gene expression ← nivolumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sanghavi_2021_DMFS](drugs/drug_nivolumab/pd_Sanghavi_2021_DMFS.md) | distant metastasis-free survival ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sanghavi_2021_RFS](drugs/drug_nivolumab/pd_Sanghavi_2021_RFS.md) | recurrence-free survival ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sanghavi_2021_grade_2_IMAEs](drugs/drug_nivolumab/pd_Sanghavi_2021_grade_2_IMAEs.md) | grade 2+ immune-mediated adverse events ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sanghavi_2021_grade_3_AEs](drugs/drug_nivolumab/pd_Sanghavi_2021_grade_3_AEs.md) | grade 3+ adverse events ← nivolumab · time-to-event model | — | Sanghavi K et al., Nivolumab exposure-response analysis fo…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12642](https://doi.org/10.1002/psp4.12642) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OS](drugs/drug_nivolumab/pd_Sangro_2023_OS.md) | overall survival ← nivolumab · time-to-event model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OTR](drugs/drug_nivolumab/pd_Sangro_2023_OTR.md) | objective tumor response ← nivolumab · categorical (graded) response model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 66 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albiges_2025 | relevant | 8 | 4 | The study reports population PK endpoints (Cavgd28, Cminss) for nivolumab, but specific compartmental parameters (CL, V, Q) are likely in supplementary material not provided. |
| popPK | Bellesoeur_2019 | irrelevant | 4 | 2 | The study reports only sparse trough concentrations (Cmin) and discusses clearance qualitatively without providing quantitative compartmental PK parameters (CL, V, Q) or a fitted population PK model for nivolumab. |
| popPK | De_2019 | irrelevant | 0 | 0 | The study is an in-vitro functional assay measuring EC50 values for PD-1/PD-L1 blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume for nivolumab. |
| popPK | Desnoyer_2020 | irrelevant | 2 | 0 | This is a review article summarizing PK/PD relationships without providing original quantitative parameter values for nivolumab. |
| popPK | Hamuro_2022 | irrelevant | 2 | 0 | The study is an exposure-response analysis focusing on clinical outcomes (PFS/OS) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) or a population PK model for nivolumab. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | The paper is a review article discussing PK/PD considerations in melanoma treatment and does not provide original quantitative PK parameter values for nivolumab in the provided evidence. |
| popPK | Parodi_2024 | irrelevant | 0 | 0 | The study analyzes FDG-PET imaging kinetics in lung cancer patients and does not report pharmacokinetic parameters for nivolumab. |
| popPK | Peer_2022 | irrelevant | 2 | 0 | The paper is a simulation study using established models but does not report original quantitative PK parameter values (CL, V, etc.) for nivolumab in the provided evidence. |
| popPK | Peissert_2022 | irrelevant | 0 | 0 | The study focuses on the discovery and structural characterization of a novel anti-PD-1 antibody (D12), using nivolumab only as a comparator for in vitro binding affinity, with no pharmacokinetic data reported. |
| popPK | Sanghavi_2021 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses predicted exposures from external PK models but does not report original quantitative PK parameter estimates (CL, V, etc.) for nivolumab in the provided text. |
| popPK | Sangro_2023 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses pre-existing population PK models to derive exposure metrics (Cavg1) for efficacy/safety assessment, rather than reporting new quantitative PK parameter estimates (CL, V, etc.) for nivolumab. |
| popPK | Tran_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics and exposure-response of cabozantinib, with nivolumab serving only as a co-administered agent whose clearance is used as a covariate without reporting its specific PK parameter values. |
| popPK | Turner_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy outcomes (ORR and OS) for nivolumab, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Wang_2026 | irrelevant | 2 | 1 | The study is a simulation of dosing regimens using an existing model and reports exposure metrics (AUC, Ctrough) rather than original quantitative disposition parameters (CL, V, Q, ka) for nivolumab. |
| popPK | Zhao_2025 | relevant | 9 | 2 | The paper describes a population PK model for nivolumab with specific parameters (CL, VC, VP, Q, KA, F), but the actual numeric estimates are located in Table S2 and supplementary files which are not provided in the evidence. |
| popPK | van_2019 | relevant | 4 | 5 | The paper is a systematic review that cites specific population PK parameters (CL 7.9 ml/h, t1/2 25.0 days) for nivolumab, but does not present original data or a full compartmental model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:35 UTC</sub>
