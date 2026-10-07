<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belumosudil&quot;}]"></div>

# belumosudil

- **generic name:** belumosudil
- **ATC codes:** `L04AA48`
- **DrugBank:** [DB16703](https://go.drugbank.com/drugs/DB16703) · **PubChem:** not captured
- **molar mass:** 452.518 g/mol (C26H24N6O2) — DrugBank
- **groups:** approved, investigational

## About

Belumosudil is an immunosuppressive kinase inhibitor used to treat graft-versus-host disease. It is an approved medicine, with one product authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27269397](https://www.wikidata.org/wiki/Q27269397) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:33 | 1:32 | 0/0/0 | 0/0/0 | 0/0/0 | 8,629/308 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=belumosudil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor, `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ROCK1 (inhibitor), ROCK2 (inhibitor).</sub>

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

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schueller_2022.pdf` | Schueller O et al., A Phase 1 Pharmacokinetic Drug Interact…, Clinical pharmacology in dr… (2022) | pgx | 7 | [10.1002/cpdd.1082](https://doi.org/10.1002/cpdd.1082) | [35230741](https://www.ncbi.nlm.nih.gov/pubmed/35230741) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shimoda_2026.pdf` | Shimoda M et al., Variability in belumosudil exposure due…, International journal of cl… (2026) | pgx | 7 | [10.5414/CP205020](https://doi.org/10.5414/CP205020) | [42552808](https://www.ncbi.nlm.nih.gov/pubmed/42552808) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T23:33:13.766697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Schueller_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions with CYP3A4 modulators and PPIs, but does not report pharmacogenomic effects of specific gene variants or genotypes on PK or PD. |
| PGx | Schueller_2025 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction study of belumosudil; UGT1A1 and OATP1B1 polymorphisms are used solely for participant exclusion to control for variability, not to report genetic effects on belumosudil PK/PD. |
| PGx | Shimoda_2026 | not_relevant | 0 | 0 | The paper describes PK variability due to drug-drug interactions (CYP3A4 inhibition) with antifungals, not pharmacogenomic effects (gene variants). |
| popPK | Subuddhi_2023 | irrelevant | 0 | 0 | The paper is a transcriptomic/mechanistic study of mouse macrophages and does not report any pharmacokinetic parameters for belumosudil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
