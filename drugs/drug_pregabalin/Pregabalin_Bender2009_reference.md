<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/&quot;},{&quot;label&quot;:&quot;Bender_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pregabalin — `Pregabalin_Bender2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-07 07:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The pregabalin rat model was rejected because its clearance (0.034 L/hr) and volumes (V1 0.270 L, V2 6.75 L) fall outside plausible physiological windows, suggesting a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="pregabalin" model-id="Pregabalin_Bender2009_reference" status="rejected" stale="true" population="rats" measured-compound="pregabalin" parameterization="mechanistic" topology="2C"></div>

## Citation
Bender G, Gosset J, Florian J, Tan K, Field M, Marshall S et al. Population pharmacokinetic model of the pregabalin-sildenafil interaction in rats: application of simulation to preclinical PK-PD study design. Pharmaceutical research 26(10):2259–2269 (2009).
  ·  DOI: [10.1007/s11095-009-9942-y](https://doi.org/10.1007/s11095-009-9942-y)

## Population and dosing

**Population:** rats · n = ,
  "condition": "healthy",
  "species": "rat",
  "compounds": [
    {
      "name": "pregabalin",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "sildenafil",
      "role": "co-administered",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "no"
    },
    {
      "name": "sildenafil active metabolite",
      "role": "metabolite",
      "dosed": "no",
      "measured": "yes",
      "has_parameters": "no"
    }
  ],
  "links": [
    {
      "from": "sildenafil",
      "to": "sildenafil active metabolite",
      "relation": "metabolism",
      "link_parameter": "none"
    }
  ]
}.

**Dosing:** 4, 10 mg/kg/hr, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/hr) | CL | 0.034 | L/hr |
| V1 (L) | V1 | 0.270 | L |
| Q (L/hr) | Q | 0.0225 | L/hr |
| V2 (L) | V2 | 6.75 | L |
| θSLD | θSLD | 0.302 |  |
| Absorption rate constant (k a ) | kabs | 2.0 | h À1 |
| Lag time (hour) | tlag | 0.495 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pregabalin rat model was rejected because its clearance (0.034 L/hr) and volumes (V1 0.270 L, V2 6.75 L) fall outside plausible physiological windows, suggesting a unit or scale extraction error.**

The plausibility check flagged the magnitudes of CL (0.034 L/hr), V1 (0.270 L) and V2 (6.75 L) as implausible for a rat pregabalin model, consistent with a unit or scale extraction error. The remaining parameters (Q 0.0225 L/hr, kabs 2.0 h⁻¹, tlag 0.495 hour, θSLD 0.302) and the NAT2 covariate effects were recorded, but a second reader returned no values for the NAT2 covariate, kabs, tlag, and no covariate form for CL, so these entries stand without independent confirmation. Extracted — pregabalin: CL 0.034 L/hr, V1 0.27 L, Q 0.0225 L/hr, V2 6.75 L, kabs 2 h À1, tlag 0.495 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant: this record has 2.0, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/hr) | `Q22` · CL | 0.034 | L/hr | 9.444e-09 | m3/s | l/h | exact (1) | Tab4:row3:col1, Tab4:row3:col3, Tab4:row3:col4, Tab4:row3:col5, Tab4:row3:col7, Tab4:row3:col8, Tab4:row3:col9, Tab4:row3:col11, Tab4:row3:col12 |
| V1 (L) | `Q63` · V1 | 0.270 | L | 0.00027 | m3 | l | exact (1) | Tab4:row4:col1, Tab4:row4:col3, Tab4:row4:col4, Tab4:row4:col5, Tab4:row4:col7, Tab4:row4:col8, Tab4:row4:col9, Tab4:row4:col11, Tab4:row4:col12 |
| Q (L/hr) | `Q30` · Q | 0.0225 | L/hr | 6.25e-09 | m3/s | l/h | exact (1) | Tab4:row5:col1, Tab4:row5:col3, Tab4:row5:col4, Tab4:row5:col5, Tab4:row5:col7, Tab4:row5:col8, Tab4:row5:col9, Tab4:row5:col11, Tab4:row5:col12 |
| V2 (L) | `Q64` · V2 | 6.75 | L | 0.00675 | m3 | l | exact (1) | Tab4:row6:col1, Tab4:row6:col3, Tab4:row6:col4, Tab4:row6:col5, Tab4:row6:col7, Tab4:row6:col8, Tab4:row6:col9, Tab4:row6:col11, Tab4:row6:col12 |
| θSLD | `Q900` · θSLD | 0.302 |  |  |  |  |  |  |
| Absorption rate constant (k a ) | `Q49` · kabs | 2.0 | h À1 | 0.0005556 | 1/s | 1/h | review_gapfill (0.7) | Bae_2016:review |
| Lag time (hour) | `Q83` · tlag | 0.495 | hour | 1782 | s | h | review_gapfill (0.7) | van_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col1', 'Tab4:row1:col2', 'Tab4:row1:col3', 'Tab4:row1:col4', 'Tab4:row1:col5', 'Tab4:row1:col6', 'Tab4:row1:col7', 'Tab4:row1:col8', 'Tab4:row1:col9', 'Tab4:row1:col10', 'Tab4:row1:col11', 'Tab4:row1:col12'])
- routed 'ω1CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ω1V1' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1', 'Tab4:row8:col3', 'Tab4:row8:col4', 'Tab4:row8:col5', 'Tab4:row8:col7', 'Tab4:row8:col8', 'Tab4:row8:col9', 'Tab4:row8:col11', 'Tab4:row8:col12'])
- routed 'ω1Q' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- kept covariate coefficient θSLD=0.302 (covariate SLD) — not an ontology parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pregabalin
- gap-filled Q49 (kabs) from Bae_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from van_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab4:row3:col2 = '19.08%'
- unparsed cell Tab4:row3:col6 = '14.59%'
- unparsed cell Tab4:row3:col10 = '8.83%'
- unparsed cell Tab4:row4:col2 = '3.38%'
- unparsed cell Tab4:row4:col6 = '3.38%'
- unparsed cell Tab4:row4:col10 = '3.27%'
- unparsed cell Tab4:row5:col2 = '32.00%'
- unparsed cell Tab4:row5:col6 = '35.76%'
- unparsed cell Tab4:row5:col10 = '18.08%'
- unparsed cell Tab4:row6:col2 = '41.48%'
- unparsed cell Tab4:row6:col6 = '51.99%'
- unparsed cell Tab4:row6:col10 = '38.82%'
- unparsed cell Tab4:row7:col2 = '24.74%'
- unparsed cell Tab4:row7:col6 = '15.91%'
- unparsed cell Tab4:row7:col10 = '14.63%'
- unparsed cell Tab4:row8:col2 = '9.38%'
- unparsed cell Tab4:row8:col6 = '9.26%'
- unparsed cell Tab4:row8:col10 = '8.72%'
- unparsed cell Tab4:row9:col2 = '40.00%'
- unparsed cell Tab4:row9:col6 = '40.87%'
- unparsed cell Tab4:row9:col10 = '15.94%'
- unparsed cell Tab4:row10:col2 = '27.07%'
- unparsed cell Tab4:row10:col6 = '19.52%'
- unparsed cell Tab4:row10:col10 = '18.52%'
- unparsed cell Tab4:row11:col2 = '8.96%'
- unparsed cell Tab4:row11:col6 = '8.75%'
- unparsed cell Tab4:row11:col10 = '8.33%'
- unparsed cell Tab4:row12:col6 = '23.05%'
- unparsed cell Tab4:row12:col10 = '28.37%'
- unparsed cell Tab4:row13:col2 = '18.32%'
- unparsed cell Tab4:row13:col6 = '18.53%'
- unparsed cell Tab4:row13:col10 = '18.85%'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.495 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θsld]` | 0.302 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row5:col1', 'Tab4:row5:col3', 'Tab4:row5:col4', 'Tab4:row5:col5', 'Tab4:row5:col7', 'Tab4:row5:col8', 'Tab4:row5:col9', 'Tab4:row5:col11', 'Tab4:row5:col12'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2016:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |
| C5_dimension_Q83 | pass | [time] |  | ['van_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.034 | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.034 L/h | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.27 L | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.75 L | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpregabalin%5D%20Pregabalin_Bender2009_reference&body=Drug%3A%20pregabalin%0ARecord%3A%20Pregabalin_Bender2009_reference%0APaper%3A%20Bender_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pregabalin/Pregabalin_Bender2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:16 UTC</sub>
