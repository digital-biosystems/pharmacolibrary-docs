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
| 2026-10-07 06:30 | 1:33 | 0/2/0 | 2/0/0 | 0/0/0 | 42,889/1,990 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 5/1 | 2/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_1997_caucasian](drugs/drug_fosinopril/Fosinopril_Hu1997_caucasian.md) | — | 1-compartment (no model) | 11 | Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_1997_chinese](drugs/drug_fosinopril/Fosinopril_Hu1997_chinese.md) | — | 1-compartment (no model) | 11 | Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ford_1995_MAP](drugs/drug_fosinopril/pd_Ford_1995_MAP.md) | mean arterial pressure change ← fosinoprilat · direct Emax (saturable) effect | — | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ford_1995_PAWP](drugs/drug_fosinopril/pd_Ford_1995_PAWP.md) | pulmonary artery wedge pressure (PAWP) change ← fosinoprilat · direct linear effect | — | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gehr_1993_ACE_inhibition](drugs/drug_fosinopril/pd_Gehr_1993_ACE_inhibition.md) | percentage inhibition of serum ACE activity ← fosinoprilat · direct Emax (saturable) effect | — | Gehr TW et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (1993) | [10.1007/BF00315514](https://doi.org/10.1007/BF00315514) |

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
- **screened:** 7  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ford_1995.pdf` | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | popPK | 8 | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) | [8522635](https://pubmed.ncbi.nlm.nih.gov/8522635) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, half-life, Tmax) for fosinoprilat, the active metabolite of fosinopril, in human patients. |

<sub>queue written 2026-10-07T06:29:32.707969+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anfinogenova_2024 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions in cardiovascular patients and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of fosinopril. |
| PGx | Ding_2000 | not_relevant | 2 | 0 | The paper is a review discussing ethnic differences and mentions the ACE I/D polymorphism, but it does not report specific pharmacogenomic effects of a gene variant on fosinopril PK/PD parameters. |
| PGx | Filigheddu_2008 | not_relevant | 0 | 0 | The text is a fragment of a review or introduction discussing general hypertension guidelines and fosinopril efficacy, but it does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study that mentions fosinopril only as an example of a drug with anti-arrhythmia effects, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Zitta_2000 | irrelevant | 0 | 0 | The study uses fosinopril as an antihypertensive treatment to assess renal function (GFR) via sinistrin and PAH clearance, not to determine the pharmacokinetic parameters of fosinopril itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:29 UTC</sub>
