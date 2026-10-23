<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;venlafaxine&quot;,&quot;href&quot;:&quot;drugs/drug_venlafaxine/&quot;},{&quot;label&quot;:&quot;guideline \u00b7 PGx CYP2D6&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Venlafaxine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venlafaxine/Venlafaxine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venlafaxine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venlafaxine/Venlafaxine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venlafaxine_Liu2022_reference&quot;,&quot;label&quot;:&quot;Liu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venlafaxine/Venlafaxine_Liu2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# CYP2D6 — PGx  <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** guideline estimate — CPIC/DPWG-derived estimate, not a primary-paper estimate.
- **source:** the DPWG dosing guideline ([ClinPGx PA166104968](https://www.clinpgx.org/guidelineAnnotation/PA166104968))
- **gene:** CYP2D6
- **mechanism:** metabolism — the gene's enzyme clears the drug
- **applies to:** pharmacokinetics (exposure)
- **phenotype (as the guideline names it):** UM (a gene duplication in absence of inactive (*3-*8, *11-*16, *19-*21, *38, *40, *42) or decreased-activity (*9, *10, *17, *29, *36, *41) alleles)
- **parameter it changes:** CL (`Q27`)
- **effect:** not converted to a θ — the guideline gives dosing advice (below), not a fold-change on the parameter
- **guideline recommendation:** UM (a gene duplication in absence of inactive (*3-*8, *11-*16, *19-*21, *38, *40, *42) or decreased-activity (*9, *10, *17, *29, *36, *41) alleles) | Be alert to decreased venlafaxine and increased (O-desmethyl)venlafaxine plasma concentration. Titrate dose to a maximum of 150% of the normal dose or select alternative drug (e.g., citalopram, sertraline). | Published controlled studies of good quality* relating to phenotyped and/or genotyped patients or healthy volunteers, and having relevant pharmacokinetic or clinical endpoints. | Minor clinical effect (S): QTc prolongation (&lt;450 ms female, &lt;…
- **phenotype groups:** standard phenotypes (PM / IM / NM / RM / UM) from the reference table

### Notes from the extraction

- guideline-derived estimate, NOT extracted from a per-genotype PK table
- guideline recommends avoid/alternative therapy — not a CL θ

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvenlafaxine%5D%20pgx_guideline_CYP2D6_PA166104968_11&body=Drug%3A%20venlafaxine%0ARecord%3A%20pgx_guideline_CYP2D6_PA166104968_11%0APaper%3A%20guideline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_venlafaxine/pgx_guideline_CYP2D6_PA166104968_11%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [venlafaxine](drugs/drug_venlafaxine/)</sub>
