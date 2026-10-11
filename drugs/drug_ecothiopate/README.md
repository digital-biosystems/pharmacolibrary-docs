<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;ecothiopate&quot;}]"></div>

# ecothiopate

- **generic name:** ecothiopate
- **ATC codes:** `S01EB03`
- **DrugBank:** [DB01057](https://go.drugbank.com/drugs/DB01057) · **PubChem:** [CID 10548](https://pubchem.ncbi.nlm.nih.gov/compound/10548)
- **molar mass:** 256.323 g/mol (C9H23NO3PS) — DrugBank
- **groups:** approved

## About

Ecothiopate (echothiophate) is an eye drop medicine used to treat glaucoma, working as a parasympathomimetic miotic. It is an approved drug, but it is not authorised in the European Union and is now only rarely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4352952](https://www.wikidata.org/wiki/Q4352952) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 4,917/391 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ecothiopate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| — | blood | `ACHE` modulator | DrugBank actor |
| — | neuromuscular junction | `ACHE` modulator | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boulanger_1994.pdf` | Boulanger CM et al., Mediation by M3-muscarinic receptors of…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13104.x](https://doi.org/10.1111/j.1476-5381.1994.tb13104.x) | [8075871](https://www.ncbi.nlm.nih.gov/pubmed/8075871) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T18:46:34.520786+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abram_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (analgesia) of intrathecal echothiophate in rats, not its pharmacokinetic parameters (clearance, volume, etc.). |
| popPK | Boulanger_1994 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Chang_1976 | irrelevant | 0 | 0 | The paper studies the mechanism of carbachol action in a chick muscle preparation, and while echothiophate is mentioned as a co-agent, no pharmacokinetic parameters for it are reported. |
| popPK | Croft_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic analysis of muscarinic receptor binding and ciliary muscle accommodation in monkeys, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for echothiophate. |
| popPK | Harris_1971 | irrelevant | 0 | 0 | no_text gate: only 46 chars of text extracted (&lt; 400) |
| popPK | Kandalaft_1991 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/in-ex-vivo investigation of cholinesterase inhibition and acetylcholine sensitivity in pancreatic tissue, reporting no pharmacokinetic parameters (CL, V, etc.). |
| popPK | Oguchi_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study of cholinesterase inhibition and amylase release in canine pancreas fragments (in vitro/organ bath) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for ecothiopate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
