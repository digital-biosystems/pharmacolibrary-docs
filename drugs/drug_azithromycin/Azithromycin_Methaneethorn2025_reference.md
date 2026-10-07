<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Methaneethorn_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Methaneethorn2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Methaneethorn J et al., Influential predictors of azithromycin…, Annals of medicine (2025)
  ·  DOI: [10.1080/07853890.2025.2496792](https://doi.org/10.1080/07853890.2025.2496792)

## Model component
<dbs-pgx drug="azithromycin" model-id="Azithromycin_Methaneethorn2025_reference" status="extracted" stale="false" population="mixed (adults, children, preterm newborns, pregnant women)" measured-compound="azithromycin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 0 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — mechanistic, F unknown (apparent — bioavailability not identifiable).

## Parameters
_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V1/F | Q290 | not captured | exact |
| V2/F | Q82 | not captured | exact |
| CL/F | Q27 | not captured | exact |
| Q2/F | Q69 | not captured | special_case |
| V1 | Q63 | not captured | exact |
| CL | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Muto et al 2011 [35]' routed out of structural estimates ('Between-subject variability (%CV)')
- column 'pk parameter–covariate relationship' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model qualification' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Salman et al 2010 [18]' — extend the ontology if this is a real PK parameter (source ['t0002:row1:col3'])
- dropped unlinked row (NIL): 'Zhang et al 2010 [29]' — extend the ontology if this is a real PK parameter (source ['t0002:row9:col3'])
- dropped unlinked row (NIL): 'Muto et al 2011 [35]' — extend the ontology if this is a real PK parameter (source ['t0002:row14:col3'])
- dropped unlinked row (NIL): 'Hassan et al 2011 [36]' — extend the ontology if this is a real PK parameter (source ['t0002:row20:col3'])
- dropped unlinked row (NIL): 'Fischer et al 2012 [19]' — extend the ontology if this is a real PK parameter (source ['t0002:row24:col3'])
- dropped unlinked row (NIL): 'Dumitrescu et al 2013 [30]' — extend the ontology if this is a real PK parameter (source ['t0002:row31:col3'])
- dropped unlinked row (NIL): 'Sampson et al 2014 [32]' — extend the ontology if this is a real PK parameter (source ['t0002:row39:col3'])
- dropped unlinked row (NIL): 'Zhao et al 2014 [17]' — extend the ontology if this is a real PK parameter (source ['t0002:row51:col3'])
- dropped unlinked row (NIL): 'Zheng et al 2014 [31]' — extend the ontology if this is a real PK parameter (source ['t0002:row59:col3'])
- dropped unlinked row (NIL): 'Merchan et al 2015 [37]' — extend the ontology if this is a real PK parameter (source ['t0002:row74:col3'])
- dropped unlinked row (NIL): 'Salman et al 2016 [34]' — extend the ontology if this is a real PK parameter (source ['t0002:row78:col3'])
- dropped unlinked row (NIL): 'Zheng et al 2018 [38]' — extend the ontology if this is a real PK parameter (source ['t0002:row95:col3', 't0002:row95:col7'])
- dropped unlinked row (NIL): 'Wu et al 2019 [33]' — extend the ontology if this is a real PK parameter (source ['t0002:row99:col3'])
- dropped unlinked row (NIL): 'Chotsiri et al 2022 [20]' — extend the ontology if this is a real PK parameter (source ['t0002:row103:col3'])
- dropped unlinked row (NIL): 'Zhang et al 2024 [39]' — extend the ontology if this is a real PK parameter (source ['t0002:row111:col3'])
- table mostly unlinked (15/15 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azithromycin
- bound model equation to Q290 (V1/F): V1/F = 1,830 * (weight/70)^1.03 * (age/45)–0.256
- bound model equation to Q82 (V2/F): V2/F = 4,340 * (weight/70)^1
- bound model equation to Q27 (CL/F): CL/F = 103 * (weight/70)^0.917 * (age/45)–0.166
- bound model equation to Q69 (Q/F): Q2/F = 138 * (weight/70)^0.75
- bound model equation to Q63 (V1): V1 = 45.65 * (weight/14.4)^1
- bound model equation to Q22 (CL): CL = 1.27 * (weight/14.4)^0.75 * (age in month/39)^0.19
- Q290 (V1/F) is equation-defined: value moved to equation-variable 'V1/F'; equation kept verbatim
- Q82 (V2/F) is equation-defined: value moved to equation-variable 'V2/F'; equation kept verbatim
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- Q69 (Q/F) is equation-defined: value moved to equation-variable 'Q2/F'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'V1'; equation kept verbatim
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell t0002:row1:col2 = '3-CMT with zero-order followed by first-order absorption and linear elimination'
- unparsed cell t0002:row1:col5 = '76.9%'
- unparsed cell t0002:row1:col6 = 'Prop: (31.2%)'
- unparsed cell t0002:row9:col2 = '2-CMT with first-order absorption and elimination'
- unparsed cell t0002:row9:col5 = '83.2%'
- unparsed cell t0002:row9:col6 = 'Prop: (32.96%)Add: SD &lt; 0.01'
- unparsed cell t0002:row14:col2 = '2-CMT with first-order absorption and elimination'
- unparsed cell t0002:row14:col5 = '110%'
- unparsed cell t0002:row14:col6 = 'Prop: (30%)'
- unparsed cell t0002:row20:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row20:col6 = 'Prop: (28.7%)'
- unparsed cell t0002:row24:col2 = '3-CMT with first-order absorption (and a lag time) and elimination'
- unparsed cell t0002:row24:col6 = 'Prop: (32%)'
- unparsed cell t0002:row31:col2 = '3-CMT with first-order absorption, lag time, and first-order elimination'
- unparsed cell t0002:row31:col5 = '26.2%'
- unparsed cell t0002:row31:col6 = 'Prop (plasma): (24.1%)Prop (blood): (23.2%)'
- unparsed cell t0002:row39:col2 = '4-CMT with first-order absorption and first-order elimination from central compartment'
- unparsed cell t0002:row39:col5 = '41%'
- unparsed cell t0002:row39:col6 = 'Prop (blood): (47%)Prop (PMBC): (74%))Prop (PMN): (64%)'
- unparsed cell t0002:row51:col2 = '3-CMT with first-order absorption and elimination'
- unparsed cell t0002:row51:col6 = 'NR: 0.406'
- unparsed cell t0002:row59:col2 = '3-CMT with first-order absorption, lag time, and first-order elimination and tissue distribution model in interstitial fluid of muscle and subcutaneous adipose tissue'
- unparsed cell t0002:row59:col6 = 'PlasmaProp: 0.14Add: 35.2Muscle ISFProp: 0.14Add: 0.51Subcutis ISFProp: 0.34Add: 1 × 10-6PMLcytosolProp: 0.23Add: 1 × 10-6'
- unparsed cell t0002:row74:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row74:col5 = '78.2%'
- unparsed cell t0002:row74:col6 = 'Prop: (28%)'
- unparsed cell t0002:row78:col2 = '3-CMT with mixed zero- and first-order absorption, and first-order elimination'
- unparsed cell t0002:row78:col6 = 'Prop: (32%)'
- unparsed cell t0002:row95:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row95:col5 = '84.9%'
- unparsed cell t0002:row95:col6 = 'Expo: (5.7%)'
- unparsed cell t0002:row99:col2 = '2-CMT with first-order elimination'
- unparsed cell t0002:row99:col5 = '189%'
- unparsed cell t0002:row99:col6 = 'Power: 1'
- unparsed cell t0002:row103:col2 = '3-CMT with first-order absorption, and first-order elimination'
- unparsed cell t0002:row103:col5 = 'IIV: 21.5%IOV: 14.9%'
- unparsed cell t0002:row103:col6 = 'Add: 0.0194'
- unparsed cell t0002:row111:col2 = '1-CMT with first-order elimination'
- unparsed cell t0002:row111:col5 = '6.19%CL: 3.04%Age on CL: 35.5%'
- unparsed cell t0002:row111:col6 = 'Prop: (24.31%)'
- LLM selected parameter table(s) 3
- captured model equation V1/F = 1,830 * (weight/70)^1.03 * (age/45)–0.256
- captured model equation V2/F = 4,340 * (weight/70)^1
- captured model equation CL/F = 103 * (weight/70)^0.917 * (age/45)–0.166
- captured model equation Q2/F = 138 * (weight/70)^0.75
- captured model equation V1 = 45.65 * (weight/14.4)^1
- captured model equation CL = 1.27 * (weight/14.4)^0.75 * (age in month/39)^0.19

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_azithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Methaneethorn_2025` / `Methaneethorn_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:33 UTC</sub>
