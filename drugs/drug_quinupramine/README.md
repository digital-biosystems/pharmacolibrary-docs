<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;quinupramine&quot;}]"></div>

# quinupramine

- **generic name:** quinupramine
- **ATC codes:** `N06AA23`
- **DrugBank:** [DB13246](https://go.drugbank.com/drugs/DB13246) · **PubChem:** not captured
- **molar mass:** 304.437 g/mol (C21H24N2) — DrugBank
- **groups:** approved

## About

Quinupramine is a tricyclic antidepressant used to treat depression. It is an approved antidepressant, classified among non-selective monoamine reuptake inhibitors, though it is not widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7272541](https://www.wikidata.org/wiki/Q7272541) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 0:11 | 0/1/0 | 1/0/0 | 0/0/0 | 8,600/758 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Bouquet_1982_reference](drugs/drug_quinupramine/Quinupramine_Bouquet1982_reference.md) | — | 1-compartment (no model) | 5 | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sakamoto_1987_3H_quinupramine_binding](drugs/drug_quinupramine/pd_Sakamoto_1987_3H_quinupramine_binding.md) | specific binding of [3H]quinupramine to rat brain membrane fractions ← [3H]quinupramine · direct sigmoid Emax (Hill) effect | — | Sakamoto H et al., Binding characteristics of [3H]quinupra…, Japanese journal of pharmac… (1987) | [10.1254/jjp.45.27](https://doi.org/10.1254/jjp.45.27) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouquet_1982.pdf` | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | popPK | 10 | not captured | [7151737](https://pubmed.ncbi.nlm.nih.gov/7151737) | Human crossover PK study with numeric Vd, half-life, AUC, F, and CLr values directly reported in the abstract. |
| `Sakamoto_1987_2.pdf` | Sakamoto H et al., Effects of quinupramine on the central…, Japanese journal of pharmac… (1987) | popPK | 7 | [10.1254/jjp.45.169](https://doi.org/10.1254/jjp.45.169) | [3437586](https://pubmed.ncbi.nlm.nih.gov/3437586) | Rat PK study of quinupramine in plasma and brain after oral dosing, but the evidence contains no numeric disposition parameter values (only % radioactivity), so values are likely in figures/tables not provided. |
| `Shin_2007.pdf` | Shin SC et al., Development and biopharmaceutical evalu…, Pharmaceutical development… (2007) | popPK | 7 | [10.1080/10837450701555695](https://doi.org/10.1080/10837450701555695) | [17963142](https://pubmed.ncbi.nlm.nih.gov/17963142) | PK and bioavailability of quinupramine were studied in rats after IV/oral/transdermal dosing, but the numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-06T23:42:54.040002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sakamoto_1987 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; no PK disposition parameters for quinupramine. |
| PD | Sakamoto_1987 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (KD, Bmax) and competition data, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects in vivo or in a functional assay. |
| popPK | Sakamoto_1987_2 | relevant | 7 | 2 | Rat PK study of quinupramine in plasma and brain after oral dosing, but the evidence contains no numeric disposition parameter values (only % radioactivity), so values are likely in figures/tables not provided. |
| popPK | Shin_2007 | relevant | 7 | 3 | PK and bioavailability of quinupramine were studied in rats after IV/oral/transdermal dosing, but the numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:42 UTC</sub>
