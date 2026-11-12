<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pentazocine&quot;,&quot;href&quot;:&quot;drugs/toxin_pentazocine/&quot;},{&quot;label&quot;:&quot;Omori_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pentazocine — `Pentazocine_Omori2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Pentazocine" model-id="Pentazocine_Omori2022_reference" status="extracted" stale="false" population="in-hospital orthopedic surgery patients" measured-compound="Pentazocine" parameterization="mechanistic" topology="2C"></div>

## Citation
Omori T, Aoyama T, Miyamoto A, Matsumoto Y. Pharmacokinetic/Pharmacodynamic Modeling and Simulation of the Analgesic Effects of Pentazocine Using Perioperative Real-World Data. Biological & pharmaceutical bulletin 45(12):1754–1763 (2022).
  ·  DOI: [10.1248/bpb.b22-00398](https://doi.org/10.1248/bpb.b22-00398)

## Population and dosing

**Population:** in-hospital orthopedic surgery patients · condition perioperative postoperative pain · age group adult · n = 520.

**Dosing:** 15 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| V c (L/kg) | V1 | 1.03 | L/kg | 1.72 (None% RSE) |
| CL (L/h/kg) | CL | 1.23 | L/h/kg | 0.33 (None% RSE) |
| Q(L/h/kg) | Q | 3.48 | L/h/kg |  |
| V p (L/kg) | V2 | 2.90 | L/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| V c (L/kg) | `Q63` · V1 | 1.03 | L/kg | 0.0721 | m3 | l/kg | space_fold (0.95) | tab_1:row3:col1, tab_1:row3:col3, tab_1:row3:col4, tab_1:row3:col5 | 1.72 (None% RSE) |
| CL (L/h/kg) | `Q22` · CL | 1.23 | L/h/kg | 2.392e-05 | m3/s | l/(h·kg) | exact (1) | tab_1:row4:col1, tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5 | 0.33 (None% RSE) |
| Q(L/h/kg) | `Q30` · Q | 3.48 | L/h/kg | 6.767e-05 | m3/s | l/(h·kg) | exact (1) | tab_1:row5:col1, tab_1:row5:col3, tab_1:row5:col4, tab_1:row5:col5 |  |
| V p (L/kg) | `Q64` · V2 | 2.90 | L/kg | 0.203 | m3 | l/kg | space_fold (0.95) | tab_1:row6:col1, tab_1:row6:col3, tab_1:row6:col4, tab_1:row6:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Pentazocine

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col3', 'tab_1:row5:col4', 'tab_1:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row3:col1', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row6:col1', 'tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.23 | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 86.1 L/h | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 72.1 L | ['tab_1:row3:col1', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 203 L | ['tab_1:row6:col1', 'tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentazocine%5D%20Pentazocine_Omori2022_reference&body=Drug%3A%20pentazocine%0ARecord%3A%20Pentazocine_Omori2022_reference%0APaper%3A%20Omori_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pentazocine/Pentazocine_Omori2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:34 UTC</sub>
