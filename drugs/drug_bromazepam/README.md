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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:24 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 7,842/423 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |
| `Oda_2003.pdf` | Oda M et al., The effect of itraconazole on the pharm…, European journal of clinica… (2003) | pgx | 7 | [10.1007/s00228-003-0681-4](https://doi.org/10.1007/s00228-003-0681-4) | [14517708](https://www.ncbi.nlm.nih.gov/pubmed/14517708) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_1995.pdf` | van Harten J, Overview of the pharmacokinetics of flu…, Clinical pharmacokinetics (1995) | pgx | 7 | [10.2165/00003088-199500291-00003](https://doi.org/10.2165/00003088-199500291-00003) | [8846617](https://www.ncbi.nlm.nih.gov/pubmed/8846617) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T18:24:03.871418+00:00</sub>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
