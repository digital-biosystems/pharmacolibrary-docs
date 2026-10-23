<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;lisocabtagene maraleucel&quot;,&quot;href&quot;:&quot;drugs/drug_lisocabtagene_maraleucel/&quot;},{&quot;label&quot;:&quot;Ogasawara_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lisocabtagene maraleucel — `LisocabtageneMaraleucel_Ogasawara2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="lisocabtagene maraleucel" model-id="LisocabtageneMaraleucel_Ogasawara2021_reference" status="rejected" stale="false" population="patients with relapsed/refractory large B-cell lymphoma" measured-compound="lisocabtagene_maraleucel" parameterization="mechanistic" topology="1C"></div>

## Citation
Ogasawara K, Dodds M, Mack T, Lymp J, Dell'Aringa J, Smith J. Population Cellular Kinetics of Lisocabtagene Maraleucel, an Autologous CD19-Directed Chimeric Antigen Receptor T-Cell Product, in Patients with Relapsed/Refractory Large B-Cell Lymphoma. Clinical pharmacokinetics 60(12):1621–1633 (2021).
  ·  DOI: [10.1007/s40262-021-01039-5](https://doi.org/10.1007/s40262-021-01039-5)

## Population and dosing

**Population:** patients with relapsed/refractory large B-cell lymphoma · condition relapsed/refractory large B-cell lymphoma · age group adult.

**Dosing:** 50, 100, 150 × 106 CAR+ T cells, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Tlag, days | tlag | 3.27 | days | 10.8 | 66.5 (None% RSE) |
| Cmax, copies/μg | Cmax | 23600 |  | 10.4 | 91.5 (None% RSE) |
| HLα, days | t1/2α | 5.00 | days | 9.1 |  |
| HLβ, days | t1/2β | 352 | days | 23.0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag, days | `Q83` · tlag | 3.27 | days | 2.825e+05 | s | d | 10.8 | exact (1) | Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col4 | 66.5 (None% RSE) |
| Cmax, copies/μg | `Q32` · Cmax | 23600 |  |  |  |  | 10.4 | llm_confirmed (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 | 91.5 (None% RSE) |
| HLα, days | `Q59` · t1/2α | 5.00 | days | 4.32e+05 | s | d | 9.1 | llm (0.6) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 |  |
| HLβ, days | `Q60` · t1/2β | 352 | days | 3.041e+07 | s | d | 23.0 | llm (0.6) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Tlag, days' routed out of structural estimates ('BSV')
- table section iiv: 'Tlag, days' routed out of structural estimates ('BSV, %RSE')
- table section iiv: 'Tlag, days' routed out of structural estimates ('BSV, 95% CI')
- table section iiv: 'Cmax, copies/μg' routed out of structural estimates ('BSV')
- table section iiv: 'Cmax, copies/μg' routed out of structural estimates ('BSV, %RSE')
- table section iiv: 'Cmax, copies/μg' routed out of structural estimates ('BSV, 95% CI')
- table section iiv: 'Tdbl, days' routed out of structural estimates ('BSV')
- table section iiv: 'Tdbl, days' routed out of structural estimates ('BSV, %RSE')
- table section iiv: 'Tdbl, days' routed out of structural estimates ('BSV, 95% CI')
- table section iiv: 'HLα, days' routed out of structural estimates ('BSV')
- table section iiv: 'HLα, days' routed out of structural estimates ('BSV, %RSE')
- table section iiv: 'HLα, days' routed out of structural estimates ('BSV, 95% CI')
- dropped unlinked row (NIL): 'Tgro, days' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'])
- dropped unlinked row (NIL): 'Tdbl, days' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'])
- dropped unlinked row (NIL): 'Fβ, fraction' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'])
- implicit units: 'Cmax, copies/μg' — the LLM proposed 'copies/μg', whose dimension does not fit Q32; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lisocabtagene_maraleucel
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: none found for 'lisocabtagene_maraleucel' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q59 | pass | [time] |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blisocabtagene_maraleucel%5D%20LisocabtageneMaraleucel_Ogasawara2021_reference&body=Drug%3A%20lisocabtagene_maraleucel%0ARecord%3A%20LisocabtageneMaraleucel_Ogasawara2021_reference%0APaper%3A%20Ogasawara_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lisocabtagene_maraleucel/LisocabtageneMaraleucel_Ogasawara2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:51 UTC</sub>
