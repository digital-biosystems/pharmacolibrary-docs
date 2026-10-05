<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;velmanase alfa&quot;}]"></div>

# velmanase alfa

- **generic name:** velmanase alfa
- **ATC codes:** `A16AB15`
- **DrugBank:** [DB12374](https://go.drugbank.com/drugs/DB12374) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Velmanase alfa is an enzyme replacement therapy used to treat alpha-mannosidosis, a rare inherited metabolic disorder. It is authorised in the European Union under the brand name Lamazym.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q98651803](https://www.wikidata.org/wiki/Q98651803) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:11 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 21,838/438 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blanz_2008 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and tissue distribution of alpha-mannosidase (rhLAMAN) in mice, not the pharmacokinetics of velmanase alfa. |
| popPK | Damme_2010 | irrelevant | 0 | 0 | This mechanistic mouse study reports no pharmacokinetic disposition parameters or numeric PK values for velmanase_alfa. |
| PD | Damme_2010 | not_relevant | 1 | 0 | The paper qualitatively reports partial correction after recombinant human alpha-mannosidase treatment but provides no numeric dose-, concentration-, or exposure-response relationship or derivable PD parameters for velmanase alfa. |
| popPK | Damme_2015 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of enzyme replacement therapy in a mouse model of alpha-mannosidosis, not on the pharmacokinetic parameters of velmanase_alfa. |
| PD | Damme_2015 | not_relevant | 2 | 0 | The study reports qualitative therapeutic effects and rapid clearance/brain uptake of rhLAMAN in mice, but provides no numeric dose- or concentration-effect relationship or derivable PD parameters. |
| PGx | Damme_2015 | not_relevant | 0 | 0 | The paper studies the efficacy of enzyme replacement therapy in a mouse model and does not report pharmacogenomic effects on PK/PD parameters for velmanase_alfa. |
| popPK | Guffon_2023 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study reporting adverse events and clinical outcomes, with no pharmacokinetic parameters or quantitative disposition data for velmanase alfa. |
| popPK | Guffon_2025 | irrelevant | 0 | 0 | The paper reports long-term efficacy and safety outcomes (clinical endpoints) but does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Harmatz_2018 | irrelevant | 0 | 0 | This efficacy/responder-analysis paper reports no quantitative pharmacokinetic disposition parameters for velmanase alfa. |
| PD | Harmatz_2018 | not_relevant | 2 | 0 | The paper reports a composite clinical responder analysis including pharmacodynamic outcomes, but provides no drug exposure- or dose-response relationship and no numeric PD parameters or effect-versus-concentration curve. |
| popPK | Hennermann_2020 | irrelevant | 0 | 0 | This is a registry protocol with no quantitative pharmacokinetic disposition parameters for velmanase alfa. |
| PD | Hennermann_2020 | not_relevant | 1 | 0 | This is a registry protocol that only mentions pharmacodynamic effectiveness outcomes qualitatively and reports no velmanase alfa exposure/dose-response relationship or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
