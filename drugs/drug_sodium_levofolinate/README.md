<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium levofolinate&quot;}]"></div>

# sodium levofolinate

- **generic name:** sodium levofolinate
- **ATC codes:** `V03AF10`
- **DrugBank:** [DB11596](https://go.drugbank.com/drugs/DB11596) · **PubChem:** [CID 149436](https://pubchem.ncbi.nlm.nih.gov/compound/149436)
- **molar mass:** 473.4393 g/mol (C20H23N7O7) — DrugBank
- **groups:** approved, investigational

## About

Sodium levofolinate is a form of folinic acid used to treat megaloblastic anemia and as a detoxifying agent in antineoplastic treatment. It is given by mouth, injection into a vein, or injection into a muscle. It is listed as a World Health Organization essential medicine and is widely used.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q192464](https://www.wikidata.org/wiki/Q192464), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-24 03:35 | 0:09 | 0/0/0 | 0/0/0 | 0/0/0 | 12,846/1,570 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Newman_1989.pdf` | Newman EM et al., Pharmacokinetics of diastereoisomers of…, Cancer research (1989) | popPK | 10 |  | [2676149](https://pubmed.ncbi.nlm.nih.gov/2676149) | The paper reports quantitative PK parameters (half-lives, clearances, steady-state concentrations) for folinic acid (levofolinate) and its diastereoisomers in humans. |

<sub>queue written 2026-11-24 03:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deshpande_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of levoleucovorin's inhibition of LOXL2, containing no pharmacokinetic parameters. |
| PGx | Deshpande_2024 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of levoleucovorin on LOXL2 in cancer cells but does not examine any pharmacogenomic (gene variant) effects on its PK or PD parameters. |
| popPK | Hempel_2005 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic degradation experiment measuring reaction velocities, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for sodium levofolinate in vivo. |
| PGx | Hempel_2005 | not_relevant | 0 | 0 | The paper investigates in vitro enzymatic degradation by carboxypeptidase G2, not the effect of a specific gene variant or genotype on pharmacokinetic/pharmacodynamic parameters in humans. |
| popPK | Kovoor_2009 | irrelevant | 1 | 0 | The paper is a literature review without original quantitative PK parameter values or specific numeric data for the subject drug. |
| PGx | Kovoor_2009 | not_relevant | 0 | 0 | The paper is a literature review comparing the efficacy and safety of levoleucovorin versus racemic leucovorin and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lee_1990 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay measuring inhibition constants (Ki) for leucovorin stereoisomers, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for sodium_levofolinate. |
| PGx | Lee_1990 | not_relevant | 0 | 0 | The paper discusses the pharmacology of leucovorin diastereomers in vitro but does not report any gene variant effects on PK or PD parameters. |
| popPK | Meropol_1995 | irrelevant | 4 | 0 | The study focuses on Leucovorin, which is the parent compound of Sodium Levofolinate, and while it mentions PK parameters (AUC, Clp, t1/2) in the abstract, no specific numeric values are provided in the evidence text. |
| PGx | Meropol_1995 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters for 6S-leucovorin but does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Mofidifar_2018 | irrelevant | 0 | 0 | The paper is a computational drug repurposing study for AMPK activation and does not report pharmacokinetic parameters for sodium levofolinate. |
| PGx | Mofidifar_2018 | not_relevant | 0 | 0 | The paper discusses levoleucovorin as a putative AMPK activator via computer-aided drug discovery and contains no data on pharmacogenomics, pharmacokinetics, or pharmacodynamics. |
| PGx | Newman_1989 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of diastereoisomers of folinic acid but does not report any genetic or pharmacogenomic influences on these parameters. |
| popPK | Saeed_2025 | irrelevant | 0 | 0 | The study is an in vitro compatibility and stability assessment of 5-FU and disodium levofolinate admixtures, reporting no pharmacokinetic parameters. |
| PGx | Saeed_2025 | not_relevant | 0 | 0 | The paper investigates the physical compatibility of a sodium levofolinate formulation with 5-FU, not pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_levofolinate%5D&body=Drug%3A%20sodium_levofolinate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_levofolinate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
