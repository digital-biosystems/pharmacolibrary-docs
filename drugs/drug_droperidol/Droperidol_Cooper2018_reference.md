<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;droperidol&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/&quot;},{&quot;label&quot;:&quot;Cooper_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Droperidol_Foo2016_reference&quot;,&quot;label&quot;:&quot;Foo_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/Droperidol_Foo2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# droperidol — `Droperidol_Cooper2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.867). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The droperidol absorption rate constant kabs is reported with the unit 'ka', which is not a valid unit and could not be converted to SI, so the record was rejected for a dimension mismatch on a structural parameter.**

In the Cooper_2018 two-compartment droperidol model for healthy volunteers, the absorption rate constant kabs (value 0.517) carries the verbatim unit 'ka' — the parameter's own name repeated instead of a reciprocal time unit — so no SI value could be assigned. The other parameters (V1 3.16 L, V2 16.9 L, Q 9.66 L/h, t1/2β 2.0 h) carry convertible units, but the invalid unit on kabs alone triggered the dimension-mismatch refusal. Extracted — droperidol: V1 3.16 L, V2 16.9 L, Q 9.66 L/h, kabs 0.517 ka, t1/2β 2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cvcp: this record has none, the second reading 13.2; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Cooper I et al., The pharmacokinetics of intranasal drop…, SAGE open medicine (2018)
  ·  DOI: [10.1177/2050312118813283](https://doi.org/10.1177/2050312118813283)

<div class="pk-model-meta" hidden drug="droperidol" model-id="Droperidol_Cooper2018_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="droperidol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Central volume of distribution (V1) | `Q63` · V1 | 3.16 | L | 0.00316 | L | 34.3 | boundary_compartment (0.9) | table3-2050312118813283:row2:col2 | — | not captured |
| Peripheral volume of distribution (V2) | `Q64` · V2 | 16.9 | L | 0.0169 | L | 23.1 | boundary_compartment (0.9) | table3-2050312118813283:row3:col2 | — | not captured |
| Distribution clearance (CLd) | `Q30` · Q | 9.66 | L/h | 2.683333333333333e-06 | L/h | 30.0 | exact (1.0) | table3-2050312118813283:row4:col2 | — | not captured |
| Absorption rate constant (ka) | `Q49` · kabs | 0.517 | ka | not captured | [ka] | 11.5 | exact (1.0) | table3-2050312118813283:row5:col2 | — | not captured |
| Terminal half-life (T1/2,β) | `Q60` · t1/2β | 2.0 | h | 7200.0 | h | not captured | llm (0.6) | table3-2050312118813283:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Bioavailability (F)' routed out of structural estimates ('IIV (%CV) or 5th to 95th percentile (P5–P95)')
- unit_dimension_unknown: 'V1' (V1)
- unit_dimension_unknown: 'V2' (V2)
- unit_dimension_unknown: 'CLd' (Q)
- unit_dimension_mismatch: 'Absorption rate constant (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Rate constant for lag time (klag)' — extend the ontology if this is a real PK parameter (source ['table3-2050312118813283:row6:col2'])
- unit_dimension_unknown: 'T1/2,β' (t1/2β)
- dropped duplicate Q30 ('CVcp', value '13.2') — already have one for this compound
- routed 'SDcp' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Central volume of distribution (V1)' → L (from the paper text: "Abstract: 'apparent central volume of distri...' reported in L; text reports volumes of distribution for droperidol in L")
- implicit units: 'Peripheral volume of distribution (V2)' → L (from the paper text: 'Text reports peripheral volume of distribution (V2) among volume parameters in L consistent with reported CL values in L')
- implicit units: 'Distribution clearance (CLd)' → L/h (from the paper text: "Text reports clearances in L/h (e.g. 'apparent elimination clearance for intranasal dosing was 87.9 L/h'); CLd is an int")
- implicit units: 'Terminal half-life (T1/2,β)' → h (from the paper text: "Text: 'The terminal elimination half-life of around 2 h that we observed, for both IN and IV dosing'.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Central volume of distribution (V1)); Q64 (Peripheral volume of distribution (V2)); Q30 (Distribution clearance (CLd))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=droperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell table3-2050312118813283:row2:col3 = '85.5%'
- unparsed cell table3-2050312118813283:row3:col3 = '43.6%'
- unparsed cell table3-2050312118813283:row4:col3 = '57%'
- unparsed cell table3-2050312118813283:row5:col1 = 'h–1'
- unparsed cell table3-2050312118813283:row5:col3 = '13.1%'
- unparsed cell table3-2050312118813283:row6:col1 = 'h–1'
- unparsed cell table3-2050312118813283:row6:col3 = '47.7%'
- unparsed cell table3-2050312118813283:row7:col2 = '17.4a(15.0)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cvcp]` | not captured | 13.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q83_category]` | not captured | 5.18 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['table3-2050312118813283:row4:col2'] |
| C5_dimension_Q49 | fail | [time] | ka | not captured | not captured | ['table3-2050312118813283:row5:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['table3-2050312118813283:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['table3-2050312118813283:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['table3-2050312118813283:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.16 L | not captured | not captured | ['table3-2050312118813283:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 16.9 L | not captured | not captured | ['table3-2050312118813283:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_droperidol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cooper_2018` / `Cooper_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:27 UTC</sub>
