<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Barium&quot;,&quot;href&quot;:&quot;drugs/toxin_barium/&quot;},{&quot;label&quot;:&quot;Konduru_2014 \u00b7 1_mg_kg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Barium — `Barium_Konduru2014_1_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Barium" model-id="Barium_Konduru2014_1_mg_kg" status="needs_review" stale="false" population="rats" measured-compound="131Ba (Barium)" parameterization="mechanistic" topology="1C"></div>

## Citation
Konduru N, Keller J, Ma-Hock L, Gröters S, Landsiedel R, Donaghey TC et al. Biokinetics and effects of barium sulfate nanoparticles. Particle and fibre toxicology 11:55 (2014).
  ·  DOI: [10.1186/s12989-014-0055-3](https://doi.org/10.1186/s12989-014-0055-3)

## Population and dosing

**Population:** rats · condition healthy · n = 5 per group.

**Dosing:** 70, 350 mg, other, single.

**Dosed compound ≠ measured compound:** dosed Barium sulfate nanoparticles (BaSO4 NPs), measured 131Ba (Barium).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| BaSO4 lung burden (mg) | body_burden | 0.28 | mg |
| clearance half-life | t1/2z | 9.6 | days |
| extrapolated clearance | CL | 92 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; the clearance plausibility check could not be computed.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — barium: body_burden 0.28 mg; 131Ba (Barium): t1/2z 9.6 days, CL 92 L/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| BaSO4 lung burden (mg) | `Q414` · body_burden | 0.28 | mg | 2.8e-07 | kg | mg | llm (0.6) | Konduru_2014_table_4:row0:col2 |
| clearance half-life | `Q57` · t1/2z | 9.6 | days | 8.294e+05 | s | h | toxin_unit_relink (0.85) | Konduru_2014:other_prose |
| extrapolated clearance | `Q22` · CL | 92 | L/h | 2.556e-05 | m3/s | L/h | boundary (0.8) | Konduru_2014:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Total Cells (million)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row1:col2'])
- dropped unlinked row (NIL): 'Macrophage (million)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row2:col2'])
- dropped unlinked row (NIL): 'Neutrophils (million' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row3:col2'])
- dropped unlinked row (NIL): 'LDH (mU/ml)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row4:col2'])
- dropped unlinked row (NIL): 'MPO (mU/ml)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row5:col2'])
- dropped unlinked row (NIL): 'Albumin (μg/ml)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row6:col2'])
- dropped unlinked row (NIL): 'Hemoglobin (μg)' — extend the ontology if this is a real PK parameter (source ['Konduru_2014_table_4:row7:col2'])
- table mostly unlinked (7/8 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('clearance half-life'=9.6) from results prose — parameter table was unreadable
- salvaged Q22 ('extrapolated clearance'=92) from results prose — parameter table was unreadable
- implicit units: 'extrapolated clearance' → L/h (from the popPK convention: 'The paper describes a toxicology/nanoparticle study with no specific population PK parameter estimates table or unit def')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=131Ba (Barium)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: '1 mg/kg' subgroup of Konduru_2014 (paper reports 6 populations: 1 day, 1 mg/kg, 2 mg/kg, 35 days, 5 mg/kg, control)
- molar mass: no plausible PubChem entry for '131Ba (Barium)' ('barium-131') — left in mass units
- molar mass: none found for '131Ba (Barium)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab5: unparsed_numeric_cell
- transposed table Tab5: logical view retains original source coordinates
- table Tab5: representations disagree; selected evidence retained, not merged
- companion parameter table 4 transcribed (32 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Konduru_2014:discussion_prose'] |
| C5_dimension_Q414 | pass | [mass] |  | ['Konduru_2014_table_4:row0:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 92 | ['Konduru_2014:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 92 L/h | ['Konduru_2014:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbarium%5D%20Barium_Konduru2014_1_mg_kg&body=Drug%3A%20barium%0ARecord%3A%20Barium_Konduru2014_1_mg_kg%0APaper%3A%20Konduru_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_barium/Barium_Konduru2014_1_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 20:21 UTC</sub>
