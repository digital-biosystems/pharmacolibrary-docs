<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methamphetamine&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/&quot;},{&quot;label&quot;:&quot;Li_2014 \u00b7 ma_group&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methamphetamine_Cook1992_reference&quot;,&quot;label&quot;:&quot;Cook_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Cook1993_reference&quot;,&quot;label&quot;:&quot;Cook_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Su2025_reference&quot;,&quot;label&quot;:&quot;Su_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Su2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Yin2021_reference&quot;,&quot;label&quot;:&quot;Yin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Yin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methamphetamine — `Methamphetamine_Li2014_ma_group`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> The record was refused because the volume of distribution for methamphetamine has the invalid unit 'c' instead of a volume unit like liters.

<div class="pk-model-meta" hidden drug="Methamphetamine" model-id="Methamphetamine_Li2014_ma_group" status="rejected" stale="false" population="rabbits" measured-compound="Methamphetamine" parameterization="apparent" topology="1C"></div>

## Citation
Li B, Wang Y, Zhang Y, Liu M. Effects of ethanol on the toxicokinetics of methamphetamine in rabbits. Iranian journal of pharmaceutical research : IJPR 13(1):329–336 (2014).

## Population and dosing

**Population:** rabbits · condition healthy · n = 20.

**Dosing:** 1050 mg, other, single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 0.266 | 1/h |
| V/F(c) ** | V/F | 37.774 | c |
| t1/2α | t1/2α | 2.637 | h |
| t1/2β** | t1/2β | 6.919 | h |
| t1/2ka | t1/2ka | 2.609 | h |
| K21 | Q | 0.061 |  |
| K10** | kel | 0.150 | 1/h |
| AUC0-30h** | AUCt | 5.281 | mg·h/L |
| CL* | CL | 5.681 | L/h |
| Tmax | tmax | 4.151 | h |
| Cmax* | Cmax | 0.315 | mg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was refused because the volume of distribution for methamphetamine has the invalid unit 'c' instead of a volume unit like liters.**

The parameter V/F, representing the apparent volume of distribution, is assigned the unit 'c'. This dimension corresponds to speed rather than volume, which is the correct dimension for this parameter. Consequently, the system could not convert this value to standard SI units, rendering the parameter unusable. Extracted — methamphetamine: kabs 0.266 1/h, V/F 37.8 c, t1/2α 2.64 h, t1/2β 6.92 h, t1/2ka 2.61 h, Q 0.061, kel 0.15 1/h, AUCt 5.28 mg·h/L, … (+3).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 0.266 | 1/h | 7.389e-05 | 1/s | 1/h | exact (1) | Li_2014_table_p5_2:row0:col2 |
| V/F(c) ** | `Q76` · V/F | 37.774 | c |  |  | c | llm_confirmed (0.6) | Li_2014_table_p5_2:row1:col2 |
| t1/2α | `Q59` · t1/2α | 2.637 | h | 9493 | s | h | half_life_rule (0.95) | Li_2014_table_p5_2:row2:col2 |
| t1/2β** | `Q60` · t1/2β | 6.919 | h | 2.491e+04 | s | h | half_life_rule (0.95) | Li_2014_table_p5_2:row3:col2 |
| t1/2ka | `Q95` · t1/2ka | 2.609 | h | 9392 | s | h | exact (1) | Li_2014_table_p5_2:row4:col2 |
| K21 | `Q30` · Q | 0.061 |  |  |  |  | exact (1) | Li_2014_table_p5_2:row5:col2 |
| K10** | `Q47` · kel | 0.150 | 1/h | 4.167e-05 | 1/s | 1/h | exact (1) | Li_2014_table_p5_2:row6:col2 |
| AUC0-30h** | `Q19` · AUCt | 5.281 | mg·h/L |  |  | mg·h/L | llm (0.6) | Li_2014_table_p5_2:row8:col2 |
| CL* | `Q22` · CL | 5.681 | L/h | 1.578e-06 | m3/s | L/h | llm_confirmed (0.6) | Li_2014_table_p5_2:row9:col2 |
| Tmax | `Q56` · tmax | 4.151 | h | 1.494e+04 | s | h | exact (1) | Li_2014_table_p5_2:row10:col2 |
| Cmax* | `Q32` · Cmax | 0.315 | mg/L |  |  | mg/L | llm_confirmed (0.6) | Li_2014_table_p5_2:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V/F(c) **' → Q76 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q30 ('K12', value '0.086') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.05 (source ['T4:footnote', 'T4:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka' → 1/h (from the popPK convention: "Ka is an absorption rate constant. The text states Ka values as '0.679/h' and '0.964/h', implying unit 1/h. Convention f")
- implicit units: 't1/2α' → h (from the popPK convention: "t1/2α is a half-life. The text reports Tmax in hours (e.g., '1.620 h') and Ka in 1/h. By convention and dimensional cons")
- implicit units: 't1/2β**' → h (from the popPK convention: 't1/2β is a terminal half-life. Consistent with other time parameters in the text (Tmax, Ka units), half-lives are measur')
- implicit units: 't1/2ka' → h (from the popPK convention: 't1/2ka is an absorption half-life. As a time parameter derived from a rate constant in 1/h, it is measured in hours (h).')
- implicit units: 'K21' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'K10**' → 1/h (from the popPK convention: "K10 is the elimination rate constant. Rate constants are expressed in 1/h. The text refers to 'elimination rate constant")
- implicit units: 'AUC0-30h**' → mg·h/L (from the paper text: "The text explicitly states AUC units: 'plasma AP area under the curve (AUC0-30h) ... from 5.281 mg/h/L'. Note: mg/h/L is")
- implicit units: 'CL*' → L/h (from the popPK convention: 'CL is total clearance. Clearance is typically expressed in L/h. Given the dose (15 mg/kg in rabbits) and plasma concentr')
- implicit units: 'Tmax' → h (from the paper text: "The text explicitly states Tmax units: 'Tmax was significantly decreased from 1.620 h ± 0.062 h to 1.259h ± 0.033h'.")
- implicit units: 'Cmax*' → mg/L (from the paper text: "The text explicitly states Cmax units: 'mean Cmax from 1.408 mg/L ... and from 0.315 mg/L'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Methamphetamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'ma group' subgroup of Li_2014 (paper reports 2 populations: ma group, ma+etoh group)
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 12 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Li_2014_table_3: no_numeric_grid
- table Li_2014_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Li_2014_table_p5_2:row8:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Li_2014_table_p5_2:row9:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Li_2014_table_p5_2:row11:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Li_2014_table_p5_2:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Li_2014_table_p5_2:row0:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Li_2014_table_p5_2:row10:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Li_2014_table_p5_2:row2:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['Li_2014_table_p5_2:row3:col2'] |
| C5_dimension_Q76 | fail | [length] ** 3 | c ([length] / [time]) | ['Li_2014_table_p5_2:row1:col2'] |
| C5_dimension_Q95 | pass | [time] |  | ['Li_2014_table_p5_2:row4:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Li_2014_table_p5_2:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.68 L/h | ['Li_2014_table_p5_2:row9:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethamphetamine%5D%20Methamphetamine_Li2014_ma_group&body=Drug%3A%20methamphetamine%0ARecord%3A%20Methamphetamine_Li2014_ma_group%0APaper%3A%20Li_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methamphetamine/Methamphetamine_Li2014_ma_group%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:14 UTC</sub>
