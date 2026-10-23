<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# durvalumab

- **generic name:** durvalumab
- **ATC codes:** `L01FF03`, `L01XC28`
- **DrugBank:** [DB11714](https://go.drugbank.com/drugs/DB11714) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Durvalumab is a monoclonal antibody that blocks the PD-L1 protein and is used to treat non-small-cell lung cancer. It is approved and authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904005](https://www.wikidata.org/wiki/Q19904005) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Zhao_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC. [Run it in the simulator](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md?tab=Simulation) · [record](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.01188 | L/h | 0.285 L/day | Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC |  | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhao_2026_reference](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md) |
| CL | CL | 0.01242 | L/h | 0.298 L/day | patients with advanced cancers, including biliary tract cancer | 3141 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_reference](drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md) |
| V | V1 | 3.42 | L | 3.42 L | patients with advanced cancers, including biliary tract cancer | 3141 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_reference](drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md) |
| V | V1 | 3.42 | L | 3.42 L | Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC |  | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhao_2026_reference](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Zhao_2026 · CL</text><circle cx="216.1" cy="30.0" r="4" fill="#66bb6a"><title>Zhao_2026 · CL: 0.01188 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Abegesah_2025 · CL</text><circle cx="222.9" cy="46.0" r="4" fill="#ef6c00"><title>Abegesah_2025 · CL: 0.01242 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Abegesah_2025 · V1</text><circle cx="376.9" cy="30.0" r="4" fill="#ef6c00"><title>Abegesah_2025 · V1: 3.42 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Zhao_2026 · V1</text><circle cx="376.9" cy="46.0" r="4" fill="#66bb6a"><title>Zhao_2026 · V1: 3.42 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Zhao_2026_reference](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+6 cov.) | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_tmax</sub> | [Abegesah_2025_reference](drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+4 cov.) | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Baverel_2018_reference](drugs/drug_durvalumab/Durvalumab_Baverel2018_reference.md) | — | 2-compartment (no model) | 3 | Baverel PG et al., Population Pharmacokinetics of Durvalum…, Clinical pharmacology and t… (2018) | [10.1002/cpt.982](https://doi.org/10.1002/cpt.982) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Ogasawara_2020_reference](drugs/drug_durvalumab/Durvalumab_Ogasawara2020_reference.md) | — | 2-compartment (no model) | 5 (+4 cov.) | Ogasawara K et al., Population Pharmacokinetics of an Anti-…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Proctor_2026_reference](drugs/drug_durvalumab/Durvalumab_Proctor2026_reference.md) | — | 1-compartment (no model) | 2 | Proctor JR et al., Albumin Levels Are Predictive of Cachex…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70185](https://doi.org/10.1002/psp4.70185) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_durvalumab/pd_De_2019_eGFP.md) | normalized stimulation (reporter gene expression) ← durvalumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_gMFI](drugs/drug_durvalumab/pd_De_2019_gMFI.md) | binding ← durvalumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lim_2023_AE](drugs/drug_durvalumab/pd_Lim_2023_AE.md) | adverse events ← durvalumab · model not identified | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lim_2023_PFS](drugs/drug_durvalumab/pd_Lim_2023_PFS.md) | progression-free survival ← durvalumab · model not identified | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_AESIs](drugs/drug_durvalumab/pd_Abegesah_2025_AESIs.md) | Grade 3/4 drug-related AEs of special interest ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_AE_leading_to_treatment_discontinuation](drugs/drug_durvalumab/pd_Abegesah_2025_AE_leading_to_treatment_discontinuation.md) | AEs leading to treatment discontinuation ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_OS](drugs/drug_durvalumab/pd_Abegesah_2025_OS.md) | overall survival ← durvalumab · time-to-event model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_PFS](drugs/drug_durvalumab/pd_Abegesah_2025_PFS.md) | progression-free survival ← durvalumab · time-to-event model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Abegesah_2025_TRAEs](drugs/drug_durvalumab/pd_Abegesah_2025_TRAEs.md) | Grade 3/4 treatment-related adverse events ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lim_2023_OS](drugs/drug_durvalumab/pd_Lim_2023_OS.md) | overall survival ← durvalumab · time-to-event model | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhao_2026_AESIs](drugs/drug_durvalumab/pd_Zhao_2026_AESIs.md) | grade ≥3 treatment‐related adverse events of special interest ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhao_2026_AEs](drugs/drug_durvalumab/pd_Zhao_2026_AEs.md) | grade ≥3 treatment‐related adverse events ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhao_2026_AEs_2](drugs/drug_durvalumab/pd_Zhao_2026_AEs_2.md) | AEs leading to durvalumab treatment discontinuation ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhao_2026_EFS](drugs/drug_durvalumab/pd_Zhao_2026_EFS.md) | event‐free survival ← durvalumab · time-to-event model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhao_2026_pCR](drugs/drug_durvalumab/pd_Zhao_2026_pCR.md) | pathological complete response ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=durvalumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:30 | 13:32 | 2/3/0 | 4/0/0 | 0/0/0 | 317,940/65,350 | openai / gpt-6-luna | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_2023.pdf` | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) | [37300457](https://pubmed.ncbi.nlm.nih.gov/37300457) | Human durvalumab PopPK is analyzed, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T12:17:56.823121+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2019 | irrelevant | 0 | 0 | This in-vitro functional assay reports EC50 values, not durvalumab disposition parameters; half-life values are only referenced in an unprovided table. |
| popPK | He_2023 | irrelevant | 0 | 0 | This reports tremelimumab pharmacokinetics, not durvalumab parameters. |
| popPK | Hec-Gałązka_2024 | irrelevant | 0 | 0 | This is an in-vitro inhibitor study where durvalumab is only a comparator, with no durvalumab disposition parameters. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The model reports tremelimumab parameters, not durvalumab parameters. |
| popPK | Lim_2023 | relevant | 10 | 0 | Human durvalumab PopPK is analyzed, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Song_2023 | irrelevant | 0 | 0 | The study reports tremelimumab pharmacokinetics, not durvalumab disposition parameters; some tremelimumab model details are only in supplementary material. |
| popPK | Song_2023_2 | irrelevant | 0 | 0 | The model reports tremelimumab response parameters, not durvalumab disposition values. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The model and numeric PK values are for danvatirsen, not durvalumab. |
| popPK | de_2025 | relevant | 8 | 3 | Human durvalumab PK simulations report a numeric Km, but the model’s other parameter values are not provided and its code is in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:18 UTC</sub>
