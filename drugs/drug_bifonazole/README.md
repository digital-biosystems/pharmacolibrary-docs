<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;bifonazole&quot;}]"></div>

# bifonazole

- **generic name:** bifonazole
- **ATC codes:** `D01AC10`
- **DrugBank:** [DB04794](https://go.drugbank.com/drugs/DB04794) · **PubChem:** [CID 2378](https://pubchem.ncbi.nlm.nih.gov/compound/2378)
- **molar mass:** 310.3917 g/mol (C22H18N2) — DrugBank
- **groups:** approved

## About

Bifonazole is an antifungal medicine applied to the skin to treat fungal skin infections. It is an approved topical antifungal, used mainly in dermatological care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421162](https://www.wikidata.org/wiki/Q421162) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:35 | 2:39 | 0/0/0 | 0/1/0 | 0/0/0 | 76,356/1,413 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Trösken_2004_CYP19_inhibition](drugs/drug_bifonazole/pd_Tr_sken_2004_CYP19_inhibition.md) | inhibition of recombinant human CYP19 (aromatase) ← bifonazole · direct sigmoid Emax (Hill) effect | — | Trösken ER et al., Comparative assessment of the inhibitio…, Endocrine research (2004) | [10.1081/erc-200035093](https://doi.org/10.1081/erc-200035093) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bifonazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` unknown, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Milani_2020 | not_relevant | 2 | 0 | The paper identifies bifonazole as a UGT2B10 substrate using in vitro microsomes but does not report in vivo pharmacokinetic or pharmacodynamic data or specific effect sizes for gene variants. |
| PGx | Monostory_2004 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of bifonazole on CYP enzymes, not the effect of genetic variants on bifonazole's pharmacokinetics or pharmacodynamics. |
| popPK | Trösken_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of CYP19 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for bifonazole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
