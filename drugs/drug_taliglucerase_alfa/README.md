<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;taliglucerase alfa&quot;}]"></div>

# taliglucerase alfa

- **generic name:** taliglucerase alfa
- **ATC codes:** `A16AB11`
- **DrugBank:** [DB08876](https://go.drugbank.com/drugs/DB08876) · **PubChem:** not captured
- **groups:** approved

## About

Taliglucerase alfa is an enzyme therapy used to treat Gaucher disease. It is approved according to DrugBank, but a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7679506](https://www.wikidata.org/wiki/Q7679506) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:57 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 57,681/671 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/5 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=taliglucerase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Glucocerebroside (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aviezer_2009 | irrelevant | 0 | 0 | The study evaluates prGCD (plant-derived recombinant glucocerebrosidase), not taliglucerase alfa (Taliglucerase alfa is a different recombinant form, specifically from CHO cells, often associated with the brand name Elelyso, whereas prGCD is associated with the brand name Cerezyme or similar plant-based variants, but specifically this paper is about prGCD). |
| popPK | Cullufi_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study reporting biomarker and clinical outcome changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Hosseini_2026 | irrelevant | 0 | 0 | This iPSC characterization study reports no taliglucerase_alfa pharmacokinetic parameters or numeric disposition values. |
| PD | Hosseini_2026 | not_relevant | 0 | 0 | The paper concerns generation and characterization of GBA1-variant iPSC lines and reports no taliglucerase alfa treatment, exposure/dose-response analysis, or numeric pharmacodynamic parameters. |
| popPK | Karki_2021 | irrelevant | 0 | 0 | This is a review of plant-cell engineering and contains no taliglucerase alfa pharmacokinetic parameters or numeric values. |
| PD | Karki_2021 | not_relevant | 0 | 0 | Taliglucerase alfa is mentioned only as an example of a plant-cell-produced therapeutic protein, with no PK/PD, exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| popPK | Pastores_2016 | irrelevant | 0 | 0 | This clinical safety and efficacy report contains no quantitative pharmacokinetic disposition parameters or population-PK model values. |
| PD | Pastores_2016 | not_relevant | 0 | 0 | The paper reports longitudinal clinical and biomarker changes after treatment but provides no exposure- or dose-response analysis and no derivable numeric PD parameters. |
| popPK | Rup_2017 | irrelevant | 0 | 0 | The paper focuses on the immunogenicity of plant glycans on taliglucerase alfa and reports antibody prevalence rates, not pharmacokinetic disposition parameters. |
| popPK | Shaaltiel_2007 | irrelevant | 1 | 0 | This production and single-dose toxicity report provides no quantitative pharmacokinetic or disposition parameters for taliglucerase_alfa. |
| PD | Shaaltiel_2007 | not_relevant | 1 | 0 | Reports qualitative biological activity and single-dose toxicity only, with no dose/exposure-response analysis or numeric PD parameters. |
| popPK | Shaaltiel_2015 | irrelevant | 1 | 0 | The study reports only qualitative oral delivery and tissue distribution, with no quantitative pharmacokinetic parameters or values. |
| PD | Shaaltiel_2015 | not_relevant | 0 | 0 | The study reports oral delivery, biodistribution, and detection of active enzyme, but no pharmacodynamic endpoint or numeric exposure-response/dose-response relationship. |
| popPK | Van_2016 | irrelevant | 0 | 0 | The paper is a narrative review of Gaucher disease treatments and does not report original quantitative pharmacokinetic parameters for taliglucerase alfa. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper is a general review of Gaucher disease treatments and does not report specific pharmacogenomic effects on PK/PD parameters for taliglucerase alfa. |
| popPK | van_2013 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (bone marrow fat fraction) rather than pharmacokinetic parameters. |
| popPK | Özkurt_2026 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study and reports no taliglucerase alfa disposition or population-PK parameters. |
| PD | Özkurt_2026 | not_relevant | 2 | 0 | The study reports qualitative effects at selected taliglucerase alfa concentrations, including 8252 ng/mL, but provides no numeric concentration-effect curve, dose-response parameters, or derivable Emax/EC50/slope/baseline values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
