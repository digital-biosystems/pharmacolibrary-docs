<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Methyl cellusolve&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MethylCellusolve_Moss1985_reference&quot;,&quot;label&quot;:&quot;Moss_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyl_cellusolve/MethylCellusolve_Moss1985_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Methyl cellusolve

- **generic name:** Methyl cellusolve
- **T3DB:** [T3D3881](http://www.t3db.ca/toxins/T3D3881) · **DrugBank:** [DB02806](https://go.drugbank.com/drugs/DB02806) · **PubChem:** [CID 8019](https://pubchem.ncbi.nlm.nih.gov/compound/8019)
- **groups:** experimental

## About

Methyl cellosolve, is a clear and colorless liquid at room temperature mainly used as a solvent. It is used for many purposes including varnishes, dyes, resins, printing, finishing textile, and semiconductor manufacturing. It is a central nervous system toxicant and has been shown to damage the lungs and kidneys in animal testing.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Sources and uses:** Methyl cellosolve, is a clear and colorless liquid at room temperature mainly used as a solvent. It is used for many purposes including varnishes, dyes, resins, printing, finishing textile, and semiconductor manufacturing.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3881">T3DB T3D3881</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 9004-74-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:46790">ChEBI 46790</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 2-methoxyethanol | parent | 76.095 | C3H8O2 | PubChem | [8019](https://pubchem.ncbi.nlm.nih.gov/compound/8019) | Clarke_1993, Moss_1985 |
| 2-methoxyacetic acid (methoxyacetic acid) | metabolite | 90.078 | C3H6O3 | PubChem | [12251](https://pubchem.ncbi.nlm.nih.gov/compound/12251) | Clarke_1993, Moss_1985 |
| ethylene glycol | metabolite | 62.068 | C2H6O2 | PubChem | [174](https://pubchem.ncbi.nlm.nih.gov/compound/174) | Clarke_1993 |

## Start here

> **Moss_1985_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> Sprague-Dawley rats. [Run it in the simulator](drugs/toxin_methyl_cellusolve/MethylCellusolve_Moss1985_reference.md?tab=Simulation) · [record](drugs/toxin_methyl_cellusolve/MethylCellusolve_Moss1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Moss_1985_reference](drugs/toxin_methyl_cellusolve/MethylCellusolve_Moss1985_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Moss EJ et al., The role of metabolism in 2-methoxyetha…, Toxicology and applied phar… (1985) | [10.1016/0041-008x(85)90145-0](https://doi.org/10.1016/0041-008x(85)90145-0) |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: nonlinear topology</sub> | [Clarke_1993_reference](drugs/toxin_methyl_cellusolve/MethylCellusolve_Clarke1993_reference.md) | held back | 1-compartment, IV | 2 | Clarke DO et al., Pharmacokinetics of 2-methoxyethanol an…, Toxicology and applied phar… (1993) | [10.1006/taap.1993.1151](https://doi.org/10.1006/taap.1993.1151) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 13:19 | 3:25 | 2/0/0 | 0/0/0 | 0/0/0 | 23,809/5,172 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clarke_1991.pdf` | Clarke DO et al., Protection against 2-methoxyethanol-ind…, Toxicology and applied phar… (1991) | popPK | 10 | [10.1016/0041-008x(91)90051-f](https://doi.org/10.1016/0041-008x(91)90051-f) | [1949018](https://pubmed.ncbi.nlm.nih.gov/1949018) | The paper reports quantitative pharmacokinetic changes (metabolite levels, absorption rates) for the metabolite 2-MAA after 2-ME administration, but specific numeric parameter values are described textually (e.g., percentages, qualitative delays) rather than listed as clear kinetic constants in the provided evidence. |
| `Clarke_1993.pdf` | Clarke DO et al., Pharmacokinetics of 2-methoxyethanol an…, Toxicology and applied phar… (1993) | popPK | 10 | [10.1006/taap.1993.1151](https://doi.org/10.1006/taap.1993.1151) | [8346541](https://pubmed.ncbi.nlm.nih.gov/8346541) | The paper reports quantitative PBPK parameters (Vmax, Km, rate constants, partition coefficients, volume of distribution) for methyl_cellulose (2-methoxyethanol) and its metabolite in mice, with many values explicitly stated in the abstract text. |
| `Terry_1995.pdf` | Terry KK et al., Development of a physiologically based…, Toxicology and applied phar… (1995) | popPK | 10 | [10.1006/taap.1995.1091](https://doi.org/10.1006/taap.1995.1091) | [7747273](https://pubmed.ncbi.nlm.nih.gov/7747273) | The paper reports PBPK parameters for 2-methoxyacetic acid (the metabolite of methyl cellusolve/2-methoxyethanol) in pregnant mice, but the provided text is only the abstract and contains no numeric values. |
| `Moss_1985.pdf` | Moss EJ et al., The role of metabolism in 2-methoxyetha…, Toxicology and applied phar… (1985) | popPK | 9 | [10.1016/0041-008x(85)90145-0](https://doi.org/10.1016/0041-008x(85)90145-0) | [4035689](https://pubmed.ncbi.nlm.nih.gov/4035689) | The paper provides quantitative half-life data for the disappearance of 2-methoxyethanol (ME, a synonym for methyl cellosolve) and its clearance in rat plasma. |

<sub>queue written 2026-11-19 13:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campbell_1984 | irrelevant | 1 | 2 | The paper discusses the teratogenicity and metabolism of dimethoxyethylphthalate (DMEP) and its metabolites in rats, not methyl_cellusolve (2-methoxyethanol), which is only mentioned as a comparator or potential metabolite without quantitative kinetic parameters reported for it. |
| popPK | Cheever_2001 | irrelevant | 2 | 0 | The paper discusses 2-methoxyethanol (not methyl cellusolve, which is a polymer) and reports no quantitative toxicokinetic parameters like half-lives or clearance rates. |
| popPK | Clarke_1991 | relevant | 10 | 2 | The paper reports quantitative pharmacokinetic changes (metabolite levels, absorption rates) for the metabolite 2-MAA after 2-ME administration, but specific numeric parameter values are described textually (e.g., percentages, qualitative delays) rather than listed as clear kinetic constants in the provided evidence. |
| popPK | Terry_1995 | relevant | 10 | 0 | The paper reports PBPK parameters for 2-methoxyacetic acid (the metabolite of methyl cellusolve/2-methoxyethanol) in pregnant mice, but the provided text is only the abstract and contains no numeric values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyl_cellusolve%5D&body=Drug%3A%20methyl_cellusolve%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyl_cellusolve/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 13:18 UTC</sub>
