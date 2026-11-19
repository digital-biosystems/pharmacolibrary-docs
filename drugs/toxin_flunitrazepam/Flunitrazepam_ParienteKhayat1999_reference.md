<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flunitrazepam&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/&quot;},{&quot;label&quot;:&quot;Pariente-Khayat_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flunitrazepam_Iisalo1984_reference&quot;,&quot;label&quot;:&quot;Iisalo_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/Flunitrazepam_Iisalo1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flunitrazepam_Adachi2021_reference&quot;,&quot;label&quot;:&quot;Adachi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/Flunitrazepam_Adachi2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flunitrazepam_Becherucci1985_reference&quot;,&quot;label&quot;:&quot;Becherucci_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/Flunitrazepam_Becherucci1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flunitrazepam_Boxenbaum1978_reference&quot;,&quot;label&quot;:&quot;Boxenbaum_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/Flunitrazepam_Boxenbaum1978_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flunitrazepam_Seppl1993_reference&quot;,&quot;label&quot;:&quot;Sepp\u00e4l\u00e4_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flunitrazepam/Flunitrazepam_Seppl1993_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flunitrazepam — `Flunitrazepam_ParienteKhayat1999_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q22 unit L x kg x h(-1) ([length] ** 3 * [mass] / [time]) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="Flunitrazepam" model-id="Flunitrazepam_ParienteKhayat1999_reference" status="rejected" stale="false" population="neonates and infants sedated with flunitrazepam" measured-compound="flunitrazepam" parameterization="mechanistic" topology="1C"></div>

## Citation
Pariente-Khayat A, Tréluyer JM, Rey E, Mokhtari M, Werner E, Jouvet P et al. Pharmacokinetics and tolerance of flunitrazepam in neonates and in infants. Clinical pharmacology and therapeutics 66(2):136–139 (1999).
  ·  DOI: [10.1053/cp.1999.v66.100596001](https://doi.org/10.1053/cp.1999.v66.100596001)

## Population and dosing

**Population:** neonates and infants sedated with flunitrazepam · condition sedation (hospitalized neonates and infants) · age group neonate · n = 31.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life | t1/2z | 22.6 | hours |
| clearance | CL | 0.15 | L x kg x h(-1) |
| volume of distribution | V | 4.6 | L x kg(-1) |
| Absorption rate constant (ka) | kabs | 0.372 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q22 unit L x kg x h(-1) ([length] ** 3 * [mass] / [time]) vs [length] ** 3 / [time].**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — flunitrazepam: t1/2z 22.6 hours, CL 0.15 L x kg x h(-1), V 4.6 L x kg(-1), kabs 0.372 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance: this record has none, the second reading 0.15; it also differs on 5 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life | `Q57` · t1/2z | 22.6 | hours | 8.136e+04 | s | h | half_life_rule (0.95) | Pariente-Khayat_1999:abstract |
| clearance | `Q22` · CL | 0.15 | L x kg x h(-1) |  |  | (kg·l)/h | exact (1) | Pariente-Khayat_1999:abstract |
| volume of distribution | `Q61` · V | 4.6 | L x kg(-1) | 0.322 | m3 | l/kg | exact (1) | Pariente-Khayat_1999:abstract |
| Absorption rate constant (ka) | `Q49` · kabs | 0.372 | 1/h | 0.0001033 | 1/s | 1/h | review_gapfill (0.7) | Adachi_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'clearance' → Q22 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flunitrazepam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adachi_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pariente-Khayat_1999_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance]` |  | 0.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 0.15 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` |  | 22.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` | 22.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` |  | 4.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 4.6 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | L x kg x h(-1) ([length] ** 3 * [mass] / [time]) | ['Pariente-Khayat_1999:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adachi_2021:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Pariente-Khayat_1999:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Pariente-Khayat_1999:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.15 | ['Pariente-Khayat_1999:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 322 L | ['Pariente-Khayat_1999:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflunitrazepam%5D%20Flunitrazepam_ParienteKhayat1999_reference&body=Drug%3A%20flunitrazepam%0ARecord%3A%20Flunitrazepam_ParienteKhayat1999_reference%0APaper%3A%20Pariente-Khayat_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flunitrazepam/Flunitrazepam_ParienteKhayat1999_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 05:50 UTC</sub>
