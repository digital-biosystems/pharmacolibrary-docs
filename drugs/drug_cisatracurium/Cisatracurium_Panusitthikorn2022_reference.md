<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;cisatracurium&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/&quot;},{&quot;label&quot;:&quot;Panusitthikorn_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisatracurium_Liu2012_reference&quot;,&quot;label&quot;:&quot;Liu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisatracurium_Tran1998_reference&quot;,&quot;label&quot;:&quot;Tran_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisatracurium — `Cisatracurium_Panusitthikorn2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Panusitthikorn P et al., Pharmacokinetics and pharmacodynamics s…, BMC anesthesiology (2022)
  ·  DOI: [10.1186/s12871-022-01571-2](https://doi.org/10.1186/s12871-022-01571-2)

<div class="pk-model-meta" hidden drug="cisatracurium" model-id="Cisatracurium_Panusitthikorn2022_reference" status="rejected" stale="false" population="critically ill patients with respiratory failure" measured-compound="cisatracurium" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Cmax (ng/ml) | Q32 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'pharmacokinetic parametersa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pharmacodynamic response' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Tab3:row3:col5', 'Tab3:row3:col6', 'Tab3:row3:col7', 'Tab3:row3:col10'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7', 'Tab3:row4:col10'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4', 'Tab3:row5:col5', 'Tab3:row5:col6', 'Tab3:row5:col7', 'Tab3:row5:col10'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7', 'Tab3:row6:col10'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:row7:col4', 'Tab3:row7:col5', 'Tab3:row7:col6', 'Tab3:row7:col7', 'Tab3:row7:col10'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4', 'Tab3:row8:col5', 'Tab3:row8:col6', 'Tab3:row8:col7', 'Tab3:row8:col10'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4', 'Tab3:row9:col5', 'Tab3:row9:col6', 'Tab3:row9:col7', 'Tab3:row9:col10'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2', 'Tab3:row10:col3', 'Tab3:row10:col4', 'Tab3:row10:col5', 'Tab3:row10:col6', 'Tab3:row10:col7', 'Tab3:row10:col10'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3', 'Tab3:row11:col4', 'Tab3:row11:col5', 'Tab3:row11:col6', 'Tab3:row11:col7', 'Tab3:row11:col10'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1', 'Tab3:row12:col2', 'Tab3:row12:col3', 'Tab3:row12:col4', 'Tab3:row12:col5', 'Tab3:row12:col6', 'Tab3:row12:col7', 'Tab3:row12:col10'])
- dropped unlinked row (NIL): 'Mean ± SD' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col1', 'Tab3:row13:col2', 'Tab3:row13:col3', 'Tab3:row13:col4', 'Tab3:row13:col5', 'Tab3:row13:col6', 'Tab3:row13:col7'])
- table mostly unlinked (11/12 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cisatracurium
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = 'kel (min-1)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row2:col5', 'Tab3:row2:col8', 'Tab3:row2:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cisatracurium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Panusitthikorn_2022` / `Panusitthikorn_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:22 UTC</sub>
