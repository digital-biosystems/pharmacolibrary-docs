<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Atenolol&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/&quot;},{&quot;label&quot;:&quot;Fayyaz_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atenolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/Atenolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atenolol — `Atenolol_Fayyaz2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> Atenolol's clearance of 6.44 µL/min and volume of 687 µL are physiologically implausible, causing rejection due to unconvertible units.

<div class="pk-model-meta" hidden drug="Atenolol" model-id="Atenolol_Fayyaz2020_reference" status="rejected" stale="false" population="New Zealand albino rabbits (males)" measured-compound="Atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Fayyaz A, Ranta VP, Toropainen E, Vellonen KS, Ricci GD, Reinisalo M et al. Ocular Intracameral Pharmacokinetics for a Cocktail of Timolol, Betaxolol, and Atenolol in Rabbits. Molecular pharmaceutics 17(2):588–594 (2020).
  ·  DOI: [10.1021/acs.molpharmaceut.9b01024](https://doi.org/10.1021/acs.molpharmaceut.9b01024)

## Population and dosing

**Population:** New Zealand albino rabbits (males) · condition healthy · age group adult.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW | MW | 266.34 |  |
| VdIC ± SE (μL) | V | 687 | μL |
| CLIC ± SE (μL/min) | CL | 6.44 | μL/min |
| t1/2IC ± SE (min) | t1/2z | 73.87 | min |
| AUC ± SE (min-nmol/μL) | AUC | 0.781 | min-nmol/μL |
| Ka | kabs | 1.13 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atenolol's clearance of 6.44 µL/min and volume of 687 µL are physiologically implausible, causing rejection due to unconvertible units.**

The reported clearance of 6.44 µL/min and volume of distribution of 687 µL fall outside physiological ranges for New Zealand albino rabbits. The rejection stems from an inability to convert the reported units into standard SI units, which prevented a valid assessment of these parameters. Extracted — atenolol: MW 266, V 687 μL, CL 6.44 μL/min, t1/2z 73.9 min, AUC 0.781 min-nmol/μL, kabs 1.13 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW | `Q374` · MW | 266.34 |  |  |  |  | exact (1) | Fayyaz_2020_table_1:row0:col1 |
| VdIC ± SE (μL) | `Q61` · V | 687 | μL | 6.87e-07 | m3 | µl | llm (0.6) | Fayyaz_2020_table_1:row0:col6 |
| CLIC ± SE (μL/min) | `Q22` · CL | 6.44 | μL/min | 1.073e-10 | m3/s | µl/min | llm (0.6) | Fayyaz_2020_table_1:row0:col7 |
| t1/2IC ± SE (min) | `Q57` · t1/2z | 73.87 | min | 4432 | s | min | llm (0.6) | Fayyaz_2020_table_1:row0:col8 |
| AUC ± SE (min-nmol/μL) | `Q88` · AUC | 0.781 | min-nmol/μL |  |  | (min·nM)/µl | llm_confirmed (0.6) | Fayyaz_2020_table_1:row0:col9 |
| Ka | `Q49` · kabs | 1.13 | h−1 | 0.0003139 | 1/s | 1/h | review_gapfill (0.7) | Fu_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'log D7.4' — extend the ontology if this is a real PK parameter (source ['Fayyaz_2020_table_1:row0:col2'])
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['Fayyaz_2020_table_1:row0:col3'])
- dropped unlinked row (NIL): 'PSA' — extend the ontology if this is a real PK parameter (source ['Fayyaz_2020_table_1:row0:col4'])
- dropped unlinked row (NIL): 'HBD' — extend the ontology if this is a real PK parameter (source ['Fayyaz_2020_table_1:row0:col5'])
- unit_dimension_unknown: 'min-nmol/μL' (AUC)
- implicit units: 'AUC ± SE (min-nmol/μL)' — the LLM proposed 'min*nmol/μL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Fu_2022's review values (primary lacked it)

**Extraction notes:**
- transposed table Fayyaz_2020_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 73.87 | 73.94 | 1.001 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Fayyaz_2020_table_1:row0:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Fu_2022:review'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Fayyaz_2020_table_1:row0:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Fayyaz_2020_table_1:row0:col6'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  |  |  | ['Fayyaz_2020_table_1:row0:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min-nmol/μL |  |  | ['Fayyaz_2020_table_1:row0:col9'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.44 |  |  | ['Fayyaz_2020_table_1:row0:col7'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000386 L/h |  |  | ['Fayyaz_2020_table_1:row0:col7'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000687 L |  |  | ['Fayyaz_2020_table_1:row0:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Fayyaz2020_reference&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Fayyaz2020_reference%0APaper%3A%20Fayyaz_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atenolol/Atenolol_Fayyaz2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:26 UTC</sub>
