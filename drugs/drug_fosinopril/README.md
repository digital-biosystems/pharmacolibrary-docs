<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;fosinopril&quot;}]"></div>

# fosinopril

- **generic name:** fosinopril
- **ATC codes:** `C09AA09`, `C09BA09`
- **DrugBank:** [DB00492](https://go.drugbank.com/drugs/DB00492) · **PubChem:** [CID 55891](https://pubchem.ncbi.nlm.nih.gov/compound/55891)
- **molar mass:** 563.672 g/mol (C30H46NO7P) — DrugBank
- **groups:** approved, investigational

## About

Fosinopril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine and remains in use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425293](https://www.wikidata.org/wiki/Q425293) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosinopril | parent | 563.672 | C30H46NO7P | DrugBank | [55891](https://pubchem.ncbi.nlm.nih.gov/compound/55891) | Hu_1997 |
| fosinoprilat | metabolite | 435.501 | C23H34NO5P | PubChem | [62956](https://pubchem.ncbi.nlm.nih.gov/compound/62956) | Hu_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:21 | 2:49 | 0/2/0 | 1/0/0 | 0/0/0 | 76,318/18,126 | ollama / glm-5.3-flash | 6 | 5/1 | 2/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_1997_caucasian](drugs/drug_fosinopril/Fosinopril_Hu1997_caucasian.md) | — | 1-compartment (no model) | 11 | Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_1997_chinese](drugs/drug_fosinopril/Fosinopril_Hu1997_chinese.md) | — | 1-compartment (no model) | 11 | Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gehr_1993_ACE_inhibition](drugs/drug_fosinopril/pd_Gehr_1993_ACE_inhibition.md) | serum ACE activity inhibition ← fosinoprilat · direct Emax (saturable) effect | — | Gehr TW et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (1993) | [10.1007/BF00315514](https://doi.org/10.1007/BF00315514) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fosinopril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ford_1995.pdf` | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | pd | 5 | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) | [8522635](https://www.ncbi.nlm.nih.gov/pubmed/8522635) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-30T23:19:03.833882+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anfinogenova_2024 | not_relevant | 0 | 0 | The paper studies potential drug-drug interactions of aspirin with ACE inhibitors including fosinopril, with no gene variant/genotype/phenotype effects on any PK or PD parameter. |
| PGx | Ding_2000 | not_relevant | 2 | 3 | Fosinopril PK/PD differences are reported by ethnicity (Chinese vs Caucasian), not by gene variant/genotype/phenotype; ACE I/D polymorphism is discussed generally but no genotype-specific fosinopril PK/PD effect is reported. |
| PGx | Filigheddu_2008 | not_relevant | 0 | 0 | The text contains only fragmentary references and citations; no gene variant/genotype effect on fosinopril PK or PD parameters is reported. |
| popPK | Ford_1995 | irrelevant | 4 | 3 | This is a pharmacodynamic study in CHF patients; only AUC, Cmax, Tmax, and half-life are reported without CL, V, or a population-PK model, so no quantitative disposition parameters are present. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | Paper is about computational drug repositioning via substructure-indication prediction; fosinopril is only mentioned for anti-arrhythmia effects, with no gene variant effect on PK/PD parameters. |
| popPK | Zitta_2000 | irrelevant | 1 | 0 | Fosinopril is only a treatment intervention; no PK disposition parameters for fosinopril are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 23:19 UTC</sub>
