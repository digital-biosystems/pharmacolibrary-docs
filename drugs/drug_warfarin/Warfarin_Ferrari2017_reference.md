<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Ferrari_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Gomeni2026_reference&quot;,&quot;label&quot;:&quot;Gomeni_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Gomeni2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Ooi2017_reference&quot;,&quot;label&quot;:&quot;Ooi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Ooi2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sasaki_2009_INR&quot;,&quot;label&quot;:&quot;Sasaki_2009 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Sasaki_2009_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Ferrari2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> K12 has no unit.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Ferrari2017_reference" status="needs_review" stale="false" population="patients starting warfarin therapy" measured-compound="(S)-warfarin, (R)-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Ferrari M, Pengo V, Barolo M, Bezzo F, Padrini R. Assessing the relative potency of (S)- and (R)-warfarin with a new PK-PD model, in relation to VKORC1 genotypes. European journal of clinical pharmacology 73(6):699–707 (2017).
  ·  DOI: [10.1007/s00228-017-2248-9](https://doi.org/10.1007/s00228-017-2248-9)

## Population and dosing

**Population:** patients starting warfarin therapy · condition anticoagulation therapy · age group adult.

**Dosing:** 10 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed warfarin, measured (S)-warfarin, (R)-warfarin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| m | k12 | 0.71 |  |
| CL (L/h) | CL | 0.286 | L/h |
| VD (L) | V | 14.3 | L |
| Steady-state S/R ratio | Css_ratio | 0.55 | 0.91–0.1.19 |
| ka (1/h) | kabs | 0.214 | 1/h |
| Lag (h) | tlag | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**K12 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Css_ratio), so that value has no SI equivalent. Extracted — warfarin: k12 0.71, CL 0.286 L/h, V 14.3 L, Css_ratio 0.55 0.91–0.1.19; (S)-warfarin, (R)-warfarin: kabs 0.214 1/h, tlag 1.29 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| m | `Q301` · k12 | 0.71 |  |  |  |  | llm (0.6) | Ferrari_2017_table_3:row4:col2, Ferrari_2017_table_3:row4:col3, Ferrari_2017_table_3:row4:col4 |
| CL (L/h) | `Q22` · CL | 0.286 | L/h | 7.944e-08 | m3/s | l/h | exact (1) | Ferrari_2017_table_2:row0:col2, Ferrari_2017_table_2:row1:col2 |
| VD (L) | `Q61` · V | 14.3 | L | 0.0143 | m3 | l | exact (1) | Ferrari_2017_table_2:row2:col2, Ferrari_2017_table_2:row3:col2 |
| Steady-state S/R ratio | `Q35` · Css_ratio | 0.55 | 0.91–0.1.19 |  |  | 0.91-0.1·19 | llm (0.6) | Ferrari_2017_table_2:row6:col2 |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MT₁ (h)' — extend the ontology if this is a real PK parameter (source ['Ferrari_2017_table_3:row1:col2'])
- NIL: refused to back-fill base 'MTT' from footnote/prose loose number 27.5 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(S)-warfarin, (R)-warfarin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: no plausible PubChem entry for '(S)-warfarin, (R)-warfarin' ('(S)-warfarin, (R)-warfarin') — left in mass units
- molar mass: none found for '(S)-warfarin, (R)-warfarin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- table Ferrari_2017_table_3: missing_label
- table Ferrari_2017_table_3: unparsed_numeric_cell
- table Ferrari_2017_table_2: unknown_column_role
- table Ferrari_2017_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ferrari_2017_table_2:row2:col2', 'Ferrari_2017_table_2:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C5_unit_missing_Q301 | fail | 1 / [time] |  | ['Ferrari_2017_table_3:row4:col2', 'Ferrari_2017_table_3:row4:col3', 'Ferrari_2017_table_3:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.286 | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.3 L | ['Ferrari_2017_table_2:row2:col2', 'Ferrari_2017_table_2:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_modelica.zip" download>Warfarin_Ferrari2017_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_fmi.zip" download>Warfarin_Ferrari2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_matlab.zip" download>Warfarin_Ferrari2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_matlab_simbio.zip" download>Warfarin_Ferrari2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_sbml.zip" download>Warfarin_Ferrari2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_cellml.zip" download>Warfarin_Ferrari2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ferrari M, Pengo V, Barolo M, Bezzo F, Padrini R. Assessing the relative potency of (S)- and (R)-warfarin with a new PK-PD model, in relation to VKORC1 genotypes. European journal of clinical pharmacology 73(6):699–707 (2017). [doi:10.1007/s00228-017-2248-9](https://doi.org/10.1007/s00228-017-2248-9)

**This record:** Pharmacolibrary, model `Warfarin_Ferrari2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Ferrari2017_reference>

```bibtex
@misc{pharmacolibrary_WarfarinFerrari2017reference,
  title  = {{Pharmacolibrary model Warfarin_Ferrari2017_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Ferrari2017_reference},
  note   = {Parameters from doi:10.1007/s00228-017-2248-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Ferrari2017_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Ferrari2017_reference%0APaper%3A%20Ferrari_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Ferrari2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 23:20 UTC</sub>
