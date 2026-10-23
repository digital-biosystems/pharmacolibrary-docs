<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;bromazepam&quot;}]"></div>

# bromazepam

- **generic name:** bromazepam
- **ATC codes:** `N05BA08`
- **DrugBank:** [DB01558](https://go.drugbank.com/drugs/DB01558) · **PubChem:** [CID 2441](https://pubchem.ncbi.nlm.nih.gov/compound/2441)
- **molar mass:** 316.153 g/mol (C14H10BrN3O) — DrugBank
- **groups:** approved, illicit, investigational

## About

Bromazepam is a benzodiazepine used as a sedative and anxiolytic to treat anxiety. It is an approved medicine, used in many countries for anxiety, though not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422435](https://www.wikidata.org/wiki/Q422435) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bromazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2E1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:24 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 7,842/423 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |
| `Oda_2003.pdf` | Oda M et al., The effect of itraconazole on the pharm…, European journal of clinica… (2003) | pgx | 7 | [10.1007/s00228-003-0681-4](https://doi.org/10.1007/s00228-003-0681-4) | [14517708](https://www.ncbi.nlm.nih.gov/pubmed/14517708) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_1995.pdf` | van Harten J, Overview of the pharmacokinetics of flu…, Clinical pharmacokinetics (1995) | pgx | 7 | [10.2165/00003088-199500291-00003](https://doi.org/10.2165/00003088-199500291-00003) | [8846617](https://www.ncbi.nlm.nih.gov/pubmed/8846617) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06 18:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | In vitro drug-drug interaction study of morphine metabolism; no gene variant/genotype effect on bromazepam PK/PD reported. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | Environmental monitoring study measuring bromazepam concentrations in wastewater, not a pharmacokinetic study with disposition parameters. |
| PGx | Oda_2003 | not_relevant | 0 | 0 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype effect on PK or PD. |
| PGx | Sproule_1997 | not_relevant | 3 | 3 | Mentions fluvoxamine inhibiting bromazepam metabolism via CYP enzymes, but this is a drug-drug interaction, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | No pharmacogenomic effect on bromazepam PK/PD reported; bromazepam only mentioned as within therapeutic range in an autopsy case. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | In vitro study of benzodiazepine effects on CYP induction; no gene variant/genotype effect on bromazepam PK/PD reported. |
| PGx | van_1995 | not_relevant | 0 | 0 | Bromazepam is only mentioned as a drug interaction substrate of fluvoxamine; no gene variant/genotype effect on bromazepam PK/PD is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromazepam%5D&body=Drug%3A%20bromazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bromazepam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
