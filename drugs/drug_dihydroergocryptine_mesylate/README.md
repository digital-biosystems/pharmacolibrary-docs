<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;dihydroergocryptine mesylate&quot;}]"></div>

# dihydroergocryptine mesylate

- **generic name:** dihydroergocryptine mesylate
- **ATC codes:** `N04BC03`
- **DrugBank:** [DB13385](https://go.drugbank.com/drugs/DB13385) · **PubChem:** none
- **groups:** investigational

## About

Dihydroergocryptine is a dopamine agonist used to treat conditions of the nervous system. The medication is currently classified as investigational.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 22:11 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 4,225/177 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Williams_1981.pdf` | Williams RS et al., Subtype specificity of alpha-adrenergic…, Journal of cardiovascular p… (1981) | pd | 4 | [10.1097/00005344-198105000-00011](https://doi.org/10.1097/00005344-198105000-00011) | [6168833](https://www.ncbi.nlm.nih.gov/pubmed/6168833) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 22:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Althaus_2000 | irrelevant | 1 | 0 | The study is in vitro and focuses on metabolic identification (CYP3A4), reporting no quantitative population PK parameters like clearance or volume of distribution for dihydroergocryptine. |
| PGx | Althaus_2000 | not_relevant | 0 | 0 | The study does not report any pharmacogenomic effects, as it focuses on the identification of the enzyme (CYP3A4) responsible for the in vitro metabolism of the drug rather than the impact of genetic variants on PK/PD parameters. |
| popPK | Anderson_1988 | irrelevant | 0 | 0 | The paper is a mechanistic receptor binding study in rabbits using radiolabeled dihydroergocryptine as a ligand, not a pharmacokinetic study of the drug itself. |
| PGx | Anderson_1988 | not_relevant | 0 | 0 | The study examines the effects of castration and testosterone on autonomic receptor density in rabbit bladders using dihydroergocryptine as a radioligand for alpha adrenoceptors; it does not report on the PK/PD parameters of dihydroergocryptine as a therapeutic drug. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study on adrenergic receptors using dihydroergocryptine as a radioligand for binding assays, not a pharmacokinetic study of its disposition. |
| PGx | Costa_1993 | not_relevant | 0 | 0 | The paper investigates receptor binding and smooth muscle contraction mechanisms in a tissue culture model and does not report any pharmacogenomic effects (gene variants altering PK/PD) for dihydroergocryptine mesylate in humans. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | The study is a receptor binding/mass spectrometry study in guinea-pig hypothalamic membranes where dihydroergocryptine is used only as a ligand for alpha-adrenoceptor displacement, not as the subject of pharmacokinetic analysis. |
| PGx | Etchegoyen_1986 | not_relevant | 0 | 0 | The paper describes catecholesterol binding in membranes, not a pharmacogenomic effect on dihydroergocryptine PK/PD. |
| popPK | Mohell_1983 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where dihydroergocryptine is used only as a probe ligand, not a subject of pharmacokinetic analysis. |
| PGx | Mohell_1983 | not_relevant | 0 | 0 | The paper describes alpha-1 adrenergic receptor binding in hamster brown adipose tissue and does not report pharmacogenomic effects on the PK/PD of dihydroergocryptine. |
| popPK | Motulsky_1982 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay using dihydroergocryptine as a radioligand, not a pharmacokinetic study of drug disposition. |
| PGx | Motulsky_1982 | not_relevant | 0 | 0 | The study characterizes receptor binding subtypes in human platelets but does not report any gene variants or genotypes affecting PK or PD parameters. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay using dihydroergocryptine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PGx | Williams_1981 | not_relevant | 0 | 0 | The paper investigates alpha-adrenergic receptor binding in rat hearts using dihydroergocryptine as a ligand, not the pharmacokinetics or pharmacodynamics of the drug in humans involving genetic variants. |
| popPK | de_2001 | irrelevant | 2 | 0 | The paper reports only relative fold-increases (ratios) due to drug interaction and does not provide baseline quantitative pharmacokinetic parameter values (CL, V, ka, t1/2) for the drug. |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (erythromycin increasing DHEC levels via CYP3A4 inhibition) rather than a pharmacogenomic effect based on genetic variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydroergocryptine_mesylate%5D&body=Drug%3A%20dihydroergocryptine_mesylate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dihydroergocryptine_mesylate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
