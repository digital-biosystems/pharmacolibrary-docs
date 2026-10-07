<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;triheptanoin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triheptanoin_Lee2022_reference&quot;,&quot;label&quot;:&quot;Lee_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# triheptanoin

- **generic name:** triheptanoin
- **ATC codes:** `A16AX17`
- **DrugBank:** [DB11677](https://go.drugbank.com/drugs/DB11677) · **PubChem:** [CID 69286](https://pubchem.ncbi.nlm.nih.gov/compound/69286)
- **molar mass:** 428.61 g/mol (C24H44O6) — DrugBank
- **groups:** approved, investigational

## About

Triheptanoin is a medium-chain triglyceride used as a calorie and fatty-acid supplement in metabolic disorders in which the body cannot properly use long-chain fatty acids for energy. It is an approved medicine, mainly used in the United States, and is also being studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414576](https://www.wikidata.org/wiki/Q414576) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| heptanoate | metabolite | — (mass units only) | — | — | — | — |
| trihexanoin | metabolite | 428.61 | — | the paper | — | Lee_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:59 | 3:02 | 1/0/0 | 0/0/0 | 0/0/0 | 119,697/40,781 | einfracz / qwen3.8-27b | 6 | 1/5 | 4/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lee_2022_reference](drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Lee SK et al., Population Pharmacokinetics of Heptanoa…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triheptanoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrose_2026 | not_relevant | 1 | 0 | This is a single case report on the clinical efficacy of triheptanoin in treating a specific metabolic disorder (PDE-ALDH7A1); it does not report pharmacogenomic associations between gene variants and PK/PD parameters. |
| popPK | Lee_2021 | relevant | 8 | 2 | Study reports NCA PK parameters for triheptanoin metabolites (heptanoate), but specific numeric values for CL, Vd, and t1/2 are not present in the text (referenced to Tables 3 and 6 which are not included). |
| PGx | Yamada_2019 | not_relevant | 1 | 0 | The paper discusses the management of VLCAD deficiency and mentions a trial for triheptanoin, but it does not report any pharmacogenomic analysis linking specific gene variants to changes in PK or PD parameters of triheptanoin. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study evaluating the reduction of major clinical events in patients with LC-FAOD, containing no pharmacokinetic parameter estimates (CL, V, ka, etc.) for triheptanoin. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper reviews genetic epilepsies in general and mentions triheptanoin in relation to GLUT1 deficiency, but it does not report any pharmacogenomic effect (gene variant changing PK/PD) for triheptanoin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:56 UTC</sub>
