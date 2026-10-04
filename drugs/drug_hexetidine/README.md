<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hexetidine&quot;}]"></div>

# hexetidine

- **generic name:** hexetidine
- **ATC codes:** `A01AB12`, `G01AX16`
- **DrugBank:** [DB08958](https://go.drugbank.com/drugs/DB08958) · **PubChem:** [CID 3607](https://pubchem.ncbi.nlm.nih.gov/compound/3607)
- **molar mass:** 339.6021 g/mol (C21H45N3) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** A bactericidal and fungicidal antiseptic. It is used as a 0.1% mouthwash for local infections and oral hygiene.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:24 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 4,636/228 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewis_2022.pdf` | Lewis DSM et al., Aloin isoforms (A and B) selectively in…, Scientific reports (2022) | pd | 4 | [10.1038/s41598-022-06104-y](https://doi.org/10.1038/s41598-022-06104-y) | [35140265](https://www.ncbi.nlm.nih.gov/pubmed/35140265) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T01:24:13.587321+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fritzsche_1989 | irrelevant | 0 | 0 | The study focuses on fluoride clearance and retention, with hexetidine only present as a component of a combination mouthrinse and not the subject of pharmacokinetic analysis. |
| popPK | Gozalbes_1999 | irrelevant | 0 | 0 | The paper reports in-vitro antimalarial activity (IC50) for hexetidine, not pharmacokinetic disposition parameters. |
| popPK | Lewis_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on SARS-CoV-2 protease inhibition where hexetidine is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Lewis_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for aloin A and B, but explicitly states that hexetidine did not exhibit inhibitory activity against the tested enzymes, providing no numeric PD parameters for hexetidine. |
| popPK | McCoy_2000 | irrelevant | 4 | 0 | The study reports a first-order elimination rate constant for salivary retention (local compartment) rather than systemic population-PK parameters (CL, V, Q), and no specific numeric values are provided in the evidence. |
| PD | McCoy_2000 | not_relevant | 2 | 1 | The paper reports PK parameters (elimination rate constant) and mentions MICs, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) linking hexetidine concentration to antimicrobial efficacy. |
| popPK | Menghini_1980 | irrelevant | 1 | 0 | The paper is a review discussing the use of hexetidine as an antiseptic and mentions pharmacokinetics in general terms but provides no original quantitative PK parameter values. |
| popPK | Shapiro_2002 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of antimicrobial mouthrinses and does not report any pharmacokinetic parameters for hexetidine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
