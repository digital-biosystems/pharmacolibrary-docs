<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;progabide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Progabide_Johno1982_reference&quot;,&quot;label&quot;:&quot;Johno_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_progabide/Progabide_Johno1982_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# progabide

- **generic name:** progabide
- **ATC codes:** `N03AG05`
- **DrugBank:** [DB00837](https://go.drugbank.com/drugs/DB00837) · **PubChem:** [CID 5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323)
- **molar mass:** 334.78 g/mol (C17H16ClFN2O2) — DrugBank
- **groups:** experimental

## About

Progabide is an anticonvulsant drug developed for the treatment of epilepsy, with additional antidepressant and antiparkinsonian properties. It is classed as an experimental agent and is not an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426524](https://www.wikidata.org/wiki/Q426524) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| progabide | parent | 334.78 | C17H16ClFN2O2 | DrugBank | [5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323) | Johno_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:33 | 1:24 | 1/0/0 | 0/0/0 | 0/0/0 | 30,758/1,526 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Johno_1982_reference](drugs/drug_progabide/Progabide_Johno1982_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=progabide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABBR1 (target), GABBR2 (target), GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johno_1982.pdf` | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) | [7097524](https://pubmed.ncbi.nlm.nih.gov/7097524) | The paper provides specific quantitative pharmacokinetic parameters (clearance, volume, half-life) for progabide in rhesus monkeys. |
| `Nabbout_2012.pdf` | Nabbout R et al., Stiripentol: an example of antiepilepti…, European journal of paediat… (2012) | pgx | 8 | [10.1016/j.ejpn.2012.04.009](https://doi.org/10.1016/j.ejpn.2012.04.009) | [22695038](https://www.ncbi.nlm.nih.gov/pubmed/22695038) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Rosa_2016.pdf` | Rosa M et al., Prediction of drug-drug interactions wi…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2016.1151088](https://doi.org/10.3109/00498254.2016.1151088) | [26936324](https://www.ncbi.nlm.nih.gov/pubmed/26936324) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:32:33.708001+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Mesdjian_1999 | not_relevant | 0 | 0 | The paper focuses on the CYP3A6-mediated metabolism of carbamazepine, with no mention of pharmacogenomic effects on the PK or PD of progabide. |
| PGx | Nabbout_2012 | not_relevant | 3 | 0 | The paper discusses a CYP polymorphism affecting stiripentol's interaction with clobazam, not a pharmacogenomic effect on progabide's PK/PD. |
| PGx | Rosa_2016 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions at the epoxide hydrolase level using an in vitro assay, not on how a specific gene variant/genotype changes the pharmacokinetics of progabide. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving carbamazepine and mentions progabide only as an inhibitor of carbamazepine-10,11-epoxide metabolism, without reporting any pharmacogenomic effects on progabide's PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:32 UTC</sub>
