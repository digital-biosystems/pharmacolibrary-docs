<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;sulindac&quot;}]"></div>

# sulindac

- **generic name:** sulindac
- **ATC codes:** `M01AB02`
- **DrugBank:** [DB00605](https://go.drugbank.com/drugs/DB00605) · **PubChem:** [CID 1548887](https://pubchem.ncbi.nlm.nih.gov/compound/1548887)
- **molar mass:** 356.411 g/mol (C20H17FO3S) — DrugBank
- **groups:** approved, investigational

## About

Sulindac is a non-steroidal anti-inflammatory drug used to treat painful inflammatory joint conditions such as osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, gout attacks, and enthesopathy. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q963093](https://www.wikidata.org/wiki/Q963093) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:21 | 0:27 | 0/0/0 | 0/1/0 | 0/0/0 | 56,746/1,454 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marshall_1991_SF_PLA2_activity](drugs/drug_sulindac/pd_Marshall_1991_SF_PLA2_activity.md) | synovial fluid phospholipase A2 activity ← sulindac sulfide · direct Emax (saturable) effect | — | Marshall LA et al., Evaluation of antirheumatic drugs for t…, The Journal of rheumatology (1991) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulindac) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1B1 (inhibitor), AKR1B10 (inhibitor), MAPK3 (inhibitor), PPARD (negative modulator), PTGDR2 (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berg_2013.pdf` | Berg AK et al., Population pharmacokinetic model for ca…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.26](https://doi.org/10.1002/jcph.26) | [23436338](https://pubmed.ncbi.nlm.nih.gov/23436338) | The paper reports a population pharmacokinetic model for sulindac, but no numeric parameter values are present in the provided evidence. |
| `Sung_2020.pdf` | Sung JW et al., Population Pharmacokinetics of Sulindac…, Pharmaceutical research (2020) | popPK | 10 | [10.1007/s11095-020-2765-6](https://doi.org/10.1007/s11095-020-2765-6) | [31993760](https://pubmed.ncbi.nlm.nih.gov/31993760) | The study is a population PK analysis of sulindac in humans, but the specific numeric parameter values (CL, V, etc.) are not included in the provided evidence. |

<sub>queue written 2026-10-07T01:21:28.489562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berg_2013 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for sulindac, but no numeric parameter values are present in the provided evidence. |
| popPK | Felts_2008 | irrelevant | 0 | 0 | The study is an in-vitro structure-activity relationship (SAR) and mechanistic study of sulindac derivatives as PPARγ agonists, reporting no pharmacokinetic parameters. |
| popPK | Fogli_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a sulindac derivative on cancer cells, containing no pharmacokinetic data. |
| popPK | Hirai_2002 | irrelevant | 0 | 0 | The paper studies the receptor-binding mechanism of indomethacin and uses sulindac only as a negative control, containing no pharmacokinetic parameters. |
| popPK | Marshall_1991 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating enzyme inhibition (phospholipase A2) and does not report pharmacokinetic parameters like clearance or volume for sulindac. |
| popPK | Martinez_2022 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of sulindac for musculoskeletal symptoms and quality of life, not its pharmacokinetics, and no PK parameters are reported. |
| popPK | Monasterolo_2002 | irrelevant | 0 | 0 | The study is a renal physiology investigation in rats where sulindac is used as a co-administered agent to assess renal effects, not a study of sulindac's pharmacokinetic disposition parameters. |
| popPK | Moon_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of sulindac analogues on cell viability and microtubules, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for sulindac. |
| popPK | Sharma_2001 | irrelevant | 0 | 0 | The study is an in vitro/in ovo angiogenesis assay measuring efficacy (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for sulindac. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating the interaction of sulindac with GABA receptors, not a pharmacokinetic study. |
| popPK | Sun_2002 | irrelevant | 0 | 0 | The study investigates CP-461, a different drug (a sulindac analog), not sulindac itself. |
| popPK | Sung_2020 | relevant | 10 | 0 | The study is a population PK analysis of sulindac in humans, but the specific numeric parameter values (CL, V, etc.) are not included in the provided evidence. |
| popPK | Thomas_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of cancer cell signaling where sulindac is used as a signaling inhibitor, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
