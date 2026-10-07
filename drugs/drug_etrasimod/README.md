<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;etrasimod&quot;}]"></div>

# etrasimod

- **generic name:** etrasimod
- **ATC codes:** `L04AE05`
- **DrugBank:** [DB14766](https://go.drugbank.com/drugs/DB14766) · **PubChem:** not captured
- **molar mass:** 457.493 g/mol (C26H26F3NO3) — DrugBank
- **groups:** approved, investigational

## About

Etrasimod is an immunomodulating drug used to treat ulcerative colitis. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27265630](https://www.wikidata.org/wiki/Q27265630) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:00 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 27,387/698 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etrasimod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: S1PR1 (modulator), S1PR3 (modulator), S1PR4 (modulator), S1PR5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shamma_2019 | irrelevant | 2 | 1 | The study reports pharmacodynamic data (lymphocyte count) and receptor binding affinities (EC50) for etrasimod, but contains no quantitative pharmacokinetic disposition parameters (CL, V, Ka, t1/2) or PK model parameters. |
| popPK | Eden_2025 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety for IBD treatments and does not contain any pharmacokinetic modeling or quantitative disposition parameters (CL, V, ka) for etrasimod. |
| popPK | Kuriakose_2025 | relevant | 4 | 2 | This is a narrative review that reports some general PK characteristics (Tmax, t1/2) for etrasimod, but lacks specific quantitative disposition parameters (CL, Vd) required for population PK modeling. |
| popPK | Neri_2024 | irrelevant | 0 | 0 | The paper is a narrative review focusing on the clinical efficacy and safety of ulcerative colitis drugs, with no report of quantitative population-pharmacokinetic parameters for etrasimod. |
| popPK | Peyrin-Biroulet_2017 | irrelevant | 0 | 0 | The paper is a narrative review of sphingosine-1-phosphate modulators in IBD and contains no quantitative pharmacokinetic parameters for etrasimod. |
| popPK | Pérez-Jeldres_2019 | irrelevant | 0 | 0 | The paper is a review of JAK inhibitors and S1PR agonists for IBD; while etrasimod is mentioned as a drug class, no quantitative pharmacokinetic parameters (CL, V, ka, etc.) are provided for it in the text. |
| popPK | Sakurai_2026 | irrelevant | 0 | 0 | The paper is a qualitative review discussing mechanism of action and clinical efficacy, containing no quantitative pharmacokinetic parameters for etrasimod. |
| popPK | Vieujean_2024 | irrelevant | 3 | 1 | This is a narrative review of S1P receptor modulators that discusses etrasimod's general pharmacokinetic features qualitatively but does not provide specific quantitative disposition parameters (CL, V, Q, ka) in the extracted evidence. |
| popPK | Zabana_2026 | irrelevant | 0 | 0 | The paper is a qualitative review of safety and management that does not report specific quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
