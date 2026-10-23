<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fimasartan — `Fimasartan_Kim2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span>

> This record was reviewed on 2026-10-07 09:23 UTC (Rejected), but the paper was screened again on 2026-10-07 15:28 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="fimasartan" model-id="Fimasartan_Kim2015_reference" status="needs_review" stale="true" population="rats, dogs, and healthy volunteers" measured-compound="fimasartan" parameterization="mechanistic" topology="2C"></div>

## Citation
Kim TH, Shin S, Landersdorfer CB, Chi YH, Paik SH, Myung J et al. Population Pharmacokinetic Modeling of the Enterohepatic Recirculation of Fimasartan in Rats, Dogs, and Humans. The AAPS journal 17(5):1210–1223 (2015).
  ·  DOI: [10.1208/s12248-015-9764-2](https://doi.org/10.1208/s12248-015-9764-2)

## Population and dosing

**Population:** rats, dogs, and healthy volunteers · condition healthy · age group mixed · n = &gt;100.

**Dosing:** 21, 70, 210, 700, 1400, 33600 mg, intravenous, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| the associated clearance was over | CL | 500 | L/h |
| Volume of distribution of central compartment | V1 | 22.0 | L |
| Volume of distribution of shallow peripheral compartment | V2 | 25.2 | L |
| Distribution clearance from central to liver compartment | Q | 60.2 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bioavailability under fasted relative to fasting conditions: this record has none, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| the associated clearance was over | `Q22` · CL | 500 | L/h | 0.0001389 | m3/s | L/h | boundary (0.8) | Kim_2015:other_prose |
| Volume of distribution of central compartment | `Q63` · V1 | 22.0 | L | 0.022 | m3 | L | boundary_compartment (0.9) | Kim_2015:other_prose |
| Volume of distribution of shallow peripheral compartment | `Q64` · V2 | 25.2 | L | 0.0252 | m3 | L | boundary_compartment (0.9) | Kim_2015:other_prose |
| Distribution clearance from central to liver compartment | `Q30` · Q | 60.2 | L/h | 1.672e-05 | m3/s | L/h | boundary (0.8) | Kim_2015:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Modeled absolute oral bioavailability | Q40 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('the associated clearance was over'=500) from results prose — parameter table was unreadable
- salvaged Q63 ('Volume of distribution of central compartment'=22.0) from results prose — parameter table was unreadable
- salvaged Q64 ('Volume of distribution of shallow peripheral compartment'=25.2) from results prose — parameter table was unreadable
- salvaged Q30 ('Distribution clearance from central to liver compartment'=60.2) from results prose — parameter table was unreadable
- implicit units: 'the associated clearance was over' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for this specific clearance parameter in the provided text or table footnot')
- implicit units: 'Volume of distribution of central compartment' → L (from the paper text: "Table 1 header and footnote b state: 'Volumes of distribution ... L for 75 kg' and the row for V1 lists unit 'L for 75 k")
- implicit units: 'Volume of distribution of shallow peripheral compartment' → L (from the paper text: "Table 1 header and footnote b state: 'Volumes of distribution ... L for 75 kg' and the row for V2 lists unit 'L for 75 k")
- implicit units: 'Distribution clearance from central to liver compartment' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance (Q or CLd). The paper does not explicitly print the unit for this speci')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fimasartan

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- unparsed cell Kim_2015_table_2:row3:col2 = 'Solution, 15.4% (11.0-17.6%) Tablet, 13.9% (8.56-16.0%) Capsule, 7.13% (6.31-8.35%)'
- unparsed cell Kim_2015_table_2:row3:col3 = 'Solution, 38.7% (20.0-59.8%)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability under fasted relative to fasting conditions]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution clearance from central to liver compartment].value` | 60.2 |  | mismatch |
| `gpt-oss-120b` | `parameters[distribution clearance from shallow peripheral compartment]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of elimination from liver]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of transfer from bile to gut at baseline]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[modeled absolute oral bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the associated clearance was over]` | 500 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q95_category]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of central compartment]` | 22.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of shallow peripheral compartment]` | 25.2 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kim_2015:other_prose'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Kim_2015:other_prose'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Kim_2015:other_prose'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Kim_2015:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 500 | ['Kim_2015:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 500 L/h | ['Kim_2015:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 22 L | ['Kim_2015:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 25.2 L | ['Kim_2015:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfimasartan%5D%20Fimasartan_Kim2015_reference&body=Drug%3A%20fimasartan%0ARecord%3A%20Fimasartan_Kim2015_reference%0APaper%3A%20Kim_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fimasartan/Fimasartan_Kim2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:28 UTC</sub>
