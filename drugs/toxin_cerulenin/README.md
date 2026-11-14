<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cerulenin&quot;}]"></div>

# Cerulenin

- **generic name:** Cerulenin
- **T3DB:** [T3D2964](http://www.t3db.ca/toxins/T3D2964) · **DrugBank:** [DB01034](https://go.drugbank.com/drugs/DB01034) · **PubChem:** [CID 5282054](https://pubchem.ncbi.nlm.nih.gov/compound/5282054)
- **groups:** experimental

## About

Cerulenin is an antifungal antibiotic that inhibits sterol and fatty acid biosynthesis. In fatty acid synthesis, reported to bind in equimolar ratio to b-keto-acyl-ACP synthase. In sterol synthesis, inhibits HMG-CoA synthetase activity. …

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** For use as a biochemical tool, Cerulenin is shown to cause dramatic weight loss in animals
- **Mechanism of toxicity:** Irreversibly binds to fatty acid synthase, specifically b-ketoacyl-acyl carrier protein synthase (FabH, FabB and FabF condensation enzymes). A number of tumor cells and cell lines have been observed to have highly upregulated expression and activity of fatty acid synthase (FAS). …
- **Acute toxicity:** LD50: 547 mg/kg (Oral, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2964">T3DB T3D2964</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 17397-89-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:171741">ChEBI 171741</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cerulenin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FASN (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 03:29 | 2:35 | 0/0/0 | 0/0/0 | 0/0/0 | 67,347/2,560 | ollama / glm-5.3-flash | 6 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aliyari_2022 | not_relevant | 0 | 0 | Cerulenin used as antiviral FASN inhibitor; no gene variant/genotype effect on its PK/PD parameters reported. |
| popPK | Calderone_1985 | irrelevant | 0 | 0 | Cerulenin appears only as a resistance-selection agent for Candida mutants; no kinetic parameters of cerulenin itself are reported, only bloodstream clearance of the fungal strains in rabbits. |
| PGx | Janssen_2021 | not_relevant | 0 | 0 | No genetic variants or genotype/phenotype effects on cerulenin PK/PD parameters are reported; the study concerns FAS inhibition in stroke models only. |
| PGx | Johnson_1994 | not_relevant | 1 | 3 | Yeast genetics study of FAA genes and N-myristoylation; cerulenin is a Fas inhibitor used experimentally, not a drug with PK/PD pharmacogenomic effects. |
| popPK | Mukha_2024 | irrelevant | 0 | 0 | Cerulenin appears only as a comparator FASN inhibitor in cell-based assays; the reported half-lives/concentrations in mice belong to Fasnall, not cerulenin. |
| PGx | Qiu_2013 | not_relevant | 1 | 0 | Cerulenin is used only as a fatty acid synthesis inhibitor in yeast growth assays; no gene variant effect on cerulenin PK/PD parameters is reported. |
| PGx | Schujman_2008 | not_relevant | 5 | 3 | The fabF1 allele (FabF[I108F]) confers qualitative cerulenin insensitivity/resistance, but no quantitative PK or PD parameter (e.g., IC50, EC50, MIC values) is reported. |
| PGx | Seronello_2010 | not_relevant | 0 | 0 | No gene variant/genotype effects on cerulenin PK/PD; cerulenin is only an experimental inhibitor of fatty acid synthesis. |
| popPK | Shafreen_2013 | irrelevant | 0 | 0 | In silico docking/ADMET study of drug ligands against bacterial FabG; cerulenin is at most incidental, with no toxicokinetic parameters. |
| popPK | Vazquez-Martin_2007 | irrelevant | 0 | 0 | In vitro cytotoxicity study of cerulenin as a FASN inhibitor in breast cancer cell lines; IC50 values are pharmacodynamic drug-potency data, not toxicokinetic parameters. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | Cerulenin is only an in vitro pharmacological treatment of myeloma cells; no kinetic parameters (half-life, clearance, rates, etc.) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcerulenin%5D&body=Drug%3A%20cerulenin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cerulenin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
