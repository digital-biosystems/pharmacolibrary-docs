<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;etoperidone&quot;}]"></div>

# etoperidone

- **generic name:** etoperidone
- **ATC codes:** `N06AB09`
- **DrugBank:** [DB09194](https://go.drugbank.com/drugs/DB09194)
- **groups:** approved, withdrawn

## About

**Description.** Etoperidone is an atypical antidepressant introduced in Europe in 1977. It is a phenylpiperazine-substituted triazole derivative with a composition that classifies it as an analog of tradozone and presents a similar pharmacological profile.[T45] Etoperidone was developed by Angelini Francesco ACRAF.[A4909]

**Indication.** Etoperidone has been studied for the treatment of depression[T47], tremors in Parkinson, extrapyramidal symptoms[L1041] and male impotence[L1042]. It is not certain if it was ever approved and marketed but its current status is withdrawn.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 21:56 | 6:45 | 0/0/0 | 0/1/0 | 0/0/0 | 29,339/2,419 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Girgin_2023](drugs/drug_etoperidone/pd_Girgin_2023_cell_index.md) | Girgin M et al., Proposing novel natural compounds again…, PloS one (2023) | [10.1371/journal.pone.0284994](https://doi.org/10.1371/journal.pone.0284994) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Girgin_2023](drugs/drug_etoperidone/pd_Girgin_2023_cell_viability.md) | Girgin M et al., Proposing novel natural compounds again…, PloS one (2023) | [10.1371/journal.pone.0284994](https://doi.org/10.1371/journal.pone.0284994) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etoperidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>“…ifferent metabolites that can be found in plasma, urine and faeces. The metabolism of etop…”</sub> | prose |
| metabolism | kidney | <sub>“…forms 21 different metabolites that can be found in plasma, urine and faeces. The metaboli…”</sub> | prose |
| excretion | bile duct | <sub>“…esents a division of 78.8% found in urine and 9.6% found in faeces. On the elimination rou…”</sub> | prose |
| excretion | kidney | <sub>“…l dose of etoperidone presents a division of 78.8% found in urine and 9.6% found in faeces…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), DRD2 (target), HTR2A (target), HTR2C (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caldwell_2001.pdf` | Caldwell GW et al., Evaluation of the absorption, excretion…, Xenobiotica; the fate of fo… (2001) | popPK | 9 | [10.1080/00498250110091758](https://doi.org/10.1080/00498250110091758) | [11765144](https://pubmed.ncbi.nlm.nih.gov/11765144) | The study reports quantitative PK parameters (half-life and clearance) for etoperidone in humans, with values explicitly present in the text. |
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 | not captured | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-23T21:54:30.251077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of etoperidone, not on pharmacodynamic or exposure-response relationships. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper discusses the metabolism of etoperidone in a general clinical/forensic context without reporting specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Girgin_2023 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for etoperidone. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies Trelibet (EGYT-475) and its metabolite, not etoperidone. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper focuses on the bioactivation of trazodone and its metabolite m-CPP, mentioning etoperidone only as a context for m-CPP's activity, without reporting any pharmacogenomic effects on etoperidone's PK or PD parameters. |
| PGx | Yan_2002 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the metabolic enzyme for etoperidone but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
