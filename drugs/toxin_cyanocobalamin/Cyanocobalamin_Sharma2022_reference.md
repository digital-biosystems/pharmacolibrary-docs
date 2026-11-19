<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cyanocobalamin&quot;,&quot;href&quot;:&quot;drugs/toxin_cyanocobalamin/&quot;},{&quot;label&quot;:&quot;Sharma_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyanocobalamin_NavaOcampo2005_reference&quot;,&quot;label&quot;:&quot;Nava-Ocampo_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyanocobalamin/Cyanocobalamin_NavaOcampo2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyanocobalamin — `Cyanocobalamin_Sharma2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The terminal half-life, AUC, AUC infinity, and mean residence time all erroneously use the dose unit 1mg/kg, creating dimensional mismatches that prevented publication.

<div class="pk-model-meta" hidden drug="Cyanocobalamin" model-id="Cyanocobalamin_Sharma2022_reference" status="rejected" stale="false" population="Swiss albino mice" measured-compound="Cyanocobalamin" parameterization="mechanistic" topology="retention"></div>

## Citation
Sharma P, Pathak P, Tyagi V, Khan F, Shanker K, Darokar MP et al. Investigation of the potential of Glycyrrhiza glabra as a bioavailability enhancer of Vitamin B12. Frontiers in nutrition 9:1038902 (2022).
  ·  DOI: [10.3389/fnut.2022.1038902](https://doi.org/10.3389/fnut.2022.1038902)

## Population and dosing

**Population:** Swiss albino mice · condition healthy · n = 5.

**Dosing:** 70 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 | t1/2z | 121.27 | 1mg/kg |
| Tmax (mins.) | tmax | 26.25 | mins. |
| Cmax (ng/ml) | Cmax | 116.94 | ng/ml |
| AUC 0–120 | AUC | 9731.214 | 1mg/kg |
| AUC 0–inf | AUC∞ | 21370.60 | 1mg/kg |
| MRT | MRT | 187.54 | 1mg/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The terminal half-life, AUC, AUC infinity, and mean residence time all erroneously use the dose unit 1mg/kg, creating dimensional mismatches that prevented publication.**

The terminal half-life and mean residence time are measured in mass per kilogram, conflicting with their required time dimensions. Both AUC and AUC infinity are also recorded with mass units instead of the expected concentration-time dimensions. This unit error prevented the conversion to standard SI values. Extracted — cyanocobalamin: t1/2z 121 1mg/kg, tmax 26.2 mins., Cmax 117 ng/ml, AUC 9.73e+03 1mg/kg, AUC∞ 2.14e+04 1mg/kg, MRT 188 1mg/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 | `Q57` · t1/2z | 121.27 | 1mg/kg |  |  | 1mg/kg | half_life_rule (0.95) | T1:row1:col1, T1:footnote |
| Tmax (mins.) | `Q56` · tmax | 26.25 | mins. | 1575 | s | min | exact (1) | T1:row2:col1 |
| Cmax (ng/ml) | `Q32` · Cmax | 116.94 | ng/ml | 0.0001169 | kg/m3 | ng/ml | exact (1) | T1:row3:col1 |
| AUC 0–120 | `Q88` · AUC | 9731.214 | 1mg/kg |  |  | 1mg/kg | llm_confirmed (0.6) | T1:row4:col1 |
| AUC 0–inf | `Q17` · AUC∞ | 21370.60 | 1mg/kg |  |  | 1mg/kg | space_fold (0.95) | T1:row5:col1 |
| MRT | `Q53` · MRT | 187.54 | 1mg/kg |  |  | 1mg/kg | exact (1) | T1:row6:col1, T1:footnote |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 't1/2' → Q57 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'AUC 0–120' → Q88 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC 0–inf' → Q17 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'MRT' → Q53 (unit '[mass]' vs ontology '[time]') — route to review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T1:footnote', 'T1:footnote', 'T1:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Tmax'
- dropped value-less row: 'AUC0–120'
- dropped value-less row: 'AUC0–inf'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 5 (source ['T1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyanocobalamin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | 1mg/kg ([mass]) | ['T1:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T1:row3:col1'] |
| C5_dimension_Q53 | fail | [time] | 1mg/kg ([mass]) | ['T1:row6:col1', 'T1:footnote'] |
| C5_dimension_Q56 | pass | [time] |  | ['T1:row2:col1'] |
| C5_dimension_Q57 | fail | [time] | 1mg/kg ([mass]) | ['T1:row1:col1', 'T1:footnote'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | 1mg/kg ([mass]) | ['T1:row4:col1'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyanocobalamin%5D%20Cyanocobalamin_Sharma2022_reference&body=Drug%3A%20cyanocobalamin%0ARecord%3A%20Cyanocobalamin_Sharma2022_reference%0APaper%3A%20Sharma_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyanocobalamin/Cyanocobalamin_Sharma2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:31 UTC</sub>
