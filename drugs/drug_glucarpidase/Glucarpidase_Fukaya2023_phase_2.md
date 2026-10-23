<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;glucarpidase&quot;,&quot;href&quot;:&quot;drugs/drug_glucarpidase/&quot;},{&quot;label&quot;:&quot;Fukaya_2023 \u00b7 phase_2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glucarpidase — `Glucarpidase_Fukaya2023_phase_2`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The glucarpidase model was held back because its structure contains a nonlinear Michaelis-Menten hydrolysis step (Vmax/Km) converting methotrexate to DAMPA, a model structure the review cannot reproduce.

<div class="pk-model-meta" hidden drug="glucarpidase" model-id="Glucarpidase_Fukaya2023_phase_2" status="needs_review" stale="false" population="healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate" measured-compound="methotrexate" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Fukaya Y, Kimura T, Hamada Y, Yoshimura K, Hiraga H, Yuza Y et al. Development of a population pharmacokinetics and pharmacodynamics model of glucarpidase rescue treatment after high-dose methotrexate therapy. Frontiers in oncology 13:1003633 (2023).
  ·  DOI: [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633)

## Population and dosing

**Population:** healthy volunteers and patients with delayed MTX excretion after high-dose methotrexate · condition delayed methotrexate excretion after high-dose methotrexate therapy · age group adult · n = 15.

**Dosing:** 20, 50 U/kg, iv, multiple, every 48 h.

**Dosed compound ≠ measured compound:** dosed glucarpidase, measured methotrexate.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLCPG2 =tvCLCPG2 x BSAθ 1 | CL | 32.826 | L/h |
| VCPG2 =tvVCPG2 x BSAθ 1 | V | 32.133 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The glucarpidase model was held back because its structure contains a nonlinear Michaelis-Menten hydrolysis step (Vmax/Km) converting methotrexate to DAMPA, a model structure the review cannot reproduce.**

The record describes glucarpidase (carboxypeptidase G2) with clearance 32.826 L/h and volume of distribution 32.133 L, given to healthy volunteers and patients with delayed methotrexate excretion. The measured compound is methotrexate, linked to its metabolite DAMPA through a saturable hydrolysis relation parameterized by Vmax/Km. Because this nonlinear elimination structure cannot be built by the review, the record was marked needs_review and not published. Extracted — glucarpidase: CL 32.8 L/h, V 32.1 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has methotrexate, the second reading glucarpidase; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLCPG2 =tvCLCPG2 x BSAθ 1 | `Q22` · CL | 32.826 | L/h | 9.118e-06 | m3/s | L/h | llm (0.6) | Fukaya_2023_table_2:row4:col3 |
| VCPG2 =tvVCPG2 x BSAθ 1 | `Q61` · V | 32.133 | L | 0.03213 | m3 | L | llm (0.6) | Fukaya_2023_table_2:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CLCPG2 =tvCLCPG2 x Body Weightθ 1', value '29.660') — already have one for this compound
- dropped duplicate Q22 ('CLCPG2 =tvCLCPG2 x Heightθ 1', value '30.225') — already have one for this compound
- dropped duplicate Q61 ('VCPG2 =tvVCPG2 x Body Weightθ 1', value '30.560') — already have one for this compound
- dropped duplicate Q61 ('VCPG2 =tvVCPG2 x Heightθ 1', value '25.668') — already have one for this compound
- implicit units: 'CLCPG2 =tvCLCPG2 x BSAθ 1' → L/h (from the paper text: "Text states CPG2 popPK CL values in L/h: 'CL = 0.380 L/h (range, 0.289–0.470) ... in the phase 2 study' and 'CLrMTX (L/h")
- implicit units: 'VCPG2 =tvVCPG2 x BSAθ 1' → L (from the paper text: "Text states CPG2 popPK V values in L: 'V = 2.04 L (range, 1.47–2.60) in the phase 2 study' and 'VcMTX (L)' in the final ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- status held at route_to_review — not promoted
- population split: 'phase 2' subgroup of Fukaya_2023 (paper reports 3 populations: original estimate, phase 1, phase 2)
- review gap-fill skipped: this record measures 'methotrexate', not glucarpidase — the review values are the parent's

**Extraction notes:**
- unparsed cell T4:row3:col1 = 'tvVCPG2 (L)'
- unparsed cell T4:row9:col1 = 'tvVCPG2 (L)'
- unparsed cell T4:row16:col2 = '6.545 × 105'
- unparsed cell T4:row16:col4 = '6.242 × 105'
- unparsed cell T4:row16:col5 = '(4.276 × 105–8.686 × 105)'
- unparsed cell Fukaya_2023_table_2:row2:col1 = '2.0 × 10−5'
- unparsed cell Fukaya_2023_table_2:row4:col4 = '&lt;0.001'
- unparsed cell Fukaya_2023_table_2:row5:col4 = '&lt;0.001'
- unparsed cell Fukaya_2023_table_2:row6:col4 = '&lt;0.001'
- unparsed cell Fukaya_2023_table_2:row7:col4 = '&lt;0.001'
- unparsed cell Fukaya_2023_table_2:row8:col4 = '&lt;0.001'
- unparsed cell Fukaya_2023_table_2:row9:col4 = '&lt;0.001'
- companion parameter table 2 transcribed (19 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['methotrexate', 'dampa', 'hydrolysis']] | [['glucarpidase', 'methotrexate', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | methotrexate | glucarpidase | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fukaya_2023_table_2:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fukaya_2023_table_2:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.83 | ['Fukaya_2023_table_2:row4:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.8 L/h | ['Fukaya_2023_table_2:row4:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 32.1 L | ['Fukaya_2023_table_2:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglucarpidase%5D%20Glucarpidase_Fukaya2023_phase_2&body=Drug%3A%20glucarpidase%0ARecord%3A%20Glucarpidase_Fukaya2023_phase_2%0APaper%3A%20Fukaya_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:38 UTC</sub>
