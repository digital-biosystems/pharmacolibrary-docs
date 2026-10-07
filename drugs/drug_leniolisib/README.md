<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;leniolisib&quot;}]"></div>

# leniolisib

- **generic name:** leniolisib
- **ATC codes:** `L03AX22`
- **DrugBank:** [DB16217](https://go.drugbank.com/drugs/DB16217) · **PubChem:** not captured
- **molar mass:** 450.466 g/mol (C21H25F3N6O2) — DrugBank
- **groups:** approved, investigational

## About

Leniolisib is used to treat primary immunodeficiency diseases. It is authorised in the European Union as an immunomodulating medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27282602](https://www.wikidata.org/wiki/Q27282602) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:11 | 1:57 | 0/0/0 | 0/1/0 | 0/0/0 | 12,768/954 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [De_2024_PI3K](drugs/drug_leniolisib/pd_De_2024_PI3K.md) | PI3Kδ ← leniolisib · inhibition effect | — | De SK, Leniolisib: a novel treatment for activ…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1337436](https://doi.org/10.3389/fphar.2024.1337436) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=leniolisib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PIK3CD (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2018.pdf` | De Buck S et al., CYP3A but not P-gp plays a relevant rol…, Biopharmaceutics & drug dis… (2018) | popPK | 5 | [10.1002/bdd.2157](https://doi.org/10.1002/bdd.2157) | [30171694](https://pubmed.ncbi.nlm.nih.gov/30171694) | The paper reports PK changes (folds for AUC, Cmax, T1/2) from a human study on leniolisib, but lacks explicit baseline numeric values for clearance, volume, or absolute half-life required for full parameter extraction. |
| `Rao_2017.pdf` | Rao VK et al., Effective "activated PI3Kδ syndrome"-ta…, Blood (2017) | popPK | 5 | [10.1182/blood-2017-08-801191](https://doi.org/10.1182/blood-2017-08-801191) | [28972011](https://pubmed.ncbi.nlm.nih.gov/28972011) | The paper describes a clinical trial involving pharmacokinetic assessment of leniolisib, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-06T23:11:41.788728+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lozach_2018 | irrelevant | 0 | 0 | The paper focuses on the validation of the cAMS methodology using a rat ADME study, but does not identify the specific drug (leniolisib) or report its pharmacokinetic parameters. |
| popPK | Rao_2017 | relevant | 5 | 0 | The paper describes a clinical trial involving pharmacokinetic assessment of leniolisib, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Rao_2017 | not_relevant | 1 | 0 | The paper describes the therapeutic efficacy of leniolisib in patients with a specific disease (APDS) caused by PIK3CD variants, but it does not report how these genetic variants alter the pharmacokinetic (PK) or pharmacodynamic (PD) parameters of the drug itself compared to other genotypes. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
