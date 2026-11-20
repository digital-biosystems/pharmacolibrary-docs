<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Sporidesmin&quot;}]"></div>

# Sporidesmin

- **generic name:** Sporidesmin
- **T3DB:** [T3D3776](http://www.t3db.ca/toxins/T3D3776) · **PubChem:** [CID 99596](https://pubchem.ncbi.nlm.nih.gov/compound/99596)

## About

Sporidesmin is a mycotoxin found in the spores of the fungus Pithomyces chartarum. It is a potent hepatotoxin and is known to cause pithomycotoxicosis (facial eczema, characterized by photosensitisation) in livestock.

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Sporidesmin is a mycotoxin found in the spores of the fungus Pithomyces chartarum.
- **Mechanism of toxicity:** Sporidesmin and its reduced (dithiol) form undergo cyclic reduction/autoxidation reactions with glutathione and other thiols, generating toxic superoxide radicals, hydrogen peroxide, and hydroxy radicals. It targets the liver, causing pericholangitis and the occlusion of bile ducts, which leads to the accumulation of bile constitutents in the bloodstream. …
- **Health effects:** Sporidesmin is a potent hepatotoxin, causing liver damage from pericholangitis and the occlusion of bile ducts, which results in the accumulation of bile constitutents in the bloodstream. This is known to lead to pithomycotoxicosis (facial eczema, characterized by photosensitisation) in livestock. …
- **Carcinogenicity:** Not listed by IARC.
- **Treatment:** Administration of zinc salts can protect against the effects of sporidesmin. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3776">T3DB T3D3776</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1456-55-9</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 04:14 | 1:31 | 0/0/0 | 0/0/0 | 0/0/0 | 13,486/866 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Duncan_2005 | irrelevant | 0 | 0 | The paper reports cytotoxicity data (LC50) and mechanism of protection in cell lines, but provides no quantitative toxicokinetic parameters such as clearance, volume of distribution, or rate constants. |
| PGx | Duncan_2007 | not_relevant | 2 | 1 | The paper reports genetic associations with disease susceptibility (phenotype) and gene expression levels, but does not report specific pharmacokinetic or pharmacodynamic parameters of sporidesmin (e.g., AUC, Cmax, LD50) changed by the genotype. |
| popPK | Ferguson_2002 | irrelevant | 0 | 0 | The paper is a general review of dietary mutagens and carcinogens, mentioning sporidesmin only as an example of a mycotoxin without providing any quantitative toxicokinetic parameters. |
| popPK | Hohenboken_2000 | irrelevant | 0 | 0 | The paper reports lethality (LD50) and histological outcomes, but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients for sporidesmin. |
| PGx | Phua_1999 | not_relevant | 3 | 2 | The paper reports a genetic association (allele frequency differences) between the catalase gene and disease susceptibility/resistance to sporidesmin, but does not report changes in specific pharmacokinetic (e.g., AUC, Clearance) or quantitative pharmacodynamic parameters caused by the genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsporidesmin%5D&body=Drug%3A%20sporidesmin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sporidesmin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
