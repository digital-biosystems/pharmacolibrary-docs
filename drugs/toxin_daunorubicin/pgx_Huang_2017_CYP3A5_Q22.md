<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Daunorubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_daunorubicin/&quot;},{&quot;label&quot;:&quot;Huang_2017 \u00b7 PGx CYP3A5&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_Hempel2010_reference&quot;,&quot;label&quot;:&quot;Hempel_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# CYP3A5 — PGx  <span class="pk-badge pk-badge--orange" title="the extraction is incomplete or inconsistent.">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** needs review — the extraction is incomplete or inconsistent.
- **source:** this paper, `Huang_2017` — [doi](https://doi.org/10.3892/mmr.2017.6470)
- **gene:** CYP3A5
- **mechanism:** not stated in the paper
- **applies to:** pharmacokinetics (exposure)
- **parameter it changes:** CL (`Q22`)
- **effect (θ per phenotype, categorical_fractional):** 6986AA=0.0, 6986AG=-0.0284, 6986GG=-0.1476
- **phenotype groups:** groups defined by genotype (e.g. *1/*1, *1/*3), as the paper reports them

### Notes from the extraction

- genotype-stratified θ from Q22 (CL)
- reference genotype = 6986AA (most-populous stratum; paper did not designate a reference — engineer may rebase)

## Citation
Huang Z et al., Effects of cytochrome P450 family 3 sub…, Molecular medicine reports (2017)
  ·  DOI: [10.3892/mmr.2017.6470](https://doi.org/10.3892/mmr.2017.6470)


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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20pgx_Huang_2017_CYP3A5_Q22&body=Drug%3A%20daunorubicin%0ARecord%3A%20pgx_Huang_2017_CYP3A5_Q22%0APaper%3A%20Huang_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_daunorubicin/pgx_Huang_2017_CYP3A5_Q22%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Daunorubicin](drugs/toxin_daunorubicin/)</sub>
