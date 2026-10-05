<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;metopimazine&quot;}]"></div>

# metopimazine

- **generic name:** metopimazine
- **ATC codes:** `A04AD05`
- **DrugBank:** [DB13591](https://go.drugbank.com/drugs/DB13591) · **PubChem:** not captured
- **molar mass:** 445.6 g/mol (C22H27N3O3S2) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:00 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 14,669/431 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/3 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blanes_1991 | irrelevant | 0 | 0 | The study is an in-vitro transdermal permeation study, not a pharmacokinetic study reporting disposition parameters like clearance or volume for metopimazine. |
| PD | Blanes_1991 | not_relevant | 0 | 0 | The paper reports in vitro transdermal permeation parameters (Kp, lag time, flux), which are physicochemical/transport properties, not pharmacodynamic exposure- or dose-response relationships. |
| PGx | Busby_2022 | not_relevant | 0 | 0 | The paper identifies the metabolic enzymes for metopimazine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Follet_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of fentanyl, not metopimazine. |
| PD | Follet_2025 | not_relevant | 0 | 0 | The paper is a study protocol for fentanyl, not metopimazine, and contains no reported results or numeric PD parameters. |
| popPK | Herrstedt_1997 | irrelevant | 2 | 0 | The study is a dose-finding/tolerability trial that mentions serum concentrations but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) or a PK model in the provided evidence. |
| PD | Mallet_2015 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, t1/2) and qualitative safety outcomes (no nausea/vomiting) without any quantitative exposure-response or dose-response modeling. |
| popPK | Orhan_2024 | irrelevant | 2 | 0 | The paper is a narrative review of multiple dopamine antagonists and does not report original quantitative pharmacokinetic parameter values for metopimazine. |
| PD | Orhan_2024 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and pharmacodynamics for multiple drugs, including metopimazine, but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Regina_1999 | irrelevant | 0 | 0 | The study focuses on the tolerability of milnacipran, and metopimazine is only mentioned as a treatment for gastrointestinal side effects, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
