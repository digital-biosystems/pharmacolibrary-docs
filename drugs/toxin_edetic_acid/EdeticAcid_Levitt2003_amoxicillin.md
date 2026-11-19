<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Edetic Acid&quot;,&quot;href&quot;:&quot;drugs/toxin_edetic_acid/&quot;},{&quot;label&quot;:&quot;Levitt_2003 \u00b7 amoxicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EdeticAcid_Levitt2003_amoxicillin&quot;,&quot;label&quot;:&quot;Levitt_2003_amoxicillin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;EdeticAcid_Levitt2003_morphine_6_glucuronide&quot;,&quot;label&quot;:&quot;Levitt_2003_morphine_6_glucuronide&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_morphine_6_glucuronide.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Edetic Acid — `EdeticAcid_Levitt2003_amoxicillin`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Edetic Acid" model-id="EdeticAcid_Levitt2003_amoxicillin" status="needs_review" stale="false" population="Human" measured-compound="Edetic Acid (EDTA)" parameterization="mechanistic" topology="1C"></div>

## Citation
Levitt DG. The pharmacokinetics of the interstitial space in humans. BMC clinical pharmacology 3:3 (2003).
  ·  DOI: [10.1186/1472-6904-3-3](https://doi.org/10.1186/1472-6904-3-3)

## Population and dosing

**Population:** Human · condition healthy · age group adult.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 14 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin.svg" alt="EdeticAcid_Levitt2003_amoxicillin diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vss (liters/Kg) | Vss | .26 | liters/Kg |
| Vss (liters/Kg) | Vss | .267 | liters/Kg |
| Fraction Bound | fu | .48 |  |
| Vss (liters/Kg) | Vss | .23 | liters/Kg |
| Fraction Bound | fu | .62 |  |
| Vss (liters/Kg) | Vss | .194 | liters/Kg |
| Fraction Bound | fu | .82 |  |
| Vss (liters/Kg) | Vss | .161 | liters/Kg |
| Fraction Bound | fu | .97 |  |
| Vss (liters/Kg) | Vss | .091 | liters/Kg |
| Vi (liters/Kg) | V | .053 | liters/Kg |
| Fraction Bound | fu | .93 |  |
| Vss (liters/Kg) | Vss | .15 | liters/Kg |
| CL | CL | 0.096 | mL min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kong_2011) cannot stand in for this paper's evidence. Extracted — Amoxicillin: Vss 0.26 liters/Kg; edetic acid: Vss 0.267 liters/Kg; Piperacillin: fu 0.48, Vss 0.23 liters/Kg; Cefatrizine: fu 0.62, Vss 0.194 liters/Kg; Ceforanide: fu 0.82, Vss 0.161 liters/Kg; Dicloxacillin: fu 0.97, Vss 0.091 liters/Kg, V 0.053 liters/Kg; Flucloxacillin: fu 0.93, Vss 0.15 liters/Kg; Edetic Acid (EDTA): CL 0.096 mL min−1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vss (liters/Kg) | `Q65` · Vss | .26 | liters/Kg | 0.0182 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row0:col3, Levitt_2003_table_3:row6:col3 |
| Vss (liters/Kg) | `Q65` · Vss | .267 | liters/Kg | 0.01869 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row1:col3 |
| Fraction Bound | `Q46` · fu | .48 |  | 0.48 |  |  | llm_confirmed (0.6) | Levitt_2003_table_3:row2:col2 |
| Vss (liters/Kg) | `Q65` · Vss | .23 | liters/Kg | 0.0161 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row2:col3 |
| Fraction Bound | `Q46` · fu | .62 |  | 0.62 |  |  | llm_confirmed (0.6) | Levitt_2003_table_3:row3:col2 |
| Vss (liters/Kg) | `Q65` · Vss | .194 | liters/Kg | 0.01358 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row3:col3 |
| Fraction Bound | `Q46` · fu | .82 |  | 0.82 |  |  | llm_confirmed (0.6) | Levitt_2003_table_3:row4:col2 |
| Vss (liters/Kg) | `Q65` · Vss | .161 | liters/Kg | 0.01127 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row4:col3 |
| Fraction Bound | `Q46` · fu | .97 |  | 0.97 |  |  | llm_confirmed (0.6) | Levitt_2003_table_3:row5:col2 |
| Vss (liters/Kg) | `Q65` · Vss | .091 | liters/Kg | 0.00637 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row5:col3 |
| Vi (liters/Kg) | `Q61` · V | .053 | liters/Kg | 0.00371 | m3 | l/kg | llm (0.6) | Levitt_2003_table_3:row5:col4 |
| Fraction Bound | `Q46` · fu | .93 |  | 0.93 |  |  | llm_confirmed (0.6) | Levitt_2003_table_3:row7:col2 |
| Vss (liters/Kg) | `Q65` · Vss | .15 | liters/Kg | 0.0105 | m3 | l/kg | exact (1) | Levitt_2003_table_3:row7:col3 |
| CL | `Q22` · CL | 0.096 | mL min−1 | 1.6e-09 | m3/s | L/h | review_gapfill (0.7) | Kong_2011:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- transposed table Levitt_2003_table_1: rows are variants (Mannitol, EDTA, amoxicillin, morphine-6-glucuronide, morphine-3-glucuronide, inulin), the parameters are the column headers (Fraction Bound) — read one record per variant
- column 'comments' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Rat' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_4:row2:col4', 'Levitt_2003_table_4:row4:col4', 'Levitt_2003_table_4:row5:col4', 'Levitt_2003_table_4:row6:col4', 'Levitt_2003_table_4:row7:col4', 'Levitt_2003_table_4:row9:col4', 'Levitt_2003_table_4:row10:col4', 'Levitt_2003_table_4:row11:col4', 'Levitt_2003_table_4:row12:col4', 'Levitt_2003_table_4:row14:col4', 'Levitt_2003_table_4:row15:col4', 'Levitt_2003_table_4:row16:col4', 'Levitt_2003_table_4:row17:col4', 'Levitt_2003_table_4:row19:col4', 'Levitt_2003_table_4:row21:col4', 'Levitt_2003_table_4:row22:col4', 'Levitt_2003_table_4:row23:col4', 'Levitt_2003_table_4:row24:col4', 'Levitt_2003_table_4:row25:col4', 'Levitt_2003_table_4:row26:col4', 'Levitt_2003_table_4:row27:col4', 'Levitt_2003_table_4:row28:col4', 'Levitt_2003_table_4:row29:col4', 'Levitt_2003_table_4:row30:col4', 'Levitt_2003_table_4:row31:col4', 'Levitt_2003_table_4:row32:col4', 'Levitt_2003_table_4:row32:col5', 'Levitt_2003_table_4:row33:col4', 'Levitt_2003_table_4:row33:col5'])
- dropped unlinked row (NIL): 'Rabbit' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_4:row34:col4', 'Levitt_2003_table_4:row35:col4', 'Levitt_2003_table_4:row36:col4', 'Levitt_2003_table_4:row37:col4', 'Levitt_2003_table_4:row38:col4', 'Levitt_2003_table_4:row39:col4', 'Levitt_2003_table_4:row40:col4', 'Levitt_2003_table_4:row41:col4', 'Levitt_2003_table_4:row42:col4', 'Levitt_2003_table_4:row43:col4', 'Levitt_2003_table_4:row44:col4', 'Levitt_2003_table_4:row45:col4'])
- dropped unlinked row (NIL): 'Cat' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_4:row46:col4', 'Levitt_2003_table_4:row47:col4'])
- dropped unlinked row (NIL): 'Dog' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_4:row48:col4', 'Levitt_2003_table_4:row49:col4'])
- dropped unlinked row (NIL): 'Amoxicillin' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_2:row0:col2', 'Levitt_2003_table_2:row0:col3', 'Levitt_2003_table_2:row0:col4', 'Levitt_2003_table_2:row0:col5'])
- dropped unlinked row (NIL): 'Morphine-6-glucuronide' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_2:row1:col2', 'Levitt_2003_table_2:row1:col3', 'Levitt_2003_table_2:row1:col4', 'Levitt_2003_table_2:row1:col5'])
- dropped unlinked row (NIL): 'Inulin' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_2:row2:col4', 'Levitt_2003_table_2:row2:col5', 'Levitt_2003_table_2:row4:col4'])
- dropped unlinked row (NIL): 'Sucrose' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_2:row3:col4', 'Levitt_2003_table_2:row3:col5'])
- dropped unlinked row (NIL): 'Vi (liters/Kg)' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_3:row0:col4', 'Levitt_2003_table_3:row6:col4'])
- routed 'Vi (liters/Kg)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Vi (liters/Kg)' — extend the ontology if this is a real PK parameter (source ['Levitt_2003_table_3:row3:col4'])
- dropped value-less row: '1Assumed total organ water (ml/100 gm) of: skeletal muscle, 75; heart, 78; skin, 60; subcutaneous tendon/ear, 60; stomach, 75; intestine, 73; adipose, 18.3; liver, 70; lung, 79 [35,78]. 2Assumed plasma volume (ml/100 gm) of: skeletal muscle, 0.4; heart muscle, 2.0; skin 0.6 [64,78].'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Edetic Acid (EDTA)
- estimate-method split: 'amoxicillin' is one of 2 estimates of Levitt_2003's substance matrix (amoxicillin, morphine-6-glucuronide); same population, different estimation method
- molar mass: none of 1 PubChem candidate(s) is 'Edetic Acid (EDTA)' (LLM) — left in mass units
- molar mass: none found for 'Edetic Acid (EDTA)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Kong_2011's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — volume from this paper; review-gap-filled from other paper(s): Kong_2011 — borrowed values do not complete its disposition core)

