<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nicomorphine&quot;}]"></div>

# nicomorphine

- **generic name:** nicomorphine
- **ATC codes:** `N02AA04`
- **DrugBank:** [DB13454](https://go.drugbank.com/drugs/DB13454) · **PubChem:** not captured
- **molar mass:** 495.535 g/mol (C29H25N3O5) — DrugBank
- **groups:** experimental

## About

Nicomorphine is an opioid painkiller (analgesic) derived from natural opium alkaloids. It is not an approved medicine and is known only as an experimental substance.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7030497](https://www.wikidata.org/wiki/Q7030497) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 17,897/1,286 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koopman-Kimenai_1995_2.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of epidurally administ…, Biopharmaceutics & drug dis… (1995) | popPK | 9 | [10.1002/bdd.2510160608](https://doi.org/10.1002/bdd.2510160608) | [7579032](https://pubmed.ncbi.nlm.nih.gov/7579032) | The study reports quantitative pharmacokinetic parameters (apparent elimination half-lives) for nicomorphine and its metabolites following epidural administration in humans, with values explicitly provided in the abstract. |
| `Koopman-Kimenai_1991.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of intramuscular nicom…, European journal of clinica… (1991) | popPK | 8 | [10.1007/BF00314971](https://doi.org/10.1007/BF00314971) | [1804655](https://pubmed.ncbi.nlm.nih.gov/1804655) | The study reports the pharmacokinetics of nicomorphine in humans, but the evidence provided contains only relative AUC percentages and qualitative descriptions, lacking specific numeric values for CL, V, or ka. |
| `Koopman-Kimenai_1993.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1993) | popPK | 8 | not captured | [8462537](https://pubmed.ncbi.nlm.nih.gov/8462537) | The study reports pharmacokinetic data for nicomorphine in humans, including half-lives, but the specific numeric values for clearance (CL) and volume (V) mentioned in the title are not present in the provided text. |

<sub>queue written 2026-10-07T05:37:35.281954+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koopman-Kimenai_1987 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Koopman-Kimenai_1991 | relevant | 8 | 2 | The study reports the pharmacokinetics of nicomorphine in humans, but the evidence provided contains only relative AUC percentages and qualitative descriptions, lacking specific numeric values for CL, V, or ka. |
| popPK | Koopman-Kimenai_1991_2 | irrelevant | 3 | 2 | The paper describes nicomorphine pharmacokinetics but only provides relative AUC percentages and qualitative descriptions, lacking specific quantitative parameters like clearance (CL), volume (V), or absolute half-life values required for PK modeling. |
| popPK | Koopman-Kimenai_1993 | relevant | 8 | 2 | The study reports pharmacokinetic data for nicomorphine in humans, including half-lives, but the specific numeric values for clearance (CL) and volume (V) mentioned in the title are not present in the provided text. |
| popPK | Koopman-Kimenai_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for morphine (the metabolite of nicomorphine) after nicomorphine administration, but explicitly states that nicomorphine itself could not be detected in serum, so there are no quantitative disposition parameters for the subject drug nicomorphine. |
| popPK | Koopman-Kimenai_1995 | relevant | 4 | 8 | The study reports quantitative PK parameters (half-lives) for nicomorphine and its metabolites, but lacks explicit Volume of Distribution (V) or Clearance (CL) values required for a full compartmental description. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting and does not involve nicomorphine or report its pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
