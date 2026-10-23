<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;milrinone&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/&quot;},{&quot;label&quot;:&quot;Ramamoorthy_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Milrinone_Foucher2025_reference&quot;,&quot;label&quot;:&quot;Foucher_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_Foucher2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Milrinone_OHanlon2024_reference&quot;,&quot;label&quot;:&quot;OHanlon_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_OHanlon2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Milrinone_Oualha2014_reference&quot;,&quot;label&quot;:&quot;Oualha_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_Oualha2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Milrinone_Panel2026_reference&quot;,&quot;label&quot;:&quot;Panel_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_Panel2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# milrinone — `Milrinone_Ramamoorthy1998_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The milrinone record was rejected because the peripheral compartment volume of 0.9 L/kg is unreachable in the one-compartment structure.

<div class="pk-model-meta" hidden drug="milrinone" model-id="Milrinone_Ramamoorthy1998_reference" status="rejected" stale="false" population="infants and children after open heart surgery" measured-compound="milrinone" parameterization="mechanistic" topology="1C"></div>

## Citation
Ramamoorthy C, Anderson GD, Williams GD, Lynn AM. Pharmacokinetics and side effects of milrinone in infants and children after open heart surgery. Anesthesia and analgesia 86(2):283–289 (1998).
  ·  DOI: [10.1097/00000539-199802000-00011](https://doi.org/10.1097/00000539-199802000-00011)

## Population and dosing

**Population:** infants and children after open heart surgery · condition post-cardiac surgery · age group mixed · n = &gt;=19.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volumes of distribution (Vbeta) in infants | V2 | 0.9 | L/kg |
| milrinone clearance in infants | CL | 3.8 | L/h |
| Volume of distribution (L) | V | 314.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The milrinone record was rejected because the peripheral compartment volume of 0.9 L/kg is unreachable in the one-compartment structure.**

The model structure is defined as one compartment, yet the record includes a peripheral volume of distribution (V2) of 0.9 L/kg. This parameter has no path from the dose, making the compartment orphaned. Additionally, the record was built from the abstract alone, so the reported summary statistics stand in for a fitted model. Extracted — milrinone: V2 0.9 L/kg, CL 3.8 L/h, V 314 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has milrinone, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volumes of distribution (Vbeta) in infants | `Q64` · V2 | 0.9 | L/kg | 0.063 | m3 | l/kg | llm (0.6) | Ramamoorthy_1998:abstract |
| milrinone clearance in infants | `Q22` · CL | 3.8 | L/h | 1.056e-06 | m3/s | L/h | llm_confirmed (0.6) | Ramamoorthy_1998:abstract |
| Volume of distribution (L) | `Q61` · V | 314.0 | L | 0.314 | m3 | L | review_gapfill (0.7) | Foucher_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q64 ('volumes of distribution (Vbeta) in children', value 0.7) — already have one for this compound
- unit_dimension_unknown: 'mL x kg(-1) x min(-1)' (CL)
- dropped duplicate Q22 ('milrinone clearance in children', value 5.9) — already have one for this compound
- implicit units: 'milrinone clearance in infants' → L/h (from the popPK convention: 'No unit is stated in the provided text or table captions. For a total clearance parameter in a population PK model, part')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=milrinone
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Foucher_2025's review values (primary lacked it)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ramamoorthy_1998_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[milrinone clearance in infants]` | 3.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[milrinone clearance]` |  | 3.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbeta]` |  | 0.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volumes of distribution (vbeta) in infants]` | 0.9 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | milrinone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | milrinone | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ramamoorthy_1998:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Foucher_2025:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ramamoorthy_1998:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.8 | ['Ramamoorthy_1998:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.8 L/h | ['Ramamoorthy_1998:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 314 L | ['Foucher_2025:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 63 L | ['Ramamoorthy_1998:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmilrinone%5D%20Milrinone_Ramamoorthy1998_reference&body=Drug%3A%20milrinone%0ARecord%3A%20Milrinone_Ramamoorthy1998_reference%0APaper%3A%20Ramamoorthy_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_milrinone/Milrinone_Ramamoorthy1998_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 08:57 UTC</sub>
