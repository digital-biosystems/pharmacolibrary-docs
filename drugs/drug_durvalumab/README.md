<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# durvalumab

- **generic name:** durvalumab
- **ATC codes:** `L01FF03`, `L01XC28`
- **DrugBank:** [DB11714](https://go.drugbank.com/drugs/DB11714) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Durvalumab is a monoclonal antibody that blocks the PD-L1 protein and is used to treat non-small-cell lung cancer. It is approved and authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904005](https://www.wikidata.org/wiki/Q19904005) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:25 | 5:55 | 1/1/3 | 0/0/0 | 0/0/0 | 323,191/26,458 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span> | [Zhao_2026_reference](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.762). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Abegesah_2025_reference](drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+3 cov.) | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Baverel_2018_reference](drugs/drug_durvalumab/Durvalumab_Baverel2018_reference.md) | — | 1-compartment (no model) | 1 | Baverel PG et al., Population Pharmacokinetics of Durvalum…, Clinical pharmacology and t… (2018) | [10.1002/cpt.982](https://doi.org/10.1002/cpt.982) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ogasawara_2020_reference](drugs/drug_durvalumab/Durvalumab_Ogasawara2020_reference.md) | — | 2-compartment (no model) | 5 (+4 cov.) | Ogasawara K et al., Population Pharmacokinetics of an Anti-…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Proctor_2026_reference](drugs/drug_durvalumab/Durvalumab_Proctor2026_reference.md) | — | 1-compartment (no model) | 2 | Proctor JR et al., Albumin Levels Are Predictive of Cachex…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70185](https://doi.org/10.1002/psp4.70185) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=durvalumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 18 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_2023.pdf` | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | popPK | 7 | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) | [37300457](https://pubmed.ncbi.nlm.nih.gov/37300457) | While the study models durvalumab's PK, the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-10-14T19:20:15.740190+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2019 | irrelevant | 0 | 0 | The paper reports in-vitro functional EC50 and binding affinity values for durvalumab, but contains no quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life derived from PK modeling). |
| popPK | He_2023 | irrelevant | 0 | 0 | The study performs population pharmacokinetic modeling for tremelimumab, not durvalumab, which is only a co-administered comparator agent. |
| popPK | Hec-Gałązka_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro potency (IC50/EC50) of small molecule PD-L1 inhibitors, using durvalumab only as a reference comparator in binding assays rather than studying its pharmacokinetics. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of tremelimumab, with durvalumab mentioned only as a co-administered agent or comparator context, not the subject drug. |
| popPK | Lim_2023 | irrelevant | 7 | 0 | While the study models durvalumab's PK, the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Proctor_2026 | irrelevant | 5 | 3 | The study reports mechanistic PBPK parameters for albumin and degradation, but the specific standard population PK parameters (CL, V) for durvalumab are not listed as estimates in the provided text, only derived simulation results and references to supplementary tables. |
| popPK | Song_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of tremelimumab, and durvalumab is used only as a comparator or co-administered agent without reporting its specific quantitative disposition parameters (CL, V, etc.) in the text. |
| popPK | Song_2023_2 | irrelevant | 0 | 0 | The study models tremelimumab exposure and T-cell response, not the pharmacokinetic disposition parameters of durvalumab. |
| popPK | Xu_2019 | irrelevant | 1 | 0 | The paper reports population pharmacokinetic parameters for danvatirsen (the subject drug), while durvalumab is listed only as a co-administered comparator/agent. |
| popPK | de_2025 | relevant | 5 | 2 | This is a modeling and simulation study using a published PK model for durvalumab; it reports derived exposure metrics (Cavg, Ctrough) but does not list the specific structural model parameter estimates (CL, V, Q) in the main text, referring instead to the license holder's model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:20 UTC</sub>
