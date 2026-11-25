<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;cyclobarbital&quot;}]"></div>

# cyclobarbital

- **generic name:** cyclobarbital
- **ATC codes:** `N05CA10`
- **DrugBank:** [DB13737](https://go.drugbank.com/drugs/DB13737) · **PubChem:** none
- **molar mass:** 236.271 g/mol (C12H16N2O3) — DrugBank
- **groups:** experimental

## About

Cyclobarbital is a barbiturate derivative indicated for treating insomnia.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416966](https://www.wikidata.org/wiki/Q416966), [Wikipedia](https://en.wikipedia.org/wiki/Cyclobarbital?oldid=1380725336) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 21:16 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 3,625/174 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Watari_1988.pdf` | Watari N et al., Prediction of hepatic first-pass metabo…, Journal of pharmacokinetics… (1988) | popPK | 7 | [10.1007/BF01062138](https://doi.org/10.1007/BF01062138) | [3221327](https://pubmed.ncbi.nlm.nih.gov/3221327) | The study models PK parameters for cyclobarbital in rabbits based on QSPR, but specific numeric values for cyclobarbital are not provided in the text evidence, likely residing in figures or tables not included. |

<sub>queue written 2026-11-23 21:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Breimer_1976 | relevant | 10 | 3 | The study reports quantitative PK parameters for cyclobarbital in humans, including a specific average half-life of 11.6 h (range 8-17 h), but lacks other key parameters like clearance or volume of distribution. |
| PGx | Breimer_1976 | not_relevant | 0 | 0 | The paper studies population pharmacokinetics and bioavailability in healthy volunteers without mentioning any genetic variants or pharmacogenomic influences. |
| popPK | Breyer-Pfaff_1984 | relevant | 9 | 2 | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for cyclobarbital in humans, but specific numeric values are not present in the provided abstract text. |
| PGx | Breyer-Pfaff_1984 | not_relevant | 0 | 0 | The study reports pharmacokinetic changes in hepatic disease but involves no gene variants or genotypes. |
| popPK | Chohan_2020 | irrelevant | 0 | 0 | The paper is a phytochemical and in-silico study of Euphorbia milii where cyclobarbital is merely identified as a plant constituent and subjected to molecular docking, not a pharmacokinetic study. |
| PGx | Chohan_2020 | not_relevant | 0 | 0 | The paper investigates phytochemical profiling and in-silico docking of cyclobarbital found in a plant, containing no pharmacogenomic data on PK/PD parameters. |
| popPK | Czyzewska-Szafran_1980 | irrelevant | 2 | 0 | The paper investigates pharmacodynamics and implies PK studies, but reports no changes in specific quantitative PK parameters and provides no numeric values for cyclobarbital. |
| PGx | Czyzewska-Szafran_1980 | not_relevant | 0 | 0 | The paper investigates the impact of hypertension (a physiological state) on drug response, not the impact of specific gene variants/genotypes on PK/PD parameters. |
| popPK | Kołaciński_1989 | relevant | 4 | 0 | The study is a clinical PK/clinical evaluation of cyclobarbital poisoning in humans, but no quantitative pharmacokinetic parameter values (CL, V, half-life, etc.) are present in the provided evidence. |
| PGx | Kołaciński_1989 | not_relevant | 0 | 0 | The paper evaluates forced diuresis as a treatment method for poisoning and contains no information regarding gene variants or genotypes. |
| popPK | Sakuma_1999 | irrelevant | 0 | 0 | The study focuses on the induction of CYP1A2 gene expression by barbiturates (including cyclobarbital) in mice and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for cyclobarbital. |
| PGx | Sakuma_1999 | not_relevant | 2 | 1 | The paper reports on phenobarbital induction of CYP1A2 and notes cyclobarbital as a secondary inducer in vitro, but it does not report a pharmacogenomic effect on the PK/PD parameters of cyclobarbital itself. |
| popPK | Watari_1988 | relevant | 7 | 2 | The study models PK parameters for cyclobarbital in rabbits based on QSPR, but specific numeric values for cyclobarbital are not provided in the text evidence, likely residing in figures or tables not included. |
| PGx | Watari_1988 | not_relevant | 0 | 0 | The paper predicts PK parameters based on lipophility (QSPKR) in rabbits and does not investigate the effects of genetic variants on cyclobarbital pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyclobarbital%5D&body=Drug%3A%20cyclobarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cyclobarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
