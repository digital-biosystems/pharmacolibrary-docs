<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;Norelgestromin&quot;}]"></div>

# Norelgestromin

- **generic name:** Norelgestromin
- **ATC codes:** `G03AA13`
- **DrugBank:** [DB06713](https://go.drugbank.com/drugs/DB06713) · **PubChem:** [CID 62930](https://pubchem.ncbi.nlm.nih.gov/compound/62930)
- **molar mass:** 327.468 g/mol (C21H29NO2) — DrugBank
- **groups:** approved, investigational

## About

Norelgestromin is a progestogen used in hormonal contraceptives, in fixed combination with an estrogen, and has also been used to treat amenorrhea. It is an approved drug, used in contraceptive products such as skin patches, though it is not listed as authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15295638](https://www.wikidata.org/wiki/Q15295638) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:31 | 2:33 | 0/0/0 | 0/0/0 | 0/0/0 | 63,149/769 | einfracz / qwen3.8-27b | 5 | 0/3 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=norelgestromin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| — | prostate gland | `AR` partial agonist | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (target), STS (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahire_2017.pdf` | Ahire D et al., Metabolite Identification, Reaction Phe…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.116.073940](https://doi.org/10.1124/dmd.116.073940) | [28283499](https://www.ncbi.nlm.nih.gov/pubmed/28283499) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chiu_2014.pdf` | Chiu YY et al., Lurasidone drug-drug interaction studie…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0005](https://doi.org/10.1515/dmdi-2014-0005) | [24825095](https://www.ncbi.nlm.nih.gov/pubmed/24825095) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:30:50.255173+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bifano_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (daclatasvir) affecting PK, not a pharmacogenomic effect. |
| PGx | Chiu_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with lurasidone and reports no significant effect on norelgestromin, and it does not report any pharmacogenomic effects. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a method validation for measuring multiple progestins including norelgestromin, but does not report pharmacokinetic parameters (CL, V, ka) for norelgestromin. |
| PGx | Massaro_2010 | not_relevant | 0 | 0 | The study compares the bone metabolic effects of two contraceptives but does not report any pharmacogenomic analysis involving gene variants. |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The paper studies the molecular action of norgestimate (NG), not norelgestromin, and reports in vitro receptor binding/activation data rather than pharmacokinetic parameters. |
| popPK | Posada_2025 | irrelevant | 2 | 0 | The paper models norelgestromin only as a co-administered drug to predict the impact of dulaglutide-induced gastric emptying delay, and specific quantitative disposition parameters (CL, V, Q, ka) are not reported in the text. |
| popPK | Trujillo-de_2014 | irrelevant | 3 | 2 | The study is a mathematical modeling paper that simulates PK profiles using parameters cited from other sources, and it does not report primary quantitative compartmental PK parameters (such as specific clearance or volume of distribution values) for norelgestromin in the text evidence provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
