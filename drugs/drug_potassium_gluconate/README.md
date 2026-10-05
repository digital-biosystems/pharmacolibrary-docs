<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium gluconate&quot;}]"></div>

# potassium gluconate

- **generic name:** potassium gluconate
- **ATC codes:** `A12BA05`
- **DrugBank:** [DB13620](https://go.drugbank.com/drugs/DB13620) · **PubChem:** [CID 16760467](https://pubchem.ncbi.nlm.nih.gov/compound/16760467)
- **molar mass:** 234.245 g/mol (C6H11KO7) — DrugBank
- **groups:** approved

## About

Potassium gluconate is a potassium supplement used to treat or prevent low blood potassium (hypokalemia). It is an approved mineral supplement and is widely available, generally as an oral supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1122870](https://www.wikidata.org/wiki/Q1122870) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:16 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 7,908/403 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/2 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=potassium_gluconate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (substrate), ATP4A (substrate), FXYD2 (inducer), FXYD2 (substrate), SLC12A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Van_1985.pdf` | Van Dyke RW et al., ATP-dependent proton transport by isola…, Biochimica et biophysica ac… (1985) | pd | 5 | [10.1016/0005-2736(85)90317-7](https://doi.org/10.1016/0005-2736(85)90317-7) | [2857093](https://www.ncbi.nlm.nih.gov/pubmed/2857093) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T09:16:17.107716+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gomez_2025 | irrelevant | 0 | 0 | The paper describes a chemogenetic study on cocaine addiction in rats and does not involve potassium_gluconate or its pharmacokinetics. |
| PD | Gomez_2025 | not_relevant | 0 | 0 | The paper focuses on cocaine chemogenetics and does not report any pharmacodynamic or exposure-response data for potassium gluconate. |
| popPK | Labouesse_2024 | irrelevant | 0 | 0 | The paper describes a chemogenetic approach for dopamine imaging and does not involve potassium_gluconate or its pharmacokinetics. |
| PD | Labouesse_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacology of DETQ (a dopamine receptor PAM) and does not report any pharmacodynamic or exposure-response data for potassium gluconate. |
| popPK | Lee_2008 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study where potassium gluconate is used as an ionic medium, not as a subject drug for pharmacokinetic analysis. |
| PD | Lee_2008 | not_relevant | 0 | 0 | The paper reports electrophysiological properties of KCNQ1 channels and the IC50 of a blocker (293B), but does not report a pharmacodynamic exposure-response or dose-response relationship for potassium gluconate. |
| popPK | Macdonald-Clarke_2016 | irrelevant | 2 | 0 | The study measures potassium bioavailability and excretion rather than reporting specific pharmacokinetic disposition parameters (CL, V, ka) for potassium gluconate. |
| popPK | Oláh_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of NMDAR subunits and GABA release in mice, not the pharmacokinetics of potassium_gluconate. |
| PD | Oláh_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of NMDAR modulators and ketamine on GABA release and LTP, and does not contain any pharmacokinetic or pharmacodynamic data for potassium gluconate. |
| popPK | Shimizu_2020 | irrelevant | 0 | 0 | The study investigates drug loss and collection rates during feeding tube administration (delivery mechanics), not pharmacokinetic disposition parameters like clearance or volume. |
| PD | Shimizu_2020 | not_relevant | 0 | 0 | The study evaluates physical drug loss (collection rate) during feeding tube administration, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Van_1985 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of proton transport in brain vesicles where potassium gluconate is used only as a salt/anion, not as a subject drug for pharmacokinetic analysis. |
| PD | Van_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of ATP-dependent proton transport in isolated brain vesicles and does not report a pharmacodynamic exposure-response or dose-response relationship for potassium gluconate as a drug. |
| popPK | Zelmanoff_2025 | irrelevant | 0 | 0 | The paper studies oxytocin signaling and social behavior in mouse pups, with no mention of potassium_gluconate or pharmacokinetic parameters. |
| PD | Zelmanoff_2025 | not_relevant | 0 | 0 | The paper investigates oxytocin signaling in mouse pups and does not mention potassium gluconate or report any pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
