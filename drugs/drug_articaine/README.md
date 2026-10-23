<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;articaine&quot;}]"></div>

# articaine

- **generic name:** articaine
- **ATC codes:** `N01BB08`
- **DrugBank:** [DB09009](https://go.drugbank.com/drugs/DB09009) · **PubChem:** [CID 32170](https://pubchem.ncbi.nlm.nih.gov/compound/32170)
- **molar mass:** 284.374 g/mol (C13H20N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Articaine is a local anesthetic of the amide type used to prevent pain, especially in dental procedures. It is an approved drug and is widely used, particularly in dentistry.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421297](https://www.wikidata.org/wiki/Q421297) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Stankovicová_1993_block](drugs/drug_articaine/pd_Stankovicov_1993_block.md) | nerve block ← articaine · inhibition effect | — | Stankovicová T et al., [The effect of articaine on isolated pe…, Bratislavske lekarske listy (1993) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=articaine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:54 | 0:43 | 0/0/0 | 0/1/0 | 0/0/0 | 24,170/1,447 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cazaubon_2018.pdf` | Cazaubon Y et al., Population pharmacokinetics of articain…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2017.11.027](https://doi.org/10.1016/j.ejps.2017.11.027) | [29197630](https://pubmed.ncbi.nlm.nih.gov/29197630) | The paper describes a population PK model for articaine in humans but does not report specific numeric parameter values (CL, V, ka, etc.) in the provided text. |
| `Venkatachalam_2018.pdf` | Venkatachalam D et al., Pharmacokinetics of articaine hydrochlo…, New Zealand veterinary jour… (2018) | popPK | 10 | [10.1080/00480169.2017.1391141](https://doi.org/10.1080/00480169.2017.1391141) | [29020878](https://pubmed.ncbi.nlm.nih.gov/29020878) | The paper reports specific quantitative pharmacokinetic parameters (Cmax, tmax, elimination half-life) for articaine in red deer within the provided abstract text. |
| `Venkatachalam_2021.pdf` | Venkatachalam D et al., Pharmacokinetics, efficacy and convulsi…, Veterinary anaesthesia and… (2021) | popPK | 10 | [10.1016/j.vaa.2019.12.012](https://doi.org/10.1016/j.vaa.2019.12.012) | [33593682](https://pubmed.ncbi.nlm.nih.gov/33593682) | The study reports quantitative non-compartmental pharmacokinetic parameters (CL, Vdss, t1/2) for articaine in goat kids directly in the abstract. |
| `Lemmer_1989.pdf` | Lemmer B et al., Circadian changes in stimulus threshold…, Chronobiology international (1989) | pd | 5 | [10.3109/07420528909064626](https://doi.org/10.3109/07420528909064626) | [2743468](https://www.ncbi.nlm.nih.gov/pubmed/2743468) | metadata signals extractable PD data (Emax) |
| `Szentandrássy_2010.pdf` | Szentandrássy N et al., Effects of articaine and ropivacaine on…, European journal of anaesth… (2010) | pd | 4 | [10.1097/EJA.0b013e328331a37b](https://doi.org/10.1097/EJA.0b013e328331a37b) | [19809324](https://www.ncbi.nlm.nih.gov/pubmed/19809324) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 03:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cazaubon_2018 | relevant | 10 | 0 | The paper describes a population PK model for articaine in humans but does not report specific numeric parameter values (CL, V, ka, etc.) in the provided text. |
| PGx | Datta_2025 | not_relevant | 0 | 0 | The paper is a general review of dental pharmacology and does not report specific pharmacogenomic effects on PK/PD parameters of articaine. |
| popPK | Lemmer_1989 | irrelevant | 0 | 0 | The study reports on the pharmacodynamic efficacy (local anesthesia duration/effect) of articaine, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Melo_2018 | irrelevant | 1 | 0 | The study focuses on in vitro drug delivery and release kinetics of nanoparticle formulations rather than in vivo pharmacokinetic disposition parameters (CL, V, t1/2) for articaine. |
| popPK | Siebrands_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of HERG channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Stankovicová_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of local anesthetic effects on isolated nerves, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Szabó_2007 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study reporting ion channel EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Szentandrássy_2010 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barticaine%5D&body=Drug%3A%20articaine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_articaine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
