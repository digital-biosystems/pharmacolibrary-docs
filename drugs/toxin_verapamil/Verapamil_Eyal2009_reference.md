<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Verapamil&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/&quot;},{&quot;label&quot;:&quot;Eyal_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Verapamil_Sips2026_dofetilide_observed&quot;,&quot;label&quot;:&quot;Sips_2026_dofetilide_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_dofetilide_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Sips2026_verapamil_observed&quot;,&quot;label&quot;:&quot;Sips_2026_verapamil_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_verapamil_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hanley2024_reference&quot;,&quot;label&quot;:&quot;Hanley_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hanley2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hong2021_reference&quot;,&quot;label&quot;:&quot;Hong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Mllauer2012_human_estimates&quot;,&quot;label&quot;:&quot;M\u00fcllauer_2012_human_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Sauder1990_reference&quot;,&quot;label&quot;:&quot;Sauder_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sauder1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Verapamil — `Verapamil_Eyal2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Verapamil" model-id="Verapamil_Eyal2009_reference" status="rejected" stale="false" population="pregnant non-human primates (Macaca nemestrina)" measured-compound="[11C]-verapamil-derived radioactivity (verapamil and metabolites)" parameterization="mechanistic" topology="1C"></div>

## Citation
Eyal S, Chung FS, Muzi M, Link JM, Mankoff DA, Kaddoumi A et al. Simultaneous PET imaging of P-glycoprotein inhibition in multiple tissues in the pregnant nonhuman primate. Journal of nuclear medicine : official publication, Society of Nuclear Medicine 50(5):798–806 (2009).
  ·  DOI: [10.2967/jnumed.108.059360](https://doi.org/10.2967/jnumed.108.059360)

## Population and dosing

**Population:** pregnant non-human primates (Macaca nemestrina) · condition pregnant, healthy · age group adult · n = 4.

**Dosed compound ≠ measured compound:** dosed [11C]-verapamil, measured [11C]-verapamil-derived radioactivity (verapamil and metabolites).

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 02054 | Kp | -20.0 | 11C |
| Mean | equation variable | 17.5 | 11C |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

A reported unit could not be converted (Kp and equation variable), so that value has no SI equivalent. None of the extracted parameters is verapamil's own; they describe [11C]-verapamil-derived radioactivity (verapamil and metabolites). Extracted — [11C]-verapamil-derived radioactivity (verapamil and metabolites): Kp -20 11C.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has [11C]-verapamil, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| 02054 | `Q410` · Kp | -20.0 | 11C | 11c | llm (0.6) | Eyal_2009_table_2:row3:col1, Eyal_2009_table_2:row3:col2, Eyal_2009_table_2:row3:col3, Eyal_2009_table_2:row3:col4, Eyal_2009_table_2:row3:col5, Eyal_2009_table_2:row3:col6, Eyal_2009_table_2:row3:col7, Eyal_2009_table_2:row3:col8, Eyal_2009_table_2:row3:col9, Eyal_2009_table_2:row3:col10, Eyal_2009_table_2:row3:col11, Eyal_2009_table_2:row3:col12 |
| Mean | `Q900` · equation variable | 17.5 | 11C | 11c | llm (0.6) | Eyal_2009_table_2:row7:col2, Eyal_2009_table_2:row7:col3, Eyal_2009_table_2:row7:col4, Eyal_2009_table_2:row7:col5, Eyal_2009_table_2:row7:col6, Eyal_2009_table_2:row7:col7, Eyal_2009_table_2:row7:col8, Eyal_2009_table_2:row7:col9, Eyal_2009_table_2:row7:col10, Eyal_2009_table_2:row7:col11, Eyal_2009_table_2:row7:col12 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '02088' — extend the ontology if this is a real PK parameter (source ['Eyal_2009_table_2:row2:col1', 'Eyal_2009_table_2:row2:col2', 'Eyal_2009_table_2:row2:col3', 'Eyal_2009_table_2:row2:col4', 'Eyal_2009_table_2:row2:col5', 'Eyal_2009_table_2:row2:col6', 'Eyal_2009_table_2:row2:col7', 'Eyal_2009_table_2:row2:col8', 'Eyal_2009_table_2:row2:col9', 'Eyal_2009_table_2:row2:col10', 'Eyal_2009_table_2:row2:col11', 'Eyal_2009_table_2:row2:col12'])
- unit_dimension_unknown: '11C' (Kp)
- dropped unlinked row (NIL): '04052' — extend the ontology if this is a real PK parameter (source ['Eyal_2009_table_2:row4:col1', 'Eyal_2009_table_2:row4:col2', 'Eyal_2009_table_2:row4:col3', 'Eyal_2009_table_2:row4:col4', 'Eyal_2009_table_2:row4:col5', 'Eyal_2009_table_2:row4:col6', 'Eyal_2009_table_2:row4:col7', 'Eyal_2009_table_2:row4:col8', 'Eyal_2009_table_2:row4:col9', 'Eyal_2009_table_2:row4:col10', 'Eyal_2009_table_2:row4:col11', 'Eyal_2009_table_2:row4:col12'])
- dropped unlinked row (NIL): '02091' — extend the ontology if this is a real PK parameter (source ['Eyal_2009_table_2:row5:col1', 'Eyal_2009_table_2:row5:col2', 'Eyal_2009_table_2:row5:col3', 'Eyal_2009_table_2:row5:col4', 'Eyal_2009_table_2:row5:col5', 'Eyal_2009_table_2:row5:col6', 'Eyal_2009_table_2:row5:col7', 'Eyal_2009_table_2:row5:col8', 'Eyal_2009_table_2:row5:col9', 'Eyal_2009_table_2:row5:col10', 'Eyal_2009_table_2:row5:col11', 'Eyal_2009_table_2:row5:col12'])
- unit_dimension_unknown: '11C' (equation variable)
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Eyal_2009_table_2:row8:col2', 'Eyal_2009_table_2:row8:col3', 'Eyal_2009_table_2:row8:col4', 'Eyal_2009_table_2:row8:col5', 'Eyal_2009_table_2:row8:col6', 'Eyal_2009_table_2:row8:col7', 'Eyal_2009_table_2:row8:col8', 'Eyal_2009_table_2:row8:col9', 'Eyal_2009_table_2:row8:col10', 'Eyal_2009_table_2:row8:col11', 'Eyal_2009_table_2:row8:col12'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=[11C]-verapamil-derived radioactivity (verapamil and metabolites)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for '[11C]-verapamil-derived radioactivity (verapamil and metabolites)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '[11C]-verapamil-derived radioactivity (verapamil and metabolites)', not verapamil — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 3 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[02054]` | -20.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean]` | 17.5 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | [11C]-verapamil |  | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | [11C]-verapamil-derived radioactivity (verapamil and metabolites) |  | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 1 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bverapamil%5D%20Verapamil_Eyal2009_reference&body=Drug%3A%20verapamil%0ARecord%3A%20Verapamil_Eyal2009_reference%0APaper%3A%20Eyal_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_verapamil/Verapamil_Eyal2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 21:30 UTC</sub>
