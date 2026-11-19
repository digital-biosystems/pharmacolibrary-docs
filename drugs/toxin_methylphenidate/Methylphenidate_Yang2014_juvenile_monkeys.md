<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methylphenidate&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/&quot;},{&quot;label&quot;:&quot;Yang_2014 \u00b7 juvenile_monkeys&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Lyauk2016_reference&quot;,&quot;label&quot;:&quot;Lyauk_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methylphenidate — `Methylphenidate_Yang2014_juvenile_monkeys`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The record was rejected because the metabolite's volume parameter carries invalid units, specified as 'RA' instead of volume.

<div class="pk-model-meta" hidden drug="Methylphenidate" model-id="Methylphenidate_Yang2014_juvenile_monkeys" status="rejected" stale="false" population="juvenile and adult humans and nonhuman primates" measured-compound="Methylphenidate" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Yang X, Morris SM, Gearhart JM, Ruark CD, Paule MG, Slikker W et al. Development of a physiologically based model to describe the pharmacokinetics of methylphenidate in juvenile and adult humans and nonhuman primates. PloS one 9(9):e106101 (2014).
  ·  DOI: [10.1371/journal.pone.0106101](https://doi.org/10.1371/journal.pone.0106101)

## Population and dosing

**Population:** juvenile and adult humans and nonhuman primates · condition healthy · age group mixed.

**Dosing:** 0.3, 0.34, 0.65, 0.8, 5, 10, 15, 20, 40 mg, oral, multiple, every 4 h.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KmetdC and KmetlC (L/h/kg0.75) | CL | 70 | L/h/kg0.75 |
| GEdC and GElC (1/h/kg−0.25) | Kp | 2.34 | 1/h/kg−0.25 |
| Volume of distribution (VbodyC, L/kg) | V | 0.693 | RA |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the metabolite's volume parameter carries invalid units, specified as 'RA' instead of volume.**

The volume of distribution for Ritalinic acid is listed with the unit 'RA', which lacks the cubic length dimension required for volume. This dimensional mismatch prevents valid parameter scaling. Additionally, the model structure was not built as it falls outside the supported physiological templates. Extracted — Methylphenidate (d-MPH): CL 70 L/h/kg0.75, Kp 2.34 1/h/kg−0.25; Ritalinic acid (d-RA): V 0.693 RA.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| KmetdC and KmetlC (L/h/kg0.75) | `Q22` · CL | 70 | L/h/kg0.75 | l/(h·.75·kg0) | exact (1) | pone-0106101-t003:row9:col6, pone-0106101-t003:row9:col7 |
| GEdC and GElC (1/h/kg−0.25) | `Q410` · Kp | 2.34 | 1/h/kg−0.25 | 1/(h·.25·kg-0) | llm (0.6) | pone-0106101-t003:row11:col7 |
| Volume of distribution (VbodyC, L/kg) | `Q61` · V | 0.693 | RA | ra | exact (1) | pone-0106101-t003:row19:col6, pone-0106101-t003:row19:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/h/kg0.75' (CL)
- unit_dimension_unknown: '1/h/kg−0.25' (Kp)
- unit_dimension_mismatch: 'Volume of distribution (VbodyC, L/kg)' → Q63 (unit '[time]' vs ontology '[length] ** 3') — route to review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pone-0106101-t003:footnote']); the table cell was unparseable — needs review
- implicit units: 'KmetdC and KmetlC (L/h/kg0.75)' — the LLM proposed 'L/h/kg0.75', whose dimension does not fit Q22; left unset
- metabolite volume: 'Volume of distribution (VbodyC, L/kg)' Q63→Q61 for Ritalinic acid (d-RA) — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methylphenidate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'juvenile monkeys' subgroup of Yang_2014 (paper reports 4 populations: adult humans, adult monkeys, children, juvenile monkeys)
- row roles (LLM): model_class=pbpk; 10/10 row label(s) assigned, 16 linked by role; re-tagged parent→Methylphenidate (d-MPH) ×10, parent→Methylphenidate (l-MPH) ×3, parent→Ritalinic acid (d-RA) ×10, parent→Ritalinic acid (l-RA) ×2
- molar mass: no plausible PubChem entry for 'Ritalinic acid (d-RA)' ('α-phenyl-2-piperidine acetic acid (ritalinic acid)') — left in mass units
- molar mass: no plausible PubChem entry for 'Ritalinic acid (l-RA)' ('α-phenyl-2-piperidine acetic acid (ritalinic acid)') — left in mass units
- molar mass: none found for 'Ritalinic acid (d-RA)' — its concentrations stay mass-only
- molar mass: none found for 'Ritalinic acid (l-RA)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

**Extraction notes:**
- table pone-0106101-t003: ambiguous_numeric_format
- table pone-0106101-t003: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q61 | fail | [length] ** 3 | RA ([time]) | ['pone-0106101-t003:row19:col6', 'pone-0106101-t003:row19:col7'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L/h/kg0.75 | ['pone-0106101-t003:row9:col6', 'pone-0106101-t003:row9:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 70 | ['pone-0106101-t003:row9:col6', 'pone-0106101-t003:row9:col7'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylphenidate%5D%20Methylphenidate_Yang2014_juvenile_monkeys&body=Drug%3A%20methylphenidate%0ARecord%3A%20Methylphenidate_Yang2014_juvenile_monkeys%0APaper%3A%20Yang_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylphenidate/Methylphenidate_Yang2014_juvenile_monkeys%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:59 UTC</sub>