**Extraction notes:**
- table Levitt_2003_table_4: unbound_uncertainty
- table Levitt_2003_table_1: unbound_uncertainty
- table Levitt_2003_table_1: missing_label
- companion parameter table 1 transcribed (27 record(s))
- companion parameter table 2 transcribed (13 record(s))
- table Levitt_2003_table_3: unbound_uncertainty
- table Levitt_2003_table_3: units_need_context
- transposed table Levitt_2003_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (23 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kong_2011:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row0:col3', 'Levitt_2003_table_3:row6:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row1:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row3:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row4:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row5:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Levitt_2003_table_3:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.096 | ['Kong_2011:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00576 L/h | ['Kong_2011:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.71 L | ['Levitt_2003_table_3:row5:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 18.2 L | ['Levitt_2003_table_3:row0:col3', 'Levitt_2003_table_3:row6:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 18.7 L | ['Levitt_2003_table_3:row1:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 16.1 L | ['Levitt_2003_table_3:row2:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 13.6 L | ['Levitt_2003_table_3:row3:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.3 L | ['Levitt_2003_table_3:row4:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 6.37 L | ['Levitt_2003_table_3:row5:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 10.5 L | ['Levitt_2003_table_3:row7:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_modelica.zip" download>EdeticAcid_Levitt2003_amoxicillin_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_fmi.zip" download>EdeticAcid_Levitt2003_amoxicillin_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_matlab.zip" download>EdeticAcid_Levitt2003_amoxicillin_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_matlab_simbio.zip" download>EdeticAcid_Levitt2003_amoxicillin_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_sbml.zip" download>EdeticAcid_Levitt2003_amoxicillin_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_cellml.zip" download>EdeticAcid_Levitt2003_amoxicillin_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.6e-09 | m3/s |
| input | model | `VdPerKg` | 0.000267 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Levitt DG. The pharmacokinetics of the interstitial space in humans. BMC clinical pharmacology 3:3 (2003). [doi:10.1186/1472-6904-3-3](https://doi.org/10.1186/1472-6904-3-3)

**This record:** Pharmacolibrary, model `EdeticAcid_Levitt2003_amoxicillin`. <https://pharmacolibrary.github.io/#/drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin>

```bibtex
@misc{pharmacolibrary_EdeticAcidLevitt2003amoxicillin,
  title  = {{Pharmacolibrary model EdeticAcid_Levitt2003_amoxicillin}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin},
  note   = {Parameters from doi:10.1186/1472-6904-3-3},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin/EdeticAcid_Levitt2003_amoxicillin_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `EdeticAcid_Levitt2003_amoxicillin_params.json` · controls `EdeticAcid_Levitt2003_amoxicillin_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bedetic_acid%5D%20EdeticAcid_Levitt2003_amoxicillin&body=Drug%3A%20edetic_acid%0ARecord%3A%20EdeticAcid_Levitt2003_amoxicillin%0APaper%3A%20Levitt_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_edetic_acid/EdeticAcid_Levitt2003_amoxicillin%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 11:21 UTC</sub>
