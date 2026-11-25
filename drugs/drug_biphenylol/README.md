<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;biphenylol&quot;}]"></div>

# biphenylol

- **generic name:** biphenylol
- **ATC codes:** `D08AE06`
- **DrugBank:** [DB13734](https://go.drugbank.com/drugs/DB13734) · **PubChem:** none
- **groups:** investigational

## About

Biphenylol is a phenol derivative that functions as a biocide and preservative. It is administered topically, typically as a solution. The compound is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q209467](https://www.wikidata.org/wiki/Q209467), [Wikipedia](https://en.wikipedia.org/wiki/2-Phenylphenol?oldid=1380024852) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 18:42 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 8,217/230 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Matthews_2000.pdf` | Matthews J et al., Differential binding affinities of PCBs…, Toxicological sciences : an… (2000) | pd | 4 | [10.1093/toxsci/53.2.326](https://doi.org/10.1093/toxsci/53.2.326) | [10696781](https://www.ncbi.nlm.nih.gov/pubmed/10696781) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 18:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Malmberg_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for hydroxylated polychlorinated biphenyl metabolites (4-OH-CB 107 and 4-OH-CB 187), not the drug biphenylol. |
| PGx | Malmberg_2004 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of PCB metabolites (4-OH-CB 107 and 4-OH-CB 187) in rats but does not report any pharmacogenomic effects (gene variant/genotype) on the PK/PD parameters. |
| popPK | Matthews_2000 | irrelevant | 0 | 0 | no_text gate: only 237 chars of text extracted (&lt; 400) |
| PD | Matthews_2000 | not_relevant | 0 | 0 | The paper focuses on the binding affinities of PCBs and HO-PCBs to estrogen receptors, not on the pharmacodynamics of biphenylol. |
| PGx | Matthews_2000 | not_relevant | 0 | 0 | The paper studies the binding affinities of polychlorinated biphenyls (PCBs) to estrogen receptors, which is an environmental toxicology study, not a pharmacogenomic study of the drug biphenylol. |
| popPK | Nair-Menon_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane integrity and cytotoxicity in splenocytes, not a pharmacokinetic study. |
| PGx | Nair-Menon_1999 | not_relevant | 0 | 0 | The study examines the cytotoxic effects of environmental chemicals (PCB-OH) on mouse splenocytes and their interaction with estrogen/tamoxifen; it does not report human pharmacogenomic variants affecting the PK/PD of a drug named biphenylol. |
| popPK | Ramamoorthy_1997 | irrelevant | 0 | 0 | The study investigates the estrogenic activity and receptor binding of chlorinated biphenylols (toxicants/metabolites), not the pharmacokinetic disposition of the drug biphenylol. |
| PGx | Ramamoorthy_1997 | not_relevant | 0 | 0 | The paper reports on the estrogenic activity of biphenylol derivatives (PCBs) as environmental endocrine disruptors in various in vitro and in vivo assays, but it does not investigate the effect of gene variants or genotypes on their pharmacokinetic or pharmacodynamic parameters as a drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbiphenylol%5D&body=Drug%3A%20biphenylol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_biphenylol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
