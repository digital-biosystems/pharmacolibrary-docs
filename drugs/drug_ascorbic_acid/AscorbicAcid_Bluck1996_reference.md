<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11G&quot;,&quot;href&quot;:&quot;atc/A11G.md&quot;},{&quot;label&quot;:&quot;ascorbic acid&quot;,&quot;href&quot;:&quot;drugs/drug_ascorbic_acid/&quot;},{&quot;label&quot;:&quot;Bluck_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ascorbic acid — `AscorbicAcid_Bluck1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-05 07:24 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The ascorbic acid record lacks distribution volume and clearance, and the AUC%ext parameter (150.4, unit 'e') has a dimension mismatch, so it is not a compartmental population PK model and was rejected.

<div class="pk-model-meta" hidden drug="ascorbic acid" model-id="AscorbicAcid_Bluck1996_reference" status="rejected" stale="true" population="healthy adults" measured-compound="ascorbic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Bluck LJ, Izzard AP, Bates CJ. Measurement of ascorbic acid kinetics in man using stable isotopes and gas chromatography/mass spectrometry. Journal of mass spectrometry : JMS 31(7):741–748 (1996).
  ·  DOI: [10.1002/(SICI)1096-9888(199607)31:7<741::AID-JMS352>3.0.CO;2-H](https://doi.org/10.1002/(SICI)1096-9888(199607)31:7<741::AID-JMS352>3.0.CO;2-H)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 5% (f) + 95% (e) | AUC%ext | 150.4 | e |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ascorbic acid record lacks distribution volume and clearance, and the AUC%ext parameter (150.4, unit 'e') has a dimension mismatch, so it is not a compartmental population PK model and was rejected.**

The paper reports no distribution volume and no clearance or elimination rate for ascorbic acid; it is an exposure/outcome paper, not a compartmental population PK model. The structural parameter AUC%ext, extracted as 150.4 with unit 'e', failed a dimensional consistency check. Additionally, the reported unit could not be converted to SI, so the parameter reached the model builder without an SI value. The two readers also disagreed on which parameter was extracted: one read '5% (f) + 95%' as 150.4, the other read '5% (b) + 95%' as 720.7. Extracted — ascorbic acid: AUC%ext 150 e.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| 5% (f) + 95% (e) | `Q84` · AUC%ext | 150.4 | e | e | llm (0.5) | Bluck_1996_table_1:row8:col1, Bluck_1996_table_1:row8:col2, Bluck_1996_table_1:row8:col3, Bluck_1996_table_1:row8:col4, Bluck_1996_table_1:row8:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(a) Ascorbic Acid' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row0:col1', 'Bluck_1996_table_1:row0:col2', 'Bluck_1996_table_1:row0:col3', 'Bluck_1996_table_1:row0:col4', 'Bluck_1996_table_1:row0:col5'])
- dropped unlinked row (NIL): '(b) [1 - ¹³C]ascorbic acid' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row1:col2', 'Bluck_1996_table_1:row1:col3', 'Bluck_1996_table_1:row1:col4', 'Bluck_1996_table_1:row1:col5'])
- dropped unlinked row (NIL): '5% (b) + 95% (a)' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row2:col1', 'Bluck_1996_table_1:row2:col2', 'Bluck_1996_table_1:row2:col3', 'Bluck_1996_table_1:row2:col4', 'Bluck_1996_table_1:row2:col5'])
- dropped unlinked row (NIL): '(c) Tetra-TMS-ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row3:col1', 'Bluck_1996_table_1:row3:col2', 'Bluck_1996_table_1:row3:col3', 'Bluck_1996_table_1:row3:col4', 'Bluck_1996_table_1:row3:col5'])
- dropped unlinked row (NIL): '(d) Tetra-TMS-[1 - ¹³C]ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row4:col2', 'Bluck_1996_table_1:row4:col3', 'Bluck_1996_table_1:row4:col4', 'Bluck_1996_table_1:row4:col5'])
- dropped unlinked row (NIL): '5% (d) + 95% (c)' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row5:col1', 'Bluck_1996_table_1:row5:col2', 'Bluck_1996_table_1:row5:col3', 'Bluck_1996_table_1:row5:col4', 'Bluck_1996_table_1:row5:col5'])
- dropped unlinked row (NIL): '(e) Tetra-TBDMS-ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row6:col1', 'Bluck_1996_table_1:row6:col2', 'Bluck_1996_table_1:row6:col3', 'Bluck_1996_table_1:row6:col4', 'Bluck_1996_table_1:row6:col5'])
- dropped unlinked row (NIL): '(f) Tetra-TBDMS-[1 - ¹³C]ascorbate' — extend the ontology if this is a real PK parameter (source ['Bluck_1996_table_1:row7:col2', 'Bluck_1996_table_1:row7:col3', 'Bluck_1996_table_1:row7:col4', 'Bluck_1996_table_1:row7:col5'])
- unit_dimension_mismatch: '5% (f) + 95% (e)' → Q84 (unit '[current] * [time]' vs ontology 'dimensionless') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ascorbic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q84 | fail | [current] * [time] | e | ['Bluck_1996_table_1:row8:col1', 'Bluck_1996_table_1:row8:col2', 'Bluck_1996_table_1:row8:col3', 'Bluck_1996_table_1:row8:col4', 'Bluck_1996_table_1:row8:col5'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bascorbic_acid%5D%20AscorbicAcid_Bluck1996_reference&body=Drug%3A%20ascorbic_acid%0ARecord%3A%20AscorbicAcid_Bluck1996_reference%0APaper%3A%20Bluck_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ascorbic_acid/AscorbicAcid_Bluck1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 07:24 UTC</sub>
