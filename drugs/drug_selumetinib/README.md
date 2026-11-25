<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selumetinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selumetinib_Patel2018_reference&quot;,&quot;label&quot;:&quot;Patel_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selumetinib_Tong2019_reference&quot;,&quot;label&quot;:&quot;Tong_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# selumetinib

- **generic name:** selumetinib
- **ATC codes:** `L01EE04`
- **DrugBank:** [DB11689](https://go.drugbank.com/drugs/DB11689) · **PubChem:** [CID 10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622)
- **molar mass:** 457.68 g/mol (C17H15BrClFN4O3) — DrugBank
- **groups:** approved, investigational

## About

Selumetinib is a protein kinase inhibitor used to treat neurofibromatosis type I and low-grade serous carcinoma. It is given by mouth as capsules or granules. It is approved in the United States and the European Union, where it is authorised for use in children with this condition.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7448840](https://www.wikidata.org/wiki/Q7448840), [Wikipedia](https://en.wikipedia.org/wiki/Selumetinib?oldid=1370796512) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selumetinib | parent | 457.68 | C17H15BrClFN4O3 | DrugBank | [10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622) | Köllő_2026, Patel_2017, Patel_2018, Tong_2019 |
| N-desmethyl selumetinib | metabolite | — (mass units only) | — | — | — | — |
| N-desmethyl-selumetinib | metabolite | 443.657 | C16H13BrClFN4O3 | PubChem | [10238358](https://pubchem.ncbi.nlm.nih.gov/compound/10238358) | Patel_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Köllő_2026_reference](drugs/drug_selumetinib/Selumetinib_Kll2026_reference.md) | — | 1-compartment (no model) | 0 | Köllő Z et al., A Nonparametric Population Pharmacokine…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70156](https://doi.org/10.1002/psp4.70156) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Patel_2017_reference](drugs/drug_selumetinib/Selumetinib_Patel2017_reference.md) | — | parent + metabolite (no model) | 12 | Patel YT et al., Population Pharmacokinetics of Selumeti…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12175](https://doi.org/10.1002/psp4.12175) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Patel_2018_reference](drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Patel P et al., Population pharmacokinetics of the MEK…, British journal of clinical… (2018) | [10.1111/bcp.13404](https://doi.org/10.1111/bcp.13404) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Tong_2019_reference](drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Tong X et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1295](https://doi.org/10.1002/jcph.1295) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zuo_2024_reference](drugs/drug_selumetinib/Selumetinib_Zuo2024_reference.md) | — | parent + metabolite (no model) | 0 | Zuo P et al., A Population Pharmacokinetic Assessment…, Clinical pharmacology in dr… (2024) | [10.1002/cpdd.1400](https://doi.org/10.1002/cpdd.1400) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhou_2016_QTcF](drugs/drug_selumetinib/pd_Zhou_2016_QTcF.md) | QTcF ← selumetinib · model not identified | — | Zhou D et al., Evaluation of the Effect of Selumetinib…, Clinical therapeutics (2016) | [10.1016/j.clinthera.2016.10.004](https://doi.org/10.1016/j.clinthera.2016.10.004) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:29 | 0:24 | 0/5/0 | 1/0/0 | 0/0/0 | 9,519/3,135 | einfracz / qwen3.8-27b | 4 | 1/3 | 3/1 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zuo_2024.pdf` | Zuo P et al., A Population Pharmacokinetic Assessment…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1400](https://doi.org/10.1002/cpdd.1400) | [38591154](https://pubmed.ncbi.nlm.nih.gov/38591154) | The study reports a population PK model and specific geometric mean AUC ratios for selumetinib, but detailed numeric parameter estimates (CL, V, etc.) are not fully enumerated in the text evidence. |

<sub>queue written 2026-11-24 04:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campagne_2021 | irrelevant | 2 | 0 | The paper is a narrative review that summarizes pharmacokinetic characteristics and mentions the development of population models, but it does not present original quantitative parameter values (CL, V, etc.) in the provided text. |
| PGx | Campagne_2021 | not_relevant | 2 | 5 | The text mentions "Asian ethnicity" as a covariate for clearance but does not report specific genetic variants, genotypes, or a pharmacogenomic effect size. |
| PGx | Patel_2018 | not_relevant | 0 | 0 | The study reports population pharmacokinetics and evaluates non-genetic covariates (e.g., race, weight, hepatic function, drug interactions) but does not investigate or report the impact of specific gene variants or genotypes on selumetinib PK. |
| popPK | Schalkwijk_2021 | irrelevant | 0 | 0 | The provided text contains only a structural diagram label and software metadata, with no quantitative pharmacokinetic parameters or study details for selumetinib. |
| PGx | Schalkwijk_2021 | not_relevant | 0 | 0 | The text is a fragment containing chemical identifiers and software metadata, with no report of a pharmacogenomic effect on PK or PD parameters. |
| PGx | Tong_2019 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic and exposure-response analysis but does not report any analysis of the impact of genetic variants or genotypes on the pharmacokinetic or pharmacodynamic parameters of selumetinib. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | The study is a QT/QTc safety assessment that focuses on cardiac repolarization and exposure-QT modeling, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Zhou_2016 | not_relevant | 0 | 0 | The paper is a Thorough QT study in healthy subjects and does not investigate any pharmacogenomic variant or genotype. |
| PGx | Zuo_2024 | not_relevant | 0 | 0 | The paper evaluates the effect of food intake on pharmacokinetics, not genetic variants or phenotypes. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper is a corrigendum (errata) containing only typographical corrections and no original quantitative pharmacokinetic data. |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The text is a corrigendum correcting typographical errors in a pharmacokinetic paper and does not report any pharmacogenomic effects or findings. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselumetinib%5D&body=Drug%3A%20selumetinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_selumetinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:29 UTC</sub>
