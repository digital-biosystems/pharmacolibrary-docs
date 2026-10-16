<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ustekinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ustekinumab_Adedokun2022_reference&quot;,&quot;label&quot;:&quot;Adedokun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_Lam2026_reference&quot;,&quot;label&quot;:&quot;Lam_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ustekinumab

- **generic name:** ustekinumab
- **ATC codes:** `L04AC05`
- **DrugBank:** [DB05679](https://go.drugbank.com/drugs/DB05679) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ustekinumab, a monoclonal antibody that blocks interleukins, is used to treat plaque psoriasis, psoriatic arthritis, Crohn's disease, and ulcerative colitis. It is an approved medicine with several authorised products in the European Union, where it is used for these inflammatory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420305](https://www.wikidata.org/wiki/Q420305) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:32 | 2:33 | 1/3/1 | 1/0/1 | 0/0/0 | 174,056/9,540 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span> | [Adedokun_2022_reference](drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Adedokun OJ et al., Population Pharmacokinetics and Exposur…, Clinical therapeutics (2022) | [10.1016/j.clinthera.2022.08.010](https://doi.org/10.1016/j.clinthera.2022.08.010) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Lam_2026_reference](drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Lam E et al., Pharmacokinetics and Safety of Ustekinu…, Rheumatology and therapy (2026) | [10.1007/s40744-025-00820-3](https://doi.org/10.1007/s40744-025-00820-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Aguiar_2021_base](drugs/drug_ustekinumab/Ustekinumab_Aguiar2021_base.md) | — | 1-compartment (no model) | 7 | Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Aguiar_2021_final](drugs/drug_ustekinumab/Ustekinumab_Aguiar2021_final.md) | — | 1-compartment (no model) | 6 (+1 cov.) | Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shao_2022_reference](drugs/drug_ustekinumab/Ustekinumab_Shao2022_reference.md) | — | 1-compartment (no model) | 0 | Shao J et al., Integrated Population Pharmacokinetic A…, European journal of drug me… (2022) | [10.1007/s13318-022-00768-7](https://doi.org/10.1007/s13318-022-00768-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_fCal](drugs/drug_ustekinumab/pd_Wang_2022_fCal.md) | fecal calprotectin ← ustekinumab · indirect response — drug inhibits the production of fecal calprotectin | — | Wang Z et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.14971](https://doi.org/10.1111/bcp.14971) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodríguez-Fernández_2024_PASI](drugs/drug_ustekinumab/pd_Rodr_guez_Fern_ndez_2024_PASI.md) | Psoriasis Area and Severity Index ← ustekinumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Rodríguez-Fernández K et al., Model-Informed Precision Dosing for Per…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101295](https://doi.org/10.3390/pharmaceutics16101295) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ustekinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IL12A (other/unknown), IL12B (inhibitor), IL23A (other/unknown), PDF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adedokun_2022.pdf` | Adedokun OJ et al., Population Pharmacokinetics and Exposur…, Clinical therapeutics (2022) | popPK | 10 | [10.1016/j.clinthera.2022.08.010](https://doi.org/10.1016/j.clinthera.2022.08.010) | [36150926](https://pubmed.ncbi.nlm.nih.gov/36150926) | The study reports a population PK model for ustekinumab in humans with all key quantitative parameters (CL, Vss, Q, t1/2, F) explicitly stated in the abstract text. |
| `Shao_2022.pdf` | Shao J et al., Integrated Population Pharmacokinetic A…, European journal of drug me… (2022) | popPK | 10 | [10.1007/s13318-022-00768-7](https://doi.org/10.1007/s13318-022-00768-7) | [35442011](https://pubmed.ncbi.nlm.nih.gov/35442011) | The paper describes an integrated population PK analysis of ustekinumab with a two-compartment model, but the specific numeric parameter values (CL, V, Q, ka) are not explicitly listed in the provided evidence, though the text implies a model was built and parameter estimates exist. |
| `Wang_2022.pdf` | Wang Z et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.14971](https://doi.org/10.1111/bcp.14971) | [34197653](https://pubmed.ncbi.nlm.nih.gov/34197653) | The study develops a population PK model for ustekinumab, but specific numeric parameter values (CL, V, Q, half-life) are not listed in the provided abstract or text. |
| `Xu_2020.pdf` | Xu Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1582](https://doi.org/10.1002/jcph.1582) | [32026499](https://pubmed.ncbi.nlm.nih.gov/32026499) | The study describes a population PK model for ustekinumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wang_2026.pdf` | Wang Z et al., Infliximab and Ustekinumab Clearance Be…, Clinical gastroenterology a… (2026) | popPK | 7 | [10.1016/j.cgh.2025.08.030](https://doi.org/10.1016/j.cgh.2025.08.030) | [40925517](https://pubmed.ncbi.nlm.nih.gov/40925517) | The study uses population PK models to report ustekinumab clearance values (mean/median implied by comparisons), but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-14T23:30:42.808481+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adedokun_2018 | irrelevant | 4 | 2 | The study describes exposure-response relationships and qualitative PK trends (dose proportionality, steady state) but does not report explicit quantitative compartmental parameters like clearance (CL), volume (V), or rate constants (ka) in the provided evidence. |
| popPK | Adedokun_2020 | irrelevant | 2 | 1 | The paper reports descriptive serum concentration-time data (median troughs, peak concentrations) and exposure-response relationships for ustekinumab, but does not report compartmental pharmacokinetic parameters (CL, V, ka) or a population PK model. |
| popPK | Eylenbosch_2026 | irrelevant | 0 | 0 | The paper is a review discussing general concepts of model-informed precision dosing for biologics in dermatology and does not report specific quantitative pharmacokinetic parameters or models for ustekinumab. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The paper is an ecological study on plant leaf stoichiometry of Stellera chamaejasme and does not involve the drug ustekinumab. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The study focuses on exposure-response (PD) modeling and methodological aspects of categorical endpoints, reporting no quantitative pharmacokinetic (PK) parameters (CL, V, etc.) for ustekinumab. |
| popPK | Kimura_2026 | irrelevant | 4 | 0 | The paper describes a pharmacokinetic/pharmacodynamic model for ustekinumab but is primarily a methodological study on empirical Bayes estimation from summary-level data, and no specific quantitative PK parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Lam_2026 | relevant | 9 | 2 | The study reports qualitative confirmation of ustekinumab PK via comparison to a prior model, mentioning specific typical CL/F and V/F values (0.20 l/day, 6.77 l) from that prior model, but does not present new quantitative parameter estimates for the U-POPS cohort itself. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | This is a narrative review discussing therapeutic drug monitoring concepts and does not report original quantitative population pharmacokinetic parameters (CL, V, etc.) for ustekinumab. |
| popPK | Rodríguez-Fernández_2022 | relevant | 5 | 2 | This is a review article that summarizes population PK models for ustekinumab but does not provide specific numeric values for clearance or volume in the extracted text, referencing Table 3 which is not included. |
| popPK | Rodríguez-Fernández_2024 | relevant | 10 | 2 | The paper presents a population PK/PD model for ustekinumab in human patients, but the specific numeric parameter values (Table 2) are referenced but not included in the provided evidence text. |
| popPK | Steenholdt_2025 | irrelevant | 2 | 0 | The study investigates treatment sequencing outcomes based on failure mechanisms and reports only trough concentration thresholds, not quantitative disposition parameters (CL, V, t1/2) or PK models for ustekinumab. |
| popPK | Wang_2022 | relevant | 10 | 0 | The study develops a population PK model for ustekinumab, but specific numeric parameter values (CL, V, Q, half-life) are not listed in the provided abstract or text. |
| popPK | Wang_2026 | relevant | 7 | 2 | The study uses population PK models to report ustekinumab clearance values (mean/median implied by comparisons), but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Xu_2020 | relevant | 10 | 0 | The study describes a population PK model for ustekinumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:30 UTC</sub>
