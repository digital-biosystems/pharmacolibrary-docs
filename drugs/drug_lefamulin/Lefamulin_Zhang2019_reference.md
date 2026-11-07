<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;lefamulin&quot;,&quot;href&quot;:&quot;drugs/drug_lefamulin/&quot;},{&quot;label&quot;:&quot;Zhang_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lefamulin_Hu2023_reference&quot;,&quot;label&quot;:&quot;Hu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lefamulin/Lefamulin_Hu2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lefamulin — `Lefamulin_Zhang2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kabs and t1/2ka  have no unit; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="lefamulin" model-id="Lefamulin_Zhang2019_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="lefamulin" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhang L, Wicha WW, Bhavnani SM, Rubino CM. Prediction of lefamulin epithelial lining fluid penetration after intravenous and oral administration using Phase 1 data and population pharmacokinetics methods. The Journal of antimicrobial chemotherapy 74(Suppl 3):iii27–iii34 (2019).
  ·  DOI: [10.1093/jac/dkz088](https://doi.org/10.1093/jac/dkz088)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = —.

**Dosing:** 150 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 159 | L/h | 16.1 (None% RSE) |
| Vc (L) | V1 | 53.1 | L | 13.4 (None% RSE) |
| Vp1 (L) | V2 | 656 | L | 24.7 (None% RSE) |
| CLD2 (L/h) | Q | 199 | L/h | 23.5 (None% RSE) |
| Vp2 (L) | V3 | 259 | L |  |
| Ka (1/h) | kabs | 1.20 |  | 108.2 (None% RSE) |
| proportion of Ka when fed | t1/2ka | 0.04 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs and t1/2ka  have no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — lefamulin: CL 159 L/h, V1 53.1 L, V2 656 L, Q 199 L/h, V3 259 L, kabs 1.2, t1/2ka 0.04.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 159, the second reading 5.61; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 159 | L/h | 4.417e-05 | m3/s | l/h | exact (1) | dkz088-T2:row3:col1, dkz088-T2:row3:col2 | 16.1 (None% RSE) |
| Vc (L) | `Q63` · V1 | 53.1 | L | 0.0531 | m3 | l | exact (1) | dkz088-T2:row4:col1, dkz088-T2:row4:col2 | 13.4 (None% RSE) |
| Vp1 (L) | `Q64` · V2 | 656 | L | 0.656 | m3 | l | exact (1) | dkz088-T2:row6:col1, dkz088-T2:row6:col2 | 24.7 (None% RSE) |
| CLD2 (L/h) | `Q30` · Q | 199 | L/h | 5.528e-05 | m3/s | l/h | special_case (0.95) | dkz088-T2:row7:col1, dkz088-T2:row7:col2 | 23.5 (None% RSE) |
| Vp2 (L) | `Q77` · V3 | 259 | L | 0.259 | m3 | l | exact (1) | dkz088-T2:row8:col1, dkz088-T2:row8:col2 |  |
| Ka (1/h) | `Q49` · kabs | 1.20 |  |  |  |  | exact (1) | dkz088-T2:row9:col1, dkz088-T2:row9:col2 | 108.2 (None% RSE) |
| proportion of Ka when fed | `Q95` · t1/2ka | 0.04 |  |  |  |  | llm_corrected (0.6) | dkz088-T2:row13:col1, dkz088-T2:row13:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Vc (L)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'CLD1 (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Vp1 (L)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'CLD2 (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ka (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ka2 (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ftot' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'FS' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Kin (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Kout (1/h)' routed out of structural estimates ('Magnitude of IIV')
- dropped unlinked row (NIL): 'CLD1 (L/h)' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row5:col1', 'dkz088-T2:row5:col2'])
- dropped duplicate Q49 ('Ka2 (1/h)', value '2.12') — already have one for this compound
- dropped unlinked row (NIL): 'Ftot' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row11:col1', 'dkz088-T2:row11:col2'])
- dropped unlinked row (NIL): 'FS' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row12:col1', 'dkz088-T2:row12:col2'])
- dropped unlinked row (NIL): 'proportion of Ka2 when fed' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row14:col1', 'dkz088-T2:row14:col2'])
- dropped unlinked row (NIL): 'proportion of Ftot when fed' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row15:col1', 'dkz088-T2:row15:col2'])
- dropped PD-category row 'Kin (1/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row17:col1', 'dkz088-T2:row17:col2'])
- dropped PD-category row 'Kout (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row18:col1', 'dkz088-T2:row18:col2'])
- dropped unlinked row (NIL): 'Fumin' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row20:col1'])
- dropped unlinked row (NIL): 'Fumax' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row21:col1'])
- dropped PD-category row 'Cup50 (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row22:col1'])
- routed 'plasma proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'ELF proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q64 (Vp1 (L)); Q30 (CLD2 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lefamulin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 159 | 5.61 | mismatch |
| `gpt-oss-120b` | `parameters[cld2].value` | 199 | 16.1 | mismatch |
| `gpt-oss-120b` | `parameters[fs]` |  | 8.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ftot]` |  | 7.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fumin]` |  | 0.0997 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 1.20 | 11.6 | mismatch |
| `gpt-oss-120b` | `parameters[proportion of ka when fed]` | 0.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].value` | 53.1 | 9.66 | mismatch |
| `gpt-oss-120b` | `parameters[vp1].value` | 656 | 27.4 | mismatch |
| `gpt-oss-120b` | `parameters[vp2].value` | 259 | 8.17 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkz088-T2:row7:col1', 'dkz088-T2:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['dkz088-T2:row4:col1', 'dkz088-T2:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkz088-T2:row6:col1', 'dkz088-T2:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['dkz088-T2:row8:col1', 'dkz088-T2:row8:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['dkz088-T2:row9:col1', 'dkz088-T2:row9:col2'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['dkz088-T2:row13:col1', 'dkz088-T2:row13:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 159 | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 159 L/h | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 53.1 L | ['dkz088-T2:row4:col1', 'dkz088-T2:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 656 L | ['dkz088-T2:row6:col1', 'dkz088-T2:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blefamulin%5D%20Lefamulin_Zhang2019_reference&body=Drug%3A%20lefamulin%0ARecord%3A%20Lefamulin_Zhang2019_reference%0APaper%3A%20Zhang_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lefamulin/Lefamulin_Zhang2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 12:03 UTC</sub>
