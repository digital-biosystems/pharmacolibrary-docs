<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tioguanine&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/&quot;},{&quot;label&quot;:&quot;guideline \u00b7 PGx TPMT&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tioguanine_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# TPMT — PGx  <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** guideline estimate — CPIC/DPWG-derived estimate, not a primary-paper estimate.
- **source:** the DPWG dosing guideline ([ClinPGx PA166104960](https://www.clinpgx.org/guidelineAnnotation/PA166104960))
- **gene:** TPMT
- **mechanism:** metabolism — the gene's enzyme clears the drug
- **applies to:** pharmacokinetics (exposure)
- **phenotype (as the guideline names it):** TPMT PM
- **parameter it changes:** CL (`Q27`)
- **effect (θ per phenotype, categorical_fractional):** PM=-0.93
- **guideline recommendation:** TPMT PM | thioguanine | Genetic variation reduces conversion of thioguanine to inactive metabolites. This increases the risk of serious, life-threatening adverse events such as myelosuppression. | 1. Choose an alternative or start with 6-7% of the standard dose.  Any adjustment of the initial dose should be guided by toxicity (monitoring of blood counts) and effectiveness. The frequency of monitoring should be increased. 2. If the dose is decreased: advise patients to seek medical attention when symptoms of myelosuppression (such as severe sore throat in combination with fever, regular noseble…
- **phenotype groups:** standard phenotypes (PM / IM / NM / RM / UM) from the reference table

### Notes from the extraction

- guideline-derived estimate, NOT extracted from a per-genotype PK table
- dose-fraction → CL inversion assumes linear PK (unverified)

## Citation
not matched (stem guideline)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [tioguanine](drugs/drug_tioguanine/)</sub>
