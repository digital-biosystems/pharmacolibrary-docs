<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;quinupramine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinupramine_Bouquet1982_reference&quot;,&quot;label&quot;:&quot;Bouquet_1982_reference&quot;,&quot;href&quot;:&quot;drugs/drug_quinupramine/Quinupramine_Bouquet1982_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# quinupramine

- **generic name:** quinupramine
- **ATC codes:** `N06AA23`
- **DrugBank:** [DB13246](https://go.drugbank.com/drugs/DB13246)
- **groups:** approved

## About

**Description.** Quinupramine has been approved in France under the brand name Kinupril, as an antidepressant [A175003].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 04:11 | 2:40 | 0/1/0 | 0/0/0 | 0/0/0 | 14,791/3,061 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Bouquet_1982_reference](drugs/drug_quinupramine/Quinupramine_Bouquet1982_reference.md) | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouquet_1982.pdf` | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | popPK | 10 | not captured | [7151737](https://pubmed.ncbi.nlm.nih.gov/7151737) | The study reports quantitative PK parameters for quinupramine including AUC, Cmax, apparent volume of distribution (34.2 L/kg), and half-life (28.8-33.5 h) directly in the text. |
| `Shin_2007.pdf` | Shin SC et al., Development and biopharmaceutical evalu…, Pharmaceutical development… (2007) | popPK | 8 | [10.1080/10837450701555695](https://doi.org/10.1080/10837450701555695) | [17963142](https://pubmed.ncbi.nlm.nih.gov/17963142) | The study reports pharmacokinetic parameters for quinupramine in rats, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text. |

<sub>queue written 2026-09-24T04:10:07.382405+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sakamoto_1987 | irrelevant | 0 | 0 | The study reports in-vitro receptor binding parameters (KD, Bmax) rather than pharmacokinetic disposition parameters. |
| PD | Sakamoto_1987 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (KD, Bmax) and competition data, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects in vivo or in a functional assay. |
| popPK | Sakamoto_1987_2 | irrelevant | 2 | 0 | The study focuses on in-vitro/ex-vivo monoamine uptake mechanisms and qualitative CNS penetration, without reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Shin_2007 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for quinupramine in rats, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 04:10 UTC</sub>
