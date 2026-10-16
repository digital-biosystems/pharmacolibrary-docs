<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ixekizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ixekizumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ixekizumab/Ixekizumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ixekizumab

- **generic name:** ixekizumab
- **ATC codes:** `L04AC13`
- **DrugBank:** [DB11569](https://go.drugbank.com/drugs/DB11569) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ixekizumab is a monoclonal antibody used to treat psoriasis, psoriatic arthritis, axial spondyloarthritis, and juvenile arthritis. It is an approved interleukin inhibitor authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13574436](https://www.wikidata.org/wiki/Q13574436) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:07 | 3:44 | 1/0/1 | 2/0/1 | 0/0/0 | 224,111/16,270 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_ixekizumab/Ixekizumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Jackson_2022_reference](drugs/drug_ixekizumab/Ixekizumab_Jackson2022_reference.md) | — | 1-compartment (no model) | 3 | Jackson K et al., Population pharmacokinetic and exposure…, British journal of clinical… (2022) | [10.1111/bcp.15034](https://doi.org/10.1111/bcp.15034) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2026_PASI_75](drugs/drug_ixekizumab/pd_Liu_2026_PASI_75.md) | PASI 75 ← ixekizumab · direct Emax (saturable) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2026_PASI_90](drugs/drug_ixekizumab/pd_Liu_2026_PASI_90.md) | PASI 90 ← ixekizumab · direct Emax (saturable) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tham_2014_PASI](drugs/drug_ixekizumab/pd_Tham_2014_PASI.md) | absolute Psoriasis Area and Severity Index (PASI) scores ← ixekizumab · indirect response — drug inhibits the production of absolute Psoriasis Area and Severity Index (PASI) scores | — | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chigutsa_2018_PASI](drugs/drug_ixekizumab/pd_Chigutsa_2018_PASI.md) | Psoriasis Activity and Severity Index [PASI] ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chigutsa_2018_sPGA](drugs/drug_ixekizumab/pd_Chigutsa_2018_sPGA.md) | static Physician Global Assessment [sPGA] ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ixekizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (inhibitor), IL17A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tham_2014.pdf` | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) | [24752880](https://pubmed.ncbi.nlm.nih.gov/24752880) | The paper describes a population pharmacokinetic model for ixekizumab, but no numeric parameter values are present in the provided text. |

<sub>queue written 2026-10-15T04:04:50.031688+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chigutsa_2018 | irrelevant | 0 | 0 | The paper reports exposure-response (efficacy) modeling results, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Deodhar_2021 | irrelevant | 0 | 0 | The paper reports efficacy and patient-reported outcomes for ixekizumab but contains no pharmacokinetic parameters. |
| popPK | Deodhar_2021_2 | irrelevant | 0 | 0 | The paper reports efficacy endpoints (sleep, work productivity) for a clinical trial and contains no quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Deodhar_2021_3 | irrelevant | 0 | 0 | The paper reports efficacy and patient-reported outcomes (PROs) for ixekizumab in spondyloarthritis, containing no quantitative pharmacokinetic parameters. |
| popPK | Liu_2026 | irrelevant | 3 | 0 | This is an exposure-response modeling study that mentions extracting PK parameters but does not report quantitative PK parameter values (CL, V, ka, etc.) for ixekizumab in the provided evidence. |
| popPK | Mease_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on patient-reported outcomes (pain, fatigue, sleep) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | This is a real-world effectiveness study comparing clinical outcomes (DAPSA/PASI scores) and not a pharmacokinetic study; it contains no PK parameters for ixekizumab. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 0 | The paper is a review that summarizes PK models for multiple drugs, but for ixekizumab it only reports pharmacodynamic parameters (EC50) and references a PK model without providing the specific quantitative PK parameter values (CL, V, etc.) for ixekizumab. |
| popPK | Tham_2014 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for ixekizumab, but no numeric parameter values are present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:04 UTC</sub>
