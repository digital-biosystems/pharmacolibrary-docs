<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;loprazolam&quot;}]"></div>

# loprazolam

- **generic name:** loprazolam
- **ATC codes:** `N05CD11`
- **DrugBank:** [DB13643](https://go.drugbank.com/drugs/DB13643) · **PubChem:** [CID 3033860](https://pubchem.ncbi.nlm.nih.gov/compound/3033860)
- **molar mass:** 464.904 g/mol (C23H21ClN6O3) — DrugBank
- **groups:** experimental

## About

**Description.** Loprazolam is an imidazobenzodiazepine with anxiolytic, anticonvulsant, hypnotic, sedative and skeletal muscle relaxant properties. It is indicated for the short-term treatment of insomnia including difficulty in falling asleep and/or frequent nocturnal awakenings. Loprazolam is recommended as a short-term therapy only, due to adverse events associated with the drug including dependence and withdrawal symptoms. It is a positive modulator of GABA-A receptor that enhances the inhibitory neurotransmission. It is not an FDA-approved drug.

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB13643">DrugBank DB13643</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

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
| 2026-10-06 21:11 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 14,049/347 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Swift_1985.pdf` | Swift CG et al., Single dose pharmacokinetics and pharma…, British journal of clinical… (1985) | popPK | 7 | [10.1111/j.1365-2125.1985.tb05041.x](https://doi.org/10.1111/j.1365-2125.1985.tb05041.x) | [2864049](https://pubmed.ncbi.nlm.nih.gov/2864049) | PK study of loprazolam in young vs elderly volunteers, but the abstract only states t1/2 and AUC differed without giving numeric values. |

<sub>queue written 2026-10-06 21:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashton_1994 | irrelevant | 0 | 0 | A clinical review of benzodiazepine use with no PK parameters or numeric disposition values for loprazolam. |
| popPK | Illing_1983 | irrelevant | 2 | 1 | Metabolism/identification study with no quantitative disposition parameters (CL, V, t½, model) reported; only qualitative metabolite profiles. |
| popPK | Rickels_1986 | irrelevant | 1 | 0 | Narrative review of hypnotic clinical use; loprazolam only mentioned as having an intermediate half-life, with no quantitative PK parameters reported. |
| popPK | Swift_1985 | relevant | 7 | 2 | PK study of loprazolam in young vs elderly volunteers, but the abstract only states t1/2 and AUC differed without giving numeric values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bloprazolam%5D&body=Drug%3A%20loprazolam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_loprazolam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
