<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;bromazepam&quot;}]"></div>

# bromazepam

- **generic name:** bromazepam
- **ATC codes:** `N05BA08`
- **DrugBank:** [DB01558](https://go.drugbank.com/drugs/DB01558) · **PubChem:** [CID 2441](https://pubchem.ncbi.nlm.nih.gov/compound/2441)
- **molar mass:** 316.153 g/mol (C14H10BrN3O) — DrugBank
- **groups:** approved, illicit, investigational

## About

Bromazepam is a benzodiazepine used primarily for anxiety and as premedication before minor surgery. It is given by mouth in forms such as tablets, capsules, or liquid drops. The drug is sold under many brand names.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422435](https://www.wikidata.org/wiki/Q422435), [Wikipedia](https://en.wikipedia.org/wiki/Bromazepam?oldid=1384271142) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 19:19 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 4,857/168 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |
| `van_1995.pdf` | van Harten J, Overview of the pharmacokinetics of flu…, Clinical pharmacokinetics (1995) | pgx | 7 | [10.2165/00003088-199500291-00003](https://doi.org/10.2165/00003088-199500291-00003) | [8846617](https://www.ncbi.nlm.nih.gov/pubmed/8846617) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-11-23 19:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ambrosio_2018 | irrelevant | 0 | 0 | This is an in vitro study of morphine metabolism where bromazepam is only a co-administered drug to test for interactions, not the subject of a PK study. |
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (chemical inhibition) on morphine metabolism, not pharmacogenomic effects (gene variants) on bromazepam PK/PD. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | This is an environmental monitoring study measuring concentrations of bromazepam in wastewater and surface water, not a pharmacokinetic study of drug disposition in an organism. |
| PGx | Khan_2018 | not_relevant | 0 | 0 | The paper is an environmental study measuring bromazepam concentrations in water and sewage, not a clinical pharmacogenomic study. |
| PGx | Oda_2003 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP3A4 inhibition by itraconazole) in a general population, rather than a pharmacogenomic effect (gene variant/genotype) on bromazepam pharmacokinetics or pharmacodynamics. |
| popPK | Sproule_1997 | irrelevant | 1 | 0 | The paper is a review discussing potential CYP-mediated interactions between SSRIs and benzodiazepines like bromazepam, but it does not report original quantitative pharmacokinetic disposition parameters for bromazepam as the subject drug. |
| PGx | Sproule_1997 | not_relevant | 1 | 0 | The paper reviews drug-drug interactions between SSRIs and CNS drugs (including bromazepam) but does not report pharmacogenomic effects (gene variants changing PK/PD) for bromazepam. |
| popPK | Takei_2024 | irrelevant | 0 | 0 | Bromazepam is only mentioned as a co-administered drug with concentration within therapeutic ranges in a forensic case report, with no PK parameters reported. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving fluvoxamine, levomepromazine, and trihexyphenidyl, but does not discuss pharmacogenomics or gene variants for bromazepam. |
| popPK | Vrzal_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 induction by benzodiazepines and does not report pharmacokinetic disposition parameters for bromazepam. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | The paper investigates the induction of CYP3A4 by various benzodiazepines but does not report pharmacogenomic effects (gene variants altering PK/PD) specifically for bromazepam. |
| popPK | van_1995 | irrelevant | 0 | 0 | The paper is a review of fluvoxamine pharmacokinetics, and bromazepam is only listed as a co-administered drug whose metabolism is affected by fluvoxamine, with no quantitative PK parameters reported for bromazepam itself. |
| PGx | van_1995 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics of fluvoxamine, not a pharmacogenomic effect on bromazepam. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromazepam%5D&body=Drug%3A%20bromazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bromazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
