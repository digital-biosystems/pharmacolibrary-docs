<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;4-Phenylphenol&quot;}]"></div>

# 4-Phenylphenol

- **generic name:** 4-Phenylphenol
- **T3DB:** [T3D3949](http://www.t3db.ca/toxins/T3D3949) · **PubChem:** [CID 7103](https://pubchem.ncbi.nlm.nih.gov/compound/7103)

## About

4-phenylphenol is estrogen recepto(ER) alpha agonists, antagonists for androgen receptor (AR). It is a weak inhibitors on expression under control of the progesterone receptor(PR).

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3949">T3DB T3D3949</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 92-69-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:34422">ChEBI 34422</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Frederiksen_2013_N_A](drugs/toxin_4_phenylphenol/pd_Frederiksen_2013_N_A.md) | Not specified ← 4_phenylphenol · model not identified | — | Frederiksen H et al., Urinary excretion of phthalate metaboli…, International journal of hy… (2013) | [10.1016/j.ijheh.2013.02.006](https://doi.org/10.1016/j.ijheh.2013.02.006) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 18:36 | 3:53 | 0/0/0 | 0/1/0 | 0/0/0 | 41,843/2,735 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meyer_1977.pdf` | Meyer T, The metabolism of biphenyl. IV. Phenoli…, Acta pharmacologica et toxi… (1977) | popPK | 9 | [10.1111/j.1600-0773.1977.tb02068.x](https://doi.org/10.1111/j.1600-0773.1977.tb02068.x) | [576550](https://pubmed.ncbi.nlm.nih.gov/576550) | The paper reports quantitative urinary, fecal, and biliary excretion data for the metabolite 4-hydroxybiphenyl (4-phenylphenol) in guinea pigs and rabbits. |

<sub>queue written 2026-11-19 18:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egoshi_2026 | not_relevant | 1 | 9 | The paper reports on 4-hydroxybiphenyl (4-OHBP), not 4-phenylphenol; although 4-OHBP is a metabolite of 4-phenylphenol, the specific drug of interest is not studied directly. |
| popPK | Frederiksen_2013 | irrelevant | 0 | 0 | The paper is an epidemiological exposure study reporting urinary concentrations in humans without any kinetic parameters for 4_phenylphenol. |
| PGx | Isobe_2017 | not_relevant | 0 | 0 | The paper focuses on 4-tert-octylphenol, not the requested compound 4-phenylphenol. |
| popPK | Küçükgüzel_2006 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological activity (antimycobacterial, antiviral, antimicrobial) of new diflunisal-derived compounds, with no toxicokinetic data for 4-phenylphenol. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper focuses on liquid crystal monomers and their metabolites (CN-195, 2F4OHBN), with no mention or kinetic parameters for 4_phenylphenol. |
| popPK | Shihab_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro anti-tumor activity of 4'-hydroxybiphenyl-4-carboxylic acid derivatives, containing no toxicokinetic data for 4-phenylphenol. |
| popPK | Yin_1991 | irrelevant | 0 | 0 | The paper studies bilirubin-metabolizing enzymes and 4-hydroxybiphenyl formation, not the toxicokinetics of 4-phenylphenol. |
| popPK | Yokota_1988 | irrelevant | 0 | 0 | The paper focuses on eugenol's effects on enzyme activities in rat liver and does not report toxicokinetic parameters for 4-phenylphenol. |
| popPK | Yoshimura_1992 | irrelevant | 0 | 0 | The evidence contains only GROBID metadata and no scientific text or data regarding 4_phenylphenol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B4_phenylphenol%5D&body=Drug%3A%204_phenylphenol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_4_phenylphenol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
