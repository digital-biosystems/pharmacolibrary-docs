<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;baclofen&quot;,&quot;href&quot;:&quot;drugs/drug_baclofen/&quot;},{&quot;label&quot;:&quot;Brunet_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Baclofen_Simon2018_reference&quot;,&quot;label&quot;:&quot;Simon_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baclofen/Baclofen_Simon2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Baclofen_Vourch2019_reference&quot;,&quot;label&quot;:&quot;Vourch_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baclofen/Baclofen_Vourch2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baclofen — `Baclofen_Brunet2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Apparent parameters violate coherence because absolute bioavailability and apparent volume double-correct for the same absorption factor.

<div class="pk-model-meta" hidden drug="baclofen" model-id="Baclofen_Brunet2020_reference" status="rejected" stale="false" population="adults with baclofen self-poisoning" measured-compound="baclofen" parameterization="apparent" topology="1C"></div>

## Citation
Brunet M, Léger M, Billat PA, Lelièvre B, Lerolle N, Boels D et al. Baclofen self-poisoning: Is renal replacement therapy efficient in patient with normal kidney function?. Anaesthesia, critical care & pain medicine 39(6):813–817 (2020).
  ·  DOI: [10.1016/j.accpm.2020.07.021](https://doi.org/10.1016/j.accpm.2020.07.021)

## Population and dosing

**Population:** adults with baclofen self-poisoning · condition baclofen overdose · age group adult · n = 28.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 0.61 |  |
| Ka | kabs | 0.71 | 1/h |
| Ke | kel | 0.32 | 1/h |
| V1/F | V/F | 16.5 | L |
| Lag time | tlag | 1.58 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Apparent parameters violate coherence because absolute bioavailability and apparent volume double-correct for the same absorption factor.**

The record lists absolute bioavailability (Fab) as 0.61 and apparent volume (V/F) as 16.5 L. Using both an absolute fraction and an apparent volume introduces a double correction for bioavailability in the model structure. This incoherent combination caused the rejection of the record. Extracted — baclofen: Fab 0.61, kabs 0.71 1/h, kel 0.32 1/h, V/F 16.5 L, tlag 1.58 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.61 |  |  |  |  | exact (1) | Brunet_2020_table_1:row1:col2, Brunet_2020_table_1:row1:col3 |
| Ka | `Q49` · kabs | 0.71 | 1/h | 0.0001972 | 1/s | 1/h | exact (1) | Brunet_2020_table_1:row2:col2, Brunet_2020_table_1:row2:col3 |
| Ke | `Q47` · kel | 0.32 | 1/h | 8.889e-05 | 1/s | 1/h | exact (1) | Brunet_2020_table_1:row3:col2, Brunet_2020_table_1:row3:col3 |
| V1/F | `Q76` · V/F | 16.5 | L | 0.0165 | m3 | L | exact (1) | Brunet_2020_table_1:row4:col2, Brunet_2020_table_1:row4:col3 |
| Lag time | `Q83` · tlag | 1.58 | h | 5688 | s | h | exact (1) | Brunet_2020_table_1:row5:col2, Brunet_2020_table_1:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Number of cases' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col1', 'tab_1:row2:col2'])
- implicit units: 'Ka' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for Ka. It is a first-order absorption rate constant, for which the standar')
- implicit units: 'Ke' → 1/h (from the popPK convention: "The paper does not explicitly state the unit for Ke. It is a first-order elimination rate constant. The text states 'Eli")
- implicit units: 'V1/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for V1/F. It is a volume of distribution (apparent). The standard unit is L')
- implicit units: 'Lag time' → h (from the paper text: "The Results section states: 'A structural single-compartment model using three parameters plus a lag time (0 to 4 hours)")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baclofen
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F' is the general volume)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Brunet_2020_table_1:row2:col1 = 'h-1'
- unparsed cell Brunet_2020_table_1:row3:col1 = 'h-1'
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Brunet_2020_table_1:row3:col2', 'Brunet_2020_table_1:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Brunet_2020_table_1:row2:col2', 'Brunet_2020_table_1:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Brunet_2020_table_1:row4:col2', 'Brunet_2020_table_1:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Brunet_2020_table_1:row5:col2', 'Brunet_2020_table_1:row5:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.61 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 16.5 L | ['Brunet_2020_table_1:row4:col2', 'Brunet_2020_table_1:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaclofen%5D%20Baclofen_Brunet2020_reference&body=Drug%3A%20baclofen%0ARecord%3A%20Baclofen_Brunet2020_reference%0APaper%3A%20Brunet_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baclofen/Baclofen_Brunet2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:25 UTC</sub>
