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

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bromazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2E1` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
