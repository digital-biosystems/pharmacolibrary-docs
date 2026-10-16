<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Sanghavi2020_reference&quot;,&quot;label&quot;:&quot;Sanghavi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ipilimumab

- **generic name:** ipilimumab
- **ATC codes:** `L01FX04`
- **DrugBank:** [DB06186](https://go.drugbank.com/drugs/DB06186) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ipilimumab is a monoclonal antibody used to treat several cancers, including melanoma, renal cell carcinoma, non-small-cell lung cancer, mesothelioma, and colorectal cancer. It is approved and authorised in the European Union, where it is used in the treatment of these cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2459042](https://www.wikidata.org/wiki/Q2459042) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:41 | 7:09 | 2/5/2 | 0/0/3 | 0/0/0 | 397,244/21,571 | einfracz / qwen3.8-27b | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> | [Sanghavi_2020_reference](drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 0 | Sanghavi K et al., Population Pharmacokinetics of Ipilimum…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span> | [van_2019_reference](drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | van Bussel MTJ et al., Intracranial antitumor responses of niv…, BMC cancer (2019) | [10.1186/s12885-019-5741-y](https://doi.org/10.1186/s12885-019-5741-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Feng_2014_reference](drugs/drug_ipilimumab/Ipilimumab_Feng2014_reference.md) | — | 1-compartment (no model) | 5 | Feng Y et al., Model-based clinical pharmacology profi…, British journal of clinical… (2014) | [10.1111/bcp.12323](https://doi.org/10.1111/bcp.12323) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Shang_2022_reference](drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Hu_2024_reference](drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md) | — | 2-compartment (no model) | 9 (+3 cov.) | Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Leven_2019_reference](drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md) | — | 2-compartment (no model) | 3 | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sanghavi_2020_geometric_mean_g_ml](drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_geometric_mean_g_ml.md) | — | 1-compartment (no model) | 0 | Sanghavi K et al., Population Pharmacokinetics of Ipilimum…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sanghavi_2020_mean_g_ml](drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_mean_g_ml.md) | — | 1-compartment (no model) | 0 | Sanghavi K et al., Population Pharmacokinetics of Ipilimum…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sanghavi_2020_median_minimum_maximum_g_ml](drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_median_minimum_maximum_g_ml.md) | — | 1-compartment (no model) | 0 | Sanghavi K et al., Population Pharmacokinetics of Ipilimum…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Du_2024_gr2_IMAEs](drugs/drug_ipilimumab/pd_Du_2024_gr2_IMAEs.md) | grade 2+ immune-mediated adverse events ← ipilimumab · time-to-event model | — | Du S et al., Pediatric model-based dose optimization…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13070](https://doi.org/10.1002/psp4.13070) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Feng_2013_CR_or_PR](drugs/drug_ipilimumab/pd_Feng_2013_CR_or_PR.md) | complete or partial tumor response (CR or PR) ← ipilimumab · categorical (graded) response model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Feng_2013_OS](drugs/drug_ipilimumab/pd_Feng_2013_OS.md) | overall survival ← ipilimumab · time-to-event model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Feng_2013_irAE](drugs/drug_ipilimumab/pd_Feng_2013_irAE.md) | immune-related adverse events (irAEs) ← ipilimumab · categorical (graded) response model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OS](drugs/drug_ipilimumab/pd_Sangro_2023_OS.md) | overall survival ← ipilimumab · time-to-event model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Sangro_2023_OTR](drugs/drug_ipilimumab/pd_Sangro_2023_OTR.md) | objective tumor response ← ipilimumab · categorical (graded) response model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ipilimumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CTLA4 (antibody), CTLA4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 16 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 9  ·  extracted 2  ·  needs_review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bajaj_2019.pdf` | Bajaj G et al., Evaluation of covariate effects on phar…, British journal of clinical… (2019) | popPK | 5 | [10.1111/bcp.13996](https://doi.org/10.1111/bcp.13996) | [31140642](https://pubmed.ncbi.nlm.nih.gov/31140642) | This is a review/secondary analysis of covariate effects in PopPK models for multiple mAbs; while it mentions a reduced model for ipilimumab, specific numeric parameter values (CL, V, etc.) are not provided in the evidence. |
| `Zhao_2025.pdf` | Zhao Y et al., Model-Informed Immunogenicity Assessmen…, The AAPS journal (2025) | popPK | 5 | [10.1208/s12248-025-01069-y](https://doi.org/10.1208/s12248-025-01069-y) | [40281256](https://pubmed.ncbi.nlm.nih.gov/40281256) | The study is a population PK analysis involving ipilimumab combination therapy, but the reported quantitative parameters (clearance changes) are for the primary subject drug nivolumab, and no specific numeric PK parameter values (CL, V, etc.) for ipilimumab itself are present in the evidence. |

<sub>queue written 2026-10-14T19:35:37.660086+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bajaj_2019 | irrelevant | 5 | 1 | This is a review/secondary analysis of covariate effects in PopPK models for multiple mAbs; while it mentions a reduced model for ipilimumab, specific numeric parameter values (CL, V, etc.) are not provided in the evidence. |
| popPK | Blanchet_2026 | irrelevant | 2 | 0 | The study reports exposure-response relationships using trough concentrations (Cmin) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) or population-PK models for ipilimumab. |
| popPK | Du_2024 | irrelevant | 0 | 0 | The study is an exposure-response safety analysis (hazard ratios) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for ipilimumab, although it simulates exposure using a PK model. |
| popPK | Feng_2013 | irrelevant | 1 | 0 | The study is an exposure-response analysis using steady-state trough concentrations (Cminss) to predict efficacy and safety, rather than a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Ivetić_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes in melanoma, not a pharmacokinetic study. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | The paper is a review article that discusses PK concepts but does not provide original quantitative parameter values (CL, V, etc.) for ipilimumab in the provided evidence. |
| popPK | Sangro_2023 | irrelevant | 3 | 0 | The paper is an exposure-response analysis using a previously developed PK model; it reports clinical outcome odds ratios and geometric mean concentrations (Cavg1) but does not provide the underlying quantitative disposition parameters (CL, V, Q, etc.) for ipilimumab in the evidence provided. |
| popPK | Shang_2022 | irrelevant | 0 | 0 | This is a systematic review of anti-PD-1 monoclonal antibodies (e.g., nivolumab, pembrolizumab) and does not provide pharmacokinetic data for the subject drug ipilimumab (an anti-CTLA-4 antibody). |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a clinical safety cohort study on immune-related hepatitis and does not report any pharmacokinetic parameters for ipilimumab. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study models the pharmacokinetics of nivolumab, with ipilimumab serving only as a co-administered drug (covariate). |
| popPK | Zhao_2025 | relevant | 5 | 0 | The study is a population PK analysis involving ipilimumab combination therapy, but the reported quantitative parameters (clearance changes) are for the primary subject drug nivolumab, and no specific numeric PK parameter values (CL, V, etc.) for ipilimumab itself are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:35 UTC</sub>
