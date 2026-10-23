<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Gieschke_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Gieschke2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Absorption rate constant kabs has a dimension mismatch, and apparent metabolite clearance CLm/F is used despite a disagreement on mechanistic parameterization.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Gieschke2003_reference" status="rejected" stale="false" population="patients with advanced or metastatic colorectal cancer" measured-compound="5-fluorouracil" parameterization="apparent" topology="general_linear"></div>

## Citation
Gieschke R, Burger HU, Reigner B, Blesch KS, Steimer JL. Population pharmacokinetics and concentration-effect relationships of capecitabine metabolites in colorectal cancer patients. British journal of clinical pharmacology 55(3):252–263 (2003).
  ·  DOI: [10.1046/j.1365-2125.2003.01765.x](https://doi.org/10.1046/j.1365-2125.2003.01765.x)

## Population and dosing

**Population:** patients with advanced or metastatic colorectal cancer · condition colorectal cancer · age group adult · n = 481.

**Dosing:** 1250 mg/m2, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed capecitabine, measured 5-fluorouracil.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA (l h -1 ) | kabs | 1.09 | l h -1 |
| TLAG (h) | tlag | 5.52E-4 | h |
| V1 (l) | V | 90.6 | l |
| CL1 (l h -1 ) | CL | 75.8 | l h -1 |
| V2 (l) | V | 17.8 | l |
| CL2 (l h -1 ) | CLm/F | 1190 | l h -1 |
| V3 (l) | V | 73.6 | l |
| CL3 (l h -1 ) | CL | 27.5 | l h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption rate constant kabs has a dimension mismatch, and apparent metabolite clearance CLm/F is used despite a disagreement on mechanistic parameterization.**

The absorption rate constant kabs is recorded as 1.09 L/h, which is dimensionally inconsistent for a first-order rate constant. The parameterization is labeled apparent, relying on a metabolite clearance value of 1190 L/h, whereas a second reader identified the model as mechanistic. Disagreements also exist on the primary analyte, with this record listing 5-fluorouracil and the second reader identifying capecitabine. Extracted — fluorouracil: kabs 1.09 l h -1, tlag 0.000552 h, V 17.8 l, CLm/F 1.19e+03 l h -1; 5'-deoxy-5-fluorouridine: V 90.6 l, CL 75.8 l h -1; alpha-fluorobeta-alanine: V 73.6 l, CL 27.5 l h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 5-fluorouracil, the second reading 5-FU; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA (l h -1 ) | `Q49` · kabs | 1.09 | l h -1 |  |  | l/h | exact (1) | tab_3:row2:col1, tab_3:row2:col3 |
| TLAG (h) | `Q83` · tlag | 5.52E-4 | h | 1.987 | s | h | exact (1) | tab_3:row3:col1 |
| V1 (l) | `Q61` · V | 90.6 | l | 0.0906 | m3 | l | exact (1) | tab_3:row4:col1, tab_3:row4:col3 |
| CL1 (l h -1 ) | `Q22` · CL | 75.8 | l h -1 | 2.106e-05 | m3/s | l/h | exact (1) | tab_3:row5:col1, tab_3:row5:col3 |
| V2 (l) | `Q61` · V | 17.8 | l | 0.0178 | m3 | l | exact (1) | tab_3:row6:col1 |
| CL2 (l h -1 ) | `Q351` · CLm/F | 1190 | l h -1 | 0.0003306 | m3/s | l/h | exact (1) | tab_3:row7:col1, tab_3:row7:col3 |
| V3 (l) | `Q61` · V | 73.6 | l | 0.0736 | m3 | l | exact (1) | tab_3:row8:col1, tab_3:row8:col3 |
| CL3 (l h -1 ) | `Q22` · CL | 27.5 | l h -1 | 7.639e-06 | m3/s | l/h | exact (1) | tab_3:row9:col1, tab_3:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 1 row(s) → alpha-fluorobeta-alanine (abbreviation 1)
- table section iov: 'BSAV3: Effect of BSA on V3' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'CLRCL3: Effect of CLCR on CL3' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'CLRV3: Effect of CLCR on V3' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'ALPCL2: Effect of ALP on CL2' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'Res. Error 5¢-DFUR' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'Res. Error 5-FU' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- table section iov: 'Res. Error FBAL*' routed out of structural estimates ('IOV TLAG 52 915 193 000')
- unit_dimension_mismatch: 'KA (l h -1 )' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- metabolite 5-fluorouracil: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V1 (l)' Q63→Q61 for 5'-deoxy-5-fluorouridine — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V2 (l)' Q63→Q61 for 5-fluorouracil — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V3 (l)' Q63→Q61 for alpha-fluorobeta-alanine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 14 linked by role; re-tagged parent→5'-deoxy-5-fluorouridine ×5, parent→5-fluorouracil ×6, parent→alpha-fluorobeta-alanine ×12
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table tab_3: unbound_uncertainty
- table tab_3: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism'], ["5'-deoxy-5-fluorouridine", '5-fluorouracil', 'metabolism'], ['5-fluorouracil', 'alpha-fluorobeta-alanine', 'metabolism']] | [['capecitabine', "5'-dfur", 'metabolism'], ["5'-dfur", '5-fu', 'metabolism'], ['5-fu', 'fbal', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl1]` |  | 24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl1]` | 24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` |  | 33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3]` | 32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` |  | 5.52E-4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 5.52E-4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 17.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 17.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 26 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-fluorouracil | 5-FU | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_3:row5:col1', 'tab_3:row5:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_3:row9:col1', 'tab_3:row9:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_3:row7:col1', 'tab_3:row7:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l h -1 | ['tab_3:row2:col1', 'tab_3:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_3:row4:col1', 'tab_3:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_3:row6:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_3:row8:col1', 'tab_3:row8:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_3:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 75.8 L/h | ['tab_3:row5:col1', 'tab_3:row5:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 27.5 L/h | ['tab_3:row9:col1', 'tab_3:row9:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 90.6 L | ['tab_3:row4:col1', 'tab_3:row4:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.8 L | ['tab_3:row6:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 73.6 L | ['tab_3:row8:col1', 'tab_3:row8:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Gieschke2003_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Gieschke2003_reference%0APaper%3A%20Gieschke_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Gieschke2003_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:06 UTC</sub>
