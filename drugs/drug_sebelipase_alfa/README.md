<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sebelipase alfa&quot;}]"></div>

# sebelipase alfa

- **generic name:** sebelipase alfa
- **ATC codes:** `A16AB14`
- **DrugBank:** [DB11563](https://go.drugbank.com/drugs/DB11563) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sebelipase alfa, a recombinant form of the enzyme lysosomal acid lipase, is used to treat lysosomal acid lipase deficiency, an inborn error of lipid metabolism. It is an approved enzyme medication authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21789862](https://www.wikidata.org/wiki/Q21789862) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:30 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 19,022/358 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 1/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basile_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pegaptanib sodium, not sebelipase_alfa. |
| PD | Basile_2015 | not_relevant | 0 | 0 | Paper reports only population PK of pegaptanib (clearance, AUC vs CRCL); no pharmacodynamic/exposure-response relationship or PD parameters are modeled or reported. |
| PGx | Lipiński_2021 | not_relevant | 0 | 0 | The paper is a general review of LAL deficiency pathophysiology and diagnosis, mentioning sebelipase alfa only as a treatment option without reporting any pharmacogenomic data or PK/PD parameter changes based on genotype. |
| popPK | Son_2021 | irrelevant | 0 | 0 | This is a dental implant handpiece torque study with no pharmacokinetic data for sebelipase alfa. |
| PD | Son_2021 | not_relevant | 0 | 0 | Study of dental implant handpiece torque output; no drug, no sebelipase alfa, no PD or exposure-response data. |
| popPK | Son_2025 | irrelevant | 0 | 0 | The study is a dental implant biomechanics experiment in rabbits and does not involve the drug sebelipase_alfa or any pharmacokinetic parameters. |
| PGx | White_2026 | not_relevant | 0 | 0 | The paper discusses nutritional management and clinical guidelines for LAL-D, not pharmacogenomic effects on the PK/PD of sebelipase alfa. |
| popPK | de_2024 | irrelevant | 2 | 0 | The study reports pharmacodynamic biomarkers (LAL activity, oxysterols) and in-vitro half-lives, but does not provide quantitative population PK parameters (CL, V, Q) for the drug itself in humans. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | Text is only a conference venue/date line with no PD or exposure-response content. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | Text is only a conference proceedings cover page; no sebelipase alfa PD or exposure-response content present. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
