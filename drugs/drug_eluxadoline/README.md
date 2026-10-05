<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;eluxadoline&quot;}]"></div>

# eluxadoline

- **generic name:** eluxadoline
- **ATC codes:** `A07DA06`
- **DrugBank:** [DB09272](https://go.drugbank.com/drugs/DB09272) · **PubChem:** [CID 11250029](https://pubchem.ncbi.nlm.nih.gov/compound/11250029)
- **molar mass:** 569.662 g/mol (C32H35N5O5) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Eluxadoline is a mixed mu-opioid receptor agonist, kappa-opioid receptor agonist, and a-delta opioid receptor antagonist indicated for use in diarrhea-predominant irritable bowel syndrome (IBS-D). The mu-, kappa-, and delta-opioid receptors mediate endogenous and exogenous opioid response in the central nervous system and peripherally in the gastrointestinal system. Agonism of peripheral mu-opioid receptors results in reduced colonic motility, while antagonism of central delta-opioid receptors results in improved analgesia, making eluxadoline usable for the symptoms of both pain and diarrhea characteristic of IBS-D. 

Marketed under the tradename Viberzi (FDA), eluxadoline is an antimotility agent that decreases bowel contractions, inhibits colonic transit, and reduces ﬂuid/ion secretion resulting in improved symptoms of abdominal pain and reductions in the Bristol Stool Scale.

**Indication.** For the treatment of irritable bowel syndrome with diarrhea (IBS-D).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:59 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 33,143/308 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/4 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eluxadoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…The oral absorption of eluxadoline is poor - estimated to be 1.02%…”</sub> | prose |
| metabolism | kidney | <sub>“…excreted into urine…”</sub> | prose |
| metabolism | liver | `SLCO1B1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…82% excreted in feces…”</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abel_2019 | irrelevant | 0 | 0 | The paper is a post hoc analysis of health-related quality of life (HRQOL) outcomes and does not report any pharmacokinetic parameters for eluxadoline. |
| PGx | Boinpally_2022 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (eluxadoline on midazolam PK) in healthy participants and does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Dove_2013 | irrelevant | 0 | 0 | The paper is a Phase 2 clinical efficacy study for IBS-D and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for eluxadoline. |
| popPK | Levy-Cooperman_2016 | irrelevant | 2 | 0 | The study is a pharmacodynamic abuse potential assessment that mentions PK data collection but does not report quantitative PK parameters (CL, V, ka, etc.) for eluxadoline in the provided text. |
| popPK | Maruca_2020 | irrelevant | 0 | 0 | The paper is an in-silico computational study (Monte Carlo/Molecular Dynamics) analyzing molecular conformations and protonation states, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Maruca_2020 | not_relevant | 0 | 0 | The paper is an in silico study focusing on molecular conformational dynamics and protonation states to explain food-drug interaction mechanisms; it contains no pharmacokinetic data, no pharmacodynamic measurements, and no exposure-response or dose-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
