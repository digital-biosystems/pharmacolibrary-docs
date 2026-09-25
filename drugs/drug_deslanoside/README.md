<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;deslanoside&quot;}]"></div>

# deslanoside

- **generic name:** deslanoside
- **ATC codes:** `C01AA07`
- **DrugBank:** [DB01078](https://go.drugbank.com/drugs/DB01078)
- **groups:** approved

## About

**Description.** Deacetyllanatoside C. A cardiotonic glycoside from the leaves of Digitalis lanata.

**Indication.** For the treatment and management of Congestive cardiac insufficiency, arrhythmias and heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 12:38 | 1:26 | 0/0/0 | 0/0/0 | 0/0/0 | 24,865/1,503 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=deslanoside) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Little absorption from the gastrointestinal tract (40%).…”</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bakke_1981.pdf` | Bakke OM et al., Pharmacokinetics and serum concentratio…, Journal of cardiovascular p… (1981) | popPK | 8 | [10.1097/00005344-198109000-00012](https://doi.org/10.1097/00005344-198109000-00012) | [6168847](https://pubmed.ncbi.nlm.nih.gov/6168847) | The study reports quantitative PK parameters for deslanoside, specifically the biological half-life (median 51 h, range 38-77 h) and steady-state concentrations, although it lacks explicit clearance or volume of distribution values. |

<sub>queue written 2026-09-19T12:37:52.097640+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abady_2024 | irrelevant | 0 | 0 | The paper is a bioanalytical method validation study for dried blood spot sampling and does not report any pharmacokinetic parameters for deslanoside. |
| popPK | Gao_2012 | irrelevant | 0 | 0 | The study investigates the effects of ethanol on arrhythmia using deslanoside as an inducing agent, not as the subject of a pharmacokinetic analysis, and reports no PK parameters. |
| PD | Gao_2012 | not_relevant | 3 | 2 | The paper reports qualitative dose-response effects of ethanol on deslanoside-induced arrhythmia (increased cumulative dosage required) but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for deslanoside itself. |
| popPK | Goldsmith_1992 | irrelevant | 0 | 0 | The study investigates the effect of deslanoside on norepinephrine kinetics, not the pharmacokinetic disposition parameters (CL, V, t1/2) of deslanoside itself. |
| popPK | Gökçe_2026 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of enzyme inhibition (PON1) and does not report any pharmacokinetic parameters for deslanoside. |
| PD | Gökçe_2026 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition (IC50) of PON1 by deslanoside, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study analyzes factors influencing serum digoxin concentrations and lists deslanoside only as a concomitant medication variable, without reporting any pharmacokinetic parameters for deslanoside. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The study analyzes factors influencing serum digoxin concentration (PK) using logistic regression, not the pharmacodynamic effect of deslanoside or digoxin; no exposure-response or dose-response relationship for a drug effect is reported. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on digoxin pharmacokinetics and method validation, with deslanoside mentioned only as a structural analog for ionization behavior without any PK parameter reporting. |
| popPK | Marzo_1982 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Tada_1982 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding deslanoside pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
