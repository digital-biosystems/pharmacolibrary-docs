<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Lopinavir&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/&quot;},{&quot;label&quot;:&quot;Urien_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lopinavir_Upton2025_reference&quot;,&quot;label&quot;:&quot;Upton_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Upton2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Wang2014_reference&quot;,&quot;label&quot;:&quot;Wang_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Wang2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Calderin2026_reference&quot;,&quot;label&quot;:&quot;Calderin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Calderin2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lopinavir — `Lopinavir_Urien2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lopinavir record was rejected because the volume of distribution V/F is reported with the nonsensical unit '70 kg(-1)', a dimension mismatch for a structural parameter, and the record was built from the abstract alone.

<div class="pk-model-meta" hidden drug="Lopinavir" model-id="Lopinavir_Urien2011_reference" status="rejected" stale="false" population="neonates and infants" measured-compound="lopinavir" parameterization="apparent" topology="1C"></div>

## Citation
Urien S, Firtion G, Anderson ST, Hirt D, Solas C, Peytavin G et al. Lopinavir/ritonavir population pharmacokinetics in neonates and infants. British journal of clinical pharmacology 71(6):956–960 (2011).
  ·  DOI: [10.1111/j.1365-2125.2011.03926.x](https://doi.org/10.1111/j.1365-2125.2011.03926.x)

## Population and dosing

**Population:** neonates and infants · condition HIV-exposed neonates/infants · age group neonate · n = 96.

**Dosed compound ≠ measured compound:** dosed lopinavir/ritonavir, measured lopinavir.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 5.87 | L/h |
| V/F | V/F | 91.7 | 70 kg(-1) |
| F | Fab | 50 | % |
| Ka | kabs | 0.758 | 1 /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lopinavir record was rejected because the volume of distribution V/F is reported with the nonsensical unit '70 kg(-1)', a dimension mismatch for a structural parameter, and the record was built from the abstract alone.**

For lopinavir in neonates and infants, the abstract reports CL/F of 5.87 L/h, V/F of 91.7 with unit '70 kg(-1)', bioavailability F of 50%, and absorption rate constant Ka of 0.758 1/h. The V/F unit is not a valid dimension for a volume of distribution, so the parameter fails the dimensional check. Because only the paper's abstract was read, these summary statistics stand in for a fitted model, which is itself a limitation of the record. Extracted — lopinavir: CL/F 5.87 L/h, V/F 91.7 70 kg(-1), Fab 50 %, kabs 0.758 1 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lopinavir/ritonavir, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 5.87 | L/h | 1.631e-06 | m3/s | L/h | exact (1) | Urien_2011:abstract |
| V/F | `Q76` · V/F | 91.7 | 70 kg(-1) |  |  | 1/kg | exact (1) | Urien_2011:abstract |
| F | `Q40` · Fab | 50 | % |  |  |  | exact (1) | Urien_2011:abstract |
| Ka | `Q49` · kabs | 0.758 | 1 /h | 0.0002106 | 1/s | 1/h | review_gapfill (0.7) | Liang_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h(-1) 70 kg(-1)' (CL/F)
- unit_dimension_mismatch: 'V/F' → Q76 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'PMA' — extend the ontology if this is a real PK parameter (source ['Urien_2011:abstract'])
- implicit units: 'CL/F' → L/h (from the popPK convention: 'No unit stated in text or table footnotes; CL/F is a clearance, conventionally expressed in L/h in population PK, consis')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lopinavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Liang_2026's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Urien_2011_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 5.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 5.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.758 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailabilty, f]` |  | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 91.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 91.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lopinavir/ritonavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lopinavir | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Urien_2011:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Liang_2026:review'] |
| C5_dimension_Q76 | fail | dimensionless | 70 kg(-1) | ['Urien_2011:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.87 L/h | ['Urien_2011:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blopinavir%5D%20Lopinavir_Urien2011_reference&body=Drug%3A%20lopinavir%0ARecord%3A%20Lopinavir_Urien2011_reference%0APaper%3A%20Urien_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lopinavir/Lopinavir_Urien2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:41 UTC</sub>
